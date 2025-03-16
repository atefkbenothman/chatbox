"use client"

import { useAIChat } from "@/components/ai-chat/ai-chat-provider"

type AIChatNewButtonProps = {
  className?: string
}

export function AIChatNewButton({ className }: AIChatNewButtonProps) {
  const { handleNewChat } = useAIChat()

  return (
    <button
      onClick={handleNewChat}
      className={`bg-purple-400 ${className || ""}`}
    >
      New Chat
    </button>
  )
}
