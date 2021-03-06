import React from "react"
import classNames from "classnames"

import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { Paragraph } from "@watheia/content.text.paragraph"
import { alignItems, text } from "@watheia/content.layout.align"
import { Grid } from "@watheia/content.layout.grid-component"

import { H2 } from "@watheia/content.elements.heading"
import { Link } from "@watheia/content.elements.link"
import { Button } from "@watheia/content.elements.button"

import styles from "./support-cta.module.scss"

/**
 * @name SupportCta
 * @description
 * A static section, calling users to contact us.
 */
export function SupportCta(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props
  return (
    <Grid
      colMd={2}
      {...rest}
      data-bit-id="watheia.content/sections/support-page/support-cta"
      className={classNames(className, text.center, text.md.left, styles.mainGrid)}
    >
      <div className={styles.topSection}>
        <H2 size={PossibleSizes.xs}>Need support?</H2>
        <Paragraph size={PossibleSizes.xl}>Reach out to our team.</Paragraph>
      </div>
      <div className={classNames(styles.buttons, alignItems.center)}>
        <Link className={styles.link} href="/support">
          <Button importance="cta">Contact support</Button>
        </Link>
        <div className={styles.spacer} />
        <Link className={styles.link} href="/pricing">
          <Button importance="normal">Upgrade support</Button>
        </Link>
      </div>
    </Grid>
  )
}
