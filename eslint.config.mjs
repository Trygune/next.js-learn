// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'

import nextVitals from 'eslint-config-next/core-web-vitals'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default [
  ...nextVitals,
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'node_modules/**',
    ],
  },
  {
    files: ['**/*.test.js', '**/*.test.jsx', '**/__tests__/**'], // فقط برای فایل‌های تست
    languageOptions: {
      globals: {
        ...globals.jest, // این جایگزین env: { jest: true } قدیمی است
      },
    },
  },
  {
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },
  eslintConfigPrettier,
  ...storybook.configs['flat/recommended'],
]
