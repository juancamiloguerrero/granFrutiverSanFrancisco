'use client'

import { useRef } from 'react'
import ProductCard from './ProductCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function ProductGrid({ products = [], onAdd = () => {} }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const scrollAmount = 300
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative">
      {/* Botón izquierdo */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#DEDEDE] shadow p-2 rounded-full hover:scale-110 transition"
      >
        <FaChevronLeft />
      </button>

      {/* Scroll horizontal */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar py-4"
      >
        <div className="flex gap-4 w-max px-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              onAdd={onAdd}
            />
          ))}
        </div>
      </div>

      {/* Botón derecho */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#DEDEDE] p-2 rounded-full hover:scale-110 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}