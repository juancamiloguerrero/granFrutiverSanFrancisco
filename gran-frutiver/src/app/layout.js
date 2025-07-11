import '../app/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import { CartProvider } from '../components/CartContext'

export const metadata = {
  title: 'Gran Frutiver San Francisco',
  description: 'Frescura, calidad y sabor todos los días.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#f1e6c8] text-gray-800">
        <Header />
        <Navbar />
        <CartProvider>
        <main className="p-4">{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  )
}
