import React from "react";
import { FaEnvelopeOpenText, FaArrowRight } from "react-icons/fa";

const ContactCTA = () => (
  <section className="contact-cta bg-gray-900 text-white py-20 px-4 text-center flex flex-col items-center">
    <div className="flex flex-col items-center mb-6">
      <span className="bg-gray-800 p-4 rounded-full mb-4 animate-bounce">
        <FaEnvelopeOpenText className="text-4xl text-white" />
      </span>
      <h2 className="text-3xl font-bold mb-2">Prêt à organiser un événement d'exception ?</h2>
      <p className="text-lg mb-4 text-gray-300 max-w-xl">
        Contactez notre équipe pour discuter de votre projet et recevoir un accompagnement personnalisé. Nous sommes à votre écoute pour transformer vos idées en réalité.
      </p>
      <a href="#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition text-lg group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
        Nous contacter
        <FaArrowRight className="text-gray-900 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
    <span className="text-sm text-gray-500">Réponse rapide assurée !</span>
  </section>
);

export default ContactCTA;
