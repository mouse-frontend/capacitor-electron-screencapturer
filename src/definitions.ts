import type Electron from 'electron';

export interface CapturerResponse {
  platform: string;
  sources: Electron.DesktopCapturerSource[];
}

export interface ScreencapturerPlugin {
  getSources(): Promise<CapturerResponse>;
}
