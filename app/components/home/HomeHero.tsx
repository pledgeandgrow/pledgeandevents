"use client";
import React, { useEffect, useState } from "react";
import { FaGem, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-gray-900 py-16 md:py-24 px-4 flex flex-col items-center text-center min-h-[70vh] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pink-500 blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className={`z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <span className="bg-gray-800 p-5 rounded-full mb-6 inline-flex items-center justify-center shadow-lg shadow-cyan-500/20 animate-pulse">
          <FaGem className="text-5xl text-cyan-400" />
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
          L'art de l'événement <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">d'exception</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Pledge and Events organise des événements prestigieux, sur-mesure et inoubliables à Paris et partout en France : mariages, conférences, soirées VIP, et bien plus.
        </p>
        
        <div className="flex gap-3 flex-wrap justify-center mb-10">
          <span className="inline-block bg-gray-800 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-shadow duration-300">Prestige</span>
          <span className="inline-block bg-gray-800 text-pink-400 px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-pink-500/10 hover:shadow-pink-500/30 transition-shadow duration-300">Sur-mesure</span>
          <span className="inline-block bg-gray-800 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-yellow-500/10 hover:shadow-yellow-500/30 transition-shadow duration-300">Expérience</span>
          <span className="inline-block bg-gray-800 text-green-400 px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-green-500/10 hover:shadow-green-500/30 transition-shadow duration-300">Discrétion</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/prestations" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
          >
            Nos prestations
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/contact" 
            className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
