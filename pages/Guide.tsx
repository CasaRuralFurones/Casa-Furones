
import React, { useState } from 'react';
import { Compass, Camera, Utensils, Info, Sparkles } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

const Guide: React.FC = () => {
  const categories = [
    { 
      id: 'nature', 
      title: 'Naturaleza', 
      icon: <Compass />, 
      items: [
        { 
          title: 'El Torcal de Antequera', 
          desc: 'Paisaje kárstico único en el mundo con rutas de senderismo impresionantes entre formaciones rocosas milenarias.',
          img: 'https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/el-torcal.jpg'
        },
        { 
          title: 'Caminito del Rey', 
          desc: 'Una experiencia vertiginosa y espectacular por pasarelas colgadas en el Desfiladero de los Gaitanes.',
          img: 'https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Caminito%20del%20rey.jpg'
        }
      ]
    },
    { 
      id: 'culture', 
      title: 'Cultura', 
      icon: <Camera />, 
      items: [
        { 
          title: 'Málaga Centro', 
          desc: 'Explora la calle Larios, el Museo Picasso y la vibrante vida cultural de la capital de la Costa del Sol.',
          img: 'https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/centro-historico-Malaga.png'
        },
        { 
          title: 'Alhambra de Granada', 
          desc: 'El monumento más icónico de España, una joya del arte andalusí a poco más de una hora de la casa.',
          img: 'https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Alhambra.jpg'
        }
      ]
    },
    { 
      id: 'gastronomy', 
      title: 'Gastronomía', 
      icon: <Utensils />, 
      items: [
        { 
          title: 'Porra Antequerana', 
          desc: 'Nuestra variante local del salmorejo, más densa y deliciosa. Un imprescindible de la zona.',
          img: 'https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/porra-antequerana.jpg'
        },
        { 
          title: 'Molletes de Antequera', 
          desc: 'El pan más famoso de Andalucía. Tostado con aceite de oliva virgen extra es el desayuno definitivo.',
          img: 'https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/MOLLETE.jpg'
        }
      ]
    }
  ];

  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const askAssistant = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Eres un experto guía local de Villanueva de Algaidas, Antequera y los Montes de Málaga para Casa Rural Furones. Responde de forma cálida y profesional en español. Pregunta del huésped: ${query}`,
      });
      setAiResponse(response.text || "Lo siento, no he podido generar una respuesta.");
    } catch (error) {
      setAiResponse("Estamos actualizando nuestro asistente local. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 sm:pt-24 bg-white overflow-x-hidden">
      {/* Header */}
      <section className="bg-[#F3F4F1] py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#8C7B65] font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 block">Consejos Locales</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 serif px-2">Guía Insider</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed px-4">
            Hemos seleccionado nuestras experiencias favoritas para que vivas Andalucía como un auténtico local desde Casa Rural Furones.
          </p>
        </div>
      </section>

      {/* Guide Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-20">
          {categories.map((cat) => (
            <div key={cat.id} className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8 sm:mb-10 border-b border-gray-100 pb-6">
                <div className="p-3 sm:p-4 bg-[#4A5D4E] text-white rounded-xl sm:rounded-2xl shadow-lg shadow-[#4A5D4E]/20">
                  {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold serif text-[#1A1A1A]">{cat.title}</h2>
              </div>
              
              <div className="space-y-10 sm:space-y-12 flex-grow">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="aspect-[4/3] bg-gray-100 rounded-2xl sm:rounded-[2rem] mb-6 overflow-hidden shadow-sm transition-all duration-500 md:hover:shadow-xl">
                       <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700" 
                        loading="lazy"
                       />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#1A1A1A] transition-colors">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-base sm:text-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 sm:py-28 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#8C7B65] px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8 shadow-lg shadow-[#8C7B65]/20">
            <Sparkles size={14} className="animate-pulse" /> Asistente Furones AI
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 serif leading-tight">¿Dudas sobre tu itinerario?<br className="hidden sm:block"/> Pregúntanos cualquier cosa.</h2>
          <div className="relative max-w-2xl mx-auto mb-12 sm:mb-16">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ej: ¿Dónde comer el mejor mollete?"
              className="w-full bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2rem] py-5 sm:py-8 px-6 sm:px-10 text-white focus:outline-none focus:ring-2 focus:ring-[#8C7B65] focus:bg-white/10 transition-all text-base sm:text-lg placeholder:text-white/30"
              onKeyPress={(e) => e.key === 'Enter' && askAssistant()}
            />
            <button 
              onClick={askAssistant}
              disabled={loading}
              className="mt-4 sm:mt-0 sm:absolute sm:right-3 sm:top-3 sm:bottom-3 w-full sm:w-auto bg-[#8C7B65] px-8 sm:px-10 py-4 sm:py-0 rounded-2xl sm:rounded-[1.5rem] font-bold hover:bg-[#7a6a56] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : 'Preguntar'}
            </button>
          </div>

          {aiResponse && (
            <div className="bg-white/5 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 text-left border border-white/10 animate-in fade-in slide-in-from-bottom-6 duration-700 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#4A5D4E] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg mx-auto sm:mx-0">
                  <Sparkles size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-200 font-light italic text-center sm:text-left">
                    {aiResponse}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-20 sm:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-xl border border-gray-100">
              <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 serif text-[#1A1A1A]">Información Práctica</h3>
              <ul className="space-y-8 sm:space-y-10">
                <li className="flex gap-4 sm:gap-6 group">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F3F4F1] rounded-lg sm:rounded-xl flex items-center justify-center text-[#8C7B65] transition-all">
                    <Info size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="font-bold text-lg sm:text-xl block mb-1 sm:mb-2 text-[#1A1A1A]">Check-in / Check-out</span>
                    <span className="text-gray-500 text-sm sm:text-lg">Entrada a partir de las 16:00. Salida antes de las 11:00.</span>
                  </div>
                </li>
                <li className="flex gap-4 sm:gap-6 group">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F3F4F1] rounded-lg sm:rounded-xl flex items-center justify-center text-[#8C7B65] transition-all">
                    <Info size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="font-bold text-lg sm:text-xl block mb-1 sm:mb-2 text-[#1A1A1A]">Supermercados</span>
                    <span className="text-gray-500 text-sm sm:text-lg">Villanueva de Algaidas dispone de tiendas locales. Antequera (20 min) para grandes superficies.</span>
                  </div>
                </li>
                <li className="flex gap-4 sm:gap-6 group">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F3F4F1] rounded-lg sm:rounded-xl flex items-center justify-center text-[#8C7B65] transition-all">
                    <Info size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="font-bold text-lg sm:text-xl block mb-1 sm:mb-2 text-[#1A1A1A]">Acceso y Transporte</span>
                    <span className="text-gray-500 text-sm sm:text-lg">Recomendamos vehículo propio. El acceso rural está bien mantenido.</span>
                  </div>
                </li>
              </ul>
            </div>
            {/* Optimized Drone Image to fix horizontal scroll */}
            <div className="flex justify-center md:block">
              <div className="rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl relative w-[318px] h-[238.5px] md:w-full md:h-auto md:aspect-auto min-h-0 md:min-h-[500px]">
                 <img 
                  src="https://raw.githubusercontent.com/rabino888/images/refs/heads/main/Casa%20furones/Vista%20dron.jpeg" 
                  alt="Vistas aéreas del entorno" 
                  className="w-full h-full object-cover" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
