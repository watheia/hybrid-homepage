import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { mutedText } from "@watheia/content.text.muted-text"

import { H2, H3 } from "@watheia/content.elements.heading"
import { BaseImage as Image } from "@watheia/content.elements.base-image"

import styles from "./reliability.module.scss"
import { marginCenter, text } from "@watheia/content.layout.align"
import { Link } from "@watheia/content.elements.link"
import { Paragraph } from "@watheia/content.text.paragraph"

/**
 * A section showing a security details for the Bit Enterprise solution.
 * The section features a large out-of-section background image, which get nicely cut in response to screen resolution.
 * @name Reliability
 */
export const Reliability = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={styles.corpoBg} {...rest}>
    <div
      className={classNames(className, text.center, text.md.left)}
      data-bit-id="watheia.content/sections/enterprise-offering/reliability"
    >
      <div className={styles.content}>
        <H2 size={PossibleSizes.sm} className={styles.title}>
          Reliable and secure
        </H2>

        <AdvantageList />
      </div>
      <div>
        <Image
          src="enterprise-offering-v1/4-secured-section/sphere-enterprise.png"
          alt="corporosphere"
          className={classNames(styles.corposphere, marginCenter)}
        />
      </div>
    </div>
  </div>
)

const AdvantageList = () => (
  <ul className={styles.bulletList}>
    <li>
      <Image
        src="enterprise-offering-v1/4-secured-section/design.svg"
        alt="designed"
        className={styles.bullet}
      />
      <div>
        <H3 size={PossibleSizes.xs}>Reliable by design</H3>
        <Paragraph className={mutedText} size={PossibleSizes.lg}>
          Build with auto-scaling resources that never block you, while ensuring impeccable
          availability with a Google-grade multi-zone architecture.
        </Paragraph>
      </div>
    </li>
    <li>
      <Image
        src="enterprise-offering-v1/4-secured-section/shield.svg"
        alt="shield"
        className={styles.bullet}
      />
      <div>
        <H3 size={PossibleSizes.xs}>Always secure</H3>
        <Paragraph className={mutedText} size={PossibleSizes.lg}>
          Keep your source-code and information secure with the highest-standards measures,
          policies, and practices.{" "}
          <Link external href="/resources/security">
            Learn more
          </Link>
        </Paragraph>
      </div>
    </li>
    <li>
      <Image
        src="enterprise-offering-v1/4-secured-section/trusted.svg"
        alt="trusted"
        className={styles.bullet}
      />
      <div>
        <H3 size={PossibleSizes.xs}>Trusted by the best</H3>
        <Paragraph className={mutedText} size={PossibleSizes.lg}>
          Bit is trusted by over 200,000 developers and teams from the world???s leading
          companies from various industry sectors.
        </Paragraph>
      </div>
    </li>
  </ul>
)
