module.exports = {
  theme: {
    extend: {
      colors: {
        "accent-1": "#fefeff",
        "accent-2": "#eef2f9",
        "accent-7": "#151313",
        success: "#024873",
        cyan: "#04BFBF",
        "sherpa-blue": {
          50: "#f2f6f7",
          100: "#e6eeee",
          200: "#c0d4d6",
          300: "#9ab9bd",
          400: "#4e858b",
          500: "#025159",
          600: "#024950",
          700: "#023d43",
          800: "#013135",
          900: "#01282c"
        },
        "regal-blue": {
          50: "#f2f6f8",
          100: "#e6edf1",
          200: "#c0d1dc",
          300: "#9ab6c7",
          400: "#4e7f9d",
          500: "#024873",
          600: "#024168",
          700: "#023656",
          800: "#012b45",
          900: "#012338"
        },
        "ai-aqua": {
          50: "#f2fcfc",
          100: "#e6f9f9",
          200: "#c0efef",
          300: "#9be5e5",
          400: "#4fd2d2",
          500: "#04BFBF",
          600: "#04acac",
          700: "#038f8f",
          800: "#027373",
          900: "#025e5e"
        },
        shark: {
          50: "#fefeff",
          100: "#fafbfb",
          200: "#dbdcdd",
          300: "#a7a5a6",
          400: "#656263",
          500: "#231f20",
          600: "#201c1d",
          700: "#1a1718",
          800: "#151313",
          900: "#110f10"
        },
        "san-marino": {
          50: "#f6f8fc",
          100: "#eef2f9",
          200: "#d3deef",
          300: "#b9cae5",
          400: "#85a2d2",
          500: "#507ABF",
          600: "#486eac",
          700: "#3c5c8f",
          800: "#304973",
          900: "#273c5e"
        }
      },
      spacing: {
        28: "7rem"
      },
      letterSpacing: {
        tighter: "-.04em"
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem"
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)"
      },
      typography: {
        lg: {
          css: {
            img: {
              marginTop: "0",
              marginBottom: "0"
            }
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio")
  ]
}
