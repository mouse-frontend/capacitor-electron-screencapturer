import { WebPlugin } from '@capacitor/core';

import type { ScreencapturerPlugin } from './definitions';

export class ScreencapturerWeb extends WebPlugin implements ScreencapturerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
