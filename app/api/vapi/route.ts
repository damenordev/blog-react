// Configuración de CORS para Next.js API Route
export const dynamic = 'force-dynamic' // No cachear esta ruta

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  })
}

export async function POST(req: Request) {
  const body = await req.json()

  console.log('Vapi API request:', body)

  // Verificar si hay llamadas de función para procesar
  if (!body.message?.toolCallList?.length) {
    console.error('No se encontraron toolCalls en la solicitud')
    return new Response(JSON.stringify({ error: 'No se encontraron toolCalls' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }

  // Procesar cada llamada de función
  const results = await Promise.all(
    body.message.toolCallList.map(async (toolCall: { id: string; name: string; parameters: Record<string, string> }) => {
      const { id, name, parameters } = toolCall
      console.log(`Procesando función: ${name} con parámetros:`, parameters)

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
            console.error(`Función no implementada: ${name}`)
            result = { error: `Función ${name} no implementada` }
        }
      } catch (error) {
        console.error(`Error ejecutando función ${name}:`, error)
        result = { error: `Error ejecutando función ${name}: ${error}` }
      }

      return {
        toolCallId: id,
        result: JSON.stringify(result),
      }
    })
  )

  return new Response(JSON.stringify({ results }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

// Funciones auxiliares para manejar las llamadas
async function getWeather(location: string) {
  // Simulación de datos del clima
  // En producción, conectarías con una API real de clima
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
    // Nota: En producción, considera usar una biblioteca segura para evaluar expresiones
    const result = Function('"use strict"; return (' + expression + ')')()
    return { result: result.toString() }
  } catch (error) {
    console.error('Error al calcular:', error)
    return { error: 'Expresión matemática inválida' }
  }
}
