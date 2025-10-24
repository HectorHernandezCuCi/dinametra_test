import { useState } from "react";
import { AsteroidData } from "../types/asteroids";
import openAsteroidDetail from "../helpers/openAsteroidDetail";
import AsteroidCard from "./AsteroidCard";

interface AsteroidGridProps {
  filteredAsteroids: AsteroidData[];
  setSelectedAsteroid: React.Dispatch<React.SetStateAction<AsteroidData | null>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AsteroidGrid = ({
  filteredAsteroids,
  setSelectedAsteroid,
  setIsModalOpen,
}: AsteroidGridProps) => {
  const ITEMS_PER_PAGE = 9;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const visibleAsteroids = filteredAsteroids.slice(0, visibleCount);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Near-Earth Objects</h2>
          <p className="text-gray-400">
            Tracked asteroids and their close approaches to Earth
          </p>
        </div>

        {filteredAsteroids.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No asteroids found matching your search criteria.
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleAsteroids.map((asteroid) => (
                <div
                  key={asteroid.id}
                  className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  onClick={() =>
                    openAsteroidDetail({ asteroid, setSelectedAsteroid, setIsModalOpen })
                  }
                >
                  <AsteroidCard asteroid={asteroid} />
                </div>
              ))}
            </div>

            {visibleCount < filteredAsteroids.length && (
              <div className="flex justify-center items-center mt-8 mb-4">
                <button
                  className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer disabled:hover:scale-100"
                  onClick={handleLoadMore}
                  aria-label="Load more items"
                >
                  <span className="flex items-center gap-2">
                    Load More
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default AsteroidGrid;
