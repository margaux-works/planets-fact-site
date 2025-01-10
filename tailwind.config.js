/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      darkBlue: '#070724',
      blue: '#2d68f0',
      darkGray: '#38384F',
      gray: '#838391',
      turquoise: '#419EBB',
      salmon: '#EDA249',
      orange: '#D14C32',
      darkOrange: '#CD5120',
      purple: '#6f2ed6',
      red: '#D83A34',
      green: '#1ec2a4',
      white: '#fff',
    },
    extend: {},
    fontFamily: {
      antonio: ['"Antonio"', 'sans-serif'],
      spartan: ['"League Spartan"', 'sans-serif'],
    },
  },
  safelist: [
    {
      pattern:
        /(bg|border)-(turquoise|salmon|purple|orange|red|darkOrange|green|blue)/,
    },
  ],
  plugins: [],
};
