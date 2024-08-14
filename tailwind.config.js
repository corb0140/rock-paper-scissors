/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        // Primary
        scissorsGradient: `from-hsl(39, 89%, 49%), to-hsl(40, 84%, 53%)`,
        paperGradient: `from-hsl(230, 89%, 62%), to-hsl(230, 89%, 65%)`,
        rockGradient: `from-hsl(349, 71%, 52%), to-hsl(349, 70%, 56%)`,
        cyan: `hsl(189, 59%, 53%)`,

        // Neutral
        darkText: `hsl(229, 25%, 31%)`,
        scoreText: `hsl(229, 64%, 46%)`,
        headerOutline: `hsl(217, 16%, 45%)`,

        // Background
        radioGradient: `from-hsl(214, 47%, 23%), to-hsl(237, 49%, 15%)`,
      },
      screens: {
        xs: "375px",
        sm: "440px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
      },
      fontFamily: {
        Barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      fontSize: {},
    },
  },
  plugins: [],
};
