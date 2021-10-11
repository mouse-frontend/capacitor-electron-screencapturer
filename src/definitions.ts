export interface IScreencapturerSource {
  id: string;
  name: string;
}

export interface ScreencapturerPlugin {
  getSources(): Promise<IScreencapturerSource[]>;
}
