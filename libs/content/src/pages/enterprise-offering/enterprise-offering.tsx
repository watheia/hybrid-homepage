import React, { HTMLAttributes } from "react"
import classNames from "classnames"

import { centerColumn, textColumn } from "@watheia/content.layout.page-frame"
import { marginCenter, text } from "@watheia/content.layout.align"
import { backgrounds } from "@watheia/content.surfaces.background"

import { Hero } from "@watheia/content.sections.enterprise-offering.hero"
import { PoweringEnterprise } from "@watheia/content.sections.enterprise-offering.powering-enterprise"
import { AdvantageCards } from "@watheia/content.sections.enterprise-offering.advantage-cards"
import { Reliability } from "@watheia/content.sections.enterprise-offering.reliability"
import { EcoSystem } from "@watheia/content.sections.enterprise-offering.eco-system"
import { Integrations } from "@watheia/content.sections.enterprise-offering.integrations"
// import { ComponentAnalytics } from "@watheia/content.sections.enterprise-offering.component-analytics"
import { ExpertSupport } from "@watheia/content.sections.enterprise-offering.experts-support"
import {
  SalesCta,
  ContactValues
} from "@watheia/content.sections.enterprise-offering.sales-cta"
// import { EnterpriseBullets } from "@watheia/content.sections.enterprise-offering.enterprise-bullets"
import { margin } from "@watheia/content.layout.experimental.spacing"
import { EnterpriseLogos } from "@watheia/content.marketing.enterprise-logos"

import styles from "./enterprise-offering.module.scss"

export type EnterpriseOfferingProps = {
  /** handles "contact us" form submission. Return a promise to show loader */
  onSubmitCta?: (values: ContactValues) => any | Promise<any>
  /** handles meeting call to action. Return a promise to show loader */
  onMainCta?: () => any | Promise<any>
} & HTMLAttributes<HTMLDivElement>

/**
 * A full, responsive page, detailing Bit's offering for enterprises.
 * @name EnterpriseOffering
 */
export function EnterpriseOffering(props: EnterpriseOfferingProps) {
  const { onMainCta, onSubmitCta, className, ...rest } = props

  return (
    <div
      {...rest}
      className={classNames(styles.enterpriseOffering, backgrounds.bedrock, className)}
    >
      <div className={classNames(styles.gradient00, styles.paddingTop130)}>
        <Hero
          onMainCta={onMainCta}
          className={classNames(centerColumn, styles.foldMargin)}
        />

        <div className={classNames(styles.curveWhite, styles.curveMargin)} />
      </div>

      <PoweringEnterprise className={classNames(centerColumn, margin[180])} />

      <EnterpriseLogos className={styles.margin160} />

      {/* <EnterpriseBullets className={classNames(centerColumn, margin[180])} /> */}

      <div className={styles.gradient01}>
        <AdvantageCards className={classNames(centerColumn, styles.foldMarginPlus)} />

        <div className={classNames(styles.curveWhite, styles.curveMargin)} />
      </div>

      <Reliability
        className={classNames(centerColumn, styles.foldMargin, styles.paddingTop30)}
      />

      <div className={classNames(styles.curveCloud, styles.curveMargin)} />

      <div className={classNames(styles.gradient02, styles.paddingTop30)}>
        <EcoSystem className={classNames(centerColumn, text.center)} />
        <Integrations className={classNames(margin[80])} />
        {/* <ComponentAnalytics className={centerColumn} /> */}
      </div>
      <div className={classNames(styles.supportCirclesBg, styles.circlesMargin)}>
        <ExpertSupport
          className={classNames(textColumn, marginCenter, styles.expertSupport)}
        />
        <SalesCta
          onSubmitCta={onSubmitCta}
          onMainCta={onMainCta}
          className={classNames(marginCenter, centerColumn)}
        />
      </div>
    </div>
  )
}
