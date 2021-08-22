import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { Paragraph } from "@watheia/content.text.paragraph"
import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { mutedText } from "@watheia/content.text.muted-text"

import { H2 } from "@watheia/content.elements.heading"
import { textColumn } from "@watheia/content.layout.page-frame"
import { marginCenter } from "@watheia/content.layout.align"

/**
 * Title and description to the Bit integrations ecosystem.
 * @name EcoSystem
 */
export const EcoSystem = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} data-bit-id="watheia.content/sections/enterprise-offering/eco-system">
      <H2 size={PossibleSizes.sm}>Rooted in your ecosystem</H2>
      <Paragraph
        className={classNames(mutedText, textColumn, marginCenter)}
        size={PossibleSizes.lg}
      >
        Bit integrates into your software-building toolchain and plays with your ecosystem.
        Get advanced and custom integrations to boost delivery.
      </Paragraph>
    </div>
  )
}
