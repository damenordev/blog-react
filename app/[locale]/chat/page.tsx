'use client'

import { useState } from 'react'
import { Button } from '@/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card'
import { Badge } from '@/ui/badge'
import { Alert, AlertDescription } from '@/ui/alert'
import { Mic, MicOff, Phone, PhoneOff, Volume2, Settings } from 'lucide-react'
import { useVapi } from '@/hooks/use-vapi.hook'
import type { VapiConfig } from '@/types'

const vapiConfig: VapiConfig = {
  publicKey: process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || '',
  assistant: {
    model: {
      provider: 'openai',
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Eres un asistente de voz útil y amigable en español. 
          Puedes ayudar con información del clima, la hora actual y cálculos matemáticos básicos.
          Responde de manera concisa y natural.`,
        },
      ],
    },
    voice: {
      provider: 'openai',
      voiceId: 'alloy', // Voz de OpenAI (más estable que ElevenLabs)
    },
    functions: [
      {
        name: 'get_weather',
        description: 'Obtiene información del clima para una ubicación específica',
        parameters: {
          type: 'object',
          properties: {
            location: {
              type: 'string',
              description: 'La ciudad o ubicación para consultar el clima',
            },
          },
          required: ['location'],
        },
      },
      {
        name: 'get_time',
        description: 'Obtiene la hora y fecha actual',
        parameters: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'calculate',
        description: 'Realiza cálculos matemáticos básicos',
        parameters: {
          type: 'object',
          properties: {
            expression: {
              type: 'string',
              description: 'La expresión matemática a evaluar (ej: 2 + 2, 10 * 5)',
            },
          },
          required: ['expression'],
        },
      },
    ],
  },
}

export default function VoiceBotPage() {
  const { callState, startCall, stopCall, toggleMute, isConnected, isConnecting } = useVapi(vapiConfig)
  const [isMuted, setIsMuted] = useState(false)

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleToggleMute = () => {
    toggleMute()
    setIsMuted(!isMuted)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'bg-green-500'
      case 'connecting':
        return 'bg-yellow-500'
      case 'error':
        return 'bg-red-500'
      default:
        return 'bg-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Bot de Voz AI</h1>
          <p className="text-gray-600">Asistente de voz inteligente con Vapi AI</p>
        </div>

        {/* Estado de la llamada */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(callState.status)}`} />
              Estado de la Llamada
            </CardTitle>
            <CardDescription>Controla tu conversación con el asistente de voz</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Badge variant="outline" className="capitalize">
                  {callState.status}
                </Badge>
                {isConnected && <p className="text-sm text-gray-600">Duración: {formatDuration(callState.duration)}</p>}
              </div>

              <div className="flex gap-2">
                {!isConnected ? (
                  <Button
                    onClick={startCall}
                    disabled={isConnecting}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {isConnecting ? 'Conectando...' : 'Iniciar Llamada'}
                  </Button>
                ) : (
                  <>
                    <Button onClick={handleToggleMute} variant="outline" size="lg">
                      {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </Button>
                    <Button onClick={stopCall} variant="destructive" size="lg">
                      <PhoneOff className="w-4 h-4 mr-2" />
                      Finalizar
                    </Button>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transcripción */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="w-5 h-5" />
              Transcripción de la Conversación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {callState.transcript.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  La conversación aparecerá aquí una vez que inicies la llamada
                </p>
              ) : (
                callState.transcript.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Herramientas Disponibles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Herramientas Disponibles
            </CardTitle>
            <CardDescription>El asistente puede usar estas funciones durante la conversación</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-sm">🌤️ Clima</h3>
                <p className="text-xs text-gray-600 mt-1">Consulta el clima de cualquier ciudad</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-sm">🕐 Hora</h3>
                <p className="text-xs text-gray-600 mt-1">Obtiene la fecha y hora actual</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-sm">🧮 Calculadora</h3>
                <p className="text-xs text-gray-600 mt-1">Realiza cálculos matemáticos básicos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instrucciones */}
        <Alert>
          <AlertDescription>
            <strong>Cómo usar:</strong> Haz clic en &quot;Iniciar Llamada&quot; y habla naturalmente. Puedes preguntar
            sobre el clima, la hora o pedir cálculos matemáticos. El asistente responderá por voz y la conversación se
            mostrará en la transcripción.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
