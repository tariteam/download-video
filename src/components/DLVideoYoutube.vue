<template>
  <InputURL
    @keypress:video="data = undefined"
    @click:download="run"
    class="mb-5"
    placeholder="Dán liên kết Youtube vào đây"
  />

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
      <div style="flex: 0">
        <q-img width="257px" :src="data.thumb!" />

        <h3 class="text-subtitle1 font-weight-medium line-clamp-2">
          {{ data.title }}
        </h3>
      </div>

      <div class="pl-2 w-full">
        <q-tabs v-model="tab" align="left" no-caps>
          <q-tab
            v-for="item in tabs"
            :key="item.key"
            :name="item.key"
            :label="item.name"
          />
        </q-tabs>

        <q-tab-panels v-model="tab" class="bg-transparent mt-1" animated>
          <q-tab-panel
            v-for="item in tabs"
            :key="item.key"
            :name="item.key"
            class="px-0 py-0 overflow-hidden"
          >
            <table class="table w-full">
              <thead>
                <tr>
                  <th>Resolution</th>
                  <th>FileSize</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item2 in data[item.key]" :key="item2.name">
                  <td>
                    {{ item.name
                    }}<q-chip
                      v-if="item2.quality"
                      rounded
                      size="sm"
                      color="blue"
                      >{{ item2.quality }}</q-chip
                    >
                  </td>
                  <td>{{ item2.textSize }}</td>
                  <td>
                    <q-btn
                      no-caps
                      size="sm"
                      rounded
                      outline
                      :loading="
                        stores.get(`${item2.ftype}-${item2.fquality}`) === null
                      "
                      :color="
                        stores.get(`${item2.ftype}-${item2.fquality}`)
                          ? `green-5`
                          : `light-blue-5`
                      "
                      @click="
                        download(
                          data!.k__id,
                          data!.k_data_vid,
                          item2.ftype,
                          item2.fquality
                        )
                      "
                      class="min-h-[30px]"
                    >
                      <span class="text-[14px]">
                        <Icon
                          v-if="stores.get(`${item2.ftype}-${item2.fquality}`)"
                          icon="fluent:cloud-arrow-down-24-regular"
                          width="20"
                          height="20"
                        />
                        <template v-else>
                          {{
                            stores.get(`${item2.ftype}-${item2.fquality}`) ===
                            null
                              ? "Get"
                              : "Get"
                          }}
                        </template>
                      </span>
                    </q-btn>
                  </td>
                </tr>
              </tbody>
            </table>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { useQuasar } from "quasar"
import { downloadFile } from "src/helpers/downloadFile"
import { useDLVideoYoutube } from "stores/dlvideo-youtube"
import { ref, shallowReactive } from "vue"
import { useRequest } from "vue-request"

import InputURL from "./InputURL.vue"

const DLVideoStore = useDLVideoYoutube()

const { loading, error, run, data } = useRequest(DLVideoStore.start, {
  manual: true,
})

const tab = ref("mp4")
const tabs: {
  key: "mp4" | "mp3" | "audio"
  name: string
}[] = [
  {
    key: "mp4",
    name: "Video",
  },
  {
    key: "mp3",
    name: "MP3",
  },
  {
    key: "audio",
    name: "Audio",
  },
]

const $q = useQuasar()

const stores = shallowReactive(new Map<string, null | string>())
/**
 * null: loading
 */
async function download(
  id: string,
  vId: string,
  type: string,
  quality: string
) {
  const uid = `${type}-${quality}`

  const inStore = stores.get(uid)

  if (inStore === null) return
  if (inStore) {
    downloadFile(inStore)
    return
  }

  stores.set(uid, null)
  try {
    const url = await DLVideoStore.getUrlDownload({ id, vId, type, quality })

    // eslint-disable-next-line functional/no-throw-statement
    if (!url) throw new Error("unknown_error_download_url")

    stores.set(uid, url)

    downloadFile(url)
  } catch (err) {
    $q.notify({
      position: "bottom-right",
      message: (err as Error).message,
    })
    stores.delete(uid)
  }

  // data. k_data_id, data.k__id, item.ftype, item.fquality
}
</script>

<style lang="scss" scoped src="./table.scss" />
