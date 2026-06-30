import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.1,
      warn: true
    })
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'wh-full': 'w-full h-full',
    'text-regular': 'text-sm text-gray-600 dark:text-gray-300'
  },
  theme: {
    colors: {
      primary: '#409eff'
    }
  }
});
