import { createContext } from "react"
import { defaultTheme } from "@watheia/iron-ui.theme.spectrum"

export type ColorScheme = "light" | "dark" | undefined

export type ThemeType = {
  /**
   * primary color of theme.
   */
  colorScheme?: ColorScheme
  theme?: typeof defaultTheme
}

export const Theme = createContext<ThemeType>({
  colorScheme: undefined,
  theme: defaultTheme
})
