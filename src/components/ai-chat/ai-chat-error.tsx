"use client"

import { useAIChat } from "@/components/ai-chat/ai-chat-provider"

type AIChatErrorProps = {
  className?: string
}

export function AIChatError({ className }: AIChatErrorProps) {
  const { error } = useAIChat()

  if (!error) return null

  return (
    <div className={`text-red-600 ${className || ""}`}>{error.message}</div>
  )
}
