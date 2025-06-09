"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaEnvelopeOpenText, FaArrowRight, FaPhone, FaCalendarCheck } from "react-icons/fa";
import Link from "next/link";

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="contact-cta relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 text-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-8 shadow-lg shadow-cyan-500/20">
          <FaEnvelopeOpenText className="text-4xl text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Prêt à organiser un <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">événement d'exception</span> ?
        </h2>
        
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Contactez notre équipe pour discuter de votre projet et recevoir un accompagnement personnalisé. 
          Nous sommes à votre écoute pour transformer vos idées en réalité.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group w-64 justify-center"
          >
            Nous contacter
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/prestations" 
            className="inline-flex items-center gap-2 bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700 w-64 justify-center"
          >
            Nos prestations
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-gray-300">
          <div className="flex items-center gap-2">
            <FaPhone className="text-cyan-400" />
            <span>+33 (0)1 23 45 67 89</span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-gray-700"></div>
          
          <div className="flex items-center gap-2">
            <FaCalendarCheck className="text-cyan-400" />
            <span>Réponse sous 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
