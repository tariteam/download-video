<template>
  <InputURL
    @keypress:video="data = undefined"
    @click:download="run"
    class="mb-5" placeholder="Dán liên kết Twitter vào đây"
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
        v-if="data.video_quality.length > 0"
        class="w-[173px]"
        controls
        :poster="data.thumb"
        :src="data.url[0].url"
      />
      <q-img v-else width="173px" :src="data.thumb" />

      <div class="pl-2">
        <h3 class="text-subtitle1 font-weight-medium line-clamp-2">
          {{ data.meta.title }}
        </h3>
        <h4 class="">
          <a
            v-if="author"
            target="_blank"
            :href="author.href"
            class="text-blue"
          >
            @{{ author.username }}
          </a>
        </h4>

        <q-list v-if="data.video_quality.length > 0">
          <q-item v-for="item in data.url" :key="item.name">
            <q-item-section>
              <q-item-label>{{ item.subname }}p</q-item-label>
              <q-item-label caption>{{ item.name }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                @click="downloadFile(item.url)"
                no-caps
                rounded
                outline
                color="green-5"
                class="mr-2 mt-2"
              >
                Download
              </q-btn>
            </q-item-section>
          </q-item>
        </q-list>
        <template v-else>
          <q-btn
            v-for="item in data.url"
            :key="item.name"
            @click="downloadFile(item.url)"
            no-caps
            rounded
            outline
            color="green-5"
            class="mr-2 mt-2"
          >
            Download {{ item.name }}
          </q-btn>
        </template>
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { downloadFile } from "src/helpers/downloadFile"
import { useDLVideoSSYoutube } from "stores/dlvideo-ssyoutube"
import { computed } from "vue"
import { useRequest } from "vue-request"

import InputURL from "./InputURL.vue"

const DLVideoStore = useDLVideoSSYoutube()

const { loading, error, run, data } = useRequest(DLVideoStore.start, {
  manual: true,
})

const author = computed(() => {
  if (!data.value) return

  const username = new URL(data.value.meta.source).pathname.split("/")[1]

  return {
    username,
    href: `https://twitter.com/${username}`,
  }
})
</script>
