"use client";

import { Rocket } from "lucide-react";
import Link from "next/link";

const ReadySection = () => {
  return (
    <section className="py-20 px-4 border-t border-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="relative bg-gradient-to-br from-[#ff6a00]/10 to-transparent border border-gray-800 rounded-2xl p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/5 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Explore?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Start your journey through the cosmos with real-time NASA data and stunning visualizations.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-[#ff6a00] hover:bg-[#ff8533] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#ff6a00]/30 hover:shadow-[#ff6a00]/50 hover:scale-105"
            >
              <Rocket className="w-5 h-5" />
              Start Exploring
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
