import { describe, expect, test } from "vitest"

// eslint-disable-next-line camelcase
import normal_input from "./__test__/cov-y2mate/normal/input.txt?raw"
// eslint-disable-next-line camelcase
import normal_output from "./__test__/cov-y2mate/normal/output"
import { covY2mate } from "./cov-y2mate"

describe("cov-y2mate", () => {
  test("normal", () => {
    expect(covY2mate(normal_input)).toEqual(normal_output)
  })
})
