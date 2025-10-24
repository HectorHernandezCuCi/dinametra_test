"use client";

import { useEffect, useState } from "react";
import fetchDonkiCoronalMassEjection from "@/app/donki/helpers/fetchDonkiCoronalMassEjection";
import { CoronalMassEjection } from "@/app/donki/types/donki";
import HeroSectionDonki from "@/app/donki/components/HeroSectionDonki";
import StatsSection from "@/app/donki/components/StatsSection";
import CMECard from "@/app/donki/components/CMECard";
import ExpandableContent from "@/app/donki/components/ExpandableContent";
import Loading from "@/app/components/Loading";

export default function DonkiTab() {
  const [data, setData] = useState<CoronalMassEjection[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    fetchDonkiCoronalMassEjection(setLoading, setData, setError);
  }, []);

  if (loading) return (
    <div className="min-h-screen  flex items-center justify-center">
      <Loading />
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="backdrop-blur-lg border border-solar-red/30 rounded-xl p-8 max-w-md text-center">
        <div className="w-16 h-16 bg-solar-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-solar-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-space-light mb-2">Data Loading Error</h3>
        <p className="text-space-light/70">Error: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-sun-gold text-space-dark font-medium rounded-lg hover:bg-sun-orange transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
  
  if (data.length === 0) return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="backdrop-blur-lg border border-space-light/20 rounded-xl p-8 max-w-md text-center">
        <div className="w-16 h-16 bg-cosmic-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-cosmic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m8-8V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1m4 0h-4" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-space-light mb-2">No Data Available</h3>
        <p className="text-space-light/70">No coronal mass ejection data is currently available.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen ">
      <HeroSectionDonki />
      
      <StatsSection data={data} />
      <main className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-space-light">
              Coronal Mass Ejection Events
            </h2>
            <div className="text-space-light/70">
              Showing <span className="text-sun-gold font-semibold">{data.length}</span> events
            </div>
          </div>

          <div className="space-y-6">
            {data.map((cme, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-lg border rounded-xl overflow-hidden transition-all duration-500 ${
                  expandedCard === index 
                    ? 'border-sun-gold/50 shadow-lg shadow-sun-gold/10' 
                    : 'border-space-light/10 hover:border-space-light/20'
                }`}
              >
                <CMECard index={index} cme={cme} expandedCard={expandedCard} setExpandedCard={setExpandedCard} />

                {expandedCard === index && (
                    <ExpandableContent cme={cme} />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}