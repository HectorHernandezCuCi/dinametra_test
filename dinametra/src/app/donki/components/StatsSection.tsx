import { CoronalMassEjection } from "../types/donki";
interface StatsSectionProps {
    data: CoronalMassEjection[]
}
const StatsSection = ({
    data
}: StatsSectionProps) => {
    return (
        <section className="relative z-10 -mt-20 px-6">
        <div className="mt-15 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-space-darker/80 backdrop-blur-lg border border-space-light/10 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-sun-gold mb-2">{data.length}</div>
              <div className="text-space-light/70">Total Events</div>
            </div>
            <div className="bg-space-darker/80 backdrop-blur-lg border border-space-light/10 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-cosmic-blue mb-2">
                {data.filter(cme => cme.cmeAnalyses && cme.cmeAnalyses.length > 0).length}
              </div>
              <div className="text-space-light/70">Analyzed Events</div>
            </div>
            <div className="bg-space-darker/80 backdrop-blur-lg border border-space-light/10 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-solar-red mb-2">
                {data.reduce((acc, cme) => {
                  return acc + (cme.cmeAnalyses ? cme.cmeAnalyses.reduce((sum, analysis) => 
                    sum + (analysis.enlilList ? analysis.enlilList.length : 0), 0) : 0);
                }, 0)}
              </div>
              <div className="text-space-light/70">ENLIL Models</div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default StatsSection;