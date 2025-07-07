'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function ImageCarousel({ images, interval = 5000 }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="w-full h-full rounded-md shadow-md overflow-hidden relative aspect-square">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute top-auto left-auto w-full h-full"
        >
          <Image
            src={images[current]}
            alt={`Imagen ${current + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
