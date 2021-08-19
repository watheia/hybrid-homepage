import React, { HTMLAttributes, ReactNode } from "react"
import classNames from "classnames"

import { centerColumn } from "@watheia/content.layout.page-frame"
import { backgrounds } from "@watheia/content.surfaces.background"

import { Hero } from "@watheia/content.sections.support-page.hero"

import styles from "./support.module.scss"
import { SupportDevelopers } from "@watheia/content.sections.support-page.support-developers"
import { SupportChannels } from "@watheia/content.sections.support-page.support-channels"
import { GlobalEnterprise } from "@watheia/content.sections.support-page.global-enterprise"
import { SupportCta } from "@watheia/content.sections.support-page.support-cta"
import { SupportPackages } from "@watheia/content.sections.support-page.support-packages"

export type SupportPageProps = {
  table?: ReactNode
} & HTMLAttributes<HTMLDivElement>

/**
 * A full, responsive page, detailing Bit's offering for support.
 * @name SupportPage
 */
export function SupportPage({ table, className, ...rest }: SupportPageProps) {
  return (
    <div
      className={classNames(styles.supportPageStyles, backgrounds.bedrock, className)}
      {...rest}
    >
      <div className={classNames(styles.supportCirclesBg)}>
        <Hero className={classNames(centerColumn, styles.foldMargin)} />
      </div>
      <SupportDevelopers className={classNames(centerColumn, styles.marginBottom150)} />
      <SupportChannels className={classNames(centerColumn, styles.marginBottom150)} />
      <SupportPackages className={classNames(centerColumn, styles.marginBottom150)}>
        {table}
      </SupportPackages>
      <GlobalEnterprise className={classNames(centerColumn, styles.marginBottom150)} />
      <SupportCta className={classNames(centerColumn, styles.supportCta)} />
    </div>
  )
}
