import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2D5F3F] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#F4A7C3] blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-[#F4A7C3] text-sm tracking-widest uppercase font-medium">Contacto</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mt-3">
            Hablemos
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            ¿Tienes alguna pregunta sobre nuestros productos, pedidos o colaboraciones? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Formulario e info */}
      <section className="py-16 md:py-24 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-[#1A1A1A]">
                ¿Cómo podemos ayudarte?
              </h2>
              <p className="mt-4 text-[#1A1A1A]/70 text-lg leading-relaxed">
                Rellena el formulario y te responderemos en menos de 24 horas. También puedes escribirnos directamente a nuestro email.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5F3F] flex items-center justify-center text-white text-xl">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">Email</h4>
                    <p className="text-sm text-[#1A1A1A]/60">hola@zenqalife.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5F3F] flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">Ubicación</h4>
                    <p className="text-sm text-[#1A1A1A]/60">Madrid, España</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5F3F] flex items-center justify-center text-white text-xl">
                    ⏰
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">Horario</h4>
                    <p className="text-sm text-[#1A1A1A]/60">Lun-Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-display text-lg font-bold text-[#1A1A1A]">Preguntas frecuentes</h4>
                <div className="mt-4 space-y-3">
                  <div className="border-b border-[#E8E0D8] pb-3">
                    <p className="font-medium text-sm text-[#1A1A1A]">¿Cuánto tarda el envío?</p>
                    <p className="text-xs text-[#1A1A1A]/60 mt-1">2-5 días laborables. Envío gratis desde 35€.</p>
                  </div>
                  <div className="border-b border-[#E8E0D8] pb-3">
                    <p className="font-medium text-sm text-[#1A1A1A]">¿Puedo devolver un producto?</p>
                    <p className="text-xs text-[#1A1A1A]/60 mt-1">Sí, tienes 14 días para devoluciones sin abrir.</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[#1A1A1A]">¿El matcha es orgánico?</p>
                    <p className="text-xs text-[#1A1A1A]/60 mt-1">Sí, 100% orgánico y certificado de Uji, Japón.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="font-display text-2xl font-bold text-[#2D5F3F]">¡Mensaje enviado!</h3>
                    <p className="mt-4 text-[#1A1A1A]/60">Te responderemos en menos de 24 horas. ¡Gracias por escribirnos!</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                      className="mt-6 text-[#F4A7C3] font-medium hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-6">Envíanos un mensaje</h3>
                    
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Nombre</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-[#E8E0D8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F3F] transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-[#E8E0D8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F3F] transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Asunto</label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full border border-[#E8E0D8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F3F] transition-colors bg-white"
                        >
                          <option value="">Selecciona un asunto</option>
                          <option value="pedido">Consulta sobre pedido</option>
                          <option value="producto">Información de producto</option>
                          <option value="devolucion">Devolución</option>
                          <option value="colaboracion">Colaboración</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Mensaje</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full border border-[#E8E0D8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D5F3F] transition-colors resize-none"
                          placeholder="Escribe tu mensaje aquí..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#2D5F3F] text-white py-3 rounded-full font-medium hover:bg-[#1A4A2E] transition-all"
                      >
                        Enviar mensaje
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
