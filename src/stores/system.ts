import { defineStore } from "pinia"
import { getNavigatorLanguage } from "src/i18n"
import { ref } from "vue"

export const useSystemStore = defineStore(
  "system",
  () => {
    const helperIsReady = ref(false)

    const interval = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      helperIsReady.value = typeof (window as any).Http !== "undefined"
      if (helperIsReady.value) clearInterval(interval)
    }, 1_000)

    setTimeout(() => clearInterval(interval), 30_000)

    const locale = ref(getNavigatorLanguage())
    return { helperIsReady, locale }
  },
  {
    persist: true,
  }
)
