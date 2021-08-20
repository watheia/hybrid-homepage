import React from "react"
import { Roboto } from "@watheia/iron-ui.theme.fonts.roboto"
import { IconFont } from "@watheia/iron-ui.theme.icons-font"
import { Theme, ThemeProps } from "./theme-provider"

export function ThemeCompositions(props: ThemeProps) {
  return (
    <Theme {...props}>
      <IconFont query="eo46cx" />
      <Roboto />
      {props.children}
    </Theme>
  )
}
