import { globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default [
  // ۱. اول تنظیمات اصلی Next.js را بارگذاری می‌کنیم
  ...nextVitals,

  // ۲. فایل‌هایی که باید نادیده گرفته شوند
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'node_modules/**',
    ],
  },

  // ۳. تنظیمات اختصاصی برای نمایش خطاهای متغیرها
  {
    rules: {
      'no-unused-vars': 'error', // باعث می‌شود زیر متغیرهای استفاده نشده خط قرمز بیاید
      'no-console': 'warn', // به تو هشدار می‌دهد که کنسول‌لاگ‌ها را پاک کنی
    },
  },

  // ۴. در نهایت تنظیمات Prettier (حتماً آخرین مورد باشد)
  eslintConfigPrettier,
]
