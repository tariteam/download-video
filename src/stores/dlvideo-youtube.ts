import { defineStore } from "pinia"
import { covY2mate } from "src/logic/cov-y2mate"
import { covY2mateConverter } from "src/logic/cov-y2mate-converter"
import { Http } from "src/logic/http"

export const useDLVideoYoutube = defineStore("dlvideo-youtube", {
  actions: {
    async start(url: string) {
      const headers = new Headers()
      headers.set("x-requested-with", "https://www.y2mate.com/")

      const form = new FormData()
      form.append("url", url)
      form.append("q_auto", "0")
      form.append("ajax", "1")

      const {
        data: { status, result },
      } = await Http.post<{
        status: string
        result: string
      }>({
        url: "https://www.y2mate.com/mates/en446/analyze/ajax",
        data: {
          url,
          q_auto: "0",
          ajax: "1",
        },
        responseType: "json",
      })

      // eslint-disable-next-line functional/no-throw-statement
      if (status !== "success") throw new Error("error_unknown")

      return covY2mate(result)
    },
    async getUrlDownload(options: {
      id: string
      vId: string
      type: string
      quality: string
    }): Promise<string | undefined> {
      const {
        data: { result, status },
      } = await Http.post<{
        status: string
        result: string
      }>({
        url: "https://www.y2mate.com/mates/convert",
        data: {
          type: "youtube",
          _id: options.id,
          v_id: options.vId,
          ajax: "1",
          token: "",
          ftype: options.type,
          fquality: options.quality,
        },
        responseType: "json",
      })

      // eslint-disable-next-line functional/no-throw-statement
      if (status !== "success") throw new Error("error_unknown")

      return covY2mateConverter(result) ?? undefined
    },
  },
})
