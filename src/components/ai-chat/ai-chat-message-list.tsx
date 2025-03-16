"use client"

import { useAIChat } from "@/components/ai-chat/ai-chat-provider"
import { AIChatMessage } from "@/components/ai-chat/ai-chat-message"
import type { Message } from "ai"

type AIChatMessageListProps = {
  className?: string
  renderContent?: (message: Message) => React.ReactNode
}

export function AIChatMessageList({
  className,
  renderContent,
}: AIChatMessageListProps) {
  const { messages } = useAIChat()

  return (
    <div className={`flex-1 overflow-y-auto ${className || ""}`}>
      {messages.map((msg) => (
        <AIChatMessage
          key={msg.id}
          message={msg}
          renderContent={renderContent}
        />
      ))}
    </div>
  )
}
