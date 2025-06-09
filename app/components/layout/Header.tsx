"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaBars, FaTimes } from "react-icons/fa";

const LeadCtaButton = dynamic(() => import("../forms/LeadCtaButton"));
const LeadCaptureForm = dynamic(() => import("../forms/LeadCaptureForm"));

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`w-full bg-gray-900 shadow-md py-3 md:py-4 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg bg-opacity-95' : ''}`}
    >
      <Link href="/" className="flex items-center gap-2 md:gap-3 group">
        <Image
          src="/Logo-events-transparent.png"
          alt="Pledge and Events Logo"
          width={48}
          height={48}
          className="transition-transform group-hover:scale-105 w-10 h-10 md:w-12 md:h-12"
          priority
        />
        <span className="text-xl md:text-3xl font-bold text-white tracking-tight">Pledge and Events</span>
      </Link>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-200 font-medium items-center">
        <Link href="/about" className="hover:text-white transition hover:scale-105">À propos</Link>
        <Link href="/prestations" className="hover:text-white transition hover:scale-105">Prestations</Link>
        <Link href="/contact" className="hover:text-white transition hover:scale-105">Contact</Link>
        <div className="ml-4">
          <LeadCtaButton onClick={() => setShowForm(true)} />
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 md:hidden flex flex-col pt-20 px-6 animate-fade-in">
          <nav className="flex flex-col items-center gap-8 text-xl text-gray-200 font-medium">
            <Link 
              href="/about" 
              className="hover:text-white transition w-full text-center py-3 border-b border-gray-800"
              onClick={handleLinkClick}
            >
              À propos
            </Link>
            <Link 
              href="/prestations" 
              className="hover:text-white transition w-full text-center py-3 border-b border-gray-800"
              onClick={handleLinkClick}
            >
              Prestations
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-white transition w-full text-center py-3 border-b border-gray-800"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <div className="mt-4 w-full flex justify-center">
              <LeadCtaButton onClick={() => {
                setMobileMenuOpen(false);
                setShowForm(true);
              }} />
            </div>
          </nav>
        </div>
      )}

      {/* Lead Capture Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl p-4 md:p-6 max-w-md w-full relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-full h-8 w-8 flex items-center justify-center"
              onClick={() => setShowForm(false)}
              aria-label="Fermer le formulaire"
            >
              &times;
            </button>
            <LeadCaptureForm />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
