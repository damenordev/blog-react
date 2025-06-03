import { Suspense } from 'react'

import { PlaygroundClient } from './client'

import { openrouter } from '@openrouter/ai-sdk-provider'
import { generateText } from 'ai'
import { generateCodePrompt } from '@/prompts/generate-code.prompt'

export default async function EditorPage() {
  const response = await generateText({
    // model: openrouter('mistralai/devstral-small'),
    model: openrouter('mistralai/devstral-small:free'),
    // model: openrouter('deepseek/deepseek-r1-0528:free'),
    // model: openrouter('deepseek/deepseek-r1-0528-qwen3-8b:free'),
    // model: openrouter('google/gemini-2.5-flash-preview-05-20:thinking'),
    // model: openrouter('google/gemini-2.5-pro-preview'),
    // model: openrouter('anthropic/claude-sonnet-4'),
    prompt: generateCodePrompt,
    // system,
  })
  console.log(response.text)
  const files = JSON.parse(response.text.replace('```json', '').replace('```', ''))

  return (
    <Suspense fallback={<h1>Loading editor...</h1>}>
      <PlaygroundClient files={files} />
    </Suspense>
  )
}
