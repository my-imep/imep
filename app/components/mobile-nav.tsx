import React from "react";
import {TableOfContents} from "lucide-react"
import Link from "next/link"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
          <SheetTrigger><TableOfContents/></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu de navegação</SheetTitle>
              <SheetDescription>Navegue pelas seções principais do site.</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-3 p-4">
              <Link href="#">Agenda</Link>
              <Link href="#">Unidades</Link>
              <Link href="#">Nossos Valores</Link>
              <Link href="#">Colaborar</Link>
              <Link href="#">Voluntários</Link>
              <Link href="https://www.youtube.com/@imeptv" className="text-red-500 font-semibold" target="_blank">Ao vivo</Link>
            </nav>
          </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav