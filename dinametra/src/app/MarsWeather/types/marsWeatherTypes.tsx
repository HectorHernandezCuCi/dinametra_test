export interface MarsWeatherData {
  [sol: string]: SolData;
}

export interface SolData {
  AT: Measurement;
  First_UTC: string;
  HWS: Measurement;
  Last_UTC: string;
  Month_ordinal: number;
  Northern_season: string;
  PRE: Measurement;
  Season: string;
  Southern_season: string;
  WD: WindDirections;
}

export interface Measurement {
  av: number;
  ct: number;
  mn: number;
  mx: number;
}

export interface WindDirections {
  [key: string]: WindDirection;
}

export interface WindDirection {
  compass_degrees: number;
  compass_point: string;
  compass_right: number;
  compass_up: number;
  ct: number;
}