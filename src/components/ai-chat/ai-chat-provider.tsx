"use client"

import { createContext, useContext, useState } from "react"
import { useChat } from "@ai-sdk/react"
import type { Message } from "ai"

type Status = "submitted" | "streaming" | "ready" | "error"

type AIChatContextType = {
  messages: Message[]
  input: string
  status: Status
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void
  error: Error | undefined
  context: string
  setContext: (context: string) => void
  handleSend: () => void
  handleNewChat: () => void
}

const AIChatContext = createContext<AIChatContextType | undefined>(undefined)

type AIChatProviderProps = {
  children: React.ReactNode
}

export function AIChatProvider({ children }: AIChatProviderProps) {
  const [context, setContext] = useState<string>("")

  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    append,
    status,
    error,
  } = useChat({
    api: "/api/chat",
    initialMessages: [
      { id: "1", role: "assistant", content: "How can I help you today?" },
    ],
  })

  const handleSend = () => {
    if (status === "ready" && input.trim()) {
      const fullInput = context ? `${context}\n\n${input}` : input
      const message: Message = {
        id: Math.random().toString(),
        role: "user" as const,
        content: fullInput,
      }
      append(message)
      handleInputChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>)
    }
  }

  const handleNewChat = () => {
    setMessages([
      { id: "1", role: "assistant", content: "How can I help you today?" },
    ])
    handleInputChange({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>)
  }

  const value = {
    messages,
    input,
    handleInputChange,
    status,
    error,
    context,
    setContext,
    handleSend,
    handleNewChat,
  }

  return (
    <AIChatContext.Provider value={value}>{children}</AIChatContext.Provider>
  )
}

export function useAIChat() {
  const context = useContext(AIChatContext)
  if (!context) {
    throw new Error("useAIChat must be used within an AIChatProvider")
  }
  return context
}
