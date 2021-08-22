import { createTheme, responsiveFontSizes } from "@material-ui/core/styles"

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: "#9be5e5",
        main: "#04BFBF",
        dark: "#038f8f"
      },
      secondary: {
        light: "#9ab6c7",
        main: "#024873",
        dark: "#012b45"
      },
      text: {
        primary: "#110f10",
        secondary: "#231f20"
      },
      background: {
        default: "#fafbfb",
        paper: "#fefeff"
      }
    }
  })
)

export default theme
