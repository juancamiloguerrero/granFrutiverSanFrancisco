'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const linkClasses = (path) =>
    `px-5 py-3 rounded-full text-white font-medium text-sm transition ${
      pathname === path
        ? 'bg-blue-700 hover:bg-[#4CAF12] hover:text-white'
        : 'bg-blue-700 hover:bg-[#4CAF12] hover:text-white'
    }`

  return (
    <nav className="w-full flex justify-center gap-4 pb-4 p-5 ">
      <Link href="/" className={linkClasses('/')}>
        Acerca de nosotros
      </Link>
      <Link href="/productos" className={linkClasses('/productos')}>
        Productos
      </Link>
    </nav>
  )
}
