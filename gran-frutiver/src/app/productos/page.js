'use client'

import CategorySection from '../../components/CategorySection'
import CartPanel from '../../components/CartPanel'

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
  { name: 'Pimentón Rojo 1 unidad', price: 600, image: '/pimentonR.png' },
  { name: 'Cebolla cabezona 1 unidad', price: 600, image: '/cebolla.png' },
]

const carnes = [
  { name: 'Punta de anca 1 unidad', price: 600, image: '/anca.png' },
  { name: 'Chatas 1 unidad', price: 600, image: '/chatas.png' },
  { name: 'Falda de costilla 1 unidad', price: 600, image: '/falda.png' },
  { name: 'Morrillo 1 unidad', price: 600, image: '/morrillo.png' },
  { name: 'Lomo Fino 1 unidad', price: 600, image: '/lomofino.png' },
]

const pollo = [
  { name: 'Punta de anca 1 unidad', price: 600, image: '/anca.png' },
  { name: 'Chatas 1 unidad', price: 600, image: '/chatas.png' },
  { name: 'Falda de costilla 1 unidad', price: 600, image: '/falda.png' },
  { name: 'Morrillo 1 unidad', price: 600, image: '/morrillo.png' },
  { name: 'Lomo Fino 1 unidad', price: 600, image: '/lomofino.png' },
]

const abarrotes = [
  { name: 'Punta de anca 1 unidad', price: 600, image: '/anca.png' },
  { name: 'Chatas 1 unidad', price: 600, image: '/chatas.png' },
  { name: 'Falda de costilla 1 unidad', price: 600, image: '/falda.png' },
  { name: 'Morrillo 1 unidad', price: 600, image: '/morrillo.png' },
  { name: 'Lomo Fino 1 unidad', price: 600, image: '/lomofino.png' },
]

const aseo = [
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
        bgColor="bg-[linear-gradient(to_right,_#F77F00FF,_#F77F0020)]"
      />

      <CategorySection
        title="Verduras frescas"
        subtitle="De calidad entregadas diariamente."
        products={verduras}
        bgColor="bg-[linear-gradient(to_right,_#4CAF12,_#4CAF1220)]"
      />

      <CategorySection
        title="Carne fresca"
        subtitle="De calidad entregada diariamente."
        products={carnes}
        bgColor="bg-[linear-gradient(to_right,_#AF1212FF,_#AF121220)]"
      />

      <CategorySection
        title="Pollo fresco"
        subtitle="De calidad entregado diariamente."
        products={pollo}
        bgColor="bg-[linear-gradient(to_right,_#F6B400FF,_#F6B40020)]"
      />

      <CategorySection
        title="Abarrotes"
        subtitle="De calidad entregado diariamente."
        products={abarrotes}
        bgColor="bg-[linear-gradient(to_right,_#1982C4FF,_#1982C420)]"
      />

      <CategorySection
        title="Aseo"
        subtitle="De calidad entregado diariamente."
        products={aseo}
        bgColor="bg-[linear-gradient(to_right,_#6a4c93FF,_#6a4c9320)]"
      />
      <CartPanel />
    </div>
  )
}
