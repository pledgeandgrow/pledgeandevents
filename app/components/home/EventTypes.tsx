"use client";
import React, { useEffect, useRef, useState } from "react";

const eventTypes = [
  {
    title: "Réservations",
    description: "Gestion complète de vos réservations pour tous types d&apos;événements.",
    icon: "🎟️",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Soirées & Fêtes",
    description: "Organisation de soirées privées, fêtes et événements exclusifs.",
    icon: "🎉",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Privatisations VIP",
    description: "Privatisation de lieux prestigieux pour une expérience VIP.",
    icon: "🥂",
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Mariages",
    description: "Création de mariages sur-mesure, élégants et inoubliables.",
    icon: "💍",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Conférences",
    description: "Organisation de conférences professionnelles et séminaires.",
    icon: "🎤",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Entrepreneuriat & Luxe",
    description: "Événements pour entrepreneurs et univers du luxe.",
    icon: "💼",
    color: "from-green-500 to-emerald-500",
  },
];

const EventTypes = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start revealing items with a staggered delay
          eventTypes.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 150); // 150ms delay between each item
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="event-types py-16 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-pink-500 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Nos Spécialités</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg">
          Découvrez notre expertise dans l&apos;organisation d&apos;événements d&apos;exception
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto p-4">
          {eventTypes.map((event, idx) => (
            <div 
              key={idx} 
              className={`bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-700 ${visibleItems.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className={`w-16 h-16 rounded-full mb-5 flex items-center justify-center bg-gradient-to-br ${event.color} shadow-lg`}>
                <span className="text-3xl">{event.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{event.title}</h3>
              <p className="text-gray-300 text-center">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
