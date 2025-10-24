import Image from "next/image";
import heroSectionBg from "@/app/assets/jpg/nasa-october-2025-4k-3840x2160-1.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={heroSectionBg}
        alt="NASA space exploration background"
        fill
        priority
        className="object-cover object-center"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block animate-slide-up">NASA API</span>
          <span className="block bg-gradient-to-r from-[#ff6a00] via-[#ff8533] to-[#ff6a00] bg-clip-text text-transparent animate-slide-up-delay bg-[length:200%_100%] animate-gradient">
            Explorer
          </span>
        </h1>

        <p className="mt-6 text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
          Explore real-time NASA data with interactive charts and powerful filters
          <span className="inline-block ml-2 text-2xl">🚀</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <button
            onClick={scrollToContent}
            className="group bg-[#ff6a00] hover:bg-[#ff8533] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#ff6a00]/30 hover:shadow-[#ff6a00]/50 hover:scale-105 flex items-center gap-2"
          >
            Start Exploring
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40">
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-delay-3">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff6a00] mb-2">10+</div>
            <div className="text-sm md:text-base text-gray-300">Data Sources</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-[#ff6a00] mb-2">Real-time</div>
            <div className="text-sm md:text-base text-gray-300">Updates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff6a00] mb-2">100%</div>
            <div className="text-sm md:text-base text-gray-300">Free Access</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;