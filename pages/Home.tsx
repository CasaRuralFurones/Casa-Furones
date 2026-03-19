
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';
import { useTranslation } from '../TranslationContext';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  const galleryImages = [
    { url: "https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Salita%20de%20estar.jpeg", alt: "Salita de estar" },
    { url: "https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/comedor.jpeg", alt: "Comedor" },
    { url: "https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Piscina%20vista%203.jpeg", alt: "Vistas de la piscina" },
    { url: "https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Habitacion%20principal.jpeg", alt: "Habitación principal" },
    { url: "https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Habitacion%203.jpeg", alt: "Dormitorio de invitados" },
    { url: "https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Habitacion%204.jpeg", alt: "Habitación acogedora" },
    { url: "https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Cocina.jpeg", alt: "Cocina equipada" },
    { url: "https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Ducha.jpeg", alt: "Baño moderno" },
  ];

  const travelTimes = [
    { city: "Málaga", time: "55 min", icon: <MapPin className="text-[#8C7B65]" /> },
    { city: "Granada", time: "1 hora", icon: <MapPin className="text-[#8C7B65]" /> },
    { city: "Córdoba", time: "1 hora", icon: <MapPin className="text-[#8C7B65]" /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white px-4">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Porche.jpeg" 
          alt="Porche Casa Rural Furones" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" className="sm:w-[18px]" />)}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            {t('hero_title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-white/90 font-light max-w-2xl mx-auto px-4">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-6 sm:px-0">
            <Link 
              to="/reservar" 
              className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-white text-[#4A5D4E] rounded-full font-bold text-lg hover:bg-gray-100 transition-all text-center"
            >
              {t('hero_btn_book')}
            </Link>
            <Link 
              to="/guia-insider" 
              className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center"
            >
              {t('hero_btn_guide')}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#8C7B65] font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 block text-center lg:text-left">{t('intro_tag')}</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-snug text-center lg:text-left">
                {t('intro_title')}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed text-center lg:text-left">
                {t('intro_p1')}
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed text-center lg:text-left">
                {t('intro_p2')}
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="border-l-4 border-[#4A5D4E] pl-4">
                  <p className="text-2xl sm:text-3xl font-bold serif">12</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Huéspedes Máx.</p>
                </div>
                <div className="border-l-4 border-[#4A5D4E] pl-4">
                  <p className="text-2xl sm:text-3xl font-bold serif">6</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Dormitorios En-Suite</p>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Vista%20dron.jpeg" 
                  alt="Vista aérea Casa Rural Furones" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-16 sm:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-md group">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section - INFOGRAPHIC */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] rounded-[2rem] sm:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="flex-1 p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl text-white font-bold mb-6 serif text-center lg:text-left">{t('location_title')}</h2>
              <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed text-center lg:text-left">
                {t('location_desc')} Ubicados en Villanueva de Algaidas, somos el punto de partida perfecto para el triángulo de oro andaluz.
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-12">
                {travelTimes.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {item.icon}
                      <span className="text-lg sm:text-xl font-bold text-white">{item.city}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#8C7B65]">
                      <Clock size={16} className="sm:w-[18px]" />
                      <span className="font-bold text-sm sm:text-base">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/reservar" 
                className="w-full sm:w-auto inline-block bg-[#8C7B65] text-white px-8 py-4 rounded-full font-bold text-center hover:bg-[#7a6a56] transition-colors shadow-lg"
              >
                Consultar Disponibilidad
              </Link>
            </div>
            <div className="flex-1 relative aspect-video lg:aspect-auto lg:min-h-[500px] bg-[#1A1A1A] flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/5">
              <div className="w-full h-full p-4 sm:p-6 lg:p-10">
                <div className="w-full h-full rounded-2xl sm:rounded-[2rem] overflow-hidden">
                  <img 
                    src="https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Ubicacion%20privilegiada.png" 
                    alt="Mapa Ubicación Privilegiada - Málaga, Granada y Córdoba" 
                    className="w-full h-full object-contain rounded-2xl sm:rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
