import { render } from "@testing-library/react"

import IronUi from "./iron-ui"

describe("IronUi", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<IronUi />)
    expect(baseElement).toBeTruthy()
  })
})
