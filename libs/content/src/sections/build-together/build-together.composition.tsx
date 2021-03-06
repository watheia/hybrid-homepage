import React from "react"
import { ThemeCompositions } from "@watheia/iron-ui.theme.evangelist-theme"
import { BuildTogether } from "./build-together"

export const BuildTogetherExample = () => (
  <ThemeCompositions>
    <BuildTogether data-testid="test-build" />
  </ThemeCompositions>
)

BuildTogetherExample.canvas = {
  width: 1440,
  height: 400
}
