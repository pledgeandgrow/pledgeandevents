import React from "react";
import { FaHandsHelping, FaStar, FaLock } from "react-icons/fa";

const AboutValues = () => (
  <section className="py-16 px-4 bg-gray-900 flex flex-col items-center text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Nos valeurs</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="flex flex-col items-center">
        <span className="bg-gray-800 p-4 rounded-full mb-2"><FaHandsHelping className="text-2xl text-white" /></span>
        <h3 className="text-lg font-semibold text-white mb-1">Accompagnement</h3>
        <p className="text-gray-400 text-center text-sm">Un soutien personnalisé à chaque étape de votre projet.</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="bg-gray-800 p-4 rounded-full mb-2"><FaStar className="text-2xl text-white" /></span>
        <h3 className="text-lg font-semibold text-white mb-1">Excellence</h3>
        <p className="text-gray-400 text-center text-sm">Des prestations haut de gamme pour des événements uniques.</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="bg-gray-800 p-4 rounded-full mb-2"><FaLock className="text-2xl text-white" /></span>
        <h3 className="text-lg font-semibold text-white mb-1">Discrétion</h3>
        <p className="text-gray-400 text-center text-sm">Respect absolu de la confidentialité de nos clients.</p>
      </div>
    </div>
  </section>
);

export default AboutValues;
