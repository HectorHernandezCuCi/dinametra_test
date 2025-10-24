import InfoItem from "./InfoItem";
import InfoRow from "./InfoRow";
import { CoronalMassEjection } from "../types/donki"

interface ExpandableContentProps {
    cme: CoronalMassEjection;
}

const ExpandableContent = ({
    cme
}: ExpandableContentProps) => {
    return(
        <div className="border-t border-space-light/10 px-6 py-6 space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                <h4 className="text-lg font-semibold text-space-light border-b border-space-light/10 pb-2">
                    Event Details
                </h4>
                <div className="space-y-3">
                    <InfoRow label="Activity ID" value={cme.activityID} />
                    <InfoRow label="Catalog" value={cme.catalog} />
                    <InfoRow label="Start Time" value={cme.startTime ? new Date(cme.startTime).toLocaleString() : 'N/A'} />
                    <InfoRow label="Source Location" value={cme.sourceLocation || "N/A"} />
                    <InfoRow label="Active Region" value={cme.activeRegionNum != null ? cme.activeRegionNum.toString() : "N/A"} />
                </div>
                </div>
                
                <div className="space-y-4">
                <h4 className="text-lg font-semibold text-space-light border-b border-space-light/10 pb-2">
                    Instruments
                </h4>
                {(cme.instruments && cme.instruments.length > 0) ? (
                    <div className="flex flex-wrap gap-2">
                    {cme.instruments.map((inst, i) => (
                        <span 
                        key={i}
                        className="bg-cosmic-blue/20 text-cosmic-blue px-3 py-1 rounded-full text-sm"
                        >
                        {inst.displayName}
                        </span>
                    ))}
                    </div>
                ) : (
                    <p className="text-space-light/70">No instrument data</p>
                )}
                
                {cme.note && (
                    <>
                    <h4 className="text-lg font-semibold text-space-light border-b border-space-light/10 pb-2 mt-6">
                        Notes
                    </h4>
                    <p className="text-space-light/80 bg-space-light/5 p-3 rounded-lg">
                        {cme.note}
                    </p>
                    </>
                )}
                </div>
            </div>

            {cme.cmeAnalyses && cme.cmeAnalyses.length > 0 && (
                <div className="space-y-4">
                <h4 className="text-lg font-semibold text-space-light border-b border-space-light/10 pb-2">
                    CME Analyses
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {cme.cmeAnalyses.map((analysis, aIdx) => (
                    <div key={aIdx} className="bg-space-darker border border-space-light/10 rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-start">
                        <h5 className="font-medium text-space-light">Analysis {aIdx + 1}</h5>
                        <span className="bg-sun-gold/20 text-sun-gold px-2 py-1 rounded text-xs font-medium">
                            {analysis.type}
                        </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <InfoItem label="Speed" value={`${analysis.speed} km/s`} />
                            <InfoItem label="Latitude" value={analysis.latitude.toString()} />
                            <InfoItem label="Longitude" value={analysis.longitude.toString()} />
                            <InfoItem label="Submitted" value={analysis.submissionTime ? new Date(analysis.submissionTime).toLocaleDateString() : 'N/A'} />
                        </div>


                        {analysis.enlilList && analysis.enlilList.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-space-light/10">
                            <h6 className="font-medium text-space-light/80 mb-2 flex items-center gap-2">
                            <svg className="w-4 h-4 text-cosmic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            ENLIL Models
                            </h6>
                            <div className="space-y-2">
                            {analysis.enlilList.map((enlil, eIdx) => (
                                <div key={eIdx} className="bg-space-dark p-3 rounded border border-space-light/5 text-sm">
                                <div className="flex justify-between mb-2">
                                    <span className="text-space-light/70">AU: {enlil.au}</span>
                                    <span className="text-space-light/70">
                                    Arrival: {enlil.estimatedShockArrivalTime ? new Date(enlil.estimatedShockArrivalTime).toLocaleDateString() : "N/A"}
                                    </span>
                                </div>
                                
                                {enlil.impactList && enlil.impactList.length > 0 && (
                                    <div className="mt-2">
                                    <div className="text-space-light/70 mb-1">Impact Analysis:</div>
                                    <div className="space-y-1">
                                        {enlil.impactList.map((impact, iIdx) => (
                                        <div key={iIdx} className="flex justify-between text-xs">
                                            <span>{impact.location}</span>
                                            <div className="flex gap-2">
                                            {impact.isGlancingBlow && (
                                                <span className="bg-sun-orange/20 text-sun-orange px-2 rounded">Glancing</span>
                                            )}
                                            {impact.isMinorImpact && (
                                                <span className="bg-solar-red/20 text-solar-red px-2 rounded">Minor</span>
                                            )}
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                    </div>
                                )}
                                </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </div>
                    ))}
                </div>
                </div>
            )}

            <div className="flex flex-wrap gap-4 pt-4 border-t border-space-light/10">
                {cme.link && (
                <a 
                    href={cme.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cosmic-blue/20 text-cosmic-blue hover:bg-cosmic-blue/30 px-4 py-2 rounded-lg transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Event Details
                </a>
                )}
            </div>
        </div>
    )
}

export default ExpandableContent;
