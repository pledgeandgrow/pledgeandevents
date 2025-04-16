import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const AboutCta = () => (
  <section className="py-16 px-4 bg-gray-900 flex flex-col items-center text-center rounded-xl shadow-xl max-w-2xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">Discutons de votre projet</h2>
    <p className="text-lg text-gray-300 mb-8 max-w-xl">
      Notre équipe se tient à votre disposition pour toute question, demande de devis ou conseil personnalisé. Nous répondons rapidement et avec le sourire&nbsp;!
    </p>
    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full mb-4">
      <a href="mailto:contact@pledgeandevents.com" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white px-6 py-3 rounded-full shadow transition text-base font-semibold focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900 border border-gray-700 opacity-80 hover:opacity-100">
        <FaEnvelope /> Email
      </a>
      <a href="tel:+33123456789" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white px-6 py-3 rounded-full shadow transition text-base font-semibold focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900 border border-gray-700 opacity-80 hover:opacity-100">
        <FaPhoneAlt /> +33 1 23 45 67 89
      </a>
      <a href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-green-600 text-gray-200 hover:text-white px-6 py-3 rounded-full shadow transition text-base font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 border border-gray-700 opacity-80 hover:opacity-100">
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
    <span className="text-sm text-gray-400">Nous sommes joignables 7j/7 pour répondre à vos besoins événementiels.</span>
  </section>
);

export default AboutCta;
