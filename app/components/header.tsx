import React from "react"
import MainNav from "./main-nav"
import MobileNav from "./mobile-nav"

const Header = () => {
  return (
    <header className="container flex items-center justify-between px-4 bg-black text-white font-roboto">
      <section className="flex items-center p-4">
        <img src="/logo.png" alt="Logo Imep" className="w-16 h-16"/>
        <h1>Imep</h1>
      </section>
      {/* Nav Bar para Desktop */}
      <MainNav />

      {/* Nav Bar para mobile */}
      <MobileNav />

    </header>
  )
}

export default Header