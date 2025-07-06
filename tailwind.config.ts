import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Primary Brand Colors
        'brand-orange': {
          light: '#fad9c1',
          DEFAULT: '#ed7544',
          dark: '#de5d2a',
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fdd9c1',
          300: '#fbc296',
          400: '#f8a169',
          500: '#f19569',
          600: '#ed7544',
          700: '#de5d2a',
          800: '#b84a22',
          900: '#9a3f1e',
        },
        // Design System Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
      backgroundImage: {
        // Primary Brand Gradients
        'brand-primary': 'linear-gradient(135deg, #ed7544 0%, #f19569 50%, #fad9c1 100%)',
        'brand-button': 'linear-gradient(135deg, #ed7544 0%, #de5d2a 100%)',
        'brand-text': 'linear-gradient(135deg, #ed7544 0%, #f19569 100%)',
        'brand-subtle': 'linear-gradient(135deg, #fef7f0 0%, #feeee0 100%)',
        // Additional Gradients
        'blue-badge': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'hero-bg': 'linear-gradient(135deg, #fef7f0 0%, #ffffff 50%, #fef7f0 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.0125em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.0125em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.0125em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.00625em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0.00625em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.00625em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.0125em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.0125em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      boxShadow: {
        // Card Shadows
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        // Button Shadows
        'button': '0 4px 14px 0 rgba(237, 117, 68, 0.3)',
        'button-hover': '0 6px 20px 0 rgba(237, 117, 68, 0.4)',
        'button-orange': '0 4px 14px 0 rgba(237, 117, 68, 0.3)',
        'button-orange-hover': '0 6px 20px 0 rgba(237, 117, 68, 0.4)',
        // Subtle Shadows
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'header': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        // QR Code Shadow
        'qr': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      letterSpacing: {
        'tighter': '-0.025em',
        'tight': '-0.0125em',
        'normal': '0em',
        'wide': '0.0125em',
        'wider': '0.025em',
        'widest': '0.05em',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.1',
        'snug': '1.25',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config 