import { StrictMode } from "react"
import * as ReactDOM from "react-dom"

import App from "./app/app"
import { Theme } from "@hybrid-homepage/iron-ui"

import { CssBaseline } from "@material-ui/core"
import "./styles.css"

ReactDOM.render(
  <StrictMode>
    <Theme>
      <CssBaseline />
      <App />
    </Theme>
  </StrictMode>,
  document.getElementById("root")
)
