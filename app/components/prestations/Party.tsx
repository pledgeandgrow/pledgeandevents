import React from "react";
import { FaGlassCheers } from "react-icons/fa";

const Party = () => (
  <section className="py-16 px-4 bg-gray-900 flex flex-col items-center text-center border-b border-gray-800">
    <FaGlassCheers className="text-4xl text-purple-400 mb-4 animate-bounce" />
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Soirées & Fêtes</h2>
    <p className="text-gray-300 max-w-xl mb-4">
      Création et animation de soirées privées, fêtes d'entreprise ou anniversaires dans une ambiance festive et raffinée.
    </p>
  </section>
);

export default Party;
