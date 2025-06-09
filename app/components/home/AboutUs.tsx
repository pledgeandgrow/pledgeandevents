"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaHandshake, FaStar, FaUserTie, FaGem } from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    title: "Expérience",
    description: "Plus de 10 ans d'expérience dans l'événementiel de luxe",
    icon: <FaStar className="text-yellow-400 text-xl" />,
    color: "bg-gradient-to-br from-yellow-500 to-amber-600"
  },
  {
    title: "Discrétion",
    description: "Confidentialité absolue pour nos clients VIP",
    icon: <FaUserTie className="text-blue-400 text-xl" />,
    color: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
  {
    title: "Excellence",
    description: "Un réseau de partenaires triés sur le volet",
    icon: <FaGem className="text-pink-400 text-xl" />,
    color: "bg-gradient-to-br from-pink-500 to-rose-600"
  }
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-500 blur-3xl"></div>
      </div>
      
      <div 
        ref={sectionRef}
        className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="inline-flex items-center justify-center p-4 bg-gray-700 rounded-full mb-8 shadow-lg shadow-cyan-500/10">
          <FaHandshake className="text-5xl text-cyan-400" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Qui Sommes-Nous</h2>
        
        <div className="mb-12 space-y-6">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Fondée par des passionnés d'événementiel, Pledge and Events est une agence dédiée à l'organisation d'événements d'exception. Notre équipe d'experts transforme vos idées en expériences inoubliables.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Nous mettons un point d'honneur à offrir un service sur-mesure et discret, adapté aux exigences les plus élevées. Chaque détail compte pour créer des moments qui vous ressemblent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center mx-auto ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-gray-700 rounded-xl border border-gray-600 shadow-lg">
          <blockquote className="italic text-gray-300 text-lg">
            "Notre mission est de créer des événements qui dépassent vos attentes et laissent une impression durable."
          </blockquote>
          <p className="mt-4 text-white font-semibold">- L'équipe Pledge and Events</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
