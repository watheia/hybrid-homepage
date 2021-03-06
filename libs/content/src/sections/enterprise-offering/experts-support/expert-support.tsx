import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { Card } from "@watheia/content.surfaces.card"
import { Paragraph } from "@watheia/content.text.paragraph"
import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { mutedText } from "@watheia/content.text.muted-text"
import { text, marginCenter } from "@watheia/content.layout.align"

import { H2, H4 } from "@watheia/content.elements.heading"
import { BaseImage as Image } from "@watheia/content.elements.base-image"

import styles from "./expert-support.module.scss"

/**
 * A section showing 3 "chat messages", detailing our dedicated dev support team.
 * Floating chat heads are positioned on both sides, for desktop resolutions.
 * @name ExpertSupport
 */
export const ExpertSupport = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={styles.preventOverflow}
    data-bit-id="watheia.content/sections/enterprise-offering/experts-support"
  >
    <div {...props} className={classNames(styles.container, props.className)}>
      <div className={classNames(styles.mainContent, marginCenter)}>
        <H2 size={PossibleSizes.md} className={classNames(text.center, styles.title)}>
          World-class support by hands-on experts
        </H2>

        <Card className={styles.card}>
          <Paragraph
            className={classNames(mutedText, styles.timestamp)}
            size={PossibleSizes.md}
          >
            10:30
          </Paragraph>
          <H4 size={PossibleSizes.xxs}>Response-time SLA</H4>
          <Paragraph className={mutedText} size={PossibleSizes.sm}>
            Guarantee fast response times and availability through personal support channels
            to ensure your team never slows down delivery.
          </Paragraph>
        </Card>
        <Card className={styles.card}>
          <Paragraph
            className={classNames(mutedText, styles.timestamp)}
            size={PossibleSizes.lg}
          >
            10:31
          </Paragraph>
          <H4 size={PossibleSizes.xxs}>Named contacts and escalation paths</H4>
          <Paragraph className={mutedText} size={PossibleSizes.sm}>
            Enjoy personal support from dedicated experts that you can reach anytime you
            need. And, add multiple escalation paths to your arsenal just in case.
          </Paragraph>
        </Card>
        <Card className={styles.card}>
          <Paragraph
            className={classNames(mutedText, styles.timestamp)}
            size={PossibleSizes.lg}
          >
            10:32
          </Paragraph>
          <H4 size={PossibleSizes.xxs}>Expert review and training</H4>
          <Paragraph className={mutedText} size={PossibleSizes.sm}>
            Get architectural-level consultation from industry leading experts and hands-on
            training for best practices and personalized workflows.
          </Paragraph>
        </Card>
      </div>

      <div className={styles.chatHeads}>
        <Image
          className={styles.chatHead01}
          src="enterprise-offering-v1/7-support/characters/character-1.svg"
          alt="yo yo"
        />
        <Image
          src="enterprise-offering-v1/7-support/characters/character-2.svg"
          alt="how about slack?"
        />
        <Image
          src="enterprise-offering-v1/7-support/characters/character-3.svg"
          alt="typing.."
        />
        <Image
          src="enterprise-offering-v1/7-support/characters/character-4.svg"
          alt="floating head"
        />
        <Image
          src="enterprise-offering-v1/7-support/characters/character-5.svg"
          alt="floating head"
        />
        <Image
          src="enterprise-offering-v1/7-support/characters/character-6.svg"
          alt="we can fix it!"
        />
      </div>
    </div>
  </div>
)
