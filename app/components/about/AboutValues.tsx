"use client";
import React, { useState, useEffect } from "react";
import { FaHandsHelping, FaStar, FaLock, FaHeart, FaGem, FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaHandsHelping className="text-3xl text-cyan-400" />,
    title: "Accompagnement",
    description: "Un soutien personnalisé à chaque étape de votre projet, de la conception initiale jusqu'à la réalisation finale. Nous sommes à vos côtés pour vous guider et vous conseiller.",
    color: "cyan"
  },
  {
    icon: <FaStar className="text-3xl text-pink-400" />,
    title: "Excellence",
    description: "Des prestations haut de gamme pour des événements uniques. Nous ne nous contentons jamais de la médiocrité et visons toujours l'excellence dans chaque détail.",
    color: "pink"
  },
  {
    icon: <FaLock className="text-3xl text-purple-400" />,
    title: "Discrétion",
    description: "Respect absolu de la confidentialité de nos clients. Votre vie privée et celle de vos invités sont sacrées pour nous, et nous garantissons une discrétion totale.",
    color: "purple"
  },
  {
    icon: <FaHeart className="text-3xl text-red-400" />,
    title: "Passion",
    description: "Nous mettons notre passion au service de votre événement. C'est cette énergie et cet enthousiasme qui font la différence dans chacune de nos réalisations.",
    color: "red"
  },
  {
    icon: <FaGem className="text-3xl text-amber-400" />,
    title: "Qualité",
    description: "Nous sélectionnons rigoureusement nos partenaires et fournisseurs pour vous garantir des prestations de la plus haute qualité, dignes des standards les plus exigeants.",
    color: "amber"
  },
  {
    icon: <FaThumbsUp className="text-3xl text-green-400" />,
    title: "Fiabilité",
    description: "Nous tenons nos engagements et respectons scrupuleusement les délais. Vous pouvez compter sur nous pour que tout se déroule exactement comme prévu.",
    color: "green"
  },
];

const AboutValues = () => {
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
    
    const section = document.getElementById("values-section");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="values-section" className="py-20 px-4 bg-gray-900 flex flex-col items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos valeurs</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ces principes fondamentaux guident chacune de nos actions et garantissent la qualité exceptionnelle de nos services.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: { 
              transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.3
              } 
            },
            hidden: {}
          }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-${value.color}-900/20 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
            >
              <div className={`bg-gray-800 p-5 rounded-full mb-4 shadow-lg border border-${value.color}-500/20`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-base">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 font-medium text-lg"
          >
            Découvrez notre approche
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValues;
