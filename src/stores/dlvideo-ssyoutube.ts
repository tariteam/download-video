import { defineStore } from "pinia"
import { Http } from "src/logic/http"

export const useDLVideoSSYoutube = defineStore("dlvideo-ssyoutube", {
  actions: {
    async start(url: string) {
      return Http.post<{
        id: string
        cipher: boolean
        meta: {
          title: string
          source: string
          duration: string
          tags: string
          subtitle: {
            token: string
            language: string[]
          }
        }
        thumb: string
        itags: string[]
        video_quality: string[]
        url: (
          | {
              url: string
              name: string
              subname: string
              type: string
              ext: string
              downloadable: boolean
              quality: string
              qualityNumber: number
              videoCodec: string
              audioCodec: string
              audio: boolean
              no_audio: boolean
              itag: string
              isBundle: boolean
              isOtf: boolean
              isDrm: boolean
              attr: {
                title: string
                class: string
              }
              contentLength?: undefined
              filesize?: undefined
            }
          | {
              url: string
              name: string
              subname: string
              type: string
              ext: string
              downloadable: boolean
              quality: string
              qualityNumber: number
              contentLength: number
              videoCodec: string
              audio: boolean
              no_audio: boolean
              itag: string
              isBundle: boolean
              isOtf: boolean
              isDrm: boolean
              filesize: number
              attr: {
                title: string
                class: string
              }
              audioCodec?: undefined
            }
          | {
              url: string
              name: string
              subname: string
              type: string
              ext: string
              downloadable: boolean
              quality: string
              qualityNumber: number
              contentLength: number
              audioCodec: string
              audio: boolean
              no_audio: boolean
              itag: string
              isBundle: boolean
              isOtf: boolean
              isDrm: boolean
              filesize: number
              attr: {
                title: string
                class: string
              }
              videoCodec?: undefined
            }
        )[]
        mp3Converter: string
        hosting: string
        sd: null
        hd: null
        timestamp: number
      }>({
        url: "https://ssyoutube.com/api/convert",
        data: { url },
        responseType: "json",
      }).then((res) => res.data)
    },
  },
})
