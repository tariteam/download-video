<template>
  <InputURL
    @keypress:video="data = undefined"
    @click:download="run"
    class="mb-5"
    placeholder="Dán liên kết Facebook vào đây"
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
      <video
        class="w-[173px]"
        controls
        :src="data.meta.preview!"
        :poster="data.meta.poster"
      />

      <div class="pl-2">
        <h3 class="text-subtitle1 font-weight-medium line-clamp-2">
          {{ data.title }}
        </h3>
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
        <tr
          v-for="{ name, render, url } in data.qualities"
          :key="name"
          class="py-1"
        >
          <td>{{ name }}</td>
          <td>{{ render ? "Yes" : "No" }}</td>
          <td>
            <q-btn
              no-caps
              size="sm"
              :disable="render && downloading && !progress.get(url)"
              :loading="progress.get(url)?.progress! < 100"
              :percentage="progress.get(url)?.progress"
              rounded
              outline
              :color="render ? 'light-blue-5' : 'green-5'"
              @click="download(url, render)"
            >
              <span class="text-[14px]">{{
                render && progress.get(url)?.progress !== 100
                  ? "Render"
                  : "Dowload"
              }}</span>
              <template #loading>
                <q-spinner />
                <span class="ml-[3px] mr-[-9px] mb-[0.1em] text-[13px]"
                  >{{ progress.get(url)?.progress ?? 0 }}%</span
                >
              </template>
            </q-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
</template>

<script lang="ts" setup>
import { downloadFile } from "src/helpers/downloadFile"
import { useDLVideoFacebook } from "stores/dlvideo-facebook"
import { onBeforeUnmount, ref, shallowReactive, watch } from "vue"
import { useRequest } from "vue-request"

import InputURL from "./InputURL.vue"

const DLVideoStore = useDLVideoFacebook()

const { loading, error, run, data } = useRequest(DLVideoStore.start, {
  manual: true,
})

const downloading = ref(false)
const progress = shallowReactive<
  Map<string, Awaited<ReturnType<typeof DLVideoStore.render>>>
>(new Map())
watch(data, () => {
  progress.clear()
  downloading.value = false
})

// eslint-disable-next-line functional/no-let, no-undef
let timeout: NodeJS.Timeout | number
onBeforeUnmount(() => clearTimeout(timeout))

function download(url: string, isRender: boolean) {
  if (!isRender) return downloadFile(url)

  const inTask = progress.get(url)
  if (inTask) {
    if (inTask.progress === 100) return downloadFile(url)
    return console.warn("'%s' exists in task or render completed", url)
  }

  downloading.value = true

  render()

  async function render() {
    clearTimeout(timeout)
    const data = await DLVideoStore.render(url)

    progress.set(url, data)

    if (data.progress === 100) return (downloading.value = false)

    timeout = setTimeout(render, 1e3)
  }
}
</script>

<style lang="scss" scoped>
@import "./table.scss";
</style>
