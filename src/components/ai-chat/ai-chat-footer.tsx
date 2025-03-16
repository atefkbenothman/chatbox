type AIChatFooterProps = {
  children: React.ReactNode
  className?: string
}

export function AIChatFooter({ children, className }: AIChatFooterProps) {
  return (
    <div className={`flex bg-orange-400 ${className || ""}`}>{children}</div>
  )
}
