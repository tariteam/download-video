<template>
  <InputURL
    @keypress:video="data = undefined"
    @click:download="run"
    class="mb-5"
    type="Instagram"
    :placeholder="t('dan-lien-ket-instagram-vao-day')"
  />

  <div v-if="loading" class="text-[16px] font-weight-medium py-5">
    <q-spinner-pie size="25px" class="mr-1" />
    {{ t("fetching") }}
  </div>
  <div v-else-if="error">
    <q-banner dense inline-actions class="text-white bg-red">
      {{ error?.message ?? "Video ở chế độ riêng tư" }}
    </q-banner>
  </div>
  <template v-else-if="data">
    <div class="flex flex-nowrap text-left">
      <video
        v-if="
          data.url[0].type.startsWith('3') || data.url[0].type.startsWith('m')
        "
        class="w-[173px]"
        controls
        :src="data.thumb"
        :poster="data.url[0].url"
      />
      <q-img v-else width="173px" :src="data.url[0].url" />

      <div class="pl-2">
        <h3 class="text-subtitle1 font-weight-medium line-clamp-2">
          {{ data.meta.title }}
        </h3>
        <h4 class="text-grey-5">{{ data.meta.source }}</h4>

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
          <Icon
            icon="mdi:download-circle"
            width="1.5em"
            height="1.5em"
            class="mr-1"
          />
          {{ t("tai-item-name", [item.name]) }}
        </q-btn>
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { downloadFile } from "src/helpers/downloadFile"
import { useDLVideoSSYoutube } from "stores/dlvideo-ssyoutube"
import { useI18n } from "vue-i18n"
import { useRequest } from "vue-request"

import InputURL from "./InputURL.vue"

const DLVideoStore = useDLVideoSSYoutube()
const { t } = useI18n()

const { loading, error, run, data } = useRequest(DLVideoStore.start, {
  manual: true,
})
</script>
