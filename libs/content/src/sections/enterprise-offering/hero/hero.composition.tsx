import React from "react"
import { ThemeCompositions } from "@watheia/iron-ui.theme.evangelist-theme"
import { Hero } from "./hero"

export const HeroExample = () => (
  <ThemeCompositions>
    <Hero data-testid="test-hero" />
  </ThemeCompositions>
)
