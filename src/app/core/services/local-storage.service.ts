export class LocalStorageService {
  private storage: Storage = window.localStorage;

  set<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T {
    const value: string | null = this.storage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

export const localStorageService: LocalStorageService = new LocalStorageService();
