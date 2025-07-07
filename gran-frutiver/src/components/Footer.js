'use client'

import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#8cc63f] text-black text-sm mt-12">
      {/* Contenido principal centrado */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Ubicación */}
        <div>
          <h4 className="font-bold flex items-center gap-2 mb-1">
            <FaMapMarkerAlt /> Ubicación
          </h4>
          <p>Carrera 24 #16 - 77 San Francisco, Bucaramanga</p>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="font-bold flex items-center gap-2 mb-1">
            <FaClock /> Horarios
          </h4>
          <p>Lunes a Sábado: 6:00 a. m - 8:00 p. m</p>
          <p>Domingos y festivos: 7:00 a. m - 3:00 p. m</p>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-bold flex items-center gap-2 mb-1">
            <FaPhoneAlt /> Contacto
          </h4>
          <p>Whatsapp: +57 312 3802857</p>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-bold mb-1">Síguenos</h4>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/profile.php?id=61574736942928" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:scale-150 transition text-xl" />
            </a>
            <a href="https://www.instagram.com/granfrutiversanfransisco/" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:scale-150 transition text-xl" />
            </a>
            <a href="https://www.tiktok.com/@granfrutiversanfransico?lang=es" target="_blank" rel="noreferrer">
              <FaTiktok className="hover:scale-150 transition text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-xs bg-[#8cc63f] pb-4">
        © 2025 Gran Frutiver San Francisco. Todos los derechos reservados.
      </div>
    </footer>
  )
}