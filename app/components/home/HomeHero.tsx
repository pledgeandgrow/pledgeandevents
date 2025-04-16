import React from "react";
import { FaGem } from "react-icons/fa";

const HomeHero = () => (
  <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 px-4 flex flex-col items-center text-center min-h-[60vh]">
    <span className="bg-gray-800 p-5 rounded-full mb-6 animate-pulse shadow-lg">
      <FaGem className="text-5xl text-cyan-400" />
    </span>
    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
      L'art de l'événement d'exception
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
      Pledge and Events organise des événements prestigieux, sur-mesure et inoubliables à Paris et partout en France : mariages, conférences, soirées VIP, et bien plus.
    </p>
    <div className="flex gap-3 flex-wrap justify-center">
      <span className="inline-block bg-gray-800 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium shadow">Prestige</span>
      <span className="inline-block bg-gray-800 text-pink-400 px-4 py-2 rounded-full text-sm font-medium shadow">Sur-mesure</span>
      <span className="inline-block bg-gray-800 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium shadow">Expérience</span>
      <span className="inline-block bg-gray-800 text-green-400 px-4 py-2 rounded-full text-sm font-medium shadow">Discrétion</span>
    </div>
  </section>
);

export default HomeHero;
