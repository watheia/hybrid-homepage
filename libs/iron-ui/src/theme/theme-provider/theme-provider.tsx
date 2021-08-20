import { darkTheme, defaultTheme, lightTheme, Provider } from "@adobe/react-spectrum"
import { brands } from "@watheia/iron-ui.theme.brand-definition"
import { primaryPalette, spectrumPalette } from "@watheia/iron-ui.theme.color-definition"
import { bookFont } from "@watheia/iron-ui.theme.fonts.book"
import { headingMargins } from "@watheia/iron-ui.theme.heading-margin-definition"
import { shadowTheme } from "@watheia/iron-ui.theme.shadow-definition"
import { headingFontSize, textFontSize } from "@watheia/iron-ui.theme.size-definition"
import classNames from "classnames"
import React, { HTMLAttributes } from "react"
import texts from "./texts.module.scss"
import type { ThemeType } from "./theme-context"

export type ThemeProps = ThemeType & HTMLAttributes<HTMLDivElement>

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme({ colorScheme, ...props }: ThemeProps) {
  let theme = defaultTheme // colorScheme undefined
  if (colorScheme === "light") {
    theme = lightTheme
  } else if (colorScheme === "dark") {
    theme = darkTheme
  }
  return (
    <Provider colorScheme={colorScheme} theme={theme}>
      <div
        {...props}
        className={classNames(
          headingFontSize,
          textFontSize,
          bookFont,
          spectrumPalette,
          shadowTheme,
          primaryPalette,
          brands,
          headingMargins,
          texts.defaults,
          props.className
        )}
      ></div>
    </Provider>
  )
}
