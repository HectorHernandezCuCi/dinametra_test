"use client";
import { useEffect, useState } from "react";
import fetchData from "@/app/asteroids/helpers/fetchAsteroidsData";
import { AsteroidData, AsteroidsData } from "@/app/asteroids/types/asteroids";
import Loading from "@/app/components/Loading";
import HeroSectionAsteroids from "@/app/asteroids/components/HeroSectionAsteroids";
import SearchSection from "@/app/asteroids/components/SearchSection";
import AsteroidGrid from "@/app/asteroids/components/AsteroidGrid";
import AsteroidDetailModal from "@/app/asteroids/modals/AsteroidDetailModal";
import ErrorDisplay from "@/app/asteroids/components/ErrorDisplay";
import BarChart from "@/app/components/BarChart";
import DiameterChart from "@/app/asteroids/components/DiameterChart";

export default function AsteroidsTab() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AsteroidsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedAsteroid, setSelectedAsteroid] = useState<AsteroidData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData(setLoading, setData, setError);
  }, []);

  const allAsteroids: AsteroidData[] = data
    ? Object.values(data.near_earth_objects).flat() as AsteroidData[]
    : [];

  const safeCount = allAsteroids.filter(a => !a.is_potentially_hazardous_asteroid).length;
  const hazardousCount = allAsteroids.filter(a => a.is_potentially_hazardous_asteroid).length;

  const asteroidsDiameter = allAsteroids
    .map((a) => ({
      name: a.name,
      diameterMin: a.estimated_diameter.kilometers.estimated_diameter_min,
      diameterMax: a.estimated_diameter.kilometers.estimated_diameter_max,
    }))
    .slice(0, 50);

  const asteroidDataChart = {
    labels: ["Safe", "Hazardous"],
    datasets: [
      {
        label: "Near-Earth Objects",
        data: [safeCount, hazardousCount],
        backgroundColor: ["rgba(79, 70, 229, 0.3)", "rgba(220, 38, 38, 0.3)"],
        borderColor: ["#4F46E5", "#DC2626"],
        borderWidth: 1,
      },
    ],
  };

  const filteredAsteroids: AsteroidData[] = allAsteroids.filter(asteroid => {
    const matchesName = asteroid.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !selectedDate ||
      asteroid.close_approach_data.some(approach =>
        approach.close_approach_date.includes(selectedDate)
      );
    return matchesName && matchesDate;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-[#ff6a00] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#ff6a00] text-white">
      {data && <HeroSectionAsteroids data={data} />}
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
        <h2 className="text-4xl text-center mb-5 md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Charts
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2">
            {data && <BarChart data={asteroidDataChart} title="Safe and Hazardous Asteroids" />}
          </div>
          
          <div className="w-full lg:w-1/2">
            {asteroidsDiameter.length > 0 ? (
              <DiameterChart asteroids={asteroidsDiameter} />
            ) : (
              <div className="flex items-center justify-center h-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4">
                <p className="text-center text-gray-300 text-sm sm:text-base">
                  Loading asteroid data...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <SearchSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        filteredAsteroids={filteredAsteroids}
        allAsteroids={allAsteroids}
      />

      <AsteroidGrid
        filteredAsteroids={filteredAsteroids}
        setSelectedAsteroid={setSelectedAsteroid}
        setIsModalOpen={setIsModalOpen}
      />

      {isModalOpen && selectedAsteroid && (
        <AsteroidDetailModal
          selectedAsteroid={selectedAsteroid}
          setIsModalOpen={setIsModalOpen}
          setSelectedAsteroid={setSelectedAsteroid}
        />
      )}

      {error && <ErrorDisplay error={error} />}
    </div>
  );
}