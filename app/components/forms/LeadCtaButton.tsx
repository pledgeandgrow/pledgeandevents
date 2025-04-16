import React from "react";
import { FaPaperPlane } from "react-icons/fa";

interface LeadCtaButtonProps {
  onClick: () => void;
}

const LeadCtaButton: React.FC<LeadCtaButtonProps> = ({ onClick }) => (
  <button
    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white font-medium py-2 px-5 rounded-full shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900 text-base border border-gray-700 opacity-80 hover:opacity-100"
    onClick={onClick}
    aria-label="Demander un devis ou un contact"
    type="button"
  >
    <FaPaperPlane className="text-lg" />
    Demander un devis
  </button>
);

export default LeadCtaButton;
