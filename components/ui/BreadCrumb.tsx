'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRightIcon } from "lucide-react"

const routes = [
  { label: "Inicio", href: "/" },
  { label: "Portfolio / Proyectos", href: "/projects" },
  { label: "Portfolio / Trayectoria", href: "/trajectory" },
  { label: "Portfolio / Contacto", href: "/contact" },
]

export default function BreadCrumb() {
  const pathname = usePathname()

  const activeRoute = routes.find((route) => route.href === pathname)

  if (!activeRoute) {
    return null
  }

  const activeIndex = routes.indexOf(activeRoute)
  const visibleRoutes = routes.slice(0, activeIndex + 1)

  return (
    <nav className="bg-background border-border/50 px-6 py-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground wrap-break-word">
        {visibleRoutes.map((route, index) => {
          const isLast = index === visibleRoutes.length - 1

          return (
            <li
              key={index}
              className="inline-flex items-center gap-1"
            >
              {isLast ? (
                <span className="font-normal text-foreground">
                  {route.label}
                </span>
              ) : (
                <Link
                  href={route.href}
                  className="transition-colors hover:text-foreground"
                >
                  {route.label}
                </Link>
              )}
              {!isLast && (
                <ChevronRightIcon className="size-3.5" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}