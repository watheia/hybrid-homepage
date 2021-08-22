const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind")

module.exports = {
  presets: [require("../../tailwind-workspace-preset.js")],
  purge: createGlobPatternsForDependencies(__dirname),
  darkMode: "media", // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
