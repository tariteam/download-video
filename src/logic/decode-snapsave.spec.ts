import { describe, expect, test } from "vitest"

// eslint-disable-next-line camelcase
import error_input from "./__test__/cov-y2mate-converter/error/input.txt?raw"
// eslint-disable-next-line camelcase
import normal_input from "./__test__/cov-y2mate-converter/normal/input.txt?raw"
// eslint-disable-next-line camelcase
import normal_output from "./__test__/cov-y2mate-converter/normal/output"
import { decodeSnapSave } from "./decode-snapsave"

describe("decode-snapsave", () => {
  test("normal", async () => {
    expect(decodeSnapSave(normal_input)).toEqual(normal_output)
  })
  test("error", () => {
    expect(() => decodeSnapSave(error_input)).toThrowError(
      "error_video_private"
    )
  })
})
