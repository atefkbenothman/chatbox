"use client"

import { AIChat } from "@/components/ai-chat/ai-chat"
import { AIChatError } from "@/components/ai-chat/ai-chat-error"
import { AIChatFooter } from "@/components/ai-chat/ai-chat-footer"
import { AIChatHeader } from "@/components/ai-chat/ai-chat-header"
import { AIChatInput } from "@/components/ai-chat/ai-chat-input"
import { AIChatMessageList } from "@/components/ai-chat/ai-chat-message-list"
import { AIChatSendButton } from "@/components/ai-chat/ai-chat-send-button"
import { useAIChat } from "@/components/ai-chat/ai-chat-provider"
import { AIChatNewButton } from "@/components/ai-chat/ai-chat-new-button"

export function ChatBoxLeft() {
  const { status, handleSend } = useAIChat()

  return (
    <AIChat>
      <AIChatHeader className="flex items-center justify-center">
        AI Chat Left
        <AIChatNewButton />
      </AIChatHeader>
      <AIChatError />
      <AIChatMessageList />
      <AIChatFooter className="bg-yellow-500">
        <AIChatInput placeholder="Ask me anything..." />
        <AIChatSendButton
          onClick={handleSend}
          disabled={status === "streaming" || status === "error"}
        />
      </AIChatFooter>
    </AIChat>
  )
}
