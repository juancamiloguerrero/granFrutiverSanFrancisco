'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ProductCard({ name, price, image, onAdd }) {
  const [quantity, setQuantity] = useState(1)

  const handleAdd = () => {
    if (onAdd && quantity > 0) {
      onAdd({ name, price, quantity, image })
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-2 w-[220px]">
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <h3 className="text-md font-semibold text-center mt-2">{name}</h3>
      <p className="text-green-700 font-bold text-sm">${price}</p>

      <div className="flex items-center gap-2 mt-1">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-3 py-1 text-lg bg-red-100 text-red-600 rounded-full hover:bg-red-200"
        >
          –
        </button>
        <span className="font-medium">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="px-3 py-1 text-lg bg-green-100 text-green-600 rounded-full hover:bg-green-200"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="bg-green-600 text-white px-4 py-2 rounded-full mt-2 hover:bg-green-700 transition"
      >
        Agregar
      </button>
    </div>
  )
}