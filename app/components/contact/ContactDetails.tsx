import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactDetails = () => (
  <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-4 text-left w-full max-w-md mx-auto mb-8">
    <div className="flex items-center gap-2 text-gray-200"><FaEnvelope /> contact@pledgeandevents.com</div>
    <div className="flex items-center gap-2 text-gray-200"><FaPhoneAlt /> +33 1 23 45 67 89</div>
    <div className="flex items-center gap-2 text-gray-200"><FaMapMarkerAlt /> Paris, France</div>
  </div>
);

export default ContactDetails;
