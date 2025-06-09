"use client";

import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";
import Link from "next/link";

const AboutCta = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("about-cta-section");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="about-cta-section"
      className="py-20 px-6 bg-gray-900 flex flex-col items-center text-center relative overflow-hidden max-w-4xl mx-auto my-16 rounded-2xl border border-gray-800"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/90"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full inline-block mb-6 shadow-lg shadow-cyan-500/20">
            <FaCalendarCheck className="text-3xl text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Discutons de votre <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">projet</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Notre équipe se tient à votre disposition pour toute question, demande de devis ou conseil personnalisé. Nous répondons rapidement et avec le sourire&nbsp;!
          </p>
        </div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="mailto:contact@pledgeandevents.com" 
            className="flex flex-col items-center gap-3 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-cyan-900/30 hover:to-cyan-800/30 text-gray-200 hover:text-white px-4 py-6 rounded-xl shadow-lg transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/30 group hover:-translate-y-1"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope className="text-xl text-white" />
            </div>
            <span className="font-semibold">Email</span>
            <span className="text-xs text-gray-400 group-hover:text-gray-300">Réponse sous 24h</span>
          </a>
          
          <a 
            href="tel:+33123456789" 
            className="flex flex-col items-center gap-3 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900/30 hover:to-blue-800/30 text-gray-200 hover:text-white px-4 py-6 rounded-xl shadow-lg transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30 group hover:-translate-y-1"
          >
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaPhoneAlt className="text-xl text-white" />
            </div>
            <span className="font-semibold">Téléphone</span>
            <span className="text-xs text-gray-400 group-hover:text-gray-300">+33 1 23 45 67 89</span>
          </a>
          
          <a 
            href="https://wa.me/33123456789" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-3 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-green-900/30 hover:to-green-800/30 text-gray-200 hover:text-white px-4 py-6 rounded-xl shadow-lg transition-all duration-300 border border-gray-700/50 hover:border-green-500/30 group hover:-translate-y-1"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaWhatsapp className="text-xl text-white" />
            </div>
            <span className="font-semibold">WhatsApp</span>
            <span className="text-xs text-gray-400 group-hover:text-gray-300">Réponse rapide</span>
          </a>
          
          <Link 
            href="/contact" 
            className="flex flex-col items-center gap-3 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-purple-900/30 hover:to-purple-800/30 text-gray-200 hover:text-white px-4 py-6 rounded-xl shadow-lg transition-all duration-300 border border-gray-700/50 hover:border-purple-500/30 group hover:-translate-y-1"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaCalendarCheck className="text-xl text-white" />
            </div>
            <span className="font-semibold">Formulaire</span>
            <span className="text-xs text-gray-400 group-hover:text-gray-300">Demande de devis</span>
          </Link>
        </div>
        
        <p className={`text-sm text-gray-400 mt-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Nous sommes joignables <span className="text-white font-medium">7j/7</span> pour répondre à vos besoins événementiels et vous accompagner dans la réalisation de vos projets.
        </p>
      </div>
    </section>
  );
};

export default AboutCta;
