"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Asteroid {
  name: string;
  diameterMin: number;
  diameterMax: number;
}

interface DiameterChartProps {
  asteroids: Asteroid[];
}

export default function DiameterChart({ asteroids }: DiameterChartProps) {
  const data = {
    labels: asteroids.map((a) => a.name),
    datasets: [
      {
        label: "Min Diameter (m)",
        data: asteroids.map((a) => a.diameterMin),
        backgroundColor: "rgba(255, 106, 0, 0.6)",
      },
      {
        label: "Max Diameter (m)",
        data: asteroids.map((a) => a.diameterMax),
        backgroundColor: "rgba(255, 255, 255, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Asteroid Diameter Comparison" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
}
