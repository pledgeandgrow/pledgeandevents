import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const Conference = () => (
  <section className="py-16 px-4 bg-gray-900 flex flex-col items-center text-center border-b border-gray-800">
    <FaChalkboardTeacher className="text-4xl text-blue-400 mb-4 animate-bounce" />
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Conférences & Séminaires</h2>
    <p className="text-gray-300 max-w-xl mb-4">
      Gestion de conférences, séminaires et ateliers professionnels avec logistique, technique et accueil haut de gamme.
    </p>
  </section>
);

export default Conference;
