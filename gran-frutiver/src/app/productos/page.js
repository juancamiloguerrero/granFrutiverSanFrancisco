'use client'

import CategorySection from '../../components/CategorySection'

const frutas = [
  { name: 'Banano 1 unidad', price: 600, image: '/banano.png' },
  { name: 'Naranja 1 unidad', price: 600, image: '/naranja.png' },
  { name: 'Manzana Roja 1 unidad', price: 600, image: '/manzanaR.png' },
  { name: 'Manzana Verde 1 unidad', price: 600, image: '/manzanaV.png' },
  { name: 'Maracuyá 1 unidad', price: 600, image: '/maracuya.png' },
  { name: 'Maracuyá 1 unidad', price: 600, image: '/maracuya.png' },
  { name: 'Maracuyá 1 unidad', price: 600, image: '/maracuya.png' },
  { name: 'Maracuyá 1 unidad', price: 600, image: '/maracuya.png' },
  { name: 'Maracuyá 1 unidad', price: 600, image: '/maracuya.png' },
  { name: 'Maracuyá 1 unidad', price: 600, image: '/maracuya.png' },
  { name: 'Maracuyá 1 unidad', price: 600, image: '/maracuya.png' },
  { name: 'Maracuyá 1 unidad', price: 600, image: '/maracuya.png' },
]

const verduras = [
  { name: 'Zanahoria 1 unidad', price: 600, image: '/zanahoria.png' },
  { name: 'Tomate 1 unidad', price: 600, image: '/tomate.png' },
  { name: 'Yuca 1 unidad', price: 600, image: '/yuca.png' },
  { name: 'Pimentón Rojo 1 unidad', price: 600, image: '/pimenton.png' },
  { name: 'Cebolla cabezona 1 unidad', price: 600, image: '/cebolla.png' },
]

const carnes = [
  { name: 'Punta de anca 1 unidad', price: 600, image: '/anca.png' },
  { name: 'Chatas 1 unidad', price: 600, image: '/chatas.png' },
  { name: 'Falda de costilla 1 unidad', price: 600, image: '/falda.png' },
  { name: 'Morrillo 1 unidad', price: 600, image: '/morrillo.png' },
  { name: 'Lomo Fino 1 unidad', price: 600, image: '/lomofino.png' },
]

export default function ProductosPage() {
  return (
    <div className="space-y-16">
      <CategorySection
        title="Frutas frescas"
        subtitle="De calidad entregadas diariamente."
        products={frutas}
      />

      <CategorySection
        title="Verduras frescas"
        subtitle="De calidad entregadas diariamente."
        products={verduras}
      />

      <CategorySection
        title="Carne fresca"
        subtitle="De calidad entregada diariamente."
        products={carnes}
      />
    </div>
  )
}