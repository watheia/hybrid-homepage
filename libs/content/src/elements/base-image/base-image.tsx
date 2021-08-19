import React from "react"
import classNames from "classnames"
import styles from "./base-image.module.scss"
import { staticStorageUrl } from "@watheia/content.constants.storage"

export type BaseImageProps = {
  /**
   * alt text (to comply a11y standards)
   */
  alt: string
  /**
   * Makes image fill the whole width of container.
   * same as `width: 100%`
   */
  fullWidth?: boolean
} & React.ImgHTMLAttributes<HTMLImageElement>

/**
 * Template component for images.
 * Accepts all the arguments of native html image.
 * @example
 * 	<BaseImage alt="avatar" src="https://storage.com/asdlkfjsdf.png">
 */
export function BaseImage({ alt, src, className, fullWidth, ...rest }: BaseImageProps) {
  return (
    <img
      data-bit-id="watheia.iron-ui/elements/image"
      alt={alt}
      src={
        src?.startsWith("https://") || src?.startsWith("/")
          ? src
          : `${staticStorageUrl}/${src}`
      }
      {...rest}
      className={classNames(styles.image, fullWidth && styles.fullWidth, className)}
    />
  )
}
