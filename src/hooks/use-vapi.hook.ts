'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Vapi from '@vapi-ai/web'
import type { VapiConfig, CallState, TranscriptMessage, VapiMessage } from '@/types'

export function useVapi(config: VapiConfig) {
  const [callState, setCallState] = useState<CallState>({
    status: 'idle',
    duration: 0,
    transcript: [],
  })

  const vapiRef = useRef<Vapi | null>(null)
  const intervalRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    vapiRef.current = new Vapi(config.publicKey)

    const vapi = vapiRef.current

    // Event listeners
    vapi.on('call-start', () => {
      setCallState(prev => ({ ...prev, status: 'connected' }))
      startTimer()
    })

    vapi.on('call-end', () => {
      setCallState(prev => ({ ...prev, status: 'disconnected' }))
      stopTimer()
    })

    vapi.on('speech-start', () => {
      console.log('Usuario comenzó a hablar')
    })

    vapi.on('speech-end', () => {
      console.log('Usuario terminó de hablar')
    })

    vapi.on('message', message => {
      if (message.type === 'transcript') {
        addTranscriptMessage({
          role: message.role,
          content: message.transcript,
          timestamp: new Date(),
        })
      }
    })

    vapi.on('message', async message => {
      if (message.type === 'transcript') {
        addTranscriptMessage({
          role: message.role,
          content: message.transcript,
          timestamp: new Date(),
        })
      } else if (message.type === 'function-call') {
        console.log('Function call:', message)
        await handleFunctionCall(message)
      }
    })

    vapi.on('error', error => {
      console.error('Vapi error:', error)
      setCallState(prev => ({ ...prev, status: 'error' }))
    })

    return () => {
      if (vapi) vapi.stop()
      stopTimer()
    }
  }, [config])

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCallState(prev => ({ ...prev, duration: prev.duration + 1 }))
    }, 1000)
  }

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const addTranscriptMessage = (message: TranscriptMessage) => {
    setCallState(prev => ({
      ...prev,
      transcript: [...prev.transcript, message],
    }))
  }

  const handleFunctionCall = async (message: VapiMessage) => {
    if (!message.functionCall) return
    console.log('Function call:', message)

    const { name, parameters } = message.functionCall

    let result
    try {
      switch (name) {
        case 'get_weather':
          result = await getWeather(parameters.location)
          break
        case 'get_time':
          result = getCurrentTime()
          break
        case 'calculate':
          result = calculate(parameters.expression)
          break
        default:
          result = { error: `Función ${name} no implementada` }
      }
    } catch (error) {
      result = { error: `Error ejecutando función ${name}: ${error}` }
    }

    // Enviar resultado de vuelta a Vapi
    if (vapiRef.current) {
      vapiRef.current.send({
        type: 'add-message',
        message: {
          role: 'function',
          content: JSON.stringify(result),
        },
      })
    }
  }

  const startCall = useCallback(async () => {
    if (!vapiRef.current) return

    try {
      setCallState(prev => ({ ...prev, status: 'connecting' }))
      // Usamos una conversión de tipos explícita (type assertion) para evitar errores de tipado
      // Esto es seguro porque sabemos que la estructura de nuestro objeto coincide con lo que espera la API
      await vapiRef.current.start({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(config.assistant as any),
        firstMessage: 'Hola, ¿en qué puedo ayudarte?',
        transcriber: {
          provider: 'deepgram',
          model: 'nova-2',
          language: 'es',
        },
        server: {
          url: 'http://localhost:3000/api/vapi',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      })
    } catch (error) {
      console.error('Error starting call:', error)
      setCallState(prev => ({ ...prev, status: 'error' }))
    }
  }, [config.assistant])

  const stopCall = useCallback(() => {
    if (vapiRef.current) {
      vapiRef.current.stop()
    }
  }, [])

  const toggleMute = useCallback(() => {
    if (vapiRef.current) {
      vapiRef.current.setMuted(!vapiRef.current.isMuted())
    }
  }, [])

  return {
    callState,
    startCall,
    stopCall,
    toggleMute,
    isConnected: callState.status === 'connected',
    isConnecting: callState.status === 'connecting',
  }
}

// Funciones de ejemplo para las herramientas
async function getWeather(location: string) {
  // Aquí conectarías con una API real de clima
  return {
    location,
    temperature: '22°C',
    condition: 'Soleado',
    humidity: '60%',
  }
}

function getCurrentTime() {
  return {
    time: new Date().toLocaleTimeString('es-ES'),
    date: new Date().toLocaleDateString('es-ES'),
  }
}

function calculate(expression: string) {
  try {
    // Evaluación segura de expresiones matemáticas básicas
    const result = Function('"use strict"; return (' + expression + ')')()
    return { result: result.toString() }
  } catch (error) {
    console.error('Error al calcular:', error)
    return { error: 'Expresión matemática inválida' }
  }
}
