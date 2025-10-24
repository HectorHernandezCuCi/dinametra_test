"use client";
import Link from "next/link";
import { Home, ArrowLeft, Search, Rocket, Satellite } from "lucide-react";

export default function NotFound () {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Satellite className="w-8 h-8 text-gray-800 opacity-50" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float-delay">
          <Satellite className="w-6 h-6 text-gray-800 opacity-30" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-float-delay-2">
          <Rocket className="w-10 h-10 text-gray-800 opacity-40" />
        </div>
        
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#ff6a00] rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-[#ff6a00] rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-[#ff6a00] rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#ff6a00] rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-gradient-to-r from-[#ff6a00] via-[#ff8533] to-[#ff6a00] bg-clip-text animate-gradient bg-[length:200%_100%] leading-none">
            404
          </h1>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#ff6a00] blur-2xl opacity-20 rounded-full animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-[#ff6a00] to-[#ff8533] rounded-full flex items-center justify-center shadow-lg shadow-[#ff6a00]/30 animate-float">
              <Rocket className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lost in Space
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Houston, we have a problem! The page you&apos;re looking for has drifted into the void of space.
            Let&apos;s navigate you back to familiar territory.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/"
            className="group flex items-center gap-3 bg-[#ff6a00] hover:bg-[#ff8533] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#ff6a00]/30 hover:shadow-[#ff6a00]/50 hover:scale-105"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Return Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-[#ff6a00]/50"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4">Or explore these sections:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { name: "Asteroids", href: "/asteroids" },
              { name: "DONKI", href: "/donki" },
              { name: "Gallery", href: "/gallery" },
              { name: "Mars Weather", href: "/mars-weather" }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-[#ff6a00] text-sm px-4 py-2 border border-gray-800 hover:border-[#ff6a00] rounded-lg transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-xl p-6 max-w-xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#ff6a00]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Search className="w-4 h-4 text-[#ff6a00]" />
            </div>
            <div className="text-left">
              <h3 className="text-white font-semibold mb-2">Did you know?</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The farthest human-made object is Voyager 1, launched in 1977. It&apos;s now over 14 billion miles from Earth, still sending data back to NASA!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 8s ease-in-out infinite 1s;
        }

        .animate-float-delay-2 {
          animation: float 7s ease-in-out infinite 2s;
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
    </div>
  );
};
