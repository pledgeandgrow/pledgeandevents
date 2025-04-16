import React from "react";
import { FaRegGem } from "react-icons/fa";

const AboutUs = () => (
  <section className="about-us py-20 px-4 bg-gray-900 flex flex-col items-center" id="about">
    <div className="flex flex-col items-center mb-8 bg-gray-900">
      <span className="bg-gray-800 p-4 rounded-full mb-4 animate-pulse">
        <FaRegGem className="text-4xl text-white" />
      </span>
      <h2 className="text-3xl font-bold text-white mb-4">À propos de Pledge and Events</h2>
      <p className="text-lg text-gray-200 mb-4 max-w-2xl text-center">
        Pledge and Events est une entreprise spécialisée dans l'organisation d'événements de prestige :
        <span className="font-semibold text-white"> réservations, soirées, privatisations VIP, mariages, conférences, événements entrepreneuriaux et de luxe</span>.
      </p>
      <p className="text-gray-400 max-w-2xl text-center mb-6">
        Notre équipe passionnée accompagne ses clients de la conception à la réalisation de chaque événement, garantissant une expérience sur-mesure et inoubliable. Faites confiance à notre expertise pour sublimer vos moments d'exception.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <span className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">Événements sur-mesure</span>
        <span className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">Accompagnement personnalisé</span>
        <span className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">Prestige & Excellence</span>
      </div>
    </div>
  </section>
);

export default AboutUs;
