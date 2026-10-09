import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2D5F3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-display text-3xl font-bold text-white">
                zenqa<span className="text-[#F4A7C3]">.</span>life
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Premium matcha ceremonial directo de Uji, Kioto. Energía serena, antioxidantes puros y un momento diario de enfoque y calma.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/70 hover:text-[#F4A7C3] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-[#F4A7C3] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.72a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.15z"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-[#F4A7C3] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-[#F4A7C3] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44.02c1.26.01 2.08.21 2.81.51.76.31 1.44.78 2.08 1.42.64.64 1.11 1.32 1.42 2.08.3.73.5 1.55.51 2.81.01 1.3.02 2.6.02 3.91v2.8c0 1.31-.01 2.61-.02 3.91-.01 1.26-.21 2.08-.51 2.81-.31.76-.78 1.44-1.42 2.08-.64.64-1.32 1.11-2.08 1.42-.73.3-1.55.5-2.81.51-1.3.01-2.6.02-3.91.02H12.53c-1.31 0-2.61-.01-3.91-.02-1.26-.01-2.08-.21-2.81-.51a5.62 5.62 0 01-2.08-1.42 5.62 5.62 0 01-1.42-2.08c-.3-.73-.5-1.55-.51-2.81C1.79 15.14 1.78 13.84 1.78 12.53v-2.8c0-1.31.01-2.61.02-3.91.01-1.26.21-2.08.51-2.81.31-.76.78-1.44 1.42-2.08A5.62 5.62 0 015.81.53c.73-.3 1.55-.5 2.81-.51C9.92.01 11.22 0 12.53 0zM9.99 7.24v10.52l7.77-5.26L9.99 7.24z"/></svg>
              </a>
            </div>
          </div>

          {/* Tienda */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Tienda</h3>
            <ul className="space-y-3">
              <li><Link to="/tienda" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Té Matcha</Link></li>
              <li><Link to="/tienda" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Kits de Preparación</Link></li>
              <li><Link to="/tienda" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Tazas & Vasos</Link></li>
              <li><Link to="/tienda" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Accesorios</Link></li>
              <li><Link to="/tienda" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Ropa & Lifestyle</Link></li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Información</h3>
            <ul className="space-y-3">
              <li><Link to="/como-prepararlo" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Cómo Prepararlo</Link></li>
              <li><Link to="/recetas-guias" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Recetas & Guías</Link></li>
              <li><Link to="/nosotros" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Nuestra Historia</Link></li>
              <li><Link to="/contacto" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Política de Envíos</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[#F4A7C3] transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-lg font-bold">Únete al universo Zenqa</h4>
              <p className="text-sm text-white/70 mt-1">Recibe recetas exclusivas, descuentos y novedades antes que nadie.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="bg-white/10 border border-white/20 rounded-l-full px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#F4A7C3] w-full md:w-64"
              />
              <button className="bg-[#F4A7C3] text-white px-6 py-2 rounded-r-full text-sm font-medium hover:bg-[#E8849F] transition-all whitespace-nowrap">
                Suscribirme
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50">
            © 2026 Zenqa Life. Todos los derechos reservados. Matcha ceremonial premium de Uji, Kioto.
          </p>
        </div>
      </div>
    </footer>
  );
}
