"use client";
import React, { useState, useEffect } from "react";
import { FaRegGem, FaStar, FaGlassCheers, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 px-4 bg-gray-900 flex flex-col items-center text-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-full mb-8 shadow-lg inline-block"
          variants={itemVariants}
        >
          <FaRegGem className="text-5xl text-cyan-400" />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
          variants={itemVariants}
        >
          À propos de <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">Pledge and Events</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Depuis notre création, nous sommes spécialisés dans l&apos;organisation d&apos;événements de prestige qui transforment vos rêves en réalités mémorables. Notre expertise couvre un large éventail d&apos;occasions, des mariages somptueux aux conférences professionnelles, en passant par les privatisations VIP, les soirées exclusives et les événements entrepreneuriaux.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-cyan-900/20 transition-all duration-300 hover:-translate-y-1">
            <FaStar className="text-3xl text-cyan-400 mb-3 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Luxe</h3>
            <p className="text-gray-400 text-sm">Des prestations haut de gamme pour des événements d&apos;exception.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-pink-900/20 transition-all duration-300 hover:-translate-y-1">
            <FaGlassCheers className="text-3xl text-pink-400 mb-3 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Sur-mesure</h3>
            <p className="text-gray-400 text-sm">Chaque événement est unique, conçu selon vos désirs spécifiques.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-yellow-900/20 transition-all duration-300 hover:-translate-y-1">
            <FaAward className="text-3xl text-yellow-400 mb-3 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Expérience</h3>
            <p className="text-gray-400 text-sm">Une équipe chevronnée avec des années d&apos;expertise événementielle.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-green-900/20 transition-all duration-300 hover:-translate-y-1">
            <FaRegGem className="text-3xl text-green-400 mb-3 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Discrétion</h3>
            <p className="text-gray-400 text-sm">Confidentialité absolue pour tous nos clients et leurs invités.</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-lg text-gray-300 font-light italic max-w-2xl mx-auto mt-8 border-t border-gray-800 pt-6"
          variants={itemVariants}
        >
          <p>&quot;L&apos;excellence événementielle, portée par la passion et le souci du détail.&quot;</p>
          <p className="text-sm text-gray-500 mt-2">— L&apos;équipe Pledge and Events</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
