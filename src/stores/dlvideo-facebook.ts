import { defineStore } from 'pinia';
import { decodeSnapSave } from "src/logic/decode-snapsave"

export const useDLVideoFacebook = defineStore('dlvideo-facebook', {
  actions: {
    async start(url: string, repeat = 5) {
      const headers = new Headers()
      headers.set("x-requested-with", "https://snapsave.app")

      const body  = new FormData()
      body.append("url", url)

      const ojs = await fetch("https://cors-anywhere.herokuapp.com/" + "https://snapsave.app/action.php", {
        method: "post",
        headers,
        body
      })
      .then(res => res.text())

      if (repeat && !ojs.trim().startsWith("var")) return this.start(url, repeat - 1)

      return decodeSnapSave(ojs)
    },
    async render(url : string): Promise<{
      "identifier": string
      "progress": number
      "file_size": number
      "file_path": string
    }> {
      return fetch("https://cors-anywhere.herokuapp.com/" + new URL(url, "https://snapsave.app").href).then(res => res.json())
      .then(res => {
        if (res.status !== 1) throw new Error(res.message ?? "not_found")
        return res
      })
    }
  }
});
