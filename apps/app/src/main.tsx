import { StrictMode } from "react"
import * as ReactDOM from "react-dom"
import "./styles.css"

import App from "./app/app"
import { Theme } from "@hybrid-homepage/iron-ui"

import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
)
