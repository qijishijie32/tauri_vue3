import js from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'src-tauri/target/**',
      'auto-imports.d.ts',
      'components.d.ts',
      'env.d.ts'
    ]
  },
  js.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsEslint
    },
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      }
    },
    rules: {
      'no-undef': 'off'
    }
  },
  prettier
];
