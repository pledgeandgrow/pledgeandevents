import React from "react";
import { FaGem } from "react-icons/fa";

const Luxury = () => (
  <section className="py-16 px-4 bg-gray-900 flex flex-col items-center text-center">
    <FaGem className="text-4xl text-cyan-400 mb-4 animate-bounce" />
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Prestations de Luxe</h2>
    <p className="text-gray-300 max-w-xl mb-4">
      Services haut de gamme, partenaires d'exception et expériences uniques pour une clientèle privilégiée.
    </p>
  </section>
);

export default Luxury;
