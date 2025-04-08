'use client'
import { CodeBlock } from 'react-code-block'

import { IconClipboard, IconClipboardCheck } from '@/assets'
import { useCopyToClipboard } from '@/hooks'

export interface ICheatSheetArticleProps {
  title: string
  description: string
  code?: string
}

export const CheatSheetArticle: React.FC<ICheatSheetArticleProps> = ({ title, description, code }) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  return (
    <article className="bg-card p-4 md:p-8 rounded-3xl">
      <h2 className="text-xl md:text-4xl font-bold mb-2">{title}</h2>
      <p className="mb-4 text-sm md:text-md text-neutral-500">{description}</p>
      {code && (
        <CodeBlock code={code} language="js">
          <div className="relative w-full">
            <CodeBlock.Code className="w-full bg-background p-6 rounded-3xl overflow-x-auto text-sm md:text-base pt-12">
              <CodeBlock.LineContent>
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </CodeBlock.Code>
            <button
              className="bg-secondary text-secondary-foreground rounded-xl p-1.5 absolute top-2 right-2 text-sm font-semibold transition-transform active:scale-95"
              onClick={() => copyToClipboard(code)}
            >
              {isCopied ? <IconClipboardCheck /> : <IconClipboard />}
            </button>
          </div>
        </CodeBlock>
      )}
    </article>
  )
}
