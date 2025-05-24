/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent:  "#00536D",   // ユーザー指定アクセント
        base:    "#FFF3E3",   // ベース
        text:    "#592D13"    // テキスト
      }
    }
  },
  plugins: []
}
