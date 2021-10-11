import { desktopCapturer } from 'electron';

import type { ScreencapturerPlugin, CapturerResponse } from '../../src';

export class Screencapturer implements ScreencapturerPlugin {
  async getSources(): Promise<CapturerResponse> {
    const sources = (await desktopCapturer.getSources({ types: ['window', 'screen'] })).map(({id}) => id);

    return { platform: 'electron', sources };
  }
}