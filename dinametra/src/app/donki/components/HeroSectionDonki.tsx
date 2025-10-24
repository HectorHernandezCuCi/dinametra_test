"use client";

import { useState, useEffect } from "react";
import coronalMassImage from "@/app/assets/jpg/coronal_mass_ejection.jpg";
import Image from "next/image";

const HeroSectionDonki = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-space-dark">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Image 
          src={coronalMassImage}
          alt="Coronal Mass Ejection from the Sun"
          fill
          priority
          className="object-cover object-center"
          style={{ 
            filter: "brightness(0.7) contrast(1.1) saturate(1.2)"
          }}
          onLoad={() => setIsLoaded(true)}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-space-dark/30 via-transparent to-space-dark/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-space-dark/20 via-transparent to-space-dark/20"></div>
        <div className="absolute inset-0 bg-radial-gradient from-sun-gold/10 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center max-w-4xl px-6 mx-auto">
        <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-sun-gold rounded-full"></div>
            <div className="w-4 h-1 bg-sun-orange rounded-full mx-2"></div>
            <div className="w-16 h-1 bg-sun-gold rounded-full"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Coronal Mass
            <span className="block bg-gradient-to-r from-sun-gold to-sun-orange bg-clip-text text-transparent mt-2">
              Ejection
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-space-light max-w-3xl mx-auto leading-relaxed mb-10">
            A coronal mass ejection (CME) is a massive eruption of solar plasma and magnetic fields from the sun&apos;s outer atmosphere, or corona, that travels at high speeds into interplanetary space.
          </p>
        </div>
      </div>

    </section>
  );
};

export default HeroSectionDonki;
