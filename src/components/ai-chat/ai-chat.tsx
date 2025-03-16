type AIChatProps = {
  children: React.ReactNode
  className?: string
}

export function AIChat({ children, className }: AIChatProps) {
  return (
    <div
      className={`flex h-full w-full flex-col border border-2 ${className || ""}`}
    >
      {children}
    </div>
  )
}
