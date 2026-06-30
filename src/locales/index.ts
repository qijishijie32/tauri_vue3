import { createI18n } from 'vue-i18n';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

import localEn from './lang/en';
import localZhCN from './lang/zh-CN';
import { storage } from '@/utils/storage';
import type { Language } from '@/stores/modules/app';

interface PersistedAppState {
  language?: Language;
}

const savedLanguage = storage.get<PersistedAppState>('tauri_vue3_app')?.language;
const locale = savedLanguage || 'zh-CN';

export const elementLocales = {
  'zh-CN': zhCn,
  en
};

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': localZhCN,
    en: localEn
  }
});
