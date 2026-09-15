/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      colors: {
        ink: '#09090b',
        // Dark-only surfaces (page -> elevated)
        night: {
          950: '#03080a',
          900: '#04090c',
          850: '#060e12',
          800: '#0a1419',
          700: '#0e1a20',
        },
        // Warm off-white text — softer than pure white on near-black
        bone: '#E9E6DE',
        // Muted secondary text
        fog: '#99A2A6',
        // Electric lime accent — used sparingly (brand mark, primary CTAs, key badges)
        volt: {
          DEFAULT: '#C8FF00',
          soft: '#DDFF66',
          bright: '#D8FF3D',
          deep: '#8FB800',
        },
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.08)',
        'lift': '0 1px 2px rgba(0,0,0,0.05), 0 24px 64px -16px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)',
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'night': '0 24px 80px -24px rgba(0,0,0,0.8)',
        'toast': '0 16px 48px -12px rgba(0,0,0,0.8)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      }
    },
  },
  plugins: [],
}
