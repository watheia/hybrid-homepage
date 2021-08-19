import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { PossibleSizes } from "@watheia/iron-ui.theme.sizes"

import { textColumn } from "@watheia/content.layout.page-frame"
import { marginCenter } from "@watheia/content.layout.align"

import { CommentCarousel } from "@watheia/content.marketing.comment-carousel"
import { bitTestimonials } from "@watheia/content.content.bit-testimonials"
import { H2 } from "@watheia/content.elements.heading"

import styles from "./carouselSection.module.scss"

/**
 * @name CarouselSection
 * @description
 * A section showing real users testimonials about the product.
 * Using **CommentCarousel** (react-slick), and content from **bit-testimonials**.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function CarouselSection(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={props.className}>
      <div className={classNames(textColumn, marginCenter)}>
        <H2 size={PossibleSizes.sm} className={styles.heading}>
          Trusted by over 200,000 developers
        </H2>
      </div>
      <CommentCarousel content={bitTestimonials} />
    </div>
  )
}
