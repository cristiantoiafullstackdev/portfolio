import BreadCrumb from "../ui/BreadCrumb";

export default function Header() {
  return (
    <header className="w-full min-h-20 flex justify-between px-4 py-2 bg-background border-b border-border/50">
      <BreadCrumb />
    </header>
  )
}