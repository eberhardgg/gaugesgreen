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
                sans: ["Inter", "system-ui", "sans-serif"],
                serif: ["Source Serif Pro", "Georgia", "serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            maxWidth: {
                prose: "38rem", // ~608px, optimal reading width
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            animation: {
                "fade-in-up": "fadeInUp 0.5s ease-out forwards",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
