/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        aurometalaaurus: "#6B7280",
        dark: "#292c35",
        darkred: "#DC2626",
        bg_primary_100: "#44334445",
        bg_primary_200: "#5747575a",
        bg_primary_300: "#6a5b6a6e",
        bg_primary_400: "#7e717e83",
        bg_primary_500: "#92879297",
        bg_primary_600: "#a79ea7ac",
        bg_surface_100: "#000000",
        bg_surface_200: "#1e1e1e",
        bg_surface_300: "#353535",
        bg_surface_400: "#4e4e4e",
        bg_surface_500: "#696969",
        bg_surface_600: "#858585",
        bg_surface_mixed_100: "#0b080bec",
        bg_surface_mixed_200: "#232223ee",
        bg_surface_mixed_300: "#3a393af0",
        bg_surface_mixed_400: "#535253f3",
        bg_surface_mixed_500: "#6d6c6df5",
        bg_surface_mixed_600: "#898889f7",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        maxXs: { max: "468px" },
        maxSm: { max: "639px" },
        maxMd: { max: "767px" },
        maxXlg: { max: "992px" },
        maxLg: { max: "1023px" },
        maxXl: { max: "1279px" },
      },
      fontFamily: {
        "inter-regular": "InterRegular",
        "inter-medium": "InterMedium",
        "inter-semibold": "InterSemiBold",
        "inter-bold": "InterBold",
        "inter-extrabold": "InterExtraBold",
      },
      boxShadow: {
        default: "0px 1px 4px 0px rgba(0, 0, 0, 0.14)",
        light: "rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
};

// Dark/Mixed - 100: For body background color

// Dark/Mixed - 200: For cards background color

// Dark/Mixed - 300: For chips buttons, dropdowns background color

// Dark/Mixed - 400: For sidebars, navbar background color

// Dark/Mixed - 500: For modal, dialogs background color

// Dark/Mixed - 600: For on background texts color
