'use client'

import ImageCarousel from './ImageCarousel'
import SectionTitle from './SectionTitle'        
import aguacate from '../../public/aguacate.png'
import carnes from '../../public/carnes.png'
import cebollas from '../../public/cebollas.png'
import local_1 from '../../public/local1.png'
import local_2 from '../../public/local2.png'
import mverde from '../../public/mverde.png'
import platanos from '../../public/platanos.png'
import quesos from '../../public/quesos.png'
import tienda from '../../public/tienda.png'
import vidrio from '../../public/vidrio.png'
import Image from 'next/image'


export default function AboutUs() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <SectionTitle text="Acerca de Nosotros" />

      <p className="text-xl mb-4 text-justify">
        ¡Bienvenido/a a <strong>Gran Frutiver San Francisco</strong>!
        Donde la frescura se siente, la calidad se nota y el sabor enamora.
        En nuestro fruver no solo encontrarás frutas y verduras, sino una experiencia que despierta tus sentidos. Cada día seleccionamos cuidadosamente los productos más frescos del campo, para que lleguen a tu mesa con todo su color, aroma y sabor natural. 
        Nos apasiona ofrecerte lo mejor, porque sabemos que tu bienestar y el de tu familia empiezan con una alimentación saludable y deliciosa.
        Ven y déjate conquistar por el crujir de una manzana, el aroma de una piña madura o la dulzura de un mango en su punto perfecto. En Gran Frutiver San Francisco, te atendemos con calidez, compromiso y alegría, como solo un fruver de 
        barrio con corazón puede hacerlo.</p>

        <p className='text-xl'>🌱 Frescura que se nota.</p>
        <p className='text-xl'>🥭 Sabor que no se olvida.</p>
        <p className='text-xl'>🛒 Todo lo que necesitas, en un solo lugar.</p>
        <p className='text-xl font-semibold'>¡Haz de cada compra una experiencia única y saludable!</p>

        <p className="text-2xl font-bold text-green-700 mb-8 text-center">¡Visítanos y llévate lo mejor!</p>

      {/* Layout de mapa + fotos */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="w-full h-full aspect-video">
          <iframe
          className="rounded-md shadow-md w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6969.398568746494!2d-73.12499132306685!3d7.131963792872069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6815eeb6cc5c75%3A0x9b4679b10eeb6987!2sGran%20Frutiver%20San%20Francisco!5e1!3m2!1ses-419!2sco!4v1751919507537!5m2!1ses-419!2sco"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex items-center">
          <ImageCarousel
            images={[aguacate, carnes, cebollas, local_1, local_2, mverde, platanos, quesos, tienda, vidrio]}
            interval={5000}
          />
</div>
      </div>
    </section>
  )
}
