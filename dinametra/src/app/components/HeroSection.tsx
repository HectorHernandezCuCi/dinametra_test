import Image from "next/image";
import heroSectionBg from "@/app/assets/jpg/nasa-october-2025-4k-3840x2160-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src={heroSectionBg}
        alt="Nasa background"
        fill
        priority
        className="object-cover object-center brightness-50"
      />

      <div className="relative z-20 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
          NASA API Test
        </h1>
        <p className="mt-4 text-gray-200 text-lg md:text-xl">
          Ve los datos de la nasa con graficos y filtros🚀
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
