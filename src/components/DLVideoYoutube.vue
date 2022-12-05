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
      <div style="flex: 0">
      <q-img width="257px" :src="data.thumb" />

        <h3 class="text-subtitle1 font-weight-medium line-clamp-2">{{ data.title }}</h3>
      </div>

      <div class="pl-2 w-full">
        <q-tabs v-model="tab" align="left" no-caps>
          <q-tab v-for="item in tabs" :key="item.key" :name="item.key" :label="item.name" />
        </q-tabs>

        <q-tab-panels v-model="tab" class="bg-transparent mt-1" animated>
          <q-tab-panel v-for="item in tabs" :key="item.key" :name="item.key" class="px-0 py-0 overflow-hidden">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>Resolution</th>
                  <th>FileSize</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in data[item.key]" :key="item.name">
                  <td>{{ item.name }}<q-chip v-if="item.quality" rounded size="sm" color="blue" >{{ item.quality }}</q-chip>
                  </td>
                  <td>{{ item.textSize }}</td>
                  <td>
                    <q-btn
                      no-caps
                      size="sm"
                      rounded outline
                      :loading="(stores.get(`${item.ftype}-${item.fquality}`)) === null"
                      :color="stores.get(`${item.ftype}-${item.fquality}`) ?  `green-5` : `light-blue-5` "
                      @click="download( data.k__id,  data. k_data_vid,item.ftype,item.fquality  )"
                      class="min-h-[30px]"
                    >
                    <span class="text-[14px]">
                      <Icon v-if="stores.get(`${item.ftype}-${item.fquality}`)" icon="fluent:cloud-arrow-down-24-regular" width="20" height="20" />
                      <template v-else>
                      {{
                      stores.get(`${item.ftype}-${item.fquality}`) === null ? "Get" : "Get"
                      }}

                      </template>
                    </span>
                    </q-btn
>
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
  import {
    Icon
  } from "@iconify/vue"
  import {
    useDLVideoYoutube
  } from "stores/dlvideo-youtube"
  import InputURL from "./InputURL.vue"
  import {
    useRequest
  } from "vue-request"
  import { ref, shallowReactive } from "vue"
import { downloadFile } from "src/helpers/downloadFile"

  const DLVideoStore = useDLVideoYoutube()

  const {
    loading,
    error,
    run,
    data
  } = useRequest(DLVideoStore.start, {
    manual: true
  })

  const tab = ref("mp4")
  const tabs = [{
    key: "mp4",
    name: "Video",
  }, {
    key: "mp3",
    name: "MP3"
  }, {
    key: "audio",
    name: "Audio"
  }]
import { useQuasar } from "quasar"

const $q = useQuasar()

const stores = shallowReactive(new Map<string, null | string>())
let tmp: null | string
/**
 * null: loading
 */
  async function download(id : string, vId: string, type: string, quality: string) {
    const uid = `${type}-${quality}`

    const inStore = stores.get(uid)

    if (inStore === null) return
    if (inStore) {
      downloadFile(inStore)
      return
    }

    stores.set(uid, null)
    try {
      const url =  await DLVideoStore.getUrlDownload({ id, vId, type, quality })
        stores.set(
          uid,
         url
        )

          downloadFile(url)
     }catch (err) {
       $q.notify({
         position: "bottom-right",
         message: err.message
       })
       stores.delete(uid)
     }

    //data. k_data_id, data.k__id, item.ftype, item.fquality
  }
</script>


<style lang="scss" scoped src="./table.scss" />
