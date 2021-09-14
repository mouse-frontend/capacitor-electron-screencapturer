import { desktopCapturer } from 'electron';

import type { ScreencapturerPlugin, CapturerResponse } from '../../src';

export class ScreencapturerElectron implements ScreencapturerPlugin {
  async getSources(): Promise<CapturerResponse> {
    const sources = await desktopCapturer.getSources({ types: ['window', 'screen'] });

    return { platform: 'electron', sources };
  }
}