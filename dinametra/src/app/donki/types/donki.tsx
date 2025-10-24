interface Instrument {
  displayName: string;
}

export interface Impact {
  isGlancingBlow: boolean;
  isMinorImpact: boolean;
  location: string;
  arrivalTime: string;
}

export interface Enlil {
  modelCompletionTime: string;
  au: number;
  estimatedShockArrivalTime: string | null;
  estimatedDuration: string | null;
  rmin_re: number | null;
  kp_18: number | null;
  kp_90: number | null;
  kp_135: number | null;
  kp_180: number | null;
  isEarthGB: boolean;
  isEarthMinorImpact: boolean;
  link: string;
  impactList: Impact[];
  cmeIDs: string[];
}

interface CmeAnalysis {
  isMostAccurate: boolean;
  time21_5: string;
  latitude: number;
  longitude: number;
  halfAngle: number;
  speed: number;
  type: string;
  featureCode: string;
  imageType: string;
  measurementTechnique: string;
  note: string;
  levelOfData: number;
  tilt: number | null;
  minorHalfWidth: number | null;
  speedMeasuredAtHeight: number | null;
  submissionTime: string;
  link: string;
  enlilList: Enlil[];
}

export interface CoronalMassEjection {
  activityID: string;
  catalog: string;
  startTime: string;
  instruments: Instrument[];
  sourceLocation: string;
  activeRegionNum: number | null;
  note: string;
  submissionTime: string;
  versionId: number;
  link: string;
  cmeAnalyses: CmeAnalysis[];
  linkedEvents: Record<string, unknown> | null;
  sentNotifications: unknown[] | null;
}

