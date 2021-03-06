import React from "react"
import { ThemeCompositions } from "@watheia/iron-ui.theme.evangelist-theme"
import { ComponentAnalytics } from "./component-analytics"

export const ComponentAnalyticsExample = () => (
  <ThemeCompositions>
    <ComponentAnalytics data-testid="test-analytics" />
  </ThemeCompositions>
)

ComponentAnalyticsExample.canvas = {
  height: 400,
  width: 1440
}
