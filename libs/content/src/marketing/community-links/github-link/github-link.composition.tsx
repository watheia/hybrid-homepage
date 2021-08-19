import React from "react"
import { ThemeCompositions } from "@watheia/iron-ui.theme.evangelist-theme"
import { brands } from "@watheia/iron-ui.theme.brands"
import { GithubLink } from "./github-link"

export const GithubLinkExample = () => (
  <ThemeCompositions className={brands}>
    <GithubLink
      href="https://github.com/teambit/bit"
      starCount={500000}
      data-testid="test-link"
    />
  </ThemeCompositions>
)
