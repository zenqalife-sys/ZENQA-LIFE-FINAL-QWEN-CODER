import { useState } from 'react';

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'matcha', label: 'Té Matcha' },
  { id: 'kit', label: 'Kits de Preparación' },
  { id: 'tazas', label: 'Tazas, Vasos & Más' },
  { id: 'merch', label: 'Lifestyle' },
];

const allProducts = [
  { id: 1, name: 'Té Matcha Grado Culinario', price: '19,95€', category: 'matcha', image: '🍵', desc: 'Perfecto para recetas, smoothies y repostería', badge: 'Bestseller' },
  { id: 2, name: 'Té Matcha Grado Ceremonial', price: '29,95€', category: 'matcha', image: '🍃', desc: '54g · Uji premium · Sabor umami intenso', badge: 'Premium' },
  { id: 3, name: 'Tetera de Cristal', price: '24,95€', category: 'tazas', image: '🫖', desc: 'Cristal borosilicato resistente al calor' },
  { id: 4, name: 'Tazas Matcha', price: '18,95€', category: 'tazas', image: '☕', desc: 'Cerámica minimalista para tu ritual diario' },
  { id: 5, name: 'Botella de Cristal', price: '16,95€', category: 'tazas', image: '🧴', desc: 'Cristal premium con tapa de bambú' },
  { id: 6, name: 'Juego de Teteras y Tazas', price: '39,95€', category: 'tazas', image: '🍶', desc: 'Set completo para compartir el ritual' },
  { id: 7, name: 'Kit Básico Matcha', price: '49,95€', category: 'kit', image: '🥄', desc: 'Chawan + Chasen + Chashaku', badge: 'Popular' },
  { id: 8, name: 'Kit Completo de Preparación', price: '79,95€', category: 'kit', image: '🎋', desc: 'Chawan + Chasen + Chashaku + Tamizador + Espumador + Vaso', badge: 'Top Ventas' },
  { id: 9, name: 'Camiseta Matcha Vibes', price: '24,95€', category: 'merch', image: '👕', desc: 'Algodón orgánico 100%' },
  { id: 10, name: 'Sudadera Zenqa', price: '49,95€', category: 'merch', image: '🧥', desc: 'Oversize fit · Bordado premium' },
  { id: 11, name: 'Tote Bag Matcha', price: '19,95€', category: 'merch', image: '👜', desc: 'Canvas ecológico · Diseño exclusivo' },
  { id: 12, name: 'Taza Personalizada', price: '15,95€', category: 'merch', image: '🏺', desc: 'Cerámica con tu nombre o frase' },
  { id: 13, name: 'Vaso Térmico Zenqa', price: '22,95€', category: 'merch', image: '🥤', desc: 'Acero inoxidable · Doble pared' },
  { id: 14, name: 'Vaso de Cristal Matcha', price: '14,95€', category: 'merch', image: '🥛', desc: 'Cristal con pajita de bambú' },
];

export default function Tienda() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [leadEmail, setLeadEmail] = useState('');

  const filteredProducts = activeCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Hero Tienda */}
      <section className="bg-[#2D5F3F] py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white">
            Tienda <span className="text-[#F4A7C3]">Zenqa</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Ritual premium, disfruta tu momento. Packs, accesorios y el mejor té matcha ceremonial.
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="bg-[#F5F0EB] py-6 border-b border-[#E8E0D8] sticky top-[64px] md:top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#2D5F3F] text-white'
                    : 'bg-white text-[#1A1A1A] hover:bg-[#B8D8BA]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de productos */}
      <section className="py-12 md:py-16 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative">
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-[#F4A7C3] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <div className="aspect-square rounded-xl bg-gradient-to-br from-[#B8D8BA]/20 to-[#2D5F3F]/5 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-6xl product-image">{product.image}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] group-hover:text-[#2D5F3F] transition-colors">{product.name}</h3>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">{product.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-[#2D5F3F] text-lg">{product.price}</span>
                  <button className="bg-[#2D5F3F] text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-[#1A4A2E] transition-all">
                    Añadir 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-gradient-to-r from-[#B8D8BA] to-[#B8D8BA]/70">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#2D5F3F] text-sm tracking-widest uppercase font-medium">📖 Guía Gratuita</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2D5F3F] mt-3">
            ¿No sabes por dónde empezar? Descarga nuestra guía
          </h2>
          <p className="mt-4 text-[#2D5F3F]/70 max-w-xl mx-auto">
            Todo lo que necesitas saber sobre el matcha: tipos, preparación, beneficios y recetas.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              placeholder="tu@email.com"
              className="bg-white rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5F3F] w-full"
            />
            <button className="bg-[#2D5F3F] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#1A4A2E] transition-all whitespace-nowrap">
              Descargar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
