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
      <div>
      <q-img width="257px" :src="data.thumb" />

        <h3 class="text-subtitle1 font-weight-medium line-clamp-2">{{ data.title }}</h3>
      </div>

      <div class="pl-2">
        {{ data }}
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

  const DLVideoStore = useDLVideoYoutube()

  const {
    loading,
    error,
    run,
    data
  } = useRequest(DLVideoStore.start, {
    manual: true
  })
</script>
