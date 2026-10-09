import { Link } from 'react-router-dom';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Té Matcha Grado Culinario', price: '19,95€', category: 'matcha', image: '🍵', desc: 'Perfecto para recetas, smoothies y repostería' },
  { id: 2, name: 'Té Matcha Grado Ceremonial', price: '29,95€', category: 'matcha', image: '🍃', desc: '54g · Uji premium · Sabor umami intenso' },
  { id: 3, name: 'Tetera de Cristal', price: '24,95€', category: 'tazas', image: '🫖', desc: 'Cristal borosilicato resistente al calor' },
  { id: 4, name: 'Tazas Matcha', price: '18,95€', category: 'tazas', image: '☕', desc: 'Cerámica minimalista para tu ritual diario' },
  { id: 5, name: 'Botella de Cristal', price: '16,95€', category: 'tazas', image: '🧴', desc: 'Cristal premium con tapa de bambú' },
  { id: 6, name: 'Juego de Teteras y Tazas', price: '39,95€', category: 'tazas', image: '🍶', desc: 'Set completo para compartir el ritual' },
  { id: 7, name: 'Kit Completo de Preparación', price: '79,95€', category: 'kit', image: '🎋', desc: 'Chawan + Chasen + Chashaku + Tamizador' },
];

const merchProducts = [
  { id: 8, name: 'Camiseta Matcha Vibes', price: '24,95€', image: '👕', desc: 'Algodón orgánico 100%' },
  { id: 9, name: 'Sudadera Zenqa', price: '49,95€', image: '🧥', desc: 'Oversize fit · Bordado premium' },
  { id: 10, name: 'Tote Bag Matcha', price: '19,95€', image: '👜', desc: 'Canvas ecológico · Diseño exclusivo' },
  { id: 11, name: 'Taza Personalizada', price: '15,95€', image: '🏺', desc: 'Cerámica con tu nombre o frase' },
  { id: 12, name: 'Vaso Térmico Zenqa', price: '22,95€', image: '🥤', desc: 'Acero inoxidable · Doble pared' },
  { id: 13, name: 'Vaso de Cristal Matcha', price: '14,95€', image: '🥛', desc: 'Cristal con pajita de bambú' },
];

const reviews = [
  { name: 'Laura M.', text: 'Lo compré porque el café de media tarde me dejaba nerviosa. Con leche de avena queda suave y no me da bajón. Me sorprendió que no sabe amargo.', rating: 5, badge: 'Compra verificada' },
  { name: 'Sergio R.', text: 'Lo preparo frío antes de entrenar. El color es muy verde y con hielo queda brutal. El chasen ayuda bastante si no quieres grumos.', rating: 5, badge: 'Madrid' },
  { name: 'Paula G.', text: 'Al principio lo hacía con agua demasiado caliente y me salía fuerte. Seguí la guía, bajé temperatura y ahora queda cremoso. Repetiría.', rating: 4, badge: 'Rutina diaria' },
];

const recipes = [
  { title: 'Iced Matcha Oat Latte', desc: 'Receta cremosa para casa, oficina o post-entreno.', emoji: '🧊' },
  { title: 'Strawberry Cloud Matcha', desc: 'Fresa, nube cremosa y matcha intenso en capas.', emoji: '🍓' },
  { title: 'Sparkling Matcha Yuzu Tonic', desc: 'Burbuja, cítrico y umami para una bebida premium.', emoji: '✨' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [leadEmail, setLeadEmail] = useState('');

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[55vh] md:h-[60vh] overflow-hidden bg-[#2D5F3F]">
        <div className="absolute inset-0">
          <img 
            src="https://image.qwenlm.ai/generated-images/f5acfae4-bb8e-43b0-b5ae-fbe530d5ddb7/_result.png" 
            alt="Matcha Vibes" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5F3F]/80 via-[#1A4A2E]/60 to-[#2D5F3F]/80"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
              <span className="inline-block relative">
                #MATCHA
                <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 C30 2, 70 12, 100 6 C130 0, 170 10, 198 4" stroke="#F4A7C3" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </span>
              {' '}
              <span className="inline-block relative">
                VIBES
                <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 160 12" fill="none">
                  <path d="M2 6 C25 12, 60 2, 80 8 C100 14, 130 2, 158 6" stroke="#F4A7C3" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="mt-6 text-white/80 text-lg md:text-xl font-light max-w-lg mx-auto">
              Energía serena, antioxidantes puros y un color verde esmeralda radiante
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tienda" className="btn-pink text-base">
                Comprar Matcha
              </Link>
              <Link to="/como-prepararlo" className="btn-outline border-white text-white hover:bg-white hover:text-[#2D5F3F] text-base">
                Ver Beneficios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TU MOMENTO MATCHA */}
      <section className="py-16 md:py-24 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Tu momento</span>
              <h2 className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-[#2D5F3F] mt-2 leading-tight">
                Tu momento<br/>matcha
              </h2>
              <p className="mt-6 text-[#1A1A1A]/70 text-lg leading-relaxed max-w-md">
                El cambio de energía que se nota. Matcha ceremonial molido en piedra directo de Kioto. Sabor umami, color verde intenso y un ritual que transforma tu día.
              </p>
              <Link to="/tienda" className="mt-8 inline-block btn-primary">
                Nuestro Té Matcha
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://image.qwenlm.ai/generated-images/20cfe079-1c10-4bf1-8bdf-2fd1af0d8ae9/_result.png" 
                  alt="Té Matcha Premium Grado Ceremonial" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#F4A7C3] text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-sm shadow-lg">
                54g
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER ROSA EN MOVIMIENTO */}
      <div className="bg-[#F4A7C3] py-4 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content text-white font-display text-xl md:text-2xl font-bold">
            <span className="mx-8">✦ ENVÍOS GRATIS DESDE 35€</span>
            <span className="mx-8">✦ DESCARGA NUESTRA GUÍA GRATUITA</span>
            <span className="mx-8">✦ PREPARA TU MOMENTO MATCHA</span>
            <span className="mx-8">✦ ENVÍOS GRATIS DESDE 35€</span>
            <span className="mx-8">✦ DESCARGA NUESTRA GUÍA GRATUITA</span>
            <span className="mx-8">✦ PREPARA TU MOMENTO MATCHA</span>
            <span className="mx-8">✦ ENVÍOS GRATIS DESDE 35€</span>
            <span className="mx-8">✦ DESCARGA NUESTRA GUÍA GRATUITA</span>
            <span className="mx-8">✦ PREPARA TU MOMENTO MATCHA</span>
          </div>
        </div>
      </div>

      {/* KIT COMPLETO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://image.qwenlm.ai/generated-images/55deb41a-59c6-4424-8d5c-8ea134e43aad/_result.png" 
                  alt="Kit Completo de Preparación Matcha" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#2D5F3F] text-white rounded-2xl px-4 py-2 text-sm font-medium shadow-lg">
                Todo incluido
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Kit completo</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
                Kit Completo de Preparación
              </h2>
              <p className="mt-4 text-[#1A1A1A]/70 text-lg leading-relaxed">
                Chawan, chasen, chashaku, tamizador, espumador, vaso/taza y herramientas para latte frío o ritual clásico. Todo lo que necesitas para empezar tu momento matcha desde el primer día.
              </p>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-[#2D5F3F]">79,95€</span>
                <span className="text-[#1A1A1A]/40 line-through">99,95€</span>
              </div>
              <Link to="/tienda" className="mt-8 inline-block btn-primary">
                Añadir al carrito
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE PRODUCTOS - TÉ MATCHA */}
      <section className="py-16 md:py-24 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Colección</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">Té Matcha & Preparación</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-[#B8D8BA]/30 to-[#2D5F3F]/10 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-6xl product-image">{product.image}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] group-hover:text-[#2D5F3F] transition-colors">{product.name}</h3>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">{product.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-[#2D5F3F] text-lg">{product.price}</span>
                  <button className="bg-[#2D5F3F] text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-[#1A4A2E] transition-all">
                    Añadir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRID DE PRODUCTOS - LIFESTYLE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Lifestyle</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">Llévalo contigo</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {merchProducts.map((product) => (
              <div key={product.id} className="product-card bg-[#F5F0EB] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-[#F4A7C3]/20 to-[#F4A7C3]/5 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-6xl product-image">{product.image}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] group-hover:text-[#2D5F3F] transition-colors">{product.name}</h3>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">{product.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-[#2D5F3F] text-lg">{product.price}</span>
                  <button className="bg-[#2D5F3F] text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-[#1A4A2E] transition-all">
                    Añadir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER VERDE - 60 SEGUNDOS */}
      <section className="py-16 md:py-20 bg-[#B8D8BA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#2D5F3F] leading-tight">
            Convierte 60 segundos<br/>en tu momento preferido
          </h2>
          <p className="mt-6 text-[#2D5F3F]/70 text-lg max-w-2xl mx-auto">
            Un ritual de mañana funciona cuando es rápido, repetible y agradable. Zenqa reduce la preparación a una secuencia clara, con herramientas que evitan errores comunes.
          </p>
          <Link to="/como-prepararlo" className="mt-8 inline-block bg-[#2D5F3F] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1A4A2E] transition-all">
            Descubre el ritual
          </Link>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#F4A7C3] to-[#E8849F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-white/80 text-sm tracking-widest uppercase font-medium">📖 Guía Gratuita</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3">
            Descarga nuestra guía exclusiva de Matcha
          </h2>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            Descubre todo sobre el té matcha: propiedades, beneficios, recetas y consejos para preparar el matcha perfecto.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              placeholder="tu@email.com"
              className="bg-white rounded-full px-6 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:ring-2 focus:ring-white w-full"
            />
            <button className="bg-[#2D5F3F] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#1A4A2E] transition-all whitespace-nowrap">
              Descargar Gratis
            </button>
          </div>
        </div>
      </section>

      {/* OPINIONES Y RESEÑAS */}
      <section className="py-16 md:py-24 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Comunidad & opiniones reales</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Matcha para gente que quiere foco, sabor y calidad
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={`text-lg ${j < review.rating ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                  ))}
                </div>
                <p className="text-[#1A1A1A]/80 italic leading-relaxed">"{review.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B8D8BA] flex items-center justify-center text-[#2D5F3F] font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[#1A1A1A]">{review.name}</p>
                    <p className="text-xs text-[#1A1A1A]/50">{review.badge}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECETAS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Recetas y guías</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Aprende a preparar matcha y <em className="text-[#2D5F3F]">más recetas</em>
            </h2>
            <p className="mt-4 text-[#1A1A1A]/60 text-lg">Disfruta de sabores y recetas únicas, explora todas las posibilidades del matcha.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.map((recipe, i) => (
              <div key={i} className="group bg-[#F5F0EB] rounded-2xl p-8 hover:bg-[#B8D8BA]/30 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-4">{recipe.emoji}</div>
                <span className="text-xs text-[#F4A7C3] font-medium tracking-widest uppercase">Receta paso a paso</span>
                <h3 className="font-display text-xl font-bold text-[#1A1A1A] mt-2 group-hover:text-[#2D5F3F] transition-colors">{recipe.title}</h3>
                <p className="text-sm text-[#1A1A1A]/60 mt-2">{recipe.desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-[#2D5F3F] group-hover:underline">Leer ahora →</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/recetas-guias" className="btn-primary">
              Ver todas las recetas
            </Link>
          </div>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="py-16 md:py-24 bg-[#2D5F3F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F4A7C3] blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#B8D8BA] blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Nuestra historia</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-2 leading-tight">
                Nacidos en las colinas de <em className="text-[#B8D8BA]">Uji</em>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Zenqa Life une origen japonés, estética disruptiva y bienestar moderno. No vendemos solo polvo verde: vendemos un momento diario de enfoque, calma y elegancia.
              </p>
              <Link to="/nosotros" className="mt-8 inline-block bg-[#F4A7C3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#E8849F] transition-all">
                Descubrir el ritual
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://image.qwenlm.ai/generated-images/f7525205-18c8-4c0c-aab9-3649f1dbc18d/_result.png" 
                  alt="Campos de té en Uji, Kioto" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER / REDES SOCIALES */}
      <section className="py-16 md:py-24 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">RRSS</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Únete al universo <em className="text-[#2D5F3F]">Zenqa</em>
            </h2>
            <p className="mt-4 text-[#1A1A1A]/60 text-lg max-w-xl mx-auto">
              Suscríbete a la newsletter para recibir recetas exclusivas, descuentos, novedades y lanzamientos antes que nadie.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="flex-1 bg-white border border-[#E8E0D8] rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#2D5F3F] transition-colors"
              />
              <button className="bg-[#2D5F3F] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1A4A2E] transition-all whitespace-nowrap">
                Suscribirme
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-10">
            <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#2D5F3F] hover:bg-[#F4A7C3] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#2D5F3F] hover:bg-[#F4A7C3] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.72a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.15z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#2D5F3F] hover:bg-[#F4A7C3] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44.02c1.26.01 2.08.21 2.81.51.76.31 1.44.78 2.08 1.42.64.64 1.11 1.32 1.42 2.08.3.73.5 1.55.51 2.81.01 1.3.02 2.6.02 3.91v2.8c0 1.31-.01 2.61-.02 3.91-.01 1.26-.21 2.08-.51 2.81-.31.76-.78 1.44-1.42 2.08-.64.64-1.32 1.11-2.08 1.42-.73.3-1.55.5-2.81.51-1.3.01-2.6.02-3.91.02H12.53c-1.31 0-2.61-.01-3.91-.02-1.26-.01-2.08-.21-2.81-.51a5.62 5.62 0 01-2.08-1.42 5.62 5.62 0 01-1.42-2.08c-.3-.73-.5-1.55-.51-2.81C1.79 15.14 1.78 13.84 1.78 12.53v-2.8c0-1.31.01-2.61.02-3.91.01-1.26.21-2.08.51-2.81.31-.76.78-1.44 1.42-2.08A5.62 5.62 0 015.81.53c.73-.3 1.55-.5 2.81-.51C9.92.01 11.22 0 12.53 0zM9.99 7.24v10.52l7.77-5.26L9.99 7.24z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#2D5F3F] hover:bg-[#F4A7C3] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L8.32 13.494l-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.954z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#2D5F3F] hover:bg-[#F4A7C3] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
