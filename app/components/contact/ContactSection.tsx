"use client";
import React from "react";
import ContactHero from "./ContactHero";
import ContactDetails from "./ContactDetails";
import ContactFormCard from "./ContactFormCard";

const ContactSection = () => (
  <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 flex flex-col items-center min-h-[80vh] relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cyan-500/30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-pink-500/30 blur-3xl"></div>
    </div>
    
    <div className="relative z-10 w-full">
      <ContactHero />
      
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch w-full max-w-5xl mx-auto mt-8 px-4">
        <div className="w-full lg:w-2/5">
          <ContactDetails />
        </div>
        <div className="w-full lg:w-3/5">
          <ContactFormCard />
        </div>
      </div>
      
      {/* Map section */}
      <div className="w-full max-w-5xl mx-auto mt-16 rounded-xl overflow-hidden shadow-xl border border-gray-700/50 h-64 sm:h-80 md:h-96">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457410383!2d2.2769948739923765!3d48.85894658138326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1623252531389!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          title="Paris Map"
        ></iframe>
      </div>
    </div>
  </section>
);

export default ContactSection;
