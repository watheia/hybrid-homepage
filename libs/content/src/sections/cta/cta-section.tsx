import React from "react"
import classNames from "classnames"

import styles from "./cta-section.module.scss"

import { H2 } from "@watheia/content.elements.heading"
import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { Paragraph } from "@watheia/content.text.paragraph"
import { Grid } from "@watheia/content.layout.grid-component"
import { justifyItems, alignItems, text } from "@watheia/content.layout.align"
import { Link } from "@watheia/content.elements.link"
import { Button } from "@watheia/content.elements.button"

type CtaProps = React.HTMLAttributes<HTMLDivElement>

/**
 * @name CtaSection
 * @description
 * Best section yet! Encourage the user to signup with a big and responsive call to action.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function CtaSection(props: CtaProps) {
  const { ...rest } = props

  return (
    <Grid
      {...rest}
      colSm={2}
      className={classNames(
        props.className,
        styles.ctaSection,
        justifyItems.center,
        alignItems.center,
        text.center,
        text.sm.left
      )}
      data-bit-id="watheia.content/sections/cta"
    >
      <div>
        <H2 size={PossibleSizes.xs}>Ready to go micro?</H2>
        <Paragraph size={PossibleSizes.lg}>
          Empower your team to build faster together.
        </Paragraph>
      </div>
      <Link href="/signup">
        <Button importance="cta">Request invite</Button>
      </Link>
    </Grid>
  )
}
