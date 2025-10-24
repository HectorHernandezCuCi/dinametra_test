import { AsteroidData } from "../types/asteroids";

interface AsteroidCardProps {
  asteroid: AsteroidData;
}

const AsteroidCard: React.FC<AsteroidCardProps> = ({ asteroid }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg hover:border-blue-500/40 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors truncate">
          {asteroid.name.replace(/[()]/g, "")}
        </h3>
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            asteroid.is_potentially_hazardous_asteroid
              ? "bg-red-500/20 text-red-300 border border-red-500/30"
              : "bg-green-500/20 text-green-300 border border-green-500/30"
          }`}
        >
          {asteroid.is_potentially_hazardous_asteroid ? "Hazardous" : "Safe"}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Diameter (meters):</span>
          <span className="text-white font-medium">
            {asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(0)} -{" "}
            {asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(0)} m
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Magnitude:</span>
          <span className="text-white font-medium">{asteroid.absolute_magnitude_h}</span>
        </div>

        <div className="pt-3 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-2">Close Approaches:</p>
          {asteroid.close_approach_data.slice(0, 2).map((approach, index) => (
            <div key={index} className="text-xs text-gray-300 mb-1">
              {approach.close_approach_date_full} - {Number(approach.miss_distance.kilometers).toFixed(0)} km
            </div>
          ))}
          {asteroid.close_approach_data.length > 2 && (
            <p className="text-xs text-blue-400 mt-1">
              +{asteroid.close_approach_data.length - 2} more approaches
            </p>
          )}
        </div>
      </div>

      <button className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors group-hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
};

export default AsteroidCard;
