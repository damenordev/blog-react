// Tipos específicos para cada proveedor de voz
export interface OpenAIVoice {
  provider: 'openai'
  voiceId?: string
}

export interface AzureVoice {
  provider: 'azure'
  voiceId?: string
}

export interface PlayHTVoice {
  provider: 'playht'
  voiceId?: string
}

export interface ElevenLabsVoice {
  provider: 'elevenlabs'
  voiceId?: string
}

// Tipo unión para voice
export type VapiVoice = OpenAIVoice | AzureVoice | PlayHTVoice | ElevenLabsVoice

// Configuración del asistente
export interface AssistantConfig {
  // Configuración del modelo
  model: {
    provider: 'openai'
    model: 'gpt-4' | 'gpt-3.5-turbo'
    messages: Array<{
      role: 'system' | 'user' | 'assistant'
      content: string
    }>
  }
  // Configuración de voz
  voice: {
    provider: 'elevenlabs' | 'playht' | 'azure' | 'openai'
    voiceId: string // Importante: voiceId debe ser obligatorio
  }
  // Funciones opcionales
  functions?: VapiFunction[]
  // Mensaje inicial opcional
  firstMessage?: string
}

// Usamos AssistantConfig directamente en lugar de tener una interfaz vacía

// Definición de tipos para la configuración de Vapi
export interface VapiConfig {
  publicKey: string
  assistant: AssistantConfig
}

export interface VapiFunction {
  name: string
  description: string
  parameters: {
    type: 'object'
    properties: Record<
      string,
      {
        type: string
        description: string
      }
    >
    required?: string[]
  }
}

export interface CallState {
  status: 'idle' | 'connecting' | 'connected' | 'disconnected' | 'error'
  duration: number
  transcript: TranscriptMessage[]
}

export interface TranscriptMessage {
  role: 'user' | 'assistant' | 'function'
  content: string
  timestamp: Date
}

export interface VapiMessage {
  type: 'transcript' | 'function-call' | 'hang' | 'speech-start' | 'speech-end'
  transcript?: string
  role?: 'user' | 'assistant'
  functionCall?: {
    id: string
    name: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parameters: Record<string, any>
  }
}
