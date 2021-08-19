import React from "react"
import { BaseImage } from "./base-image"

export const BaseImageExample = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    <BaseImage
      data-testid="test-img"
      alt="alt world"
      src="https://cdn.watheia.org/assets/icon.svg"
    />
  </div>
)
