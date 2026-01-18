import { globalIgnores } from 'eslint/config'
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
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },

  eslintConfigPrettier,
]
