"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight, FaHeart, FaMicrophone, FaCrown, FaGlassCheers, FaBuilding, FaGem } from "react-icons/fa";
import { GiDiamonds } from "react-icons/gi";

type IconName = "heart" | "microphone" | "crown" | "glassCheers" | "building" | "gem" | "diamonds";

interface PrestationCardProps {
  title: string;
  description: string;
  iconName: IconName;
  color: string;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  reversed?: boolean;
}

const PrestationCard = ({
  title,
  description,
  iconName,
  color,
  features,
  ctaText = "En savoir plus",
  ctaLink = "/contact",
  imageUrl,
  reversed = false,
}: PrestationCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById(`prestation-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [title]);

  // Color mappings
  const colorMap: Record<string, { bg: string, text: string, shadow: string, border: string }> = {
    pink: {
      bg: "from-pink-500/20 to-pink-700/20",
      text: "text-pink-400",
      shadow: "shadow-pink-500/20",
      border: "border-pink-500/30",
    },
    cyan: {
      bg: "from-cyan-500/20 to-cyan-700/20",
      text: "text-cyan-400",
      shadow: "shadow-cyan-500/20",
      border: "border-cyan-500/30",
    },
    purple: {
      bg: "from-purple-500/20 to-purple-700/20",
      text: "text-purple-400",
      shadow: "shadow-purple-500/20",
      border: "border-purple-500/30",
    },
    amber: {
      bg: "from-amber-500/20 to-amber-700/20",
      text: "text-amber-400",
      shadow: "shadow-amber-500/20",
      border: "border-amber-500/30",
    },
    emerald: {
      bg: "from-emerald-500/20 to-emerald-700/20",
      text: "text-emerald-400",
      shadow: "shadow-emerald-500/20",
      border: "border-emerald-500/30",
    },
    blue: {
      bg: "from-blue-500/20 to-blue-700/20",
      text: "text-blue-400",
      shadow: "shadow-blue-500/20",
      border: "border-blue-500/30",
    },
  };
  
  const colorStyles = colorMap[color] || colorMap.cyan;

  return (
    <section 
      id={`prestation-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={`py-20 px-4 bg-gray-900 relative overflow-hidden ${reversed ? 'border-t' : 'border-b'} border-gray-800`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className={`absolute top-0 ${reversed ? 'left-0' : 'right-0'} w-96 h-96 bg-gradient-to-br ${colorStyles.bg} rounded-full blur-3xl opacity-20`}></div>
        <div className={`absolute bottom-0 ${reversed ? 'right-0' : 'left-0'} w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full blur-3xl`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          
          {/* Content side */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <div className="text-center lg:text-left">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${colorStyles.bg} mb-6 ${colorStyles.border} border shadow-lg ${colorStyles.shadow}`}>
                {iconName === "heart" && <FaHeart className={`text-3xl ${colorStyles.text}`} />}
                {iconName === "microphone" && <FaMicrophone className={`text-3xl ${colorStyles.text}`} />}
                {iconName === "crown" && <FaCrown className={`text-3xl ${colorStyles.text}`} />}
                {iconName === "glassCheers" && <FaGlassCheers className={`text-3xl ${colorStyles.text}`} />}
                {iconName === "building" && <FaBuilding className={`text-3xl ${colorStyles.text}`} />}
                {iconName === "gem" && <FaGem className={`text-3xl ${colorStyles.text}`} />}
                {iconName === "diamonds" && <GiDiamonds className={`text-3xl ${colorStyles.text}`} />}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {title}
              </h2>
              
              <div className={`w-24 h-1 bg-gradient-to-r ${colorStyles.bg} mb-6 ${reversed ? 'lg:ml-auto' : ''} mx-auto lg:mx-0`}></div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start gap-2 ${isVisible ? 'animate-fadeSlideUp' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${colorStyles.bg} flex items-center justify-center ${colorStyles.border} border`}>
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href={ctaLink}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${colorStyles.bg} text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${colorStyles.shadow} ${colorStyles.border} border`}
              >
                {ctaText} <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
          
          {/* Image side */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className={`rounded-2xl overflow-hidden border ${colorStyles.border} shadow-xl ${colorStyles.shadow} aspect-[4/3] relative`}>
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center`}>
                  {iconName === "heart" && <FaHeart className={`text-8xl ${colorStyles.text} opacity-30`} />}
                  {iconName === "microphone" && <FaMicrophone className={`text-8xl ${colorStyles.text} opacity-30`} />}
                  {iconName === "crown" && <FaCrown className={`text-8xl ${colorStyles.text} opacity-30`} />}
                  {iconName === "glassCheers" && <FaGlassCheers className={`text-8xl ${colorStyles.text} opacity-30`} />}
                  {iconName === "building" && <FaBuilding className={`text-8xl ${colorStyles.text} opacity-30`} />}
                  {iconName === "gem" && <FaGem className={`text-8xl ${colorStyles.text} opacity-30`} />}
                  {iconName === "diamonds" && <GiDiamonds className={`text-8xl ${colorStyles.text} opacity-30`} />}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PrestationCard;
