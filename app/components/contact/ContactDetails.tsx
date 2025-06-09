"use client";
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaGlobe } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-cyan-400" />,
    label: "Email",
    value: "contact@pledgeandevents.com",
    action: "mailto:contact@pledgeandevents.com"
  },
  {
    icon: <FaPhoneAlt className="text-pink-400" />,
    label: "Téléphone",
    value: "+33 1 23 45 67 89",
    action: "tel:+33123456789"
  },
  {
    icon: <FaMapMarkerAlt className="text-purple-400" />,
    label: "Adresse",
    value: "Paris, France",
    action: "https://maps.google.com/?q=Paris,France"
  },
  {
    icon: <FaClock className="text-yellow-400" />,
    label: "Horaires",
    value: "Lun-Ven: 9h-18h"
  },
  {
    icon: <FaGlobe className="text-green-400" />,
    label: "Site web",
    value: "www.pledgeandevents.com",
    action: "https://www.pledgeandevents.com"
  }
];

const ContactDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-gray-700/50 w-full max-w-md mx-auto mb-8 transform transition-all duration-500">
      <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-3">Nos coordonnées</h3>
      
      <div className="flex flex-col gap-5">
        {contactInfo.map((item, index) => (
          <div 
            key={index}
            className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="bg-gray-700/50 p-3 rounded-full">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-400">{item.label}</p>
              {item.action ? (
                <a 
                  href={item.action} 
                  className="text-gray-200 hover:text-cyan-300 transition-colors"
                  target={item.action.startsWith('http') ? "_blank" : undefined}
                  rel={item.action.startsWith('http') ? "noopener noreferrer" : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-200">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
