import React from "react";
import { FaHeart } from "react-icons/fa";

const Wedding = () => (
  <section className="py-16 px-4 bg-gray-900 flex flex-col items-center text-center border-b border-gray-800">
    <FaHeart className="text-4xl text-pink-400 mb-4 animate-bounce" />
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Mariages de rêve</h2>
    <p className="text-gray-300 max-w-xl mb-4">
      Organisation complète de mariages sur-mesure, du choix du lieu à la coordination du jour J, pour un événement inoubliable.
    </p>
  </section>
);

export default Wedding;
