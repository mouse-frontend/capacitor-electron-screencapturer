export interface CapturerResponse {
  platform: string;
  sources: string[];
}

export interface ScreencapturerPlugin {
  getSources(): Promise<CapturerResponse>;
}
