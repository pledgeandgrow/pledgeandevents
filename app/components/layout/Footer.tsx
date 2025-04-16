import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-gray-900 pt-10 px-4 border-t border-gray-800">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-4">
      {/* Left: Logo and Brand */}
      <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0 flex-1 min-w-[220px]">
        <div className="flex items-center gap-4">
          <Image
            src="/Logo-events-transparent.png"
            alt="Pledge and Events Logo"
            width={56}
            height={56}
            className="drop-shadow-lg"
            priority
          />
          <span className="text-2xl font-bold text-white tracking-tight">Pledge and Events</span>
        </div>
        <span className="text-gray-400 text-sm mt-2">Paris, France</span>
        <span className="text-gray-400 text-sm">Luxe & Excellence</span>
      </div>
      {/* Center: Navigation */}
      <div className="flex flex-col items-center gap-2 flex-1 min-w-[200px]">
        <div className="flex gap-6 text-gray-400 text-base">
          <Link href="/about" className="hover:text-white transition">À propos</Link>
          <Link href="/prestations" className="hover:text-white transition">Prestations</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
      {/* Right: Socials */}
      <div className="flex flex-col items-center md:items-end gap-2 flex-1 min-w-[200px]">
        <div className="flex gap-4 text-gray-400 text-xl">
          <a href="mailto:contact@pledgeandevents.com" className="hover:text-white transition" aria-label="Email"><FaEnvelope /></a>
          <a href="tel:+33123456789" className="hover:text-white transition" aria-label="Téléphone"><FaPhoneAlt /></a>
          <a href="https://instagram.com/pledgeandevents" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://facebook.com/pledgeandevents" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Facebook"><FaFacebookF /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 pt-4 pb-2 text-center">
      <span className="text-xs text-gray-500"> {new Date().getFullYear()} Pledge and Events. Tous droits réservés.</span>
    </div>
  </footer>
);

export default Footer;
