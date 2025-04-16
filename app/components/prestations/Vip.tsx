import React from "react";
import { FaCrown } from "react-icons/fa";

const Vip = () => (
  <section className="py-16 px-4 bg-gray-900 flex flex-col items-center text-center border-b border-gray-800">
    <FaCrown className="text-4xl text-yellow-400 mb-4 animate-bounce" />
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Événements VIP</h2>
    <p className="text-gray-300 max-w-xl mb-4">
      Privatisations exclusives, soirées de prestige et événements sur invitation pour une clientèle exigeante.
    </p>
  </section>
);

export default Vip;
