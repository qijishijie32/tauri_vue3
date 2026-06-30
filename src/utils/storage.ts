export const storage = {
  get<T>(key: string): T | null {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return raw as T;
    }
  },
  set(key: string, value: unknown) {
    const parsedValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, parsedValue);
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
};
