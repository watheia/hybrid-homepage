import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { Card } from "@watheia/content.surfaces.card"
import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"
import { mutedText } from "@watheia/content.text.muted-text"
import { TextSeparator } from "@watheia/content.text.text-separator"
import { fullWidth, marginCenter } from "@watheia/content.layout.align"

import { Button } from "@watheia/content.elements.button"
import { H4 } from "@watheia/content.elements.heading"

import styles from "./sales-cta.module.scss"
import { margin } from "@watheia/content.layout.experimental.spacing"
import { ContactForm } from "./contact-form"
import { ContactValues } from "./contact-values"
import { Paragraph } from "@watheia/content.text.paragraph"

export type EnterpriseCtaProps = {
  /** handles form submission, with user input as a single object parameter. Return a promise to show loader */
  onSubmitCta?: (values: ContactValues) => any | Promise<any>
  /** handles 'book a meeting' call to action. Return a promise to show loader */
  onMainCta?: () => any | Promise<any>
} & HTMLAttributes<HTMLDivElement>

/**
 * A call-to-action section, allowing enterprise users to contact us directly from the Enterprise page.<br/>
 * Form is managed by Formik, and validated by Yup.
 * @param SalesCta
 */
export const SalesCta = (props: EnterpriseCtaProps) => {
  const { onSubmitCta, onMainCta, className, ...rest } = props
  return (
    <div
      {...rest}
      className={classNames(styles.particlesBg, className)}
      data-bit-id="watheia.content/sections/enterprise-offering/sales-cta"
    >
      <Card id="lets-talk" className={classNames(styles.formCard, marginCenter)}>
        <H4 size={PossibleSizes.xs}>Let’s talk </H4>
        <Paragraph className={classNames(margin[30], mutedText)}>
          Drop a message and we’ll get back to you shortly.
        </Paragraph>

        <ContactForm onSubmitMessage={onSubmitCta} />
      </Card>

      <div className={styles.particlesContainer}>
        <div className={styles.redParticle} />
      </div>
    </div>
  )
}
