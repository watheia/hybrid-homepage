import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import { Grid } from "@watheia/content.layout.grid-component"
import { BaseImage as Image } from "@watheia/content.elements.base-image"
import { text } from "@watheia/content.layout.align"
import { Paragraph, PossibleSizes } from "@watheia/content.text.paragraph"
import { H4 } from "@watheia/content.elements.heading"
import styles from "./enterprise-bullets.module.scss"

export type EnterpriseBulletsProps = {} & HTMLAttributes<HTMLDivElement>

export function EnterpriseBullets({ className, ...rest }: EnterpriseBulletsProps) {
  return (
    <Grid
      colMd={3}
      className={classNames(text.center, styles.benefits, className)}
      {...rest}
    >
      <div>
        <Image
          className={styles.icon}
          alt="private"
          src="homepage-bit/reuse-page/private.svg"
        />
        <H4 size={PossibleSizes.xxs}>Private and secure</H4>
        <Paragraph className={styles.paragraph}>
          Keep your code private and secure with the highest standards.
        </Paragraph>
      </div>

      <div>
        <Image
          className={styles.icon}
          alt="cloud"
          src="homepage-bit/reuse-page/cloud.svg"
        />
        <H4 size={PossibleSizes.xxs}>Zero setup overhead</H4>
        <Paragraph className={styles.paragraph}>
          Create a cloud workspace in seconds and start working.
        </Paragraph>
      </div>

      <div>
        <Image
          className={styles.icon}
          alt="vendor"
          src="homepage-bit/reuse-page/vendor.svg"
        />
        <H4 size={PossibleSizes.xxs}>No vendor lock-in</H4>
        <Paragraph className={styles.paragraph}>
          Move components to your own server at any moment.
        </Paragraph>
      </div>
    </Grid>
  )
}
