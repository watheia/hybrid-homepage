import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { Paragraph } from "@watheia/content.text.paragraph"
import { themedText } from "@watheia/content.text.themed-text"
import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { text, marginCenter } from "@watheia/content.layout.align"
import { Grid } from "@watheia/content.layout.grid-component"

import { Button } from "@watheia/content.elements.button"
import { H1 } from "@watheia/content.elements.heading"
import { BaseImage as Image } from "@watheia/content.elements.base-image"

import styles from "./hero.module.scss"
import { Link } from "@watheia/content.elements.link"

type HeroProps = {
  /** handles 'book meeting' call to action */
  onMainCta?: () => any | Promise<any>
} & HTMLAttributes<HTMLDivElement>

/**
 * Opening section for the Enterprise offering page.
 * @name EcoSystem
 */
export function Hero(props: HeroProps) {
  const { onMainCta, ...rest } = props

  return (
    <Grid
      colL={2}
      {...rest}
      data-bit-id="watheia.content/sections/enterprise-offering/hero"
      className={classNames(props.className, text.center, text.l.left, styles.mainGrid)}
    >
      <div className={classNames(styles.content)}>
        <H1 size={PossibleSizes.sm} className={themedText}>
          We build micro frontends!
        </H1>
        <Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
          Let your components drive web application delivery at global scale. Enjoy
          world-class performance, security and support every step of the way.
        </Paragraph>

        <div className={styles.buttons}>
          <Link href="#contact">
            <Button onClick={props.onMainCta} importance="cta">
              Get Support
            </Button>
          </Link>
          <div className={styles.spacer} />
          <Link href="#about">
            <Button>Learn More</Button>
          </Link>
        </div>
      </div>
      <Image
        src="enterprise-offering-v1/1-hero-section/hero-enterprise.svg"
        alt="compartmentalized corporate ui"
        className={classNames(marginCenter, styles.image)}
      />
    </Grid>
  )
}
