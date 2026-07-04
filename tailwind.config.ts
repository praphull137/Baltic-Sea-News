
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#667eea',
					foreground: '#ffffff',
					50: '#f0f4ff',
					100: '#e0edff',
					200: '#c7dbff',
					300: '#a4c2ff',
					400: '#819eff',
					500: '#667eea',
					600: '#5a67d8',
					700: '#4c51bf',
					800: '#434190',
					900: '#3c366b'
				},
				secondary: {
					DEFAULT: '#764ba2',
					foreground: '#ffffff',
					50: '#f7f5ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#764ba2',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95'
				},
				accent: {
					DEFAULT: '#f093fb',
					foreground: '#ffffff',
					50: '#fdf4ff',
					100: '#fae8ff',
					200: '#f5d0fe',
					300: '#f0abfc',
					400: '#e879f9',
					500: '#d946ef',
					600: '#c026d3',
					700: '#a21caf',
					800: '#86198f',
					900: '#701a75'
				},
				wellness: {
					blue: {
						50: '#f0f4ff',
						100: '#e0edff',
						200: '#c7dbff',
						300: '#a4c2ff',
						400: '#819eff',
						500: '#667eea',
						600: '#5a67d8',
						700: '#4c51bf',
						800: '#434190',
						900: '#3c366b'
					},
					green: {
						50: '#f0fdf9',
						100: '#dcfce7',
						200: '#bbf7d0',
						300: '#86efac',
						400: '#4ade80',
						500: '#22c55e',
						600: '#16a34a',
						700: '#15803d',
						800: '#166534',
						900: '#14532d'
					},
					purple: {
						50: '#faf5ff',
						100: '#f3e8ff',
						200: '#e9d5ff',
						300: '#d8b4fe',
						400: '#c084fc',
						500: '#a855f7',
						600: '#9333ea',
						700: '#7c3aed',
						800: '#6b21a8',
						900: '#581c87'
					},
					pink: {
						50: '#fdf2f8',
						100: '#fce7f3',
						200: '#fbcfe8',
						300: '#f9a8d4',
						400: '#f472b6',
						500: '#ec4899',
						600: '#db2777',
						700: '#be185d',
						800: '#9d174d',
						900: '#831843'
					},
					orange: {
						50: '#fff7ed',
						100: '#ffedd5',
						200: '#fed7aa',
						300: '#fdba74',
						400: '#fb923c',
						500: '#f97316',
						600: '#ea580c',
						700: '#c2410c',
						800: '#9a3412',
						900: '#7c2d12'
					}
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'rainbow-glow': {
					'0%': { boxShadow: '0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080' },
					'25%': { boxShadow: '0 0 20px #0080ff, 0 0 30px #0080ff, 0 0 40px #0080ff' },
					'50%': { boxShadow: '0 0 20px #80ff00, 0 0 30px #80ff00, 0 0 40px #80ff00' },
					'75%': { boxShadow: '0 0 20px #ff8000, 0 0 30px #ff8000, 0 0 40px #ff8000' },
					'100%': { boxShadow: '0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080' }
				},
				'pulse-rainbow': {
					'0%, 100%': { 
						background: 'linear-gradient(45deg, #667eea, #764ba2)',
						transform: 'scale(1)'
					},
					'50%': { 
						background: 'linear-gradient(45deg, #f093fb, #f5576c)',
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'rainbow-glow': 'rainbow-glow 3s ease-in-out infinite',
				'pulse-rainbow': 'pulse-rainbow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
