import Link from "next/link"
import { cn } from "cn"

interface NavLinkItemProps {
  href: string
  label: string
  className?: string
  active?: boolean
}

export const NavLinkItem = ({
  href,
  label,
  className,
  active = false,
}: NavLinkItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
        "hover:text-foreground",
        active ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-accent/10",
        className
      )}
    >
      {label}
    </Link>
  )
}