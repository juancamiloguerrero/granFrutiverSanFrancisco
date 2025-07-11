'use client'

import { useState } from 'react'
import ProductGrid from './ProductGrid'
import { FaSearch } from 'react-icons/fa'

export default function CategorySection({ title, subtitle, products = [], bgColor = 'from-orange-500 to-orange-400' }) {
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="my-12 px-4">
      {/* Encabezado personalizado */}
      <div className={`mb-4 px-6 py-6 rounded-xl text-white bg-gradient-to-r ${bgColor} shadow-md`}>
        <h2 className="text-5xl font-bold italic">{title}</h2>
        <p className="text-l font-semibold italic mt-1">{subtitle}</p>
      </div>

      {/* Contenedor de productos con fondo */}
      <div className="bg-[#DEDEDE] rounded-xl shadow-xl p-4">
        {/* Barra de búsqueda */}
        <div className="max-w-md mx-auto mb-4 relative">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-black-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-[#FFFFFF]"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Grid */}
        <ProductGrid products={filteredProducts} onAdd={(item) => console.log('Agregado:', item)} />
      </div>
    </section>
  )
}