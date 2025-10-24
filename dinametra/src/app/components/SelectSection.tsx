import Link from "next/link";
import { Rocket, Zap, Satellite } from "lucide-react";

const SelectSection = () => {
  const sections = [
    {
      href: "/asteroids",
      title: "Asteroids",
      description: "Track near-Earth objects and space rocks",
      icon: Rocket,
      gradient: "from-[#ff6a00] to-[#ff8533]"
    },
    {
      href: "/donki",
      title: "DONKI",
      description: "Space weather notifications and events",
      icon: Zap,
      gradient: "from-[#ff8533] to-[#ffaa66]"
    },
    {
      href: "/gallery",
      title: "Gallery",
      description: "Explore NASA's image collection",
      icon: Satellite,
      gradient: "from-[#ff6a00] to-[#ff8533]"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Explore NASA Data
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Choose a category to dive into real-time space exploration data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.href}
              href={section.href}
              className="group relative bg-black border border-gray-800 rounded-2xl p-6 hover:border-[#ff6a00] transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-[#ff6a00]/10 rounded-xl flex items-center justify-center group-hover:bg-[#ff6a00]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#ff6a00]" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-800 group-hover:border-[#ff6a00] flex items-center justify-center transition-colors">
                    <svg 
                      className="w-4 h-4 text-gray-600 group-hover:text-[#ff6a00] transform group-hover:translate-x-0.5 transition-all" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff6a00] transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {section.description}
                  </p>
                </div>

                <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent group-hover:via-[#ff6a00] transition-all duration-300 rounded-full"></div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff6a00]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SelectSection;