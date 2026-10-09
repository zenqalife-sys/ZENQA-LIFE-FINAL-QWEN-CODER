import { Link } from 'react-router-dom';
import { useState } from 'react';

const steps = [
  { num: '01', title: 'Tamiza', desc: 'Usa 1-2 g para romper grumos y conseguir una bebida sedosa.', icon: '🫧' },
  { num: '02', title: 'Agua 70-80°C', desc: 'Evita quemar la hoja. Menos temperatura, más dulzor y menos amargor.', icon: '💧' },
  { num: '03', title: 'Bate en W', desc: 'Usa el chasen con muñeca ligera hasta crear microespuma cremosa.', icon: '🎋' },
  { num: '04', title: 'Disfruta', desc: 'Tómalo solo, con hielo o convertido en latte vegetal.', icon: '🍵' },
];

const benefits = [
  { title: 'Energía calmada y enfocada', desc: 'La combinación natural de cafeína y L-teanina ofrece una sensación de energía más estable.', icon: '⚡' },
  { title: 'Sabor umami y color verde intenso', desc: 'Verde vivo, aroma vegetal dulce, polvo fino y una espuma que no parece pesada.', icon: '🌿' },
  { title: 'Perfecto caliente, frío o latte', desc: 'Un iced matcha latte o yuzu tonic entra perfecto antes de entrenar o como bebida funcional.', icon: '🧊' },
  { title: 'Antioxidante natural', desc: 'Bueno para tu cabello, uñas y ayuda a ralentizar el envejecimiento celular.', icon: '✨' },
  { title: 'No causa ansiedad', desc: 'Estimula la mente y relaja el cuerpo. Sin nervios ni bajones.', icon: '🧘' },
  { title: 'Solo 0,20€ por taza', desc: '1 gramo por serving. Energía premium al mejor precio.', icon: '💰' },
];

const coffeeVsMatcha = [
  { aspect: 'Energía', coffee: 'Pico agresivo y bajón', matcha: 'Energía calmada y estable' },
  { aspect: 'Sabor', coffee: 'Amargo e intenso', matcha: 'Umami, dulce y vegetal' },
  { aspect: 'Ritual', coffee: 'Rápido y funcional', matcha: 'Sensorial y estético' },
  { aspect: 'Salud', coffee: 'Puede causar acidez', matcha: 'Antioxidante y nutritivo' },
  { aspect: 'Duración', coffee: '2-3 horas', matcha: '4-6 horas de foco' },
];

const recipes = [
  { title: 'Iced Matcha Oat Latte', desc: 'Receta cremosa para casa, oficina o post-entreno.', emoji: '🧊', time: '3 min' },
  { title: 'Strawberry Cloud Matcha', desc: 'Fresa, nube cremosa y matcha intenso en capas.', emoji: '🍓', time: '5 min' },
  { title: 'Sparkling Matcha Yuzu Tonic', desc: 'Burbuja, cítrico y umami para una bebida premium.', emoji: '✨', time: '4 min' },
  { title: 'Matcha Latte Clásico', desc: 'La base de todo: leche vegetal y matcha ceremonial.', emoji: '☕', time: '2 min' },
  { title: 'Matcha Smoothie Bowl', desc: 'Bowl energético con frutas y granola.', emoji: '🥣', time: '7 min' },
  { title: 'Guía: Temperatura perfecta', desc: 'Aprende la temperatura exacta para cada tipo de matcha.', emoji: '🌡️', time: 'Lectura' },
];

export default function ComoPrepararlo() {
  const [leadEmail, setLeadEmail] = useState('');

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2D5F3F] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#F4A7C3] blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#B8D8BA] blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-[#F4A7C3] text-sm tracking-widest uppercase font-medium">El Ritual</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mt-3">
            Convierte 60 segundos en tu momento preferido
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Una forma simple de cambiar tus mañanas o tardes por un hábito que te aportará la energía que necesitas para tu día a día.
          </p>
        </div>
      </section>

      {/* Energía Limpia */}
      <section className="py-16 md:py-24 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Energía limpia</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Menos ruido, más <em className="text-[#2D5F3F]">intención</em>
            </h2>
            <p className="mt-4 text-[#1A1A1A]/60 text-lg max-w-2xl mx-auto">
              Zenqa Life nace para convertir una bebida funcional en un gesto de identidad. El matcha no compite con tu agenda: entra en ella como una pausa breve, estética y útil.
            </p>
          </div>

          {/* Especificaciones del té */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-16">
            <h3 className="font-display text-2xl font-bold text-[#2D5F3F] mb-6">Especificaciones del Té Matcha</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🌿</div>
                <h4 className="font-bold text-[#1A1A1A]">Origen</h4>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">Uji, Kioto, Japón</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🍃</div>
                <h4 className="font-bold text-[#1A1A1A]">Variedad</h4>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">Camellia Sinensis</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">⚗️</div>
                <h4 className="font-bold text-[#1A1A1A]">Procesado</h4>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">Molido en piedra artesanal</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🌡️</div>
                <h4 className="font-bold text-[#1A1A1A]">Temperatura</h4>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">70-80°C ideal</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">⚖️</div>
                <h4 className="font-bold text-[#1A1A1A]">Dosis</h4>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">1-2g por taza</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-bold text-[#1A1A1A]">Color</h4>
                <p className="text-sm text-[#1A1A1A]/60 mt-1">Verde esmeralda intenso</p>
              </div>
            </div>
          </div>

          {/* 4 pasos */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-10">
              Cuatro pasos que cambian la textura
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <span className="text-[#F4A7C3] font-bold text-sm">{step.num}</span>
                  <h4 className="font-display text-xl font-bold text-[#1A1A1A] mt-1">{step.title}</h4>
                  <p className="text-sm text-[#1A1A1A]/60 mt-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recetas y Guías */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Recetas y guías</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Explora todas las posibilidades del <em className="text-[#2D5F3F]">matcha</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe, i) => (
              <Link to="/recetas-guias" key={i} className="group bg-[#F5F0EB] rounded-2xl p-6 hover:bg-[#B8D8BA]/30 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl">{recipe.emoji}</span>
                  <span className="text-xs bg-[#2D5F3F]/10 text-[#2D5F3F] px-3 py-1 rounded-full font-medium">{recipe.time}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] group-hover:text-[#2D5F3F] transition-colors">{recipe.title}</h3>
                <p className="text-sm text-[#1A1A1A]/60 mt-2">{recipe.desc}</p>
                <span className="mt-3 inline-block text-sm font-medium text-[#F4A7C3] group-hover:underline">Ver receta →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/recetas-guias" className="btn-primary">
              Ver todas las recetas y guías
            </Link>
          </div>
        </div>
      </section>

      {/* Matcha vs Café */}
      <section className="py-16 md:py-24 bg-[#B8D8BA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#2D5F3F] font-medium text-sm tracking-widest uppercase">Matcha vs Café</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D5F3F] mt-2">
              Más foco, menos <em>subida brusca</em>
            </h2>
            <p className="mt-4 text-[#2D5F3F]/70 text-lg max-w-2xl mx-auto">
              El matcha no intenta ser café. Es una forma distinta de activar el día: más ritual, más suavidad, más control sobre cómo quieres sentirte.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg max-w-3xl mx-auto">
            <div className="grid grid-cols-3 bg-[#2D5F3F] text-white text-center py-4">
              <span className="font-bold text-sm">Aspecto</span>
              <span className="font-bold text-sm">☕ Café</span>
              <span className="font-bold text-sm">🍵 Matcha</span>
            </div>
            {coffeeVsMatcha.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-center py-4 px-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F5F0EB]'}`}>
                <span className="font-medium text-sm text-[#1A1A1A]">{row.aspect}</span>
                <span className="text-sm text-[#1A1A1A]/60">{row.coffee}</span>
                <span className="text-sm text-[#2D5F3F] font-medium">{row.matcha}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-24 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Beneficios</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Un <em className="text-[#2D5F3F]">superfood</em> en tu taza
            </h2>
            <p className="mt-4 text-[#1A1A1A]/60 text-lg">Una taza de matcha equivale a 10 tazas de té verde en antioxidantes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-display text-lg font-bold text-[#1A1A1A]">{b.title}</h3>
                <p className="text-sm text-[#1A1A1A]/60 mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arranca con energía */}
      <section className="py-16 md:py-24 bg-[#2D5F3F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F4A7C3] blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Arranca con energía</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 leading-tight">
                Arranca con energía <em className="text-[#B8D8BA]">calmada</em>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Un ritual de mañana funciona cuando es rápido, repetible y agradable. Por eso Zenqa reduce la preparación a una secuencia clara, con herramientas que evitan errores comunes.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌅</span>
                  <div>
                    <h4 className="font-bold">Mañanas</h4>
                    <p className="text-sm text-white/60">Energía serena para empezar el día</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <h4 className="font-bold">Trabajo y estudio</h4>
                    <p className="text-sm text-white/60">Foco sin sensación de subida brusca</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌆</span>
                  <div>
                    <h4 className="font-bold">Tarde</h4>
                    <p className="text-sm text-white/60">El cambio del segundo café</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏋️</span>
                  <div>
                    <h4 className="font-bold">Entrenamiento</h4>
                    <p className="text-sm text-white/60">Frío, rápido y visual</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://image.qwenlm.ai/generated-images/903452e9-3002-4561-80f4-cbf03ac29f70/_result.png" 
                  alt="Iced Matcha Latte" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-gradient-to-r from-[#F4A7C3] to-[#E8849F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-white/80 text-sm tracking-widest uppercase font-medium">📖 Guía Gratuita</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-3">
            Descarga la guía definitiva del Matcha
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Propiedades, beneficios, recetas y consejos para preparar el matcha perfecto. Todo en un PDF gratuito.
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
