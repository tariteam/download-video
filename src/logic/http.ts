import { ref } from "vue"

export const helperIsReady = ref(false)

const interval = setInterval(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  helperIsReady.value = typeof (window as any).Http !== "undefined"
  if (helperIsReady.value) clearInterval(interval)
}, 1_000)

setTimeout(() => clearInterval(interval), 30_000)

interface GetOptions {
  url: string
  headers?: Record<string, string>
  responseType?: "json"
}
interface PostOptions extends GetOptions {
  data?: Record<string, string>
}

interface Response<T> {
  url: string
  status: number
  data: T
}

class HttpFake {
  static get<T>(options: GetOptions): Promise<Response<T>> {
    return fetch(options.url, {
      headers: options.headers,
    }).then(async (res) => {
      const data =
        options.responseType === "json" ? await res.json() : await res.text()

      return {
        data,
        url: res.url,
        status: res.status,
      }
    })
  }

  static post<T>(options: PostOptions): Promise<Response<T>> {
    const form = new FormData()

    Object.entries(options.data || {}).forEach(([key, value]) =>
      form.append(key, value)
    )

    return fetch(options.url, {
      method: "post",
      headers: options.headers,
      body: form,
    }).then(async (res) => {
      const data =
        options.responseType === "json" ? await res.json() : await res.text()

      return {
        data,
        url: res.url,
        status: res.status,
      }
    })
  }
}

export const Http = {
  get<T>(options: GetOptions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).Http) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (window as any).Http.get(options) as ReturnType<
        typeof HttpFake.get<T>
      >
    }

    return HttpFake.get<T>(options)
  },
  post<T = string>(options: PostOptions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).Http) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (window as any).Http.get(options) as ReturnType<
        typeof HttpFake.post<T>
      >
    }

    return HttpFake.post<T>(options)
  },
}
