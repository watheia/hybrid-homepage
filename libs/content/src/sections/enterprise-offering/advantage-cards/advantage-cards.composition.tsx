import React from "react"
import { ThemeCompositions } from "@watheia/iron-ui.theme.evangelist-theme"
import { AdvantageCards } from "./advantage-cards"

export const AdvantageCardsExample = () => (
  <ThemeCompositions>
    <AdvantageCards data-testid="test-cards" />
  </ThemeCompositions>
)

AdvantageCardsExample.canvas = {
  width: 1440,
  height: 400
}
