"use client";

import { Code } from "lucide-react";

interface TechnologiesSectionProps {
  technologies: string[];
}

const TechnologiesSection = ({ technologies }: TechnologiesSectionProps) => {
  return (
    <section className="py-20 px-4 border-t border-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="w-8 h-8 text-[#ff6a00]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built With
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Modern technologies for a cutting-edge experience
          </p>
        </div>

        {/* Technologies List */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 hover:border-[#ff6a00] rounded-lg px-6 py-3 text-gray-300 hover:text-white transition-all duration-200"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
