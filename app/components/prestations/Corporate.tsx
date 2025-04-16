import React from "react";
import { FaBuilding } from "react-icons/fa";

const Corporate = () => (
  <section className="py-16 px-4 bg-gray-900 flex flex-col items-center text-center border-b border-gray-800">
    <FaBuilding className="text-4xl text-green-400 mb-4 animate-bounce" />
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Événements Corporate</h2>
    <p className="text-gray-300 max-w-xl mb-4">
      Organisation de lancements de produits, team buildings et événements d'entreprise pour renforcer la cohésion et l'image de marque.
    </p>
  </section>
);

export default Corporate;
