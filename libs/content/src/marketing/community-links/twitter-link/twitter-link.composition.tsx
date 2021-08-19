import React from "react"
import { ThemeCompositions } from "@watheia/iron-ui.theme.evangelist-theme"
import { brands } from "@watheia/iron-ui.theme.brands"
import { TwitterLink } from "./twitter-link"

export const TwitterLinkExample = () => (
  <ThemeCompositions className={brands}>
    <TwitterLink href="https://twitter.com/bitdev_" data-testid="test-link" />
  </ThemeCompositions>
)
