
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface TranslationContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    nav_home: "Inicio",
    nav_guide: "Guía Insider",
    nav_book: "Reservar",
    hero_title: "Donde el tiempo se detiene y la naturaleza despierta tus sentidos",
    hero_subtitle: "Descubre Casa Rural Furones. Una joya arquitectónica en Villanueva de Algaidas con vistas espectaculares al Olivar.",
    hero_btn_book: "Reservar Directo",
    hero_btn_guide: "Explorar Guía",
    intro_tag: "Experiencia Furones",
    intro_title: "Mucho más que un alojamiento, un retorno a la esencia.",
    intro_p1: "Situada estratégicamente en el corazón de Andalucía (Villanueva de Algaidas, Provincia de Málaga), Casa Rural Furones ofrece un refugio exclusivo para quienes buscan desconectar sin renunciar al confort.",
    location_title: "Ubicación Privilegiada",
    location_desc: "Nuestra ubicación te permite explorar las ciudades más emblemáticas de Andalucía en trayectos cortos.",
    footer_desc: "Un refugio de paz en el corazón de Andalucía. Disfruta de la autenticidad andaluza con todas las comodidades de un alojamiento rural.",
    footer_nav: "Navegación",
    footer_privacy: "Política de Privacidad",
    contact_phone: "+34 695 646 507",
    contact_email: "casaruralfurones@gmail.com"
  },
  en: {
    nav_home: "Home",
    nav_guide: "Insider Guide",
    nav_book: "Book Now",
    hero_title: "Where Silence Meets Luxury",
    hero_subtitle: "Discover Casa Rural Furones. An architectural gem near Villanueva de Algaidas.",
    hero_btn_book: "Direct Booking",
    hero_btn_guide: "Explore Guide",
    intro_tag: "Furones Experience",
    intro_title: "More than just accommodation, a return to the essence.",
    intro_p1: "Strategically located in the heart of Andalusia, near Villanueva de Algaidas, Casa Rural Furones offers an exclusive refuge for those seeking to disconnect without sacrificing comfort.",
    intro_p2: "Our estate combines century-old stone with a warm minimalist interior design, respecting tradition while embracing modernity.",
    location_title: "Privileged Location",
    location_desc: "Our location in Villanueva de Algaidas allows you to explore the most emblematic cities of Andalusia in short trips.",
    footer_desc: "A haven of peace in the heart of Andalusia. Enjoy Andalusian authenticity with all the comforts of a premium accommodation.",
    footer_nav: "Navigation",
    footer_privacy: "Privacy Policy",
    contact_phone: "+34 695 646 507",
    contact_email: "casaruralfurones@gmail.com"
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Using React.FC with an explicit children prop to fix JSX typing issues in consumer files like App.tsx
export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error('useTranslation must be used within a TranslationProvider');
  return context;
};
