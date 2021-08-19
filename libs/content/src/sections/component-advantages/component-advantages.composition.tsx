import React from "react"
import { ThemeCompositions } from "@watheia/iron-ui.theme.evangelist-theme"
import { ComponentsAdvantages } from "./component-advantages"

export const ComponentsAdvantagesExample = () => (
  <ThemeCompositions>
    <ComponentsAdvantages data-testid="test-advantages" />
  </ThemeCompositions>
)

ComponentsAdvantagesExample.canvas = {
  width: 1440,
  height: 400
}
