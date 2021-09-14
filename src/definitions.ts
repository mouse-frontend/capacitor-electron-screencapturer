export interface ScreencapturerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
