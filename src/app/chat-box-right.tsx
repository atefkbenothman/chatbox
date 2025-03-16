"use client"

import { AIChat } from "@/components/ai-chat/ai-chat"
import { AIChatError } from "@/components/ai-chat/ai-chat-error"
import { AIChatFooter } from "@/components/ai-chat/ai-chat-footer"
import { AIChatHeader } from "@/components/ai-chat/ai-chat-header"
import { AIChatInput } from "@/components/ai-chat/ai-chat-input"
import { AIChatMessageList } from "@/components/ai-chat/ai-chat-message-list"
import { AIChatSendButton } from "@/components/ai-chat/ai-chat-send-button"
import { useAIChat } from "@/components/ai-chat/ai-chat-provider"

export function ChatBoxRight() {
  const { status, handleSend } = useAIChat()

  return (
    <AIChat>
      <AIChatHeader>AI Chat Left</AIChatHeader>
      <AIChatMessageList />
      <div className="flex flex-row">
        <AIChatInput placeholder="Ask me anything..." />
        <AIChatSendButton
          onClick={handleSend}
          disabled={status === "streaming" || status === "error"}
        />
      </div>
      <AIChatError />
      <AIChatFooter>AI Footer Left</AIChatFooter>
    </AIChat>
  )
}
