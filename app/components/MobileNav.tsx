import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { linkProps } from "./Navbar"
import Link from "next/link"
import { usePathname } from "next/navigation"

type MobileNavProps = {
  links: linkProps[]
}

const MobileNav: React.FC<MobileNavProps> = ({links}) => {
  const pathname = usePathname()
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Menu size={22} className="cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link, index) => (
            <div key={index}>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href={link.href} className={pathname === link.href ? 'bg-zinc-800' : ''}>
                  {link.name}
                </Link>
              </DropdownMenuItem>
              {index !== links.length - 1 ? <DropdownMenuSeparator /> : null}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default MobileNav