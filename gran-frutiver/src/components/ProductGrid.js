'use client'

import ProductCard from './ProductCard'

export default function ProductGrid({ products = [], onAdd = () => {} }) {
  return (
    <div className="relative">
      {/* Contenedor con scroll horizontal */}
      <div className="overflow-x-auto no-scrollbar py-4">
        <div className="flex gap-4 w-max px-2">
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
    </div>
  )
}