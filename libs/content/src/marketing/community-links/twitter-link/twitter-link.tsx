import React from "react"
import classNames from "classnames"

import styles from "./twitter-link.module.scss"

import {
  CommunityLink,
  PrimaryLinkProps
} from "@watheia/content.marketing.community-links.community-link"
import { BaseIcon as Icon } from "@watheia/content.elements.base-icon"

/**
 * Concrete link to a Twitter account. Styled as a 'pill' button, with the Twitter logo
 * @name TwitterLink
 * @example
 * <TwitterLink href="https://twitter.com/bitdev_" />
 */
export type TwitterLinkProps = PrimaryLinkProps

export function TwitterLink({ className, ...rest }: TwitterLinkProps) {
  return (
    <CommunityLink
      external
      data-bit-id="watheia.content/marketing/community-links/twitter-link"
      className={classNames(styles.twitterLink, className)}
      {...rest}
    >
      <Icon of="twitter-logo" className={classNames(styles.icon)} />
      <span>@bitdev_</span>
    </CommunityLink>
  )
}
