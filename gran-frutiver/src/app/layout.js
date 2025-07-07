import '../app/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

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
        <main className="p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
