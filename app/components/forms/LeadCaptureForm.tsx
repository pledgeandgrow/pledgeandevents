"use client";
import React, { useState } from "react";

const LeadCaptureForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send data to your backend or API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-green-400 mb-2">Merci !</h2>
        <p className="text-gray-200">Votre demande a bien été envoyée.<br />Nous vous répondrons rapidement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={form.name}
        onChange={handleChange}
        required
        className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={form.email}
        onChange={handleChange}
        required
        className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <textarea
        name="message"
        placeholder="Votre projet ou question..."
        value={form.message}
        onChange={handleChange}
        required
        className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[100px]"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Envoyer
      </button>
    </form>
  );
};

export default LeadCaptureForm;
