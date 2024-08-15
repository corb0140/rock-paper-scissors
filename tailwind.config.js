/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgGradient: `linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%))`,
      },
      colors: {
        // Primary
        scissorsColorDark: `hsl(39, 89%, 49%)`,
        scissorsColor: `hsl(40, 84%, 53%)`,
        paperColorDark: `hsl(230, 89%, 62%)`,
        paperColor: `hsl(230, 89%, 65%)`,
        rockColorDark: `hsl(349, 71%, 52%)`,
        rockColor: `hsl(349, 70%, 56%)`,
        cyan: `hsl(189, 59%, 53%)`,

        // Neutral
        darkText: `hsl(229, 25%, 31%)`,
        scoreText: `hsl(229, 64%, 46%)`,
        headerOutline: `hsl(217, 16%, 45%)`,
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
