import { desktopCapturer } from 'electron';

import type { ScreencapturerPlugin, IScreencapturerSource } from '../../src';

export class Screencapturer implements ScreencapturerPlugin {
  async getSources(): Promise<IScreencapturerSource[]> {
    const sources = await desktopCapturer.getSources({ types: ['window', 'screen'] });

    return sources.map(({id, name}) => {
      return {
        id,
        name,
      }
    });
  }
}