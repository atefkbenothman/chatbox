type AIChatHeaderProps = {
  children: React.ReactNode
  className?: string
}

export function AIChatHeader({ children, className }: AIChatHeaderProps) {
  return <div className={`bg-orange-400 ${className || ""}`}>{children}</div>
}
