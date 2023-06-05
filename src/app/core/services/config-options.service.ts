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

  // как вариант
  setConfigProperty(key: keyof ConfigModel, value: string): this {
    this.config[key] = value;
    return this;
  }
}
