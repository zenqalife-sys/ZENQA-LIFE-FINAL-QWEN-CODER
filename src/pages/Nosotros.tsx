import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nosotros() {
  const [leadEmail, setLeadEmail] = useState('');

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2D5F3F] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#F4A7C3] blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-[#B8D8BA] blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-[#F4A7C3] text-sm tracking-widest uppercase font-medium">Nuestra historia</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mt-3">
            Nacidos en las colinas de <em className="text-[#B8D8BA]">Uji</em>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Zenqa Life une origen japonés, estética disruptiva y bienestar moderno. No vendemos solo polvo verde: vendemos un momento diario de enfoque, calma y elegancia.
          </p>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="py-16 md:py-24 bg-[#F5F0EB]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Manifiesto</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] mt-4 leading-tight">
            Menos ruido, más <em className="text-[#2D5F3F]">intención</em>
          </h2>
          <p className="mt-6 text-[#1A1A1A]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Zenqa Life nace para convertir una bebida funcional en un gesto de identidad. El matcha no compite con tu agenda: entra en ella como una pausa breve, estética y útil.
          </p>
          <p className="mt-4 text-[#1A1A1A]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Respetamos el origen japonés sin convertir el ritual en algo inaccesible. Queremos una rutina moderna, estética, rápida y fácil de repetir. Premium sin solemnidad.
          </p>
        </div>
      </section>

      {/* La calidad del té */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Calidad</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
                Recogido en <em className="text-[#2D5F3F]">Uji</em>, Kioto
              </h2>
              <p className="mt-6 text-[#1A1A1A]/70 text-lg leading-relaxed">
                Uji representa paciencia, sombra, molienda lenta y respeto por la hoja. La región de Uji en Kioto es reconocida mundialmente como la cuna del mejor té matcha del mundo. Sus campos, cubiertos durante semanas antes de la cosecha, producen hojas con una concentración excepcional de aminoácidos y clorofila.
              </p>
              <p className="mt-4 text-[#1A1A1A]/70 text-lg leading-relaxed">
                Nuestro matcha se cosecha a mano una vez al año, en mayo, y se muele en piedra de forma artesanal. El resultado: un polvo verde esmeralda de textura sedosa, sabor umami dulce y aroma vegetal fresco.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-[#F5F0EB] rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <p className="text-sm font-bold text-[#2D5F3F]">100% Orgánico</p>
                </div>
                <div className="bg-[#F5F0EB] rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🇯🇵</div>
                  <p className="text-sm font-bold text-[#2D5F3F]">Origen Japón</p>
                </div>
                <div className="bg-[#F5F0EB] rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">⚗️</div>
                  <p className="text-sm font-bold text-[#2D5F3F]">Molienda en piedra</p>
                </div>
                <div className="bg-[#F5F0EB] rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🤲</div>
                  <p className="text-sm font-bold text-[#2D5F3F]">Cosecha manual</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://image.qwenlm.ai/generated-images/f7525205-18c8-4c0c-aab9-3649f1dbc18d/_result.png" 
                  alt="Campos de té en Uji, Kioto" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D5F3F]/60 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white font-display text-2xl font-bold">Campos de Uji</p>
                    <p className="text-white/70 text-sm mt-1">Kioto, Japón</p>
                    <div className="mt-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                      <p className="text-white/90 text-sm italic">"La sombra crea la perfección"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#F4A7C3] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center font-bold shadow-lg">
                <span className="text-xs">DESDE</span>
                <span className="text-lg">1987</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-16 md:py-24 bg-[#B8D8BA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#2D5F3F] font-medium text-sm tracking-widest uppercase">Filosofía</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D5F3F] mt-2">
              Premium sin <em>solemnidad</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-display text-xl font-bold text-[#1A1A1A]">Foco</h3>
              <p className="text-sm text-[#1A1A1A]/60 mt-2">Energía calmada y concentrada para tu día. Sin nervios, sin bajones.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-display text-xl font-bold text-[#1A1A1A]">Estética</h3>
              <p className="text-sm text-[#1A1A1A]/60 mt-2">Diseño disruptivo que convierte el ritual en un momento visual.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-display text-xl font-bold text-[#1A1A1A]">Comunidad</h3>
              <p className="text-sm text-[#1A1A1A]/60 mt-2">Recetas, contenido, colaboraciones y lifestyle. Zenqa es una forma de vivir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="py-16 md:py-24 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Herramientas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Chawan, chasen, chashaku y <em className="text-[#2D5F3F]">tamizador</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-5xl mb-4">🍵</div>
              <h4 className="font-display text-lg font-bold text-[#1A1A1A]">Chawan</h4>
              <p className="text-sm text-[#1A1A1A]/60 mt-2">Espacio para batir sin salpicar</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-5xl mb-4">🎋</div>
              <h4 className="font-display text-lg font-bold text-[#1A1A1A]">Chasen</h4>
              <p className="text-sm text-[#1A1A1A]/60 mt-2">Espuma fina y textura cremosa</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-5xl mb-4">🥄</div>
              <h4 className="font-display text-lg font-bold text-[#1A1A1A]">Chashaku</h4>
              <p className="text-sm text-[#1A1A1A]/60 mt-2">Dosis elegante y constante</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-5xl mb-4">🫧</div>
              <h4 className="font-display text-lg font-bold text-[#1A1A1A]">Tamizador</h4>
              <p className="text-sm text-[#1A1A1A]/60 mt-2">Cero grumos en segundos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Contacto */}
      <section className="py-16 md:py-24 bg-[#2D5F3F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            ¿Quieres saber más sobre nosotros?
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
          </p>
          <Link to="/contacto" className="mt-8 inline-block bg-[#F4A7C3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#E8849F] transition-all">
            Contactar
          </Link>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-gradient-to-r from-[#F4A7C3] to-[#E8849F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-white/80 text-sm tracking-widest uppercase font-medium">📖 Guía Gratuita</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-3">
            Descubre todo sobre el mundo del Matcha
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Propiedades, beneficios, recetas y consejos. Descarga nuestra guía exclusiva.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              placeholder="tu@email.com"
              className="bg-white rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white w-full"
            />
            <button className="bg-[#2D5F3F] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#1A4A2E] transition-all whitespace-nowrap">
              Descargar Gratis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
