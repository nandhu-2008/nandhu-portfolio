/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#F5F3ED',          // Warm ivory (Main background)
          secondary: '#EAE7DE',   // Soft cream (Secondary background)
          card: '#FFFFFF',        // White cards
          text: '#242923',        // Deep charcoal (Primary text)
          secondaryText: '#777B73', // Muted grey (Secondary text)
          muted: '#8A8E86',
          border: '#DEDCD2',      // Soft beige (Borders)
          borderHover: '#CDCABF',
          forest: '#496B55',      // Main accent (Forest green)
          forestDark: '#3A5543',
          forestLight: '#598066',
          terracotta: '#C17A5B',  // Secondary accent (Muted terracotta)
          terracottaDark: '#AC6A4D',
          terracottaLight: '#D08B6E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
      },
      keyframes: {
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
