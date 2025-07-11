'use client'
import { useCart } from './CartContext'
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa'
import Image from 'next/image'

export default function CartPanel() {
  const {
    cartItems,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    clearCart,
    total,
  } = useCart()

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-gray-200 shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } rounded-l-2xl overflow-y-auto p-4`}
    >
      {/* Encabezado */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          🛒 Carrito de compras ({cartItems.length} productos)
        </h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold hover:text-red-600"
        >
          ✕
        </button>
      </div>

      {/* Lista de productos */}
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-xl shadow flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">${item.price} cada una</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <p className="font-bold">${(item.price * item.quantity).toFixed(0)}</p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() =>
                    updateQuantity(item.name, Math.max(0, item.quantity - 0.1).toFixed(3))
                  }
                  className="bg-red-200 text-red-600 rounded-full p-2"
                >
                  <FaMinus />
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                  onChange={(e) => {
                    const val = e.target.value
                    if (val === '' || (!isNaN(parseFloat(val)) && parseFloat(val) >= 0)) {
                      updateQuantity(item.name, val)
                    }
                  }}
                  onBlur={(e) => {
                    if (e.target.value === '') updateQuantity(item.name, '0.000')
                  }}
                  className="w-14 text-center font-medium border border-gray-300 rounded-md appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                  onClick={() =>
                    updateQuantity(item.name, (parseFloat(item.quantity) + 0.1).toFixed(3))
                  }
                  className="bg-green-200 text-green-700 rounded-full p-2"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeItem(item.name)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total y botones */}
      <div className="mt-6 bg-white p-4 rounded-xl shadow flex justify-between items-center font-bold text-lg">
        <span>Total</span>
        <span>${total.toFixed(0)}</span>
      </div>

      <div className="flex justify-around mt-4 gap-4">
        <button
          onClick={() => {
            clearCart()
            setIsOpen(false)
          }}
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 font-semibold"
        >
          Cancelar
        </button>
        <button
          onClick={() => alert('Compra realizada 🎉')}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 font-semibold"
        >
          Comprar
        </button>
      </div>
    </div>
  )
}