"use client";
import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const LeadCaptureForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formFocus, setFormFocus] = useState(false);

  // Validate form fields
  useEffect(() => {
    const newErrors: FormErrors = {};
    
    if (touched.name && !form.name.trim()) {
      newErrors.name = "Veuillez entrer votre nom";
    }
    
    if (touched.email) {
      if (!form.email.trim()) {
        newErrors.email = "Veuillez entrer votre email";
      } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
        newErrors.email = "Veuillez entrer un email valide";
      }
    }
    
    if (touched.message && !form.message.trim()) {
      newErrors.message = "Veuillez entrer votre message";
    }
    
    setErrors(newErrors);
  }, [form, touched]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleFocus = () => {
    setFormFocus(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to show any errors
    setTouched({ name: true, email: true, message: true });
    
    // Check if there are any validation errors
    const hasErrors = Object.keys(errors).length > 0 || !form.name || !form.email || !form.message;
    if (hasErrors) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Here you would send data to your backend or API
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 text-center flex flex-col items-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
          <FaCheckCircle className="text-3xl text-white" />
        </div>
        <h2 className="text-2xl font-bold text-cyan-400 mb-2">Merci pour votre message !</h2>
        <p className="text-gray-200 max-w-md">
          Votre demande a bien été envoyée. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex flex-col gap-5 p-6 transition-all duration-300 ${formFocus ? 'shadow-lg shadow-cyan-500/10' : ''}`}
    >
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaUser />
        </div>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          required
          className={`w-full px-10 py-3 rounded-lg bg-gray-800 text-white border ${errors.name ? 'border-red-400' : touched.name ? 'border-cyan-400' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300`}
        />
        {errors.name && <p className="text-red-400 text-sm mt-1 ml-1">{errors.name}</p>}
      </div>
      
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaEnvelope />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          required
          className={`w-full px-10 py-3 rounded-lg bg-gray-800 text-white border ${errors.email ? 'border-red-400' : touched.email ? 'border-cyan-400' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300`}
        />
        {errors.email && <p className="text-red-400 text-sm mt-1 ml-1">{errors.email}</p>}
      </div>
      
      <div className="relative">
        <div className="absolute left-3 top-4 text-gray-400">
          <FaComment />
        </div>
        <textarea
          name="message"
          placeholder="Décrivez votre projet ou posez-nous vos questions..."
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          required
          className={`w-full px-10 py-3 rounded-lg bg-gray-800 text-white border ${errors.message ? 'border-red-400' : touched.message ? 'border-cyan-400' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 min-h-[120px] resize-y`}
        />
        {errors.message && <p className="text-red-400 text-sm mt-1 ml-1">{errors.message}</p>}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
            <span>Envoi en cours...</span>
          </>
        ) : (
          <>
            <span>Envoyer</span>
            <FaPaperPlane />
          </>
        )}
      </button>
      
      <p className="text-xs text-gray-400 text-center mt-2">
        Nous respectons votre vie privée. Vos informations ne seront jamais partagées.
      </p>
    </form>
  );
};

export default LeadCaptureForm;
