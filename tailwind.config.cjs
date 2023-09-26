/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'surprise': '#67D4B5',
				'favorite': '#C89DC5',
				'love': '#DC848E',
				'angry': '#E0E3DA',
				'haha': '#EC7359',
				'sad': '#FEEE7D',
				'hisoka': '#CCF0FE',
				'party': '#FB968B',
				'deadpool': '#C5C6B6',
				'bear': '#A5D297',
				'dollar': '#28ABEE',
				'bitcoin': '#FAB1CE',
				'poison': '#CCF0FE',
				'404': '#FBD14B',
				'dribbble': '#E71D36',
				'ditto': '#77AAAC',
				'candy': '#ACECFE',
				'wink': '#E53A40',
				'orca': '#1C7FFF',
				'monstruo': '#3AC568',
				'moon': '#353840',
				't-800': '#791E94',
				'sleep': '#F7AA97',
				'sick': "#6AAFE6"
			},
			fontFamily: {
				pattaya: ["Pattaya"],
				raleway: ["Raleway Variable"],
			},
		},
	},
	plugins: [],
}
