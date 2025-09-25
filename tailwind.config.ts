import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
        secondary: {
          50: "#F8EFEA", // 非常淺的奶杏色
          100: "#EBD9CD", // 更淺的粉膚色棕
          200: "#D3BBAF", // 淺棕杏色
          300: "#B89892", // 中性色調棕褐
          400: "#A39171", // 現有中間棕金色
          500: "#6D4C3D", // 現有主色，較深的朱古力棕
          600: "#5B3F33", // 深巧克力棕
          700: "#493227", // 更深的咖啡棕
          800: "#33241B", // 接近黑色的深棕
          900: "#1A120D", // 極深的咖啡底棕黑色
        },
        primary: {
          50: "#F6FAF5", // 非常淺的薄荷白綠
          100: "#E5EFE4", // 更淺的淡灰綠
          200: "#C7D7C5", // 柔和的淺灰綠
          300: "#A9BFA7", // 中性色灰綠
          400: "#ABC4AB", // 現有柔灰綠
          500: "#727D71", // 現有主色，結構性低彩灰綠
          600: "#5A6459", // 更深的灰墨綠
          700: "#424B42", // 深灰綠，接近樹幹色
          800: "#2B312B", // 接近黑色的深灰綠
          900: "#161A16", // 極深的森林灰黑色
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
