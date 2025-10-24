"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryTab from "./components/GalleryTab";
import DonkiTab from "./components/DonkiTabs";
import AsteroidsTab from "./components/AsteroidsTabs";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("gallery");

  const renderTabContent = () => {
    switch (activeTab) {
      case "gallery":
        return <GalleryTab />;
      case "donki":
        return <DonkiTab />;
      case "asteroids":
        return <AsteroidsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black z-0"></div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#ff6a00]">
                NASA Dashboard
              </h1>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore the universe through NASA vast collection of images, space weather data, and asteroid information
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black border-b border-space-light/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            <button
              className={`px-4 py-3 rounded-t-lg font-medium transition-all ${
                activeTab === "gallery"
                  ? "bg-black text-[#ff6a00] border-t-2 border-[#ff6a00]"
                  : "text-gray-400 hover:text-white hover:bg-space-dark/50"
              }`}
              onClick={() => setActiveTab("gallery")}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Image Gallery
              </div>
            </button>
            <button
              className={`px-4 py-3 rounded-t-lg font-medium transition-all ${
                activeTab === "donki"
                  ? "bg-black text-[#ff6a00] border-t-2 border-[#ff6a00]"
                  : "text-gray-400 hover:text-white hover:bg-space-dark/50"
              }`}
              onClick={() => setActiveTab("donki")}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Space Weather (DONKI)
              </div>
            </button>
            <button
              className={`px-4 py-3 rounded-t-lg font-medium transition-all ${
                activeTab === "asteroids"
                  ? "bg-black text-[#ff6a00] border-t-2 border-[#ff6a00]"
                  : "text-gray-400 hover:text-white hover:bg-space-dark/50"
              }`}
              onClick={() => setActiveTab("asteroids")}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
                Near-Earth Asteroids
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen">
        {renderTabContent()}
      </div>

      <Footer />
    </div>
  );
}