<template>
  <InputURL @keypress:video="data = null" @click:download="run" class="mb-5" />

  <div v-if="loading" class="text-[16px] font-weight-medium py-5">
    <q-spinner-pie size="25px" class="mr-1" />
    Fetching...
  </div>
  <div v-else-if="error">
    <q-banner dense inline-actions class="text-white bg-red">
      {{ error?.message ?? "Video ở chế độ riêng tư" }}
    </q-banner>
  </div>
  <template v-else-if="data">
    <div class="flex flex-nowrap text-left">
      <video class="w-[173px]" controls :src="data.meta.preview" :poster="data.meta.poster" />

      <div class="pl-2">
        <h3 class="text-subtitle1 font-weight-medium line-clamp-2">{{ data.title }}</h3>
        <h4 class="text-grey-5">{{ data.description }}</h4>


      </div>
    </div>


    <table class="w-full table">
      <thead>
        <tr>
          <th>Qualitty</th>
          <th>Render</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{name, render, url} in data.qualities" :key="name" class="py-1">
          <td>{{ name }}</td>
          <td>{{ render ? "Yes" : "No"}}</td>
          <td>
            <q-btn
              no-caps
              size="sm"
              :disable="render && downloading && !progress.get(url)"
              :loading="progress.get(url)?.progress < 100"
              :percentage="progress.get(url)?.progress"
              rounded outline :color="render ?'light-blue-5': 'green-5'"
              @click="download(url, render)"
            >
              <span class="text-[14px]">{{ render && progress.get(url)?.progress !== 100 ? "Render" : "Dowload" }}</span>
              <template #loading>
                <q-spinner />
                <span class="ml-[3px] mr-[-9px] mb-[0.1em] text-[13px]">{{ progress.get(url)?.progress ?? 0 }}%</span>
              </template>
            </q-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
</template>

<script lang="ts" setup>
  import {
    Icon
  } from "@iconify/vue"
  import {
    useDLVideoFacebook
  } from "stores/dlvideo-facebook"
  import InputURL from "./InputURL.vue"
  import {
    useRequest
  } from "vue-request"

  const fa = {
    "id": "567365845219086",
    "url": [{
        "url": "https://video-atl3-1.xx.fbcdn.net/v/t39.25447-2/316823468_117151837720691_1264479090118539186_n.mp4?_nc_cat=1&vs=53f0e3e972bfbf7&_nc_vs=HBksFQAYJEdLeFg0aEp6RUt5SmpHb0FBTEszYkhBSVZZd1JibWRqQUFBRhUAAsgBABUAGCRHTHc1NHhKN3Z4akNqT2tCQUxkVXo5Vk83VzFjYnJGcUFBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHAAAJqr1r6rRtcoJFQIoAkMzGAt2dHNfcHJldmlldxwXQJEZwo9cKPYYJ2Rhc2hfcjJfYXZjX2dlbjFhdmNfbGNfcTcwX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50BTE4ODM1EW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNTY3MzY1ODQ1MjE5MDg2Em9lbV92aWRlb19hc3NldF9pZA82NTgwMDI3MzU5NzgxOTMVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDI2OTY5MjM5NjA0NDIxOTccb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxMTgwMjU3OTkyNTY1MTMyDnZ0c19yZXF1ZXN0X2lkACUCHAAljgIbCIgBcwQ5OTYzAmNkCjIwMjItMTEtMjQDcmNiBTE4ODAwA2FwcAZWaWRlb3MCY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCzEwOTQuNDg1MzMzAWYCYWQCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-7&_nc_sid=edb743&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=u522UMRlaBYAX8KWP63&_nc_ht=video-atl3-1.xx&edm=AGo2L-IEAAAA&oh=00_AfCu3TPO3H0TK0ZMuzKehmihg2Bhcl3QQAwiH6dTYK_5UQ&oe=6390CDE8&_nc_rid=244257108296697&dl=1",
        "name": "MP4",
        "subname": "HD",
        "type": "mp4",
        "ext": "mp4"
      },
      {
        "url": "https://video-atl3-1.xx.fbcdn.net/v/t42.1790-2/10000000_1078918306130750_8646091840459233045_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjQ5OCwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=0gLbw2hAt64AX-m4YRv&rl=498&vabr=277&_nc_ht=video-atl3-1.xx&edm=AGo2L-IEAAAA&oh=00_AfDC8OubIjqsSKRfgZVPYKIyOq-o9J1zH7rMHHHp-e7Vtw&oe=638C1BE3&dl=1",
        "name": "MP4",
        "subname": "SD",
        "type": "mp4",
        "ext": "mp4"
      }
    ],
    "meta": {
      "title": "Video 567365845219086",
      "source": "https://www.facebook.com/a66dgm/videos/567365845219086/",
      "duration": "18:14"
    },
    "thumb": "https://scontent-atl3-1.xx.fbcdn.net/v/t15.5256-10/316832730_794937881578047_8058440173528984644_n.jpg?stp=dst-jpg_p960x960&_nc_cat=1&ccb=1-7&_nc_sid=08861d&_nc_ohc=hIfAaKwpYNAAX8D1fJP&_nc_ht=scontent-atl3-1.xx&edm=AGo2L-IEAAAA&oh=00_AfD29NRzmFtXhV9rYjIMq4u_-K6LZbeoPfaJYZqPNa-l4A&oe=6390865C",
    "hd": {
      "url": "https://video-atl3-1.xx.fbcdn.net/v/t39.25447-2/316823468_117151837720691_1264479090118539186_n.mp4?_nc_cat=1&vs=53f0e3e972bfbf7&_nc_vs=HBksFQAYJEdLeFg0aEp6RUt5SmpHb0FBTEszYkhBSVZZd1JibWRqQUFBRhUAAsgBABUAGCRHTHc1NHhKN3Z4akNqT2tCQUxkVXo5Vk83VzFjYnJGcUFBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHAAAJqr1r6rRtcoJFQIoAkMzGAt2dHNfcHJldmlldxwXQJEZwo9cKPYYJ2Rhc2hfcjJfYXZjX2dlbjFhdmNfbGNfcTcwX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50BTE4ODM1EW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNTY3MzY1ODQ1MjE5MDg2Em9lbV92aWRlb19hc3NldF9pZA82NTgwMDI3MzU5NzgxOTMVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDI2OTY5MjM5NjA0NDIxOTccb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxMTgwMjU3OTkyNTY1MTMyDnZ0c19yZXF1ZXN0X2lkACUCHAAljgIbCIgBcwQ5OTYzAmNkCjIwMjItMTEtMjQDcmNiBTE4ODAwA2FwcAZWaWRlb3MCY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCzEwOTQuNDg1MzMzAWYCYWQCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-7&_nc_sid=edb743&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=u522UMRlaBYAX8KWP63&_nc_ht=video-atl3-1.xx&edm=AGo2L-IEAAAA&oh=00_AfCu3TPO3H0TK0ZMuzKehmihg2Bhcl3QQAwiH6dTYK_5UQ&oe=6390CDE8&_nc_rid=244257108296697"
    },
    "sd": {
      "url": "https://video-atl3-1.xx.fbcdn.net/v/t42.1790-2/10000000_1078918306130750_8646091840459233045_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjQ5OCwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=0gLbw2hAt64AX-m4YRv&rl=498&vabr=277&_nc_ht=video-atl3-1.xx&edm=AGo2L-IEAAAA&oh=00_AfDC8OubIjqsSKRfgZVPYKIyOq-o9J1zH7rMHHHp-e7Vtw&oe=638C1BE3"
    },
    "hosting": "facebook.com",
    "timestamp": 1670087765
  }

  const DLVideoStore = useDLVideoFacebook()
  Object.assign(window, {
    DLVideoStore
  })

  const {
    loading,
    error,
    run,
    data
  } = useRequest(DLVideoStore.start, {
    manual: true
  })
  import { shallowReactive,watch, ref } from "vue"

const downloading = ref(false)
  const progress =
  shallowReactive<Map<string, Awaited<ReturnType<typeof DLVideoStore.stream>>>>(new Map())
watch(data, () => {
  progress.clear()
  downloading.value = false
})

let timeout: NodeJS.Timeout | number
import { onBeforeUnmount } from "vue"
import { downloadFile } from "src/helpers/downloadFile"
onBeforeUnmount(() => clearTimeout(timeout))

  function download(url: string, isRender: boolean) {
    if (!isRender) return downloadFile(url)

    const inTask = progress.get(url)
    if (inTask) {
      if (inTask.progress === 100)
        return downloadFile(url)
      return console.warn("'%s' exists in task or render completed", url)
    }

    downloading.value = true

    render()

    async function render() {
      clearTimeout(timeout)
        const { data , status } = await DLVideoStore.render(url)

        progress.set(url, data)

        if (data.progress === 100) return downloading.value = false

        timeout = setTimeout(render, 1e3)
    }
  }
</script>

<style lang="scss" scoped>

      .table {
        // color: #363636
        // border: 1px solid rgb(217 215 215 / 22%)
      }

      .table td,.table th {
        border: 1px solid rgb(217 215 215 / 22%);
        border-width: 0 0 1px;
        padding: .5em .75em;
        vertical-align: top
      }

      .table th {
        // color: #363636
      }

      .table th:not([align]) {
        text-align: inherit
      }

      .table thead {
        background-color: transparent
      }

      .table thead td,.table thead th {
        border-width: 0 0 2px;
        // color: #363636
      }

      .table tbody {
        background-color: transparent
      }

      .table tbody tr:last-child td,.table tbody tr:last-child th {
        border-bottom-width: 0
      }

      .table.is-fullwidth {
        width: 100%
      }

</style>
