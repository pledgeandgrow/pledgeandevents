import React from "react";

const eventTypes = [
  {
    title: "Réservations",
    description: "Gestion complète de vos réservations pour tous types d'événements.",
    icon: "🎟️",
  },
  {
    title: "Soirées & Fêtes",
    description: "Organisation de soirées privées, fêtes et événements exclusifs.",
    icon: "🎉",
  },
  {
    title: "Privatisations VIP",
    description: "Privatisation de lieux prestigieux pour une expérience VIP.",
    icon: "🥂",
  },
  {
    title: "Mariages",
    description: "Création de mariages sur-mesure, élégants et inoubliables.",
    icon: "💍",
  },
  {
    title: "Conférences",
    description: "Organisation de conférences professionnelles et séminaires.",
    icon: "🎤",
  },
  {
    title: "Entrepreneuriat & Luxe",
    description: "Événements pour entrepreneurs et univers du luxe.",
    icon: "💼",
  },
];

const EventTypes = () => (
  <section className="event-types py-16 px-4 bg-gray-900">
    <h2 className="text-3xl font-bold text-center mb-10 text-white">Nos Spécialités</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto bg-gray-900 p-4">
      {eventTypes.map((event, idx) => (
        <div key={idx} className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="text-4xl mb-4">{event.icon}</span>
          <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
          <p className="text-gray-300 text-center">{event.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EventTypes;
