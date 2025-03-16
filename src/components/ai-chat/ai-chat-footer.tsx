type AIChatFooterProps = {
  children: React.ReactNode
  className?: string
}

export function AIChatFooter({ children, className }: AIChatFooterProps) {
  return <div className={`bg-orange-400 ${className || ""}`}>{children}</div>
}
