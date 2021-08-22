import { StrictMode } from "react"
import * as ReactDOM from "react-dom"
import "./styles.css"

import App from "./app/app"
import { Theme } from "@hybrid-homepage/iron-ui"

import { BrowserRouter } from "react-router-dom"

import { createTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

const theme = responsiveFontSizes(
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

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Theme>
          <CssBaseline />
          <App />
        </Theme>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
)
