import { cn } from "cn"

interface ButtonSecondaryProps {
  className?: string
  onClick?: () => void
  disabled?: boolean
  asChild?: false
}

export const ButtonSecondary = ({
  className,
  onClick,
  disabled,
}: ButtonSecondaryProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    />
  )
}