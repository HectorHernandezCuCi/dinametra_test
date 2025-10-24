"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SelectSection from "./components/SelectSection";
import MarsWeather from "./MarsWeather/MarsWeather";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SelectSection />
      <MarsWeather />
      <Footer />
    </div>
  );
}
