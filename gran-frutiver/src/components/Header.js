'use client'

import Image from 'next/image'
import logo from '../../public/logo.png'

export default function Header() {
  return (
    <header className="w-full bg-[#8cc63f] grid grid-cols-3 items-center px-6 py-4">
        {/* Columna 1 vacía o para futuros elementos */}
        <div></div>
        {/* Columna 2: Texto centrado */}
        <h1 className="text-white text-4xl font-bold italic text-center">
            Gran Frutiver San Francisco
        </h1>
        {/* Columna 3: Logo alineado a la derecha */}
        <div className="flex justify-end">
            <div className="w-[100px] h-[50px] relative">
                <Image
                src={logo}
                alt="Logo Gran Frutiver"
                fill
                className="object-contain"
            />
            </div>
        </div>
    </header>

  )
}