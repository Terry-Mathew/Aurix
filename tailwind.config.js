/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // DebutHub Color Palette
      colors: {
        // Primary Colors
        primary: {
          white: '#FFFFFF',
          charcoal: '#1E1E1E',
        },
        // Secondary Colors
        secondary: {
          navy: '#101828',
          'warm-orange': '#F97316',
          'blush-pale-orange': '#FFF7F1',
        },
        // Accent Colors
        accent: {
          gold: '#F4C542',
          'soft-gray': '#E5E7EB',
        },
        // Functional Colors
        functional: {
          success: '#22C55E',
          error: '#EF4444',
          info: '#3B82F6',
          warning: '#F59E0B',
        },
        // Background Colors
        background: {
          white: '#FFFFFF',
          light: '#FAFAFA',
          'footer-dark': '#0F172A',
        },
        // Input specific colors
        input: {
          background: '#F9FAFB',
          border: '#D1D5DB',
          focus: '#F97316',
          text: '#1E293B',
          placeholder: '#9CA3AF',
        },
        // Legacy shadcn colors for compatibility
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // Font Family
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      // Font Sizes
      fontSize: {
        'h1': ['36px', { lineHeight: '1.2', letterSpacing: '-0.2px', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['22px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-large': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
        'button': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
      },
      // Border Radius
      borderRadius: {
        'button': '8px',
        'card': '12px',
        'input': '8px',
        // Legacy
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Spacing System
      spacing: {
        '1': '4px',
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
      },
      // Box Shadow
      boxShadow: {
        'card': '0px 1px 6px rgba(16, 24, 40, 0.06)',
        'card-hover': '0px 4px 12px rgba(16, 24, 40, 0.12)',
      },
      // Animations
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-slide-up": {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        "scale-in": {
          from: { transform: 'scale(0.95)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-slide-up": "fade-slide-up 0.2s ease-out",
        "scale-in": "scale-in 0.28s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      // Transitions
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '280': '280ms',
        '300': '300ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 