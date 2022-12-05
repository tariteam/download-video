<template>
  <q-page class="px-[30px] sm:px-[60px]">
    <q-card
      class="bg-c1 mx-auto max-w-[890px] mt-15 w-full rounded-xl text-center"
    >
      <q-card-section>
        <h1 class="text-[24px] font-weight-medium mb-2">
          Công cụ tải video Tiktok
        </h1>
        <h2 class="text-subtitle1">Không logo, hình mờ, watermark</h2>
      </q-card-section>

      <q-card-section class="pt-0">
        <q-tabs v-model="tab" inline-label no-caps>
          <q-tab
            v-for="{ name, icon, image, color } in tabs"
            :key="name"
            :name="name"
            :style="{ color }"
          >
            <img
              v-if="image"
              :src="icon"
              width="20"
              height="20"
              :label="name"
            />
            <Icon
              v-else
              :icon="icon"
              width="20"
              height="20"
              :style="{ color }"
              :class="name === 'Instagram' && `children:fill-[${color}]`"
            />

            <span
              class="ml-1"
              :class="tab === name ? 'text-white' : 'text-grey-4'"
              >{{ name }}</span
            >
          </q-tab>
        </q-tabs>

        <div class="max-w-[1024px] px-4 mx-auto mt-7">
          <keep-alive>
            <Component
              :is="tabs.find((item) => item.name === tab)?.component"
            />
          </keep-alive>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { QCard, QCardSection, QPage, QTab, QTabs } from "quasar";
import { useType } from "src/composibles/useType";
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router";

import { tabs } from "./IndexPage.shared";

const route = useRoute()
const router = useRouter()
const type = useType()

const tab = computed<string>({
  get() {
    return type.value
  },
  set(type) {
    router.replace({
      ...route,
      query: {
        ...route.query,
        type
      }
    })
  }
})
</script>

<style lang="scss" scoped>
.input :deep(.q-field__control),
.input :deep(.q-field__marginal) {
  height: 48px !important;
}
</style>
