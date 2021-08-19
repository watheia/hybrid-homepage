import React from "react"
import { ThemeCompositions } from "@watheia/iron-ui.theme.evangelist-theme"
import { brands } from "@watheia/iron-ui.theme.brands"
import { SupportChannels } from "./support-channels"

export const SupportChannelsExample = () => (
  <ThemeCompositions className={brands}>
    <SupportChannels data-testid="test-support" />
  </ThemeCompositions>
)
