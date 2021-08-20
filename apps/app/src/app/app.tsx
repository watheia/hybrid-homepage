import React, { useEffect, useState } from "react"

import { Route, Link } from "react-router-dom"
import { IronUi } from "@hybrid-homepage/iron-ui"
import { Message } from "@hybrid-homepage/api-interfaces"
import { HybridHomepage, SupportPage } from "@hybrid-homepage/content"
import { Theme } from "@hybrid-homepage/iron-ui"
import { Divider, View } from "@adobe/react-spectrum"

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: "" })

  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then(setMessage)
  }, [])

  return (
    <Theme>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to app!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Extensible Build Framework"
        />
      </div>
      <div>{m.message}</div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <Divider />
      <br />
      <View data-role="navigation" backgroundColor="seafoam-700">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </View>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{" "}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route path="/home" component={HybridHomepage} />
      <Route path="/support" component={SupportPage} />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </Theme>
  )
}

export default App
