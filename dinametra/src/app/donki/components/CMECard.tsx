import { CoronalMassEjection } from "../types/donki";
import toggleCardExpand from "../helpers/toggleCardExpand";
interface CMECardProps {
    index: number;
    cme: CoronalMassEjection;
    expandedCard: number | null;
    setExpandedCard: React.Dispatch<React.SetStateAction<number | null>>;

}
const CMECard = ({
    index,
    cme,
    expandedCard,
    setExpandedCard
}: CMECardProps) => {
    return(
        <div 
            className="p-6 cursor-pointer"
            onClick={() => toggleCardExpand({expandedCard, setExpandedCard, index})}
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sun-gold to-sun-orange rounded-lg flex items-center justify-center">
                <span className="text-space-dark font-bold text-lg">#{index + 1}</span>
                </div>
                <div>
                <h3 className="text-xl font-bold text-space-light">
                    {cme.activityID || `CME Event ${index + 1}`}
                </h3>
                <p className="text-space-light/70 flex items-center gap-2 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {cme.startTime ? new Date(cme.startTime).toLocaleDateString() : 'Date not available'}
                </p>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                {cme.cmeAnalyses && cme.cmeAnalyses.length > 0 && (
                <div className="hidden md:flex items-center gap-2 bg-cosmic-blue/20 text-cosmic-blue px-3 py-1 rounded-full text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    {cme.cmeAnalyses.length} Analysis
                </div>
                )}
                
                <button className="flex items-center gap-2 text-space-light/70 hover:text-sun-gold transition-colors">
                {expandedCard === index ? 'Show Less' : 'Show Details'}
                <svg 
                    className={`w-5 h-5 transition-transform ${expandedCard === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </button>
            </div>
            </div>
        </div>
    )
}

export default CMECard;