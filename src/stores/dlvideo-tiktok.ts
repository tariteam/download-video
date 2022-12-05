import { defineStore } from 'pinia';

export const useDLVideoTiktok = defineStore('dlvideo-tiktok', {
  actions: {
    async start(url: string) {
      const headers = new Headers()
      headers.set("x-requested-with", "https://www.tikwm.com")

      const res = await fetch(
      "https://cors-anywhere.herokuapp.com/" +
      "https://www.tikwm.com/api/?count=12&cursor=&web=1&hd=1&url=" +
      url, {headers})
      .then(res=>res.json())

      if (res.code === -1)
        throw new Error(res.msg)

      return res
    }
  }
});
