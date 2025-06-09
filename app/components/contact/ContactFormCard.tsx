"use client";
import React, { useState, useEffect } from "react";
import LeadCaptureForm from "../forms/LeadCaptureForm";
import { FaPaperPlane } from "react-icons/fa";

const ContactFormCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 shadow-xl border border-gray-700/50 w-full max-w-md mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
        <h3 className="text-xl font-bold text-white">Envoyez-nous un message</h3>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-full">
          <FaPaperPlane className="text-white" />
        </div>
      </div>
      
      <LeadCaptureForm />
      
      <p className="text-xs text-gray-400 mt-6 text-center">
        Nous respectons votre vie privée et ne partagerons jamais vos informations.
      </p>
    </div>
  );
};

export default ContactFormCard;
