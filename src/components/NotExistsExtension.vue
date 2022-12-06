<template>
  <div class="text-center">
    <h3 class="text-[24px] mt-10">
      {{ t("can-cai-dat-extension-tro-giup") }}
    </h3>
    <p class="text-[14px] mt-3 text-gray-400 leading-normal">
      {{ t("tinh-nang-nay-yeu-cau-extension-animevsub-helper-de-hoat-dong") }}
      <br />
      {{
        t(
          "extension-animevsub-helper-la-cau-noi-quan-trong-de-ung-dung-gui-cac-yeu-cau-toi-may-chu"
        )
      }}
      <br />
      <q-btn
        no-caps
        color="green-5"
        outline
        rounded
        class="mt-4"
        target="_blank"
        :href="currentBrowser.href"
      >
        <Icon
          :icon="currentBrowser.icon"
          width="35"
          height="35"
          class="mr-1 my-1"
        />
        {{
          t("cai-dat-extension-animevsub-helper-cho-currentbrowser-text", [
            currentBrowser.text,
          ])
        }}
      </q-btn>
    </p>

    <div class="mt-5 children:px-3">
      <q-btn
        rounded
        stack
        flat
        no-caps
        v-for="{ icon, text } in browsers"
        :key="text"
      >
        <Icon :icon="icon" width="55" height="55" />
        <span class="mt-[5px] text-white text-[16px] text-weight-regular">{{
          text
        }}</span>
      </q-btn>
    </div>
    <!-- <img src="~assets/ic_question_exit.png" width="278" /> -->
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import UAParser from "ua-parser-js"
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const browsers = [
  {
    icon: "logos:chrome",
    text: "Chrome",
    name: "Chrome",
    href: "https://github.com/anime-vsub/extension-animevsub-helper/blob/main/install-on-chrome.md",
  },
  {
    icon: "logos:firefox",
    text: "Firefox",
    name: "Firefox",
    href: "https://addons.mozilla.org/vi/firefox/addon/animevsub-helper/",
  },
  {
    icon: "logos:opera",
    text: "Opera",
    name: "Opera",
    href: "https://github.com/anime-vsub/extension-animevsub-helper/blob/main/install-on-chrome.md",
  },
  {
    icon: "logos:microsoft-edge",
    text: "Edge",
    name: "Edge",
    href: "https://microsoftedge.microsoft.com/addons/detail/endghpbficnpbadbdalhbpecpgdcojig",
  },
]
const currentBrowser = computed(() => {
  const currentBrowserName = new UAParser().getBrowser().name

  return (
    browsers.find((item) => item.name === currentBrowserName) ?? browsers[0]
  )
})
</script>
