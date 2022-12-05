import { defineStore } from 'pinia';
import  { ref } from "vue"

export const useSystemStore = defineStore('system',() => {
  
 const helperIsReady = ref(false)

const interval = setInterval(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  helperIsReady.value = typeof (window as any).Http !== "undefined"
  if (helperIsReady.value) clearInterval(interval)
}, 1_000)

setTimeout(() => clearInterval(interval), 30_000)

return { helperIsReady }
})