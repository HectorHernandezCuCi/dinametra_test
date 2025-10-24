"use client";
import { Target, Rocket, Users, Globe, Sparkles } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 px-4 border-t border-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#ff6a00]/20 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-[#ff6a00]" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our mission is to make space exploration data accessible, engaging, and educational
              for everyone. We believe that the wonders of space should be available to all,
              not just scientists and researchers.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              By leveraging NASA&apos;s open APIs and modern web technologies, we&apos;ve created a platform
              that transforms complex space data into beautiful, interactive visualizations that
              anyone can understand and enjoy.
            </p>
            <div className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl">
              <Rocket className="w-6 h-6 text-[#ff6a00] flex-shrink-0" />
              <p className="text-sm text-gray-300">
                Making space exploration accessible to everyone, everywhere.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/20 to-transparent rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ff6a00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#ff6a00]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">For Everyone</h3>
                    <p className="text-gray-400 text-sm">
                      From students to space enthusiasts, our platform is designed for all levels of interest.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ff6a00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[#ff6a00]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Global Access</h3>
                    <p className="text-gray-400 text-sm">
                      Access real-time space data from anywhere in the world, completely free.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ff6a00]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-[#ff6a00]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Educational</h3>
                    <p className="text-gray-400 text-sm">
                      Learn about space exploration through interactive data and visualizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;