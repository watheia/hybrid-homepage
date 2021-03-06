import classNames from "classnames"
import React, { HTMLAttributes } from "react"

import { alignItems } from "@watheia/content.layout.align"
import { Grid } from "@watheia/content.layout.grid-component"
import { mutedText } from "@watheia/content.text.muted-text"
import { themedText } from "@watheia/content.text.themed-text"
import { colorPalette } from "@watheia/iron-ui.theme.accent-color"
import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"

import { H2 } from "@watheia/content.elements.heading"
import { BaseIcon as Icon } from "@watheia/content.elements.base-icon"
import { BaseImage as Image } from "@watheia/content.elements.base-image"
import { Paragraph } from "@watheia/content.text.paragraph"

import styles from "./component-analytics.module.scss"
import { margin } from "@watheia/content.layout.experimental.spacing"

/**
 * A section showing Bit's analytical abilities.
 * It features a large image extending outside the section, which gets nicely cut in lower resolutions
 * @name ComponentAnalytics
 */
export function ComponentAnalytics(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.scrollPreventer}>
      <Grid
        {...props}
        data-bit-id="watheia.content/sections/enterprise-offering/component-analytics"
        className={classNames(alignItems.center, props.className, styles.customGrid)}
      >
        <div>
          <H2 size={PossibleSizes.sm}>Advanced component usage analytics</H2>
          <Paragraph className={classNames(mutedText, margin[30])} size={PossibleSizes.lg}>
            Track and learn exactly which components are used, in which version, in which
            project. Take control over components across the enterprise codebase.
          </Paragraph>

          <ul className={classNames(colorPalette.success, styles.list)}>
            <li>
              <Icon of="billing-checkmark" className={themedText} />
              Track component usage across projects and teams
            </li>
            <li>
              <Icon of="billing-checkmark" className={themedText} />
              Drive and monitor the adoption of changes
            </li>
            <li>
              <Icon of="billing-checkmark" className={themedText} />
              Verify and distribute best-standard components
            </li>
            <li>
              <Icon of="billing-checkmark" className={themedText} />
              Ensure visual consistency
            </li>
          </ul>
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="enterprise-offering-v1/6-analytics/graphs-enterprise.svg?v=4"
            alt="analytics"
          />
        </div>
      </Grid>
    </div>
  )
}
