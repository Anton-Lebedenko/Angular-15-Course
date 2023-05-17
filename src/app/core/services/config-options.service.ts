import { Injectable } from '@angular/core';
import { ConfigModel } from '../models';

@Injectable()
export class ConfigOptionsService {
  private config: ConfigModel = {
    id: null,
    login: null,
    email: null
  };

  constructor() {}

  setConfig(config: Partial<ConfigModel>): void {
    this.config = {
      ...this.config,
      ...config
    };
  }

  getConfig(): ConfigModel {
    return this.config;
  }

  setConfigProperty(key: keyof ConfigModel, value: string): void {
    this.config[key] = value;
  }
}
