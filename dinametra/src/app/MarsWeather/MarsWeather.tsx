"use client";

import React, { useEffect, useState } from "react";
import { MarsWeatherData } from "./types/marsWeatherTypes";
import fetchMarsWeatherData from "./helpers/fetchMarsWeather";

const MarsWeather: React.FC = () => {
  const [data, setData] = useState<MarsWeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedSol, setSelectedSol] = useState<string | null>(null);

  useEffect(() => {
    fetchMarsWeatherData(setLoading, setData, setError);
  }, []);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setSelectedSol(Object.keys(data)[0]);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="fixed right-4 top-4 w-80 bg-gray-900 text-white rounded-xl shadow-2xl p-6">
        <div className="flex items-center justify-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          <span className="ml-3">Loading Mars weather...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed right-4 top-4 w-80 bg-red-900 text-white rounded-xl shadow-2xl p-6">
        <div className="flex items-center">
          <div className="text-2xl">🚫</div>
          <div className="ml-3">
            <h3 className="font-bold">Error</h3>
            <p className="text-sm opacity-90">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="fixed right-4 top-4 w-80 bg-gray-900 text-white rounded-xl shadow-2xl p-6">
        <div className="text-center">
          <div className="text-2xl">🔴</div>
          <p>No data available</p>
        </div>
      </div>
    );
  }

  const sols = Object.entries(data);
  const currentSolData = selectedSol ? data[selectedSol] : null;

  return (
    <div className="fixed right-4 top-20 w-65 max-w-[90vw] bg-gray-900 text-white rounded-xl shadow-2xl overflow-hidden border border-gray-700">
      <div className="bg-gradient-to-r from-orange-600 to-red-700 p-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">🪐</div>
          <div>
            <h1 className="text-xl font-bold">Mars Weather</h1>
            <p className="text-sm opacity-90">Live from the Red Planet</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-700 bg-gray-800">
        <label className="text-sm font-medium text-gray-300 block mb-2">
          Select Martian Sol:
        </label>
        <select
          value={selectedSol || ""}
          onChange={(e) => setSelectedSol(e.target.value)}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          {sols.map(([sol]) => (
            <option key={sol} value={sol}>
              Sol {sol}
            </option>
          ))}
        </select>
      </div>

      {currentSolData && (
        <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-gray-800 rounded-lg p-3 text-center">
              <div className="text-orange-400 font-semibold">Season</div>
              <div>{currentSolData.Season}</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 text-center">
              <div className="text-orange-400 font-semibold">Month</div>
              <div>{currentSolData.Month_ordinal}</div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-orange-400">Temperature (°C)</h3>
              <div className="text-2xl">🌡️</div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-xs text-gray-400">Average</div>
                <div className="font-bold">{currentSolData.AT.av}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Min</div>
                <div className="font-bold text-blue-400">{currentSolData.AT.mn}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Max</div>
                <div className="font-bold text-red-400">{currentSolData.AT.mx}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-orange-400">Pressure (Pa)</h3>
              <div className="text-2xl">📊</div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-xs text-gray-400">Average</div>
                <div className="font-bold">{currentSolData.PRE.av}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Min</div>
                <div className="font-bold">{currentSolData.PRE.mn}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Max</div>
                <div className="font-bold">{currentSolData.PRE.mx}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-orange-400">Wind (m/s)</h3>
              <div className="text-2xl">💨</div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center mb-3">
              <div>
                <div className="text-xs text-gray-400">Average</div>
                <div className="font-bold">{currentSolData.HWS.av}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Min</div>
                <div className="font-bold">{currentSolData.HWS.mn}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Max</div>
                <div className="font-bold">{currentSolData.HWS.mx}</div>
              </div>
            </div>
            <div className="text-center border-t border-gray-700 pt-2">
              <div className="text-xs text-gray-400">Most Common Direction</div>
              <div className="font-bold">{currentSolData.WD.most_common.compass_point}</div>
            </div>
          </div>

          <div className="text-xs text-gray-400 space-y-1">
            <div>First UTC: {new Date(currentSolData.First_UTC).toLocaleDateString()}</div>
            <div>Last UTC: {new Date(currentSolData.Last_UTC).toLocaleDateString()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarsWeather;