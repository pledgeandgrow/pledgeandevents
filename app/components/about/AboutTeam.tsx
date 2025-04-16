import React from "react";
import { FaUserTie } from "react-icons/fa";

const team = [
  {
    name: "Noah PLA",
    role: "CEO",
    avatar: "https://ui-avatars.com/api/?name=Noah+PLA&background=1a202c&color=fff&size=128&rounded=true",
  },
  {
    name: "Mehdi BErel",
    role: "Founder & CTO",
    avatar: "https://ui-avatars.com/api/?name=Mehdi+BErel&background=1a202c&color=fff&size=128&rounded=true",
  },
];

const AboutTeam = () => (
  <section className="py-16 px-4 bg-gray-900 flex flex-col items-center text-center">
    <span className="bg-gray-800 p-4 rounded-full mb-4">
      <FaUserTie className="text-3xl text-white" />
    </span>
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Notre équipe</h2>
    <p className="text-gray-300 max-w-xl mb-8">
      Une équipe passionnée d'experts en événementiel, dédiée à la réussite de chaque projet, de la conception à la réalisation.
    </p>
    <div className="flex flex-wrap gap-8 justify-center mb-8">
      {team.map((member) => (
        <div key={member.name} className="flex flex-col items-center bg-gray-800 rounded-xl p-6 shadow-md min-w-[180px]">
          <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-full mb-3 border-4 border-gray-900 shadow" />
          <div className="text-lg font-semibold text-white">{member.name}</div>
          <div className="text-gray-400 text-sm mb-2">{member.role}</div>
        </div>
      ))}
    </div>
    <div className="flex flex-wrap gap-4 justify-center">
      <span className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-medium">Expérience</span>
      <span className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-medium">Créativité</span>
      <span className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-medium">Réseau VIP</span>
    </div>
  </section>
);

export default AboutTeam;
