'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useCart } from './CartContext'

export default function ProductCard({ name, price, image, onAdd }) {
  const [quantity, setQuantity] = useState("1")
  const { addItem } = useCart()

  const handleAdd = () => {
  if (quantity && parseFloat(quantity) > 0) {
    addItem({ name, price, quantity: parseFloat(quantity), image })
  }
}

  return (
    <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col items-center gap-2 w-[220px]">
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <h3 className="text-md font-semibold text-center mt-2">{name}</h3>
      <p className="text-green-700 font-bold text-sm">${price}</p>

      <div className="flex items-center gap-2 mt-1">
        <button
          onClick={() =>
            setQuantity((q) =>
            q === '' ? '0.000' : parseFloat(Math.max(0, parseFloat(q) - 0.1).toFixed(3)).toString()
          )}
          className="px-3 py-1 text-lg bg-red-100 text-red-600 rounded-full hover:bg-red-200"
        >
          –
        </button>
        <input
        type="number"
        min="0"
        step="0.1"
        inputMode="decimal"
        value={quantity}
        onChange={(e) => {
          const val = e.target.value
          if (val === '' || (!isNaN(parseFloat(val)) && parseFloat(val) >= 0)){
            setQuantity(val)
          } 
        }}
          className="w-16 text-center font-medium rounded-md border border-gray-300 focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />

        <button
          onClick={() =>
            setQuantity((q) =>
            q === '' ? '0.100' : parseFloat((parseFloat(q) + 0.1).toFixed(3)).toString()
          )}
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