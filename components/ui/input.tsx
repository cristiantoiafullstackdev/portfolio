import { cn } from "cn"

interface InputProps {
  className?: string
  type?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  value?: string
  asChild?: false
}

export const Input = ({
  className,
  type = "text",
  placeholder,
  onChange,
  disabled,
  value,
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border-border bg-input p-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      onChange={onChange}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
    />
  )
}