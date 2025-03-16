"use client"

import { useAIChat } from "@/components/ai-chat/ai-chat-provider"

type AIChatInputProps = {
  placeholder?: string
  className?: string
}

export function AIChatInput({ placeholder, className }: AIChatInputProps) {
  const { input, handleInputChange, status, handleSend } = useAIChat()

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && status === "ready") {
      handleSend()
    }
  }

  return (
    <input
      value={input}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder || "Type here..."}
      disabled={status === "streaming" || status === "error"}
      className={`flex-1 bg-green-500 ${className || ""}`}
    />
  )
}
