import { defineStore } from 'pinia';
import { decodeSnapSave } from "src/logic/decode-snapsave"

export const useDLVideoSSYoutube = defineStore('dlvideo-ssyoutube', {
  actions: {
    async start(url: string, repeat = 5) {
      const headers = new Headers()
      headers.set("x-requested-with", "https://ssyoutube.com/")

      const body  = new FormData()
      body.append("url", url)

      return await fetch("https://cors-anywhere.herokuapp.com/" + "https://ssyoutube.com/api/convert", {
        method: "post",
        headers,
        body
      })
      .then(res => res.json())
    }
  }
});
