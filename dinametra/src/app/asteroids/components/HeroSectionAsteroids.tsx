import Image from "next/image";
import asteroidImage from "@/app/assets/jpg/asteroid_image.png";
import { AsteroidsData } from "../types/asteroids";

interface HeroSectionAsteroidsProps {
    data: AsteroidsData
}

const HeroSectionAsteroids = ({
    data
}: HeroSectionAsteroidsProps) => {
    return (
        <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Monitoring Near-Earth
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Objects
                  </span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Real-time tracking and analysis of asteroids and near-Earth objects 
                  through NASA&apos;s NeoWs API. Stay informed about celestial objects 
                  in our planetary neighborhood.
                </p>
              </div>

              {data && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                    <p className="text-2xl font-bold text-blue-400">{data.element_count}</p>
                    <p className="text-sm text-gray-400">Total Objects</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                    <p className="text-2xl font-bold text-yellow-400">24/7</p>
                    <p className="text-sm text-gray-400">Monitoring</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                    <p className="text-2xl font-bold text-green-400">NASA</p>
                    <p className="text-sm text-gray-400">Data Source</p>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <div className="relative">
                <Image 
                  src={asteroidImage}
                  alt="Asteroid in space with celestial background"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroSectionAsteroids;