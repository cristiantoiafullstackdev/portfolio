import { cn } from "cn"

interface ButtonPrimaryProps {
  className?: string
  onClick?: () => void
  disabled?: boolean
  asChild?: false
}

export const ButtonPrimary = ({
  className,
  onClick,
  disabled,
}: ButtonPrimaryProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    />
  )
}