import { Sparkles } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface HeroSectionAboutProps {
  stats: Stat[];
}

const HeroSectionAbout = ({ stats }: HeroSectionAboutProps) => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff6a00]/10 to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff6a00] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#ff6a00] rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#ff6a00] rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#ff6a00] rounded-full animate-pulse delay-300"></div>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ff6a00]/20 border border-[#ff6a00]/50 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#ff6a00]" />
            <span className="text-[#ff6a00] text-sm font-medium">About the Project</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Exploring the Universe
            <span className="block mt-2 bg-gradient-to-r from-[#ff6a00] via-[#ff8533] to-[#ff6a00] bg-clip-text text-transparent">
              One API at a Time
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            NASA Explorer is a modern web application that brings the wonders of space exploration
            to your fingertips. Built with cutting-edge technologies and powered by NASA&apos;s open APIs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-xl p-6 text-center hover:border-[#ff6a00] transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#ff6a00] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAbout;