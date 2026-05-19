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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				brand: {
					DEFAULT: 'hsl(var(--brand))',
					foreground: 'hsl(var(--brand-foreground))'
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
				},
				// ── Kravist Core raw tokens (§1.1)
				'k-orange':       'var(--k-orange)',
				'k-orange-hover': 'var(--k-orange-hover)',
				'k-orange-deep':  'var(--k-orange-deep)',
				'k-orange-soft':  'var(--k-orange-soft)',
				'k-ink':          'var(--k-ink)',
				'k-charcoal':     'var(--k-charcoal)',
				'k-graphite':     'var(--k-graphite)',
				'k-paper':        'var(--k-paper)',
				'k-paper-warm':   'var(--k-paper-warm)',
				'k-rule-light':   'var(--k-rule-light)',
				'k-navy':         'var(--k-navy)',
				'k-navy-elev':    'var(--k-navy-elev)',
				'k-navy-elev-2':  'var(--k-navy-elev-2)',
				'k-navy-deep':    'var(--k-navy-deep)',
				'k-rule':         'var(--k-rule)',
				'k-rule-2':       'var(--k-rule-2)',
				'k-mute':         'var(--k-mute)',
				'k-label':        'var(--k-label-on-dark)',
				'k-green':        'var(--k-green)',
				'k-cyan':         'var(--k-cyan)',
				'k-kids-blue':    'var(--k-kids-blue)',
				// ── Semantic aliases (§1.2) — non-conflicting names
				'bg-elev':        'var(--color-bg-elev)',
				'bg-deep':        'var(--color-bg-deep)',
				'bg-input':       'var(--color-bg-input)',
				'fg':             'var(--color-fg)',
				'fg-mute':        'var(--color-fg-mute)',
				'fg-label':       'var(--color-fg-label)',
				'accent-hover':   'var(--color-accent-hover)',
				'accent-fg':      'var(--color-accent-fg)',
				'rule':           'var(--color-rule)',
			},
			fontFamily: {
				wordmark: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
				display:  ['Anton', 'Barlow Condensed', 'Oswald', 'Impact', 'sans-serif'],
				sans:     ['Manrope', 'Helvetica Neue', 'Arial', 'sans-serif'],
			},
			fontSize: {
				'display-xl': ['clamp(64px, 9vw, 168px)',  { lineHeight: '0.92', letterSpacing: '0.04em' }],
				'display-lg': ['clamp(56px, 6vw, 104px)',  { lineHeight: '0.92', letterSpacing: '0.04em' }],
				'display-md': ['clamp(40px, 4.4vw, 72px)', { lineHeight: '0.92', letterSpacing: '0.04em' }],
				'display-sm': ['52px',                     { lineHeight: '0.92', letterSpacing: '0.04em' }],
				'h1':         ['clamp(40px, 4.4vw, 72px)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
				'h2':         ['clamp(32px, 3.2vw, 56px)', { lineHeight: '1.08', letterSpacing: '-0.01em'  }],
				'h3':         ['28px',                     { lineHeight: '1.2',  letterSpacing: '0'        }],
				'h4':         ['22px',                     { lineHeight: '1.2',  letterSpacing: '0'        }],
				'h5':         ['18px',                     { lineHeight: '1.25', letterSpacing: '0'        }],
				'h6':         ['16px',                     { lineHeight: '1.3',  letterSpacing: '0'        }],
				'body-lg':    ['19px',                     { lineHeight: '1.55' }],
				'body-md':    ['16px',                     { lineHeight: '1.55' }],
				'body-sm':    ['14px',                     { lineHeight: '1.55' }],
				'caption':    ['12px',                     { lineHeight: '1.45' }],
				'btn':        ['15px',                     { lineHeight: '1'    }],
				'wordmark-sm':['14px',                     { lineHeight: '1', letterSpacing: '0.32em' }],
				'wordmark-md':['22px',                     { lineHeight: '1', letterSpacing: '0.32em' }],
				'wordmark-lg':['56px',                     { lineHeight: '1', letterSpacing: '0.32em' }],
			},
			fontWeight: {
				wordmark: '300',
			},
			letterSpacing: {
				wordmark: '0.32em',
				eyebrow:  '0.16em',
				display:  '0.04em',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				// Kravist radius scale (§4) — additive
				'k-0':   '0',
				'k-1':   '6px',
				'k-2':   '8px',
				'k-3':   '14px',
				'k-4':   '20px',
				'k-pill':'9999px',
			},
			boxShadow: {
				flagship: '0 20px 60px -20px rgba(242, 101, 34, 0.35)',
				soft:     '0 6px 18px -10px rgba(0, 0, 0, 0.45)',
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
			},
			transitionDuration: {
				'hover': '150ms',
				'enter': '250ms',
				'cross': '400ms',
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
