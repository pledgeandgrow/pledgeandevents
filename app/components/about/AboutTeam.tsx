"use client";

import React, { useState, useEffect } from "react";
import { FaUserTie, FaLinkedin, FaEnvelope } from "react-icons/fa";

const team = [
  {
    name: "Noah PLA",
    role: "CEO & Founder",
    bio: "Expert en organisation d'événements de luxe avec plus de 10 ans d'expérience dans le secteur. Spécialisé dans les mariages haut de gamme et les événements corporate VIP.",
    avatar: "https://ui-avatars.com/api/?name=Noah+PLA&background=1a202c&color=fff&size=128&rounded=true",
    linkedin: "https://linkedin.com/in/noahpla",
    email: "noah@pledgeandevents.com",
    expertise: ["Événements VIP", "Mariages de luxe", "Relations clients"]
  },
  {
    name: "Mehdi BErel",
    role: "Co-Founder & CTO",
    bio: "Passionné par l'innovation technologique appliquée à l'événementiel. Créateur de solutions numériques pour transformer l'expérience client et optimiser la gestion d'événements.",
    avatar: "https://ui-avatars.com/api/?name=Mehdi+BErel&background=1a202c&color=fff&size=128&rounded=true",
    linkedin: "https://linkedin.com/in/mehdiberel",
    email: "mehdi@pledgeandevents.com",
    expertise: ["Innovation tech", "Expérience digitale", "Gestion de projet"]
  }
];

const AboutTeam = () => {
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
    
    const section = document.getElementById("team-section");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="team-section" className="py-20 px-4 bg-gray-900 flex flex-col items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-full mb-4 inline-block">
            <FaUserTie className="text-3xl text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notre équipe</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Une équipe passionnée d'experts en événementiel, dédiée à la réussite de chaque projet, de la conception à la réalisation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {team.map((member, index) => (
            <div 
              key={member.name} 
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700/50 transition-all duration-700 hover:shadow-cyan-900/20 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mb-4 border-4 border-gray-900 shadow-lg" 
                />
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{member.bio}</p>
                
                <div className="flex gap-3 mb-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <FaLinkedin className="text-white text-sm" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="bg-gray-800 hover:bg-cyan-600 p-2 rounded-full transition-colors duration-300"
                    aria-label={`Email de ${member.name}`}
                  >
                    <FaEnvelope className="text-white text-sm" />
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="inline-block bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`flex flex-wrap gap-4 justify-center mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-700/50 shadow-md">Expérience</span>
          <span className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-700/50 shadow-md">Créativité</span>
          <span className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-700/50 shadow-md">Réseau VIP</span>
          <span className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-700/50 shadow-md">Innovation</span>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
