import type { Message } from "ai"

type AIChatMessageProps = {
  message: Message
  renderContent?: (message: Message) => React.ReactNode
}

export function AIChatMessage({ message, renderContent }: AIChatMessageProps) {
  const defaultContent = (
    <span
      className={`inline-block ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
    >
      {message.content}
    </span>
  )
  return (
    <div className={`${message.role === "user" ? "text-right" : "text-left"}`}>
      {renderContent ? renderContent(message) : defaultContent}
    </div>
  )
}
