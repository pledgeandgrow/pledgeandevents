"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelopeOpenText, FaComments, FaHeadset } from "react-icons/fa";

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [
    <FaEnvelopeOpenText key="envelope" className="text-5xl text-cyan-400" />,
    <FaComments key="comments" className="text-5xl text-pink-400" />,
    <FaHeadset key="headset" className="text-5xl text-purple-400" />
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate icons every 3 seconds
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 3000);
    
    return () => clearInterval(iconInterval);
  }, [icons.length]);

  return (
    <section className="py-16 px-4 sm:py-20 bg-gray-900 flex flex-col items-center text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pink-500 blur-3xl"></div>
      </div>
      
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-1 rounded-full mb-8 inline-flex">
          <span className="bg-gray-800 p-5 rounded-full inline-flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-all duration-500">
            {icons[currentIcon]}
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Contactez</span>-nous
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          Nous sommes à votre écoute pour toute question, demande de devis ou projet événementiel sur mesure.
        </p>
        
        <div className="inline-flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full text-sm text-cyan-300 font-medium mt-2 shadow-inner">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          Réponse rapide assurée sous 24h !
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
