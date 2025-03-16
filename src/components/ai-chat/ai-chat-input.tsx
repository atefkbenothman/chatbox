"use client"

import { useAIChat } from "@/components/ai-chat/ai-chat-provider"

type AIChatInputProps = {
  placeholder?: string
  className?: string
}

export function AIChatInput({ placeholder, className }: AIChatInputProps) {
  const { input, handleInputChange, status } = useAIChat()

  return (
    <input
      value={input}
      onChange={handleInputChange}
      placeholder={placeholder || "Type here..."}
      disabled={status === "streaming" || status === "error"}
      className={`bg-green-500 ${className || ""}`}
    />
  )
}
