import { defineStore } from 'pinia';

export const useDLVideoYoutube = defineStore('dlvideo-youtube', {
  actions: {
    async start(url: string) {
      const headers = new Headers()
      headers.set("x-requested-with", "https://www.y2mate.com/")

      const form = new FormData()
      form.append("url", url)
      form.append("q_auto", "0")
      form.append("ajax", "1")

      const res = await fetch("https://cors-anywhere.herokuapp.com/" + "https://www.y2mate.com/mates/en446/analyze/ajax", {
        method: "post",
        headers,
        body: form
      })
      .then(res=>res.json())
    }
  }
});
