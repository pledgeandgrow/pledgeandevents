"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const LeadCtaButton = dynamic(() => import("../forms/LeadCtaButton"));
const LeadCaptureForm = dynamic(() => import("../forms/LeadCaptureForm"));

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <header className="w-full bg-gray-900 shadow-md py-4 px-8 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/Logo-events-transparent.png"
          alt="Pledge and Events Logo"
          width={64}
          height={64}
          className="transition-transform group-hover:scale-105"
          priority
        />
        <span className="text-3xl font-bold text-white tracking-tight">Pledge and Events</span>
      </Link>
      <nav className="flex gap-6 text-gray-200 font-medium items-center">
        <Link href="/about" className="hover:text-white transition">À propos</Link>
        <Link href="/prestations" className="hover:text-white transition">Prestations</Link>
        <Link href="/contact" className="hover:text-white transition">Contact</Link>
        <div className="ml-4">
          <LeadCtaButton onClick={() => setShowForm(true)} />
        </div>
      </nav>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl shadow-2xl p-6 max-w-md w-full relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
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
