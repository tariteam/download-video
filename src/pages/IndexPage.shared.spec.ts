import { describe, expect, test } from "vitest"

import { findTabFromUrl } from "./IndexPage.shared"

describe("findTabFromUrl", () => {
  test("valid", () => {
    expect(findTabFromUrl("https://tiktok.com")?.name).toBe("TikTok")
    expect(
      findTabFromUrl("https://www.youtube.com/watch?v=4rhNmGD3IRc")?.name
    ).toBe("YouTube")
  })
  test("invalid", () => {
    expect(findTabFromUrl("https://example.com")?.name).toBe(undefined)
  })
})
