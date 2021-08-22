import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import styles from "./talk-to-experts.module.scss"

import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { Paragraph } from "@watheia/content.text.paragraph"
import { justifyItems, alignItems, text, marginCenter } from "@watheia/content.layout.align"

import { H2 } from "@watheia/content.elements.heading"
import { Link } from "@watheia/content.elements.link"
import { Button } from "@watheia/content.elements.button"

export type TalkToExpertsProps = {
  /** handles 'book meeting' call to action */
  onRequestInvite?: () => any | Promise<any>
} & HTMLAttributes<HTMLDivElement>

/**
 * @name TalkToExperts
 * @description
 * A static section, calling users to contact us.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function TalkToExperts({ onRequestInvite, className, ...rest }: TalkToExpertsProps) {
  return (
    <div
      className={classNames(
        className,
        styles.talkToExperts,
        justifyItems.center,
        alignItems.center,
        text.center,
        text.sm.left
      )}
      data-bit-id="watheia.content/sections/talk-to-experts"
      {...rest}
    >
      <div className={marginCenter}>
        <H2 size={PossibleSizes.xs}>What are you waiting for? Let us show you</H2>
        <Paragraph size={PossibleSizes.xl}>
          We help the world's best teams build and ship modern apps better together. Let us
          show you what Watheia can do for you.
        </Paragraph>
      </div>
      <div>
        <Button importance="cta" onClick={onRequestInvite}>
          Free Consultation
        </Button>
      </div>
    </div>
  )
}
