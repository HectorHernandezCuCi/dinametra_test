"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSectionAbout from "./componets/HeroSectionAbout";
import MissionSection from "./componets/MissionSection";
import TechnologiesSection from "./componets/TechnologiesSection";
import ReadySection from "./componets/ReadySection";
const About = () => {

  const stats = [
    { value: "10+", label: "NASA APIs" },
    { value: "Real-time", label: "Data Updates" },
    { value: "100%", label: "Free Access" }
  ];

  const technologies = [
    "Next.js 15",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "NASA APIs",
    "Recharts",
    "Lucide Icons",
    "FastAPI"
  ];

  return (
    <div className="min-h-screen bg-black">
    <Header />
    <HeroSectionAbout stats={stats} />
    <MissionSection />
    <TechnologiesSection technologies={technologies}/>
    <ReadySection />
    <Footer />

      <style jsx>{`
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

export default About;