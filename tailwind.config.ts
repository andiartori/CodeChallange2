import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				CFTEAM:
					"url('https://images.unsplash.com/photo-1607278967703-161b7cc497f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmlzdGF8ZW58MHx8MHx8fDA%3D')",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			// Marquee Animation
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},
			animation: {
				marquee: "marquee 30s linear infinite",
			},
		},
	},
	plugins: [
		// Add custom utilities using the plugin helper from Tailwind
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".vertical-rl": {
					"writing-mode": "vertical-rl",
				},
			};
			addUtilities(newUtilities);
		}),
	],
};

export default config;
