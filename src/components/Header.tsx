import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/tienda', label: 'TIENDA' },
    { path: '/como-prepararlo', label: 'CÓMO PREPARARLO' },
    { path: '/nosotros', label: 'NOSOTROS' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Banner superior rosa */}
      <div className="bg-[#F4A7C3] text-white py-2 text-center text-sm font-medium tracking-wide">
        ENVÍOS GRATIS A PARTIR DE 35€
      </div>

      {/* Menú sticky */}
      <nav className="nav-sticky bg-[#F5F0EB] border-b border-[#E8E0D8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-display text-2xl md:text-3xl font-bold text-[#2D5F3F]">
                zenqa<span className="text-[#F4A7C3]">.</span>life
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-[#2D5F3F] border-b-2 border-[#F4A7C3] pb-1'
                      : 'text-[#1A1A1A] hover:text-[#2D5F3F]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-[#2D5F3F] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#1A4A2E] transition-all">
                🛒 Carrito (0)
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6 text-[#2D5F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#F5F0EB] border-t border-[#E8E0D8] py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-sm font-medium tracking-wider ${
                  isActive(link.path) ? 'text-[#2D5F3F]' : 'text-[#1A1A1A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="mt-4 w-full bg-[#2D5F3F] text-white px-5 py-2 rounded-full text-sm font-medium">
              🛒 Carrito (0)
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
