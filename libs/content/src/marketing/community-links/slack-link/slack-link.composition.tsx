import React from "react"
import { ThemeCompositions } from "@watheia/iron-ui.theme.evangelist-theme"
import { brands } from "@watheia/iron-ui.theme.brands"
import { SlackLink } from "./slack-link"

export const SlackLinkExample = () => (
  <ThemeCompositions className={brands}>
    <SlackLink
      href="https://join.slack.com/t/bit-dev-community/shared_invite/enQtNzM2NzQ3MTQzMTg3LWI2YmFmZjQwMTkxNmFmNTVkYzU2MGI2YjgwMmJlZDdkNWVhOGIzZDFlYjg4MGRmOTM4ODAxNTIxMTMwNWVhMzg"
      data-testid="test-link"
    />
  </ThemeCompositions>
)
