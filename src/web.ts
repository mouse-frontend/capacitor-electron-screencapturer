import { WebPlugin } from '@capacitor/core';

import type { ScreencapturerPlugin, IScreencapturerSource } from './definitions';

export class ScreencapturerWeb extends WebPlugin implements ScreencapturerPlugin {
  async getSources(): Promise<IScreencapturerSource[]> {
    return [];
  }
}