'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Cambia a fixed solo después de cierto scroll
      setIsFixed(scrollY > 100) // Ajusta el valor según la altura del header
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClasses = (path) =>
    `px-5 py-3 rounded-full text-white font-medium text-sm transition ${
      pathname === path
        ? 'bg-blue-700 hover:bg-[#4CAF12]'
        : 'bg-blue-700 hover:bg-[#4CAF12]'
    }`

  return (
    <div
      className={`w-full flex justify-center gap-4 p-5 transition-all duration-500 ease-in-out ${
        isFixed
          ? 'fixed top-0 left-0 z-50 bg-[#8AC926]/70 backdrop-blur-md shadow-md'
          : 'relative bg-transparent'
      }`}
    >
      <Link href="/" className={linkClasses('/')}>
        Acerca de nosotros
      </Link>
      <Link href="/productos" className={linkClasses('/productos')}>
        Productos
      </Link>
    </div>
  )
}
