import { defineStore } from "pinia"
import { Http } from "src/logic/http"

export const useDLVideoTiktok = defineStore("dlvideo-tiktok", {
  actions: {
    async start(url: string) {
      return Http.get<{
        code: number
        msg: string
        processed_time: number
        data: {
          id: string
          region: string
          title: string
          cover: string
          duration: number
          play: string
          wmplay: string
          hdplay: string
          music: string
          music_info: {
            id: string
            title: string
            play: string
            author: string
            original: boolean
            duration: number
            album: string
          }
          play_count: number
          digg_count: number
          comment_count: number
          share_count: number
          download_count: number
          create_time: number
          author: {
            id: string
            unique_id: string
            nickname: string
            avatar: string
          }
        }
      }>({
        url:
          "https://www.tikwm.com/api/?count=12&cursor=&web=1&hd=1&url=" + url,
        responseType: "json"
      }).then((res) => {
        // eslint-disable-next-line functional/no-throw-statement
        if (res.data.code === -1) throw new Error(res.data.msg)

        return res.data
      })
    },
  },
})
