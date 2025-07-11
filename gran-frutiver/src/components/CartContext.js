'use client'
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.name === item.name)
      if (existing) {
        return prev.map((p) =>
          p.name === item.name
            ? { ...p, quantity: parseFloat((p.quantity + parseFloat(item.quantity)).toFixed(3)) }
            : p
        )
      } else {
        return [...prev, { ...item, quantity: parseFloat(item.quantity) }]
      }
    })
    setIsOpen(true)
  }

  const removeItem = (name) => {
    setCartItems((prev) => prev.filter((p) => p.name !== name))
  }

  const updateQuantity = (name, quantity) => {
    setCartItems((prev) =>
      prev.map((p) =>
        p.name === name ? { ...p, quantity: parseFloat(quantity) } : p
      )
    )
  }

  const clearCart = () => setCartItems([])

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)