module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // برای متن‌های عادی
        serif: ['Playfair Display', 'serif'], // برای تیترها
      },
    },
  },
  plugins: [],
};
