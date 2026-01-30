import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          bg: { value: 'var(--color-bg)' },
          text: { value: 'var(--color-text)' },
          primary: { value: 'var(--color-primary)' },
          secondary: { value: 'var(--color-secondary)' },
          lightgray: { value: 'var(--color-lightgray)' },
          light: { value: 'var(--color-light)' },
        },
        fonts: {
          body: { value: 'var(--font-body)' },
          heading: { value: 'var(--font-heading)' },
          mono: { value: 'var(--font-mono)' },
        },
        fontSizes: {
          h1: { value: 'var(--text-3xl)' },
          h2: { value: 'var(--text-2xl)' },
          h3: { value: 'var(--text-xl)' },
          h4: { value: 'var(--text-lg)' },
          h5: { value: 'var(--text-md)' },
          h6: { value: 'var(--text-sm)' },

          xs: { value: 'var(--text-xs)' },
          sm: { value: 'var(--text-sm)' },
          md: { value: 'var(--text-md)' },
          lg: { value: 'var(--text-lg)' },
          xl: { value: 'var(--text-xl)' },
          '2xl': { value: 'var(--text-2xl)' },
          '3xl': { value: 'var(--text-3xl)' },
        },
        spaces: {
          1: { value: 'var(--space-1)' },
          2: { value: 'var(--space-2)' },
          3: { value: 'var(--space-3)' },
          4: { value: 'var(--space-4)' },
          5: { value: 'var(--space-5)' },
          6: { value: 'var(--space-6)' },
        },
        radii: {
          card: { value: '8px' },
        },
        lineHeights: {
          h1: { value: '48px' },
          h2: { value: '40px' },
          h3: { value: '32px' },
          h4: { value: '28px' },
          h5: { value: '24px' },
          h6: { value: '20px' },
        },
      },
      recipes: {
        button: {
          base: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4',
            borderRadius: 'lg',
            cursor: 'pointer',
            transition: 'all 0.2s',
            borderWidth: '2px',
            borderStyle: 'solid',
            fontWeight: 'medium',
            outline: 'none',

            _disabled: {
              opacity: 0.6,
              cursor: 'not-allowed',
              boxShadow: 'none',
              pointerEvents: 'none', // این باعث می‌شود hover هم غیرفعال شود
            },
          },
          variants: {
            visual: {
              primary: {
                backgroundColor: 'primary',
                color: 'white',
                borderColor: 'primary',
                _hover: {
                  backgroundColor: 'white',
                  color: 'primary',
                  shadow: 'lg',
                },
              },
              secondary: {
                backgroundColor: 'transparent',
                color: 'text',
                borderColor: 'text',
                _hover: { shadow: 'lg' },
              },
            },
            widthSize: {
              sm: { width: 'max-content' },
              md: { width: 'sm' },
              full: { width: 'full' },
            },
          },
          defaultVariants: {
            visual: 'primary',
            widthSize: 'sm',
          },
        },
      },
    },
  },
  staticCss: {
    recipes: {
      button: ['*'],
    },
  },
  // The output directory for your css system
  outdir: 'styled-system',
  // Makes css file
  // emitCss: true,
})
