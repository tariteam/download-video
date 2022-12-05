import { defineStore } from "pinia"
import { decodeSnapSave } from "src/logic/decode-snapsave"
import { Http } from "src/logic/http"

export const useDLVideoFacebook = defineStore("dlvideo-facebook", {
  actions: {
    async start(
      url: string,
      repeat = 5
    ): Promise<ReturnType<typeof decodeSnapSave>> {
      const { data: ojs } = await Http.post<string>({
        url: "https://snapsave.app/action.php",
        data: {
          url,
        },
      })

      if (repeat && !ojs.trim().startsWith("var"))
        return this.start(url, repeat - 1)

      return decodeSnapSave(ojs)
    },
    async render(url: string) {
      return Http.post<{
        identifier: string
        progress: number
        file_size: number
        file_path: string
      }>({
        url: new URL(url, "https://snapsave.app").href,
        data: {
          url,
        },
        responseType: "json",
      }).then((res) => {
        if (res.status !== 1)
          // eslint-disable-next-line functional/no-throw-statement
          throw new Error((res as unknown as Error).message ?? "not_found")
        return res.data
      })
    },
  },
})
