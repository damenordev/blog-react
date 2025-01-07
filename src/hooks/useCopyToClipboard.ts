'use client'
import { useState } from 'react'

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    if (isCopied) return
    await navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return { isCopied, copyToClipboard }
}
