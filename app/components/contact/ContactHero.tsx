import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const ContactHero = () => (
  <section className="py-16 px-4 bg-gray-900 flex flex-col items-center text-center">
    <span className="bg-gray-800 p-5 rounded-full mb-6 animate-bounce">
      <FaEnvelopeOpenText className="text-5xl text-green-400" />
    </span>
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Contactez-nous</h1>
    <p className="text-lg text-gray-300 max-w-2xl mb-2">
      Nous sommes à votre écoute pour toute question, demande de devis ou projet événementiel.
    </p>
    <span className="text-sm text-gray-400">Réponse rapide assurée&nbsp;!</span>
  </section>
);

export default ContactHero;
