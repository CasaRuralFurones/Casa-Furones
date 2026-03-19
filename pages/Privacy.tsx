
import React from 'react';
import { Shield } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Shield className="mx-auto text-[#8C7B65] mb-6" size={48} />
          <h1 className="text-4xl font-bold serif mb-4">Política de Privacidad</h1>
          <p className="text-gray-500 italic uppercase tracking-widest text-sm">Última actualización: Mayo 2024</p>
        </div>

        <div className="prose prose-lg text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] serif mb-4">1. Identificación del Titular</h2>
            <p>
              El titular del sitio web es Casa Rural Furones, con domicilio en Villanueva de Algaidas, Málaga, España. 
              Correo electrónico de contacto: casaruralfurones@gmail.com. Teléfono: +34 695 646 507.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] serif mb-4">2. Finalidad del Tratamiento</h2>
            <p>
              Los datos personales facilitados a través de nuestro formulario de reserva o contacto serán tratados con el fin de gestionar su estancia, 
              responder a sus consultas y enviarle información relevante sobre su reserva.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] serif mb-4">3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es el consentimiento del usuario al enviar el formulario y la ejecución del contrato de alojamiento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] serif mb-4">4. Conservación de Datos</h2>
            <p>
              Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recabados, y mientras existan obligaciones legales derivadas de la prestación de servicios turísticos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A1A1A] serif mb-4">5. Derechos del Usuario</h2>
            <p>
              Usted tiene derecho a acceder, rectificar, suprimir sus datos, así como otros derechos detallados en la normativa vigente, enviando un correo a casaruralfurones@gmail.com adjuntando copia de su DNI.
            </p>
          </section>

          <section className="bg-[#FAF9F6] p-8 rounded-2xl border-l-4 border-[#8C7B65]">
            <p className="italic mb-0">
              En Casa Rural Furones nos tomamos muy en serio su privacidad. Utilizamos sistemas de encriptación estándar para proteger sus datos durante el proceso de reserva directa.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
