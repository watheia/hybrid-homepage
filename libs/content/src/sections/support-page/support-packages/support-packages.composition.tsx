import React from "react"
import { ThemeCompositions } from "@watheia/iron-ui.theme.evangelist-theme"
import { SupportPackages } from "./support-packages"

export const SupportPackagesExample = () => (
  <ThemeCompositions>
    <SupportPackages data-testid="test-support">
      support comparison table should be passed
    </SupportPackages>
  </ThemeCompositions>
)
