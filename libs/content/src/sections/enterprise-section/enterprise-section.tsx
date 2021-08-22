import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { Paragraph } from "@watheia/content.text.paragraph"

import { text, alignItems } from "@watheia/content.layout.align"
import { Grid } from "@watheia/content.layout.grid-component"
import { colSpanMd } from "@watheia/content.layout.col-span"

import { BaseImage as Image } from "@watheia/content.elements.base-image"
import { H2 } from "@watheia/content.elements.heading"
import { BaseIcon as Icon } from "@watheia/content.elements.base-icon"
import { Link } from "@watheia/content.elements.link"
import { Button } from "@watheia/content.elements.button"

import styles from "./enterprise-section.module.scss"

/**
 * @name EnterpriseSection
 * @description
 * A section of static content, presenting Watheia's cloud platform.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function EnterpriseSection(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(text.center, props.className)}
      data-bit-id="watheia.content/sections/enterprise-section"
    >
      <Grid
        col={1}
        colMd={12}
        className={classNames(text.left, alignItems.center, styles.content)}
      >
        <div className={colSpanMd[7]}>
          <H2 size={PossibleSizes.sm}>
            Join the world's best teams on the enterprise component cloud
          </H2>
          <Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
            Empower teams in your organization with a component hub where all teams can
            easily share, discover, and integrate each other's features to increase delivery
            and drive rapid innovation.
          </Paragraph>
          <Link href="/contact-sales">
            <Button className={styles.contactButton} importance="cta" elevation="medium">
              Request invite
              <Icon of="right_arrow" className={styles.linkArrow} />
            </Button>
          </Link>
        </div>
        <div className={colSpanMd[5]}>
          <Image
            fullWidth
            alt="cloud components"
            src="homepage-bit/reuse-page/cloud-components.png"
          />
        </div>
      </Grid>
    </div>
  )
}
