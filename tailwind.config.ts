import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                "neon-pink": "#ff00ff",
                "neon-purple": "#bc13fe",
                "glass-bg": "rgba(255, 255, 255, 0.05)",
                "glass-border": "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ["var(--font-montserrat)", "sans-serif"],
                eyesome: ["var(--font-eyesome)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "hero-gradient": "linear-gradient(to right, #0a0a0a, #1a0b1a)",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                twinkle: {
                    "0%, 100%": { opacity: "0", transform: "scale(0.5)" },
                    "50%": { opacity: "1", transform: "scale(1.2)" },
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                twinkle: "twinkle 3s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
export default config;
