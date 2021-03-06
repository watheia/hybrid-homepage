import React from "react"
import classNames from "classnames"

import styles from "./slack-link.module.scss"

import {
  CommunityLink,
  PrimaryLinkProps
} from "@watheia/content.marketing.community-links.community-link"
import { BaseIcon as Icon } from "@watheia/content.elements.base-icon"

export type SlackLinkProps = PrimaryLinkProps

/**
 * Concrete link to a Slack channel. Styled as a 'pill' button, with the Slack logo
 * @name SlackLink
 * @example
 * <SlackLink href="https://join.slack.com/..." />
 */
export function SlackLink({ className, children, ...rest }: SlackLinkProps) {
  return (
    <CommunityLink
      external
      data-bit-id="watheia.content/marketing/community-links/slack-link"
      className={classNames(styles.slackLink, className)}
      {...rest}
    >
      <Icon of="slack" className={classNames(styles.icon)} />
      {children}
    </CommunityLink>
  )
}

SlackLink.defaultProps = {
  children: <span>bit-dev-community</span>
}
