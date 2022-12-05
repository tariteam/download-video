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

              <div v-else-if="data" class="flex flex-nowrap text-left mt-7">
                    <video class="w-[173px]" controls
                      :src="`https://tikwm.com${data.data.play}`"
                      :poster="`https://tikwm.com${data.data.cover}`" />

                  <div class="pl-2">
                    <h3 class="text-subtitle1 line-clamp-2">{{ data.data.title }}</h3>

                    <div class="flex items-center text-[13px] text-grey-5 mt-3">
                      <q-avatar size="1.5em" class="mr-1">
                        <img :src="`https://tikwm.com${data.data.author.avatar}`">
                      </q-avatar>
                      {{ data.data.author.nickname }} (@{{data.data.author.unique_id}})
                    </div>



                    <div class="flex text-left items-center text-[14px] mt-2">
                      <Icon icon="fluent:music-note-2-20-filled" class="mr-1" width="20px" /> {{ data.data.music_info.title }}
                    </div>


                    <q-btn no-caps rounded outline color="teal-13" class="mr-2 mt-2">
                      <Icon icon="mdi:download-circle"  width="1.5em" height="1.5em" class="mr-1"/>
                      Tải xuống không logo
                    </q-btn>
                    <q-btn no-caps rounded outline color="green-5" class="mr-2 mt-2">
                      <Icon icon="mdi:download-circle"  width="1.5em" height="1.5em" class="mr-1"/>
                      Tải xuống có logo
                    </q-btn>
                    <q-btn no-caps rounded outline color="light-blue-5" class="mr-2 mt-2">
                      <Icon icon="mdi:download-circle"  width="1.5em" height="1.5em" class="mr-1"/>
                      Tải xuống không logo HD
                    </q-btn>
                    <q-btn no-caps rounded outline color="orange-5" class="mr-2 mt-2">
                      <Icon icon="mdi:download-circle" width="1.5em" height="1.5em" class="mr-1" />
                      Tải xuống âm thanh
                    </q-btn>
                  </div>
              </div>

</template>

<script lang="ts" setup>
  import { Icon } from "@iconify/vue"
import  {ref } from "vue"
import { useRequest } from "vue-request"

  import InputURL from "./InputURL.vue"
import { useDLVideoTiktok } from "stores/dlvideo-tiktok"

const DLVideoStore = useDLVideoTiktok()
const { data, error, run , loading } = useRequest(DLVideoStore.start, {
  manual: true
})
</script>

<style lang="scss" scoped>

</style>
