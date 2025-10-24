"use client";

import { useEffect, useState } from "react";
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

interface BarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  };
  title?: string;
}

export default function BarChart({ data, title }: BarChartProps) {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width === null) return null;

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: width < 640 ? 1 : width < 1024 ? 1.5 : 2,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          padding: width < 640 ? 10 : 15,
          font: {
            size: width < 640 ? 10 : width < 1024 ? 12 : 14,
          },
          boxWidth: width < 640 ? 20 : 40,
        },
      },
      title: {
        display: true,
        text: title || "Asteroid Safety Overview",
        font: {
          size: width < 640 ? 14 : width < 1024 ? 16 : 18,
          weight: "bold" as const,
        },
        padding: {
          top: 10,
          bottom: width < 640 ? 15 : 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#374151",
          font: {
            size: width < 640 ? 10 : 12,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        ticks: {
          color: "#374151",
          font: {
            size: width < 640 ? 9 : 11,
          },
          maxRotation: width < 640 ? 45 : 0,
          minRotation: width < 640 ? 45 : 0,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-4 md:p-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm sm:shadow md:shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
}
