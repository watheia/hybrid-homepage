import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { Paragraph } from "@watheia/content.text.paragraph"
import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { text, marginCenter } from "@watheia/content.layout.align"
import { Grid } from "@watheia/content.layout.grid-component"
import { mutedText } from "@watheia/content.text.muted-text"
import { Link } from "@watheia/content.elements.link"

import { Button } from "@watheia/content.elements.button"
import { H1 } from "@watheia/content.elements.heading"
import { BaseImage as Image } from "@watheia/content.elements.base-image"

import styles from "./hero.module.scss"

type HeroProps = {} & HTMLAttributes<HTMLDivElement>

/**
 * Opening hero section for the Support offering page.
 * @name Hero
 */
export function Hero(props: HeroProps) {
  const { className, ...rest } = props

  return (
    <Grid
      colMd={2}
      {...rest}
      data-bit-id="watheia.content/sections/support-page/hero"
      className={classNames(className, text.center, text.md.left, styles.mainGrid)}
    >
      <div className={classNames(styles.content)}>
        <H1 size={PossibleSizes.sm}>We support developers</H1>
        <Paragraph
          size={PossibleSizes.lg}
          className={classNames(styles.paragraph, mutedText)}
        >
          As developers, we know what it means to get great support at the right time. We
          got you covered.
        </Paragraph>

        <div className={styles.buttons}>
          <Link className={styles.link} href="/support">
            <Button className={styles.button} importance="cta">
              Get support
            </Button>
          </Link>
          <div className={styles.spacer} />
          <Link className={styles.link} href="/contact-sales?redirectUri=%2Fsupport-plans">
            <Button className={styles.button} elevation="medium">
              Contact sales
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src="support-page/Illustrations/hero-section.svg"
        alt="compartmentalized corporate ui"
        className={classNames(marginCenter, styles.image)}
      />
    </Grid>
  )
}
