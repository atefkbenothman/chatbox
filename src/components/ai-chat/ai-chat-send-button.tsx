"use client"

type AIChatSendButtonProps = {
  onClick: () => void
  disabled: boolean
  className?: string
}

export function AIChatSendButton({
  onClick,
  disabled,
  className,
}: AIChatSendButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-red-500 ${className || ""}`}
    >
      Send
    </button>
  )
}
