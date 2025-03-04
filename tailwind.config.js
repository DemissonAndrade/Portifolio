module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#0ea5e9",
          secondary: "#7c3aed",
          background: "#0f172a",
          card: "#1e293b",
        },
        animation: {
          "gradient-text": "gradient-text 5s ease infinite",
        },
      },
    },
    plugins: [],
  };