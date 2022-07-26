import Link from "next/link";
import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div>
      <div className="w-full h-[60px] bg-transparent">
        <div className="flex h-full justify-end items-center">
          <ul className="hidden md:flex items-center">
            <Link href="/">
              <li className="mr-10 text-sm uppercase hover:border-b border-[#6b0504]">Início</li>
            </Link>
            <Link href="/cartas">
              <li className="mr-10 text-sm uppercase hover:border-b border-[#6b0504]">Cartas</li>
            </Link>
            <Link href="/">
              <li className="mr-10 text-sm uppercase hover:border-b border-[#6b0504]">Sobre mim</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden mr-5">
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={
          nav 
          ? "fixed left-0 top-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-[#FCF0CC] p-10 ease-in duration-500" 
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
          <div className="flex w-full items-center justify-end">
            <div  onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <AiOutlineClose/>
            </div>
          </div>
          <div>
            <ul>
              <Link href="/">
                <li className="py-4 text-sm">Início</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Cartas</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Sobre mim</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar