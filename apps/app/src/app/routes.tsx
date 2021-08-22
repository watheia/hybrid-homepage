import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { EnterpriseOffering, HybridHomepage, SupportPage } from "@hybrid-homepage/content"

export const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HybridHomepage} />
      <Route exact path="/home" component={EnterpriseOffering} />
      <Route exact path="/support" component={SupportPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRoutes
