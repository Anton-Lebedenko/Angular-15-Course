import { Injectable } from '@angular/core';
import { genID } from './gen-id.generator';

@Injectable()
export class GeneratorService {
  private idGenerator: Generator<number>;
  constructor() {
    this.idGenerator = genID();
  }

  generate(n: number): string {
    const charactersTemplate: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result: string = '';

    for (let i = 0; i < n; i++) {
      let randomIndex = Math.floor(Math.random() * charactersTemplate.length);
      result += charactersTemplate.charAt(randomIndex);
    }

    return result;
  }

  getNewID(): number {
    return this.idGenerator.next().value;
  }
}
