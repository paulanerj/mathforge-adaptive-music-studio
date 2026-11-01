export type TrackKind = 'percussion' | 'bass' | 'harmony' | 'melody' | 'atmosphere' | 'accent';
export type PercussionRole = 'pulse' | 'backbeat' | 'subdivision' | 'syncopation' | 'ornament';
export type SpeedGridStemName = 'pulse' | 'foundation' | 'rhythm' | 'energy' | 'tension';

export interface SpeedGridCompositionTrack {
  id: string;
  kind: TrackKind;
  percussionRole?: PercussionRole;
  adaptiveCategory: SpeedGridStemName;
  asset: string;       // Path to imported professional WAV stem (48kHz / lossless)
  baseGain: number;    // Linear amplitude (0.0 to 1.0)
  minMomentum: number; // 0.0 to 1.0
}

export interface SpeedGridComposition {
  version: 2;
  id: string;
  title: string;
  bpm: number;
  beatsPerBar: number;
  barsPerLoop: number;
  swing: number;
  key: string;
  tracks: SpeedGridCompositionTrack[];
}
