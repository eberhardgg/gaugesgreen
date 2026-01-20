/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "var(--color-primary)",
                    hover: "var(--color-primary-hover)",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
            },
            fontSize: {
                // Fluid typography scale
                'display': ['clamp(2.5rem, 2rem + 2vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '600' }],
                'headline': ['clamp(1.5rem, 1.25rem + 1vw, 2rem)', { lineHeight: '1.2', fontWeight: '600' }],
                'body': ['1.125rem', { lineHeight: '1.6' }],
                'small': ['0.875rem', { lineHeight: '1.5' }],
            },
            maxWidth: {
                prose: "38rem", // 608px, optimal reading width
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '24': '6rem',
            },
        },
    },
    plugins: [],
};
