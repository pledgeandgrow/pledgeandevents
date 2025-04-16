import React from "react";
import { FaRegGem } from "react-icons/fa";

const AboutHero = () => (
  <section className="py-20 px-4 bg-gray-900 flex flex-col items-center text-center">
    <span className="bg-gray-800 p-5 rounded-full mb-6 animate-pulse shadow-lg">
      <FaRegGem className="text-5xl text-cyan-400" />
    </span>
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
      À propos de Pledge and Events
    </h1>
    <p className="text-lg text-gray-300 max-w-2xl mb-2">
      Nous sommes spécialisés dans l'organisation d'événements de prestige : mariages, conférences, privatisations VIP, soirées, et événements entrepreneuriaux.
    </p>
    <div className="flex gap-3 flex-wrap justify-center mb-2">
      <span className="inline-block bg-gray-800 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium shadow">Luxe</span>
      <span className="inline-block bg-gray-800 text-pink-400 px-4 py-2 rounded-full text-sm font-medium shadow">Sur-mesure</span>
      <span className="inline-block bg-gray-800 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium shadow">Expérience</span>
      <span className="inline-block bg-gray-800 text-green-400 px-4 py-2 rounded-full text-sm font-medium shadow">Discrétion</span>
    </div>
    <span className="text-sm text-gray-400">L'excellence événementielle, portée par la passion.</span>
  </section>
);

export default AboutHero;
