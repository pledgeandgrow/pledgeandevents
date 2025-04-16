import React from "react";
import ContactHero from "./ContactHero";
import ContactDetails from "./ContactDetails";
import ContactFormCard from "./ContactFormCard";

const ContactSection = () => (
  <section className="py-12 px-4 bg-gray-900 flex flex-col items-center min-h-[80vh]">
    <ContactHero />
    <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-4xl mt-8">
      <ContactDetails />
      <ContactFormCard />
    </div>
  </section>
);

export default ContactSection;
