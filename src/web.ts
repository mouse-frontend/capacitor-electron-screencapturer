import { WebPlugin } from '@capacitor/core';

import type { ScreencapturerPlugin, CapturerResponse } from './definitions';

export class ScreencapturerWeb extends WebPlugin implements ScreencapturerPlugin {
  async getSources(): Promise<CapturerResponse> {
    return {platform: 'web'};
  }
}