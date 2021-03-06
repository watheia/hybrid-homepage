import React from "react"
import classNames from "classnames"

import styles from "./community-link.module.scss"

import { Link, LinkProps } from "@watheia/content.elements.link"

export type PrimaryLinkProps = LinkProps

/**
 * base 'community link' component.
 *
 * Used as a template for Github-link, twitter-link, etc.
 * @name CommunityLink
 * @example
 * <CommunityLink href="https://bit.dev" />
 */
export function CommunityLink({ className, ...rest }: PrimaryLinkProps) {
  return (
    <Link
      data-bit-id="watheia.content/marketing/community-links/community-link"
      className={classNames(styles.primaryLink, className)}
      {...rest}
    ></Link>
  )
}
