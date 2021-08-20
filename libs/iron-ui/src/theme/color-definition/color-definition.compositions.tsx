import React from "react"
import { primaryPalette, spectrumPalette } from "./index"

const colors = [
  "--bit-text-color",
  "--bit-text-color-heavy",
  "--bit-text-color-light",
  "--bit-text-inactive",
  "--bit-border-color",
  "--bit-border-color-heavy",
  "--bit-border-color-light",
  "--bit-border-color-lightest",
  "--bit-accent-color",
  "--bit-accent-heavy",
  "--bit-accent-light",
  "--bit-accent-text",
  "--bit-accent-text-heavy",
  "--bit-text-on-accent",
  "--bit-accent-bg",
  "--bit-accent-bg-heavy",
  "--bit-bg-color",
  "--bit-bg-heavy",
  "--bit-bg-heaviest",
  "--bit-bg-heaviest",
  "--bit-bg-bedrock",
  "--bit-bg-navigation",
  "--bit-bg-overlay",
  "--bit-bg-modal",
  "--bit-bg-tooltip",
  "--bit-bg-tooltip-heavy",
  "--bit-bg-dent",
  "--bit-error-color",
  "--bit-error-heavy",
  "--bit-error-light",
  "--bit-error-bg",
  "--bit-error-bg-heavy"
]

const spectrumColors = [
  "--spectrum-global-color-static-black:",
  "--spectrum-global-color-static-white",
  "--spectrum-global-color-static-blue",
  "--spectrum-global-color-static-gray-50",
  "--spectrum-global-color-static-gray-75",
  "--spectrum-global-color-static-gray-100",
  "--spectrum-global-color-static-gray-200",
  "--spectrum-global-color-static-gray-300",
  "--spectrum-global-color-static-gray-400",
  "--spectrum-global-color-static-gray-500",
  "--spectrum-global-color-static-gray-600",
  "--spectrum-global-color-static-gray-700",
  "--spectrum-global-color-static-gray-800",
  "--spectrum-global-color-static-gray-900",
  "--spectrum-global-color-static-blue-200",
  "--spectrum-global-color-static-blue-300",
  "--spectrum-global-color-static-blue-400",
  "--spectrum-global-color-static-blue-500",
  "--spectrum-global-color-static-blue-600",
  "--spectrum-global-color-static-blue-700",
  "--spectrum-global-color-static-blue-800",
  "--spectrum-global-color-static-red-400",
  "--spectrum-global-color-static-red-500",
  "--spectrum-global-color-static-red-600",
  "--spectrum-global-color-static-red-700",
  "--spectrum-global-color-static-orange-400",
  "--spectrum-global-color-static-orange-500",
  "--spectrum-global-color-static-orange-600",
  "--spectrum-global-color-static-orange-700",
  "--spectrum-global-color-static-green-400",
  "--spectrum-global-color-static-green-500",
  "--spectrum-global-color-static-green-600",
  "--spectrum-global-color-static-green-700",
  "--spectrum-global-color-static-celery-200",
  "--spectrum-global-color-static-celery-300",
  "--spectrum-global-color-static-celery-400",
  "--spectrum-global-color-static-celery-500",
  "--spectrum-global-color-static-celery-600",
  "--spectrum-global-color-static-celery-700",
  "--spectrum-global-color-static-chartreuse-300",
  "--spectrum-global-color-static-chartreuse-400",
  "--spectrum-global-color-static-chartreuse-500",
  "--spectrum-global-color-static-chartreuse-600",
  "--spectrum-global-color-static-chartreuse-700",
  "--spectrum-global-color-static-yellow-200",
  "--spectrum-global-color-static-yellow-300",
  "--spectrum-global-color-static-yellow-400",
  "--spectrum-global-color-static-yellow-500",
  "--spectrum-global-color-static-yellow-600",
  "--spectrum-global-color-static-yellow-700",
  "--spectrum-global-color-static-magenta-200",
  "--spectrum-global-color-static-magenta-300",
  "--spectrum-global-color-static-magenta-400",
  "--spectrum-global-color-static-magenta-500",
  "--spectrum-global-color-static-magenta-600",
  "--spectrum-global-color-static-magenta-700",
  "--spectrum-global-color-static-fuchsia-400",
  "--spectrum-global-color-static-fuchsia-500",
  "--spectrum-global-color-static-fuchsia-600",
  "--spectrum-global-color-static-fuchsia-700",
  "--spectrum-global-color-static-purple-400",
  "--spectrum-global-color-static-purple-500",
  "--spectrum-global-color-static-purple-600",
  "--spectrum-global-color-static-purple-700",
  "--spectrum-global-color-static-purple-800",
  "--spectrum-global-color-static-indigo-200",
  "--spectrum-global-color-static-indigo-300",
  "--spectrum-global-color-static-indigo-400",
  "--spectrum-global-color-static-indigo-500",
  "--spectrum-global-color-static-indigo-600",
  "--spectrum-global-color-static-indigo-700",
  "--spectrum-global-color-static-seafoam-200",
  "--spectrum-global-color-static-seafoam-300",
  "--spectrum-global-color-static-seafoam-400",
  "--spectrum-global-color-static-seafoam-500",
  "--spectrum-global-color-static-seafoam-600",
  "--spectrum-global-color-static-seafoam-700"
]

export function PrimaryPalette() {
  return (
    <div className={primaryPalette}>
      {colors.map((x) => (
        <ColorBox colorName={x} />
      ))}
    </div>
  )
}
export function SpectrumPalette() {
  return (
    <div className={spectrumPalette}>
      {spectrumColors.map((x) => (
        <ColorBox colorName={x} />
      ))}
    </div>
  )
}

function ColorBox({ colorName }: { colorName: string }) {
  return (
    <div style={{ display: "flex", borderRadius: 4, marginBottom: 4 }}>
      <div
        style={{
          background: `var(${colorName})`,
          width: 20,
          height: 20,
          borderRadius: 4,
          marginRight: 8,
          border: "1px solid black"
        }}
      ></div>
      <div>{colorName}</div>
    </div>
  )
}
