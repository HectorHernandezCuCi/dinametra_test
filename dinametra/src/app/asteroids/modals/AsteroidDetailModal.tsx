import { AsteroidData } from "../types/asteroids"
import fetchAsteroidById from "../helpers/fetchAsteroidById";
import closeModal from "../helpers/closeModal"
import { useEffect, useState } from "react";

interface AsteroidDetailModalProps {
    selectedAsteroid: AsteroidData | null;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedAsteroid: React.Dispatch<React.SetStateAction<AsteroidData | null>>;
}

const AsteroidDetailModal = ({
    selectedAsteroid,
    setIsModalOpen,
    setSelectedAsteroid
}: AsteroidDetailModalProps) => {
    const [data, setData] = useState<AsteroidData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!selectedAsteroid?.id) return;
        fetchAsteroidById(
            selectedAsteroid.id,
            setLoading,
            setData,
            setError
        );
    }, [selectedAsteroid]);

    if (!selectedAsteroid) return null;

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('en-US').format(num);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                                selectedAsteroid.is_potentially_hazardous_asteroid ? 'bg-red-500 animate-pulse' : 'bg-green-500'
                            }`} />
                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    {selectedAsteroid.name.replace(/[()]/g, '')}
                                </h2>
                                <p className="text-gray-400 text-sm">NASA ID: {selectedAsteroid.id}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => closeModal({ setIsModalOpen, setSelectedAsteroid })}
                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                            aria-label="Close modal"
                        >
                            <span className="text-xl">×</span>
                        </button>
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex items-center justify-center p-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="p-6">
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                            <p className="text-red-400 font-medium">Error loading asteroid data</p>
                            <p className="text-red-400/80 text-sm mt-1">{error}</p>
                        </div>
                    </div>
                )}

                {/* Content */}
                {!loading && !error && (
                    <div className="p-6 space-y-6">
                        {/* Hazard Status */}
                        <div className={`p-4 rounded-xl border ${
                            selectedAsteroid.is_potentially_hazardous_asteroid 
                                ? 'bg-red-500/10 border-red-500/20' 
                                : 'bg-green-500/10 border-green-500/20'
                        }`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${
                                    selectedAsteroid.is_potentially_hazardous_asteroid ? 'bg-red-500' : 'bg-green-500'
                                }`} />
                                <div>
                                    <span className={`font-semibold ${
                                        selectedAsteroid.is_potentially_hazardous_asteroid ? 'text-red-400' : 'text-green-400'
                                    }`}>
                                        {selectedAsteroid.is_potentially_hazardous_asteroid 
                                            ? 'Potentially Hazardous Asteroid' 
                                            : 'Non-Hazardous Asteroid'}
                                    </span>
                                    <p className="text-gray-400 text-sm mt-1">
                                        {selectedAsteroid.is_potentially_hazardous_asteroid
                                            ? 'This asteroid has been identified as potentially dangerous to Earth'
                                            : 'This asteroid poses no significant threat to Earth'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Metrics Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <p className="text-sm text-gray-400 font-medium">Absolute Magnitude</p>
                                </div>
                                <p className="text-2xl font-bold text-white">{selectedAsteroid.absolute_magnitude_h}</p>
                            </div>
                            
                            <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <p className="text-sm text-gray-400 font-medium">Estimated Diameter</p>
                                </div>
                                <p className="text-2xl font-bold text-white">
                                    {formatNumber(selectedAsteroid.estimated_diameter.meters.estimated_diameter_min)} -{" "}
                                    {formatNumber(selectedAsteroid.estimated_diameter.meters.estimated_diameter_max)} m
                                </p>
                            </div>
                            
                            <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <p className="text-sm text-gray-400 font-medium">Orbiting Body</p>
                                </div>
                                <p className="text-2xl font-bold text-white">
                                    {selectedAsteroid.close_approach_data[0]?.orbiting_body || 'Earth'}
                                </p>
                            </div>
                        </div>

                        {/* Detailed Diameter Section */}
                        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                                Estimated Diameter Range
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="text-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                                    <p className="text-2xl font-bold text-blue-400">
                                        {selectedAsteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(3)}
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">Min (km)</p>
                                </div>
                                <div className="text-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                                    <p className="text-2xl font-bold text-blue-400">
                                        {selectedAsteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">Max (km)</p>
                                </div>
                                <div className="text-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                                    <p className="text-2xl font-bold text-green-400">
                                        {formatNumber(selectedAsteroid.estimated_diameter.meters.estimated_diameter_min)}
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">Min (m)</p>
                                </div>
                                <div className="text-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                                    <p className="text-2xl font-bold text-green-400">
                                        {formatNumber(selectedAsteroid.estimated_diameter.meters.estimated_diameter_max)}
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">Max (m)</p>
                                </div>
                            </div>
                        </div>

                        {/* Close Approach Data */}
                        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
                                Close Approach Data
                            </h3>
                            <div className="space-y-4">
                                {selectedAsteroid.close_approach_data.map((approach, index) => (
                                    <div key={index} className="border border-gray-700 rounded-xl p-5 hover:border-gray-600 transition-colors">
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                                            <div>
                                                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Date & Time</p>
                                                <p className="font-semibold text-white text-base">
                                                    {formatDate(approach.close_approach_date_full)}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Relative Velocity</p>
                                                <p className="font-semibold text-white text-base">
                                                    {parseFloat(approach.relative_velocity.kilometers_per_second).toFixed(2)} km/s
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Miss Distance</p>
                                                <p className="font-semibold text-white text-base">
                                                    {formatNumber(parseFloat(approach.miss_distance.kilometers))} km
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Orbiting Body</p>
                                                <p className="font-semibold text-white text-base">{approach.orbiting_body}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Orbital Data Section */}
                        {data?.orbital_data && (
                            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                                    Orbital Characteristics
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-gray-700/30 rounded-lg p-4">
                                        <p className="text-gray-400 text-sm mb-1">Eccentricity</p>
                                        <p className="font-semibold text-white">{parseFloat(data.orbital_data.eccentricity).toFixed(4)}</p>
                                    </div>
                                    <div className="bg-gray-700/30 rounded-lg p-4">
                                        <p className="text-gray-400 text-sm mb-1">Inclination</p>
                                        <p className="font-semibold text-white">{parseFloat(data.orbital_data.inclination).toFixed(2)}°</p>
                                    </div>
                                    <div className="bg-gray-700/30 rounded-lg p-4">
                                        <p className="text-gray-400 text-sm mb-1">Orbital Period</p>
                                        <p className="font-semibold text-white">{parseFloat(data.orbital_data.orbital_period).toFixed(2)} days</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                            <h3 className="text-lg font-bold text-white mb-4">Additional Information</h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a 
                                    href={selectedAsteroid.nasa_jpl_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
                                >
                                    <span>View on NASA JPL</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                                <button
                                    onClick={() => closeModal({setIsModalOpen, setSelectedAsteroid})}
                                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors"
                                >
                                    Close Details
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AsteroidDetailModal