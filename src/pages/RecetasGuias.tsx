import { Link } from 'react-router-dom';

const recipes = [
  {
    title: 'Iced Matcha Oat Latte',
    desc: 'Receta cremosa para casa, oficina o post-entreno. Combina matcha ceremonial con leche de avena y hielo para una bebida refrescante y energética.',
    emoji: '🧊',
    time: '3 min',
    difficulty: 'Fácil',
    ingredients: ['2g matcha ceremonial', '100ml agua 70°C', '150ml leche de avena', 'Hielo', '1 cdta sirope de agave (opcional)'],
    steps: ['Tamiza el matcha en un bol', 'Añade agua caliente y bate en W con el chasen', 'Llena un vaso con hielo', 'Vierte la leche de avena', 'Añade el matcha batido por encima', 'Endulza al gusto y disfruta'],
  },
  {
    title: 'Strawberry Cloud Matcha',
    desc: 'Fresa, nube cremosa y matcha intenso en capas. Una bebida visualmente impactante con sabor dulce y refrescante.',
    emoji: '🍓',
    time: '5 min',
    difficulty: 'Fácil',
    ingredients: ['2g matcha ceremonial', '4-5 fresas frescas', '100ml agua 70°C', '100ml leche de coco', 'Hielo', '1 cdta miel'],
    steps: ['Tritura las fresas con un poco de miel', 'Tamiza el matcha y bátelo con agua caliente', 'Llena un vaso con hielo', 'Añade las fresas trituradas en la base', 'Vierte la leche de coco', 'Corona con el matcha batido'],
  },
  {
    title: 'Sparkling Matcha Yuzu Tonic',
    desc: 'Burbuja, cítrico y umami para una bebida premium. Perfecta para ocasiones especiales o cuando quieres algo diferente.',
    emoji: '✨',
    time: '4 min',
    difficulty: 'Media',
    ingredients: ['2g matcha ceremonial', '200ml tónica fría', '1 cda zumo de yuzu (o limón)', 'Hielo', 'Rodaja de yuzu para decorar'],
    steps: ['Tamiza el matcha y disuélvelo con 30ml de agua tibia', 'Llena un vaso alto con hielo', 'Añade el zumo de yuzu', 'Vierte la tónica fría lentamente', 'Añade el matcha disuelto por encima', 'Decora con rodaja de yuzu'],
  },
  {
    title: 'Matcha Latte Clásico',
    desc: 'La base de todo: leche vegetal y matcha ceremonial. Simple, cremoso y reconfortante.',
    emoji: '☕',
    time: '2 min',
    difficulty: 'Fácil',
    ingredients: ['2g matcha ceremonial', '100ml agua 70°C', '150ml leche vegetal', '1 cdta sirope de arce (opcional)'],
    steps: ['Tamiza el matcha en un chawan', 'Añade agua caliente y bate en W', 'Calienta y espuma la leche vegetal', 'Vierte la leche sobre el matcha', 'Añade sirope al gusto'],
  },
  {
    title: 'Matcha Smoothie Bowl',
    desc: 'Bowl energético con frutas y granola. Perfecto para un desayuno completo y nutritivo.',
    emoji: '🥣',
    time: '7 min',
    difficulty: 'Fácil',
    ingredients: ['1 plátano congelado', '2g matcha ceremonial', '100ml leche de almendra', '1 puñado espinacas', 'Toppings: granola, coco, frutas'],
    steps: ['Tritura el plátano con leche, espinacas y matcha', 'Vierte en un bol', 'Decora con granola, coco rallado y frutas', 'Añade semillas de chía si quieres', 'Disfruta inmediatamente'],
  },
];

const guides = [
  {
    title: 'Guía: Temperatura perfecta del agua',
    desc: 'Aprende la temperatura exacta para cada tipo de matcha y cómo afecta al sabor final.',
    emoji: '🌡️',
    time: 'Lectura 5 min',
    content: 'La temperatura del agua es crucial. Para matcha ceremonial: 70-75°C. Para matcha culinario: 80°C. Nunca uses agua hirviendo: quema la hoja y genera amargor. Si no tienes termómetro, hierve el agua y deja reposar 2-3 minutos.',
  },
  {
    title: 'Guía: Diferencia entre grados',
    desc: 'Ceremonial vs culinario: cuándo usar cada uno y cómo elegir el mejor.',
    emoji: '📋',
    time: 'Lectura 4 min',
    content: 'Grado ceremonial: cosecha de primavera, hojas jóvenes, molienda fina. Ideal para usucha y latte. Grado culinario: cosecha posterior, más robusto. Perfecto para smoothies, repostería y recetas cocinadas.',
  },
  {
    title: 'Guía: Conservación del matcha',
    desc: 'Cómo almacenar tu matcha para mantener frescura, color y sabor.',
    emoji: '🏺',
    time: 'Lectura 3 min',
    content: 'Mantén el matcha en un recipiente hermético, lejos de la luz y el calor. Una vez abierto, consúmelo en 1-2 meses. No lo guardes en la nevera (condensación). Un lugar fresco y oscuro es ideal.',
  },
  {
    title: 'Guía: Tu primer ritual matcha',
    desc: 'Todo lo que necesitas saber para tu primera preparación perfecta.',
    emoji: '🎋',
    time: 'Lectura 6 min',
    content: '1. Tamiza 1-2g de matcha. 2. Añade 70ml de agua a 70-80°C. 3. Bate con el chasen en movimiento W (no circular). 4. Hasta que se forme microespuma. 5. Bebe inmediatamente. Consejo: practica la muñeca suelta, no el brazo.',
  },
];

export default function RecetasGuias() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2D5F3F] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-[#F4A7C3] blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#B8D8BA] blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-[#F4A7C3] text-sm tracking-widest uppercase font-medium">Recetas & Guías</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mt-3">
            Aprende a preparar <em className="text-[#B8D8BA]">matcha</em>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Disfruta de sabores y recetas únicas. Explora todas las posibilidades del matcha con nuestras guías paso a paso.
          </p>
        </div>
      </section>

      {/* Recetas */}
      <section className="py-16 md:py-24 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Recetas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Recetas paso a paso
            </h2>
          </div>
          <div className="space-y-8">
            {recipes.map((recipe, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">{recipe.emoji}</span>
                      <div>
                        <span className="text-xs bg-[#B8D8BA] text-[#2D5F3F] px-3 py-1 rounded-full font-medium">{recipe.time}</span>
                        <span className="ml-2 text-xs bg-[#F4A7C3]/20 text-[#E8849F] px-3 py-1 rounded-full font-medium">{recipe.difficulty}</span>
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#1A1A1A]">{recipe.title}</h3>
                    <p className="text-sm text-[#1A1A1A]/60 mt-2">{recipe.desc}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-bold text-[#2D5F3F] text-sm tracking-widest uppercase mb-3">Ingredientes</h4>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ing, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-[#1A1A1A]/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F4A7C3]"></span>
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-bold text-[#2D5F3F] text-sm tracking-widest uppercase mb-3">Preparación</h4>
                    <ol className="space-y-2">
                      {recipe.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#1A1A1A]/70">
                          <span className="w-5 h-5 rounded-full bg-[#2D5F3F] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{j + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guías */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#F4A7C3] font-medium text-sm tracking-widest uppercase">Guías</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Guías y consejos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, i) => (
              <div key={i} className="bg-[#F5F0EB] rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{guide.emoji}</span>
                  <span className="text-xs bg-[#2D5F3F]/10 text-[#2D5F3F] px-3 py-1 rounded-full font-medium">{guide.time}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#1A1A1A]">{guide.title}</h3>
                <p className="text-sm text-[#1A1A1A]/60 mt-2">{guide.desc}</p>
                <div className="mt-4 bg-white rounded-xl p-4">
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">{guide.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Tienda */}
      <section className="py-16 bg-[#B8D8BA] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D5F3F]">
            ¿Listo para preparar tu matcha?
          </h2>
          <p className="mt-4 text-[#2D5F3F]/70 text-lg">
            Todo lo que necesitas para empezar tu ritual está en nuestra tienda.
          </p>
          <Link to="/tienda" className="mt-8 inline-block bg-[#2D5F3F] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1A4A2E] transition-all">
            Ir a la tienda
          </Link>
        </div>
      </section>
    </div>
  );
}
