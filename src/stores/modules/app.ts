import { defineStore } from 'pinia';

export type Language = 'zh-CN' | 'en';
export type Theme = 'light' | 'dark';
export type Device = 'desktop' | 'mobile';

interface AppState {
  sidebarCollapsed: boolean;
  theme: Theme;
  language: Language;
  device: Device;
  count: number;
}

const updateThemeClass = (theme: Theme) => {
  // 主题切换时统一挂到 html 根节点，便于全局样式覆盖
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    sidebarCollapsed: false,
    theme: 'light',
    language: 'zh-CN',
    device: 'desktop',
    count: 0
  }),
  persist: {
    key: 'tauri_vue3_app',
    paths: ['sidebarCollapsed', 'theme', 'language', 'device', 'count']
  },
  actions: {
    initTheme() {
      updateThemeClass(this.theme);
    },
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    },
    setTheme(theme: Theme) {
      this.theme = theme;
      updateThemeClass(theme);
    },
    toggleTheme() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light');
    },
    setLanguage(language: Language) {
      this.language = language;
    },
    setDevice(device: Device) {
      this.device = device;
    },
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    }
  }
});
