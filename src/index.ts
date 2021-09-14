import { registerPlugin } from '@capacitor/core';

import type { ScreencapturerPlugin } from './definitions';

const Screencapturer = registerPlugin<ScreencapturerPlugin>('Screencapturer', {
  web: () => import('./web').then(m => new m.ScreencapturerWeb()),
});

export * from './definitions';
export { Screencapturer };
