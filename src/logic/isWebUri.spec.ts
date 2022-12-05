import { describe, expect, test } from "vitest"

import { isWebUri } from "./isWebUri"

describe("isWebUri", () => {
  test("normal", () => {
    expect(isWebUri("https://example.com")).toBe(true)
    expect(isWebUri("https://example.com/test")).toBe(true)
  })
  test("error", () => {
    expect(isWebUri("is not url")).toBe(false)
  })
})
