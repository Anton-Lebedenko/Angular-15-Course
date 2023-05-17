import { InjectionToken } from '@angular/core';

export type ConstantsServiceType = {
  App: string;
  Ver: string;
  API_URL: string;
};

export const constantsService: ConstantsServiceType = {
  App: 'TaskManager',
  Ver: '1.0',
  API_URL: 'https://google.com'
};

export const ConstantsService: InjectionToken<ConstantsServiceType> = new InjectionToken<ConstantsServiceType>('ConstantsService');
