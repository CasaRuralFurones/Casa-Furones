
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { useTranslation } from '../TranslationContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const showSolid = isScrolled || !isHomePage;

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_guide'), path: '/guia-insider' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${showSolid ? 'bg-white/98 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center group">
            <span className={`text-xl sm:text-2xl font-bold tracking-tighter serif transition-colors ${showSolid ? 'text-[#4A5D4E]' : 'text-white'}`}>
              Furones
            </span>
            <span className={`text-[8px] sm:text-[10px] uppercase tracking-widest transition-colors ${showSolid ? 'text-[#8C7B65]' : 'text-white/80'}`}>
              Casa Rural · Málaga
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#8C7B65] ${
                  isActive(link.path) 
                    ? (showSolid ? 'text-[#8C7B65]' : 'text-white border-b border-white/30') 
                    : (showSolid ? 'text-[#4A5D4E]' : 'text-white/90')
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border transition-all ${
                showSolid 
                ? 'border-[#4A5D4E] text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white' 
                : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Globe size={14} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <Link
              to="/reservar"
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                showSolid 
                  ? 'bg-[#4A5D4E] text-white hover:bg-[#3D4D40]' 
                  : 'bg-white text-[#4A5D4E] hover:bg-white/90 shadow-xl'
              }`}
            >
              {t('nav_book')} <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className={`${showSolid ? 'text-[#4A5D4E]' : 'text-white'} text-sm font-bold flex items-center gap-1.5 px-2 py-1`}
            >
              <Globe size={16} /> {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${showSolid ? 'text-[#4A5D4E]' : 'text-white'} p-1`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 border-t border-gray-100">
          <div className="px-6 pt-4 pb-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-5 text-xl font-medium border-b border-gray-50 transition-colors ${isActive(link.path) ? 'text-[#8C7B65]' : 'text-[#4A5D4E]'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservar"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full text-center py-5 bg-[#4A5D4E] text-white rounded-2xl text-lg font-bold shadow-lg flex items-center justify-center gap-2"
            >
              {t('nav_book')} <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
