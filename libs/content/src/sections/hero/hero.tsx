import React, { HTMLAttributes, ReactNode, MouseEvent } from "react"
import classNames from "classnames"
import Typewriter from "typewriter-effect"

import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { text, marginCenter } from "@watheia/content.layout.align"
import { Paragraph } from "@watheia/content.text.paragraph"
import { Grid } from "@watheia/content.layout.grid-component"
import { textColumn } from "@watheia/content.layout.page-frame"

import { H1 } from "@watheia/content.elements.heading"
import { IconLine } from "@watheia/content.elements.icon-line"
import { Link } from "@watheia/content.elements.link"
import { BaseImage as Image } from "@watheia/content.elements.base-image"
import { Button } from "@watheia/content.elements.button"
import styles from "./hero.module.scss"

const iconsArray = [
  "logo-react",
  "logo-vue",
  "logo-angular",
  "logo-web-components",
  "logo-nodejs",
  "logo-ts",
  "logo-js"
]

const typeWriterArray = [
  "build with components",
  "build micro frontends",
  "build design systems",
  "release features faster",
  "build web apps together"
]

type ReuseLandingProps = {
  /**
   * Placeholder for content, at the bottom of this section
   */
  mainCta?: ReactNode
  /** handles 'book meeting' call to action */
  onMainCta?: () => any | Promise<any>
} & HTMLAttributes<HTMLDivElement>

/**
 * @name Hero
 * @description
 * The Main and first section the user sees as he enters the page.
 * Assumes a dark purplish background behind it.
 */

export function Hero({ onMainCta, ...props }: ReuseLandingProps) {
  const handleCta = (_event: MouseEvent<HTMLButtonElement>) => {
    if (typeof onMainCta === "function") onMainCta()
  }
  return (
    <div data-bit-id="watheia.content/sections/hero" {...props}>
      <Grid colL={2} className={classNames(styles.mainGrid, text.center, text.l.left)}>
        <div>
          <div>
            <H1 size={PossibleSizes.sm} className={styles.headline}>
              How the best teams
              <br />
              <Typewriter
                onInit={() => {}}
                options={{
                  strings: typeWriterArray,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 50
                }}
              />
            </H1>
            <Paragraph
              size={PossibleSizes.lg}
              className={classNames(styles.paragraph, textColumn, marginCenter)}
            >
              Iron DevOps is the first cloud-native DevOps infrastructure for micro
              components, services, and serverless functions. It's everything your teams
              need to enjoy autonomous development, faster releases, effortless consistency,
              and collaboration at scale.
            </Paragraph>
          </div>

          <Paragraph
            size={PossibleSizes.sm}
            element="div"
            className={classNames(styles.buttons)}
          >
            <Button importance="cta" elevation="medium" onClick={handleCta}>
              Request Invite
            </Button>

            <div className={styles.spacer} />
            <Link href="/home">
              <Button elevation="medium">Learn More</Button>
            </Link>
          </Paragraph>
          <IconLine icons={iconsArray} className={styles.icons} />
        </div>

        <Image
          src="homepage-bit/process-2.svg"
          className={marginCenter}
          alt="illustration"
          fullWidth
        />
      </Grid>
    </div>
  )
}
