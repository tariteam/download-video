/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getUriProgressApi } from "./get-uri-progress-api"
import { unObserveJs } from "./unobserve-js"

export function decodeSnapSave(ojs: string) {
  const div = unObserveJs(ojs)

  const meta = {
    preview: div.querySelector("video")!.getAttribute("src"),
    poster: div.querySelector("video")!.getAttribute("poster")!,
  }
  const title = div.querySelector(
    ".media-content > .content > p > strong"
  )!.textContent
  const description = div.querySelector(
    ".media-content > .content > p > span"
  )!.textContent

  const qualities = Array.from(div.querySelectorAll(".table > tbody > tr")).map(
    (tr) => {
      const btn = tr.querySelector("button")
      return {
        name: tr.querySelector(".video-quality")!.textContent!,
        render: btn !== null,
        url: btn
          ? "https://snapsave.app" +
            getUriProgressApi(btn.getAttribute("onclick")!)!
          : tr.querySelector("a")!.getAttribute("href")!,
      }
    }
  )

  return {
    title,
    description,
    meta,
    qualities,
  }
}
