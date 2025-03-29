import React from "react";
import Link from "next/link"

const MainNav = () => {
  return (
    <>
      <nav>
        <ul className="flex space-x-4 hidden md:flex">
          <li><Link href="#">Agenda</Link></li>
          <li><Link href="#">Unidades</Link></li>
          <li><Link href="#">Nossos Valores</Link></li>
          <li><Link href="#">Colaborar</Link></li>
          <li><Link href="#">Voluntários</Link></li>
        </ul>
      </nav>
      <button className="text-white font-semibold bg-red-500 px-6 rounded-full transition duration-300 cursor-pointer hover:scale-110 hidden md:flex">
        <a href="https://www.youtube.com/@imeptv" target="_blank">Ao vivo</a>
      </button>
    </>
  )
}


export default MainNav