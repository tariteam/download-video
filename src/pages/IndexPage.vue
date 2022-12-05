<template>
  <q-page class="px-[30px] sm:px-[60px]">
    <q-card class="bg-c1 mx-auto max-w-[890px] mt-15 w-full rounded-xl text-center">
      <q-card-section>
        <h1 class="text-[24px] font-weight-medium mb-2">Công cụ tải video Tiktok</h1>
        <h2 class="text-subtitle1">Không logo, hình mờ, watermark</h2>
      </q-card-section>

      <q-card-section class="pt-0">

              <q-tabs
                v-model="tab"
                inline-label
                no-caps
              >
                <q-tab v-for="{name, icon,image , color} in tabs" :name="name" :style="{ color }">
                  <img v-if="image" :src="icon" width="20" height="20" :label="name">
                  <Icon v-else :icon="icon" width="20" height="20" :style="{color}" :class="name==='Instagram' && `children:fill-[${color}]`" />

<span class="ml-1" :class="tab === name ? 'text-white' : 'text-grey-4'">{{ name }}</span>
                </q-tab>
              </q-tabs>

              <div class="max-w-[1024px] px-4 mx-auto mt-7">
<keep-alive>
                <Component :is="tabs.find(item => item.name === tab).component" />

</keep-alive>
              </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>


<script lang="ts" setup>
  import { ref, onMounted } from "vue"
  import logoTiktok from "src/assets/tiktok-logo-4500.svg"
import { Icon } from "@iconify/vue"
import { defineAsyncComponent } from "vue"
import DLVideoFacebook from "components/DLVideoTwitter.vue"

  const tab = ref("Facebook")

  const tabs = [
    {
      name: "TikTok",
      icon: logoTiktok,
      image: true,
      color: "#25F4EE",
      description: "Không logo, hình mờ, watermark",
      hosts: ["tiktok.com"],
      component: defineAsyncComponent(() => import("components/DLVideoTiktok.vue"))
    },
    {
      name: "Youtube",
      icon: "logos:youtube-icon",
      color: "#FF0000",
      description: "Chuyển đổi không giới hạn và tải xuống miễn phí",
      hosts: ["youtube.com"],
      component: defineAsyncComponent(() => import("components/DLVideoYoutube.vue"))
    },
    {
      name: "Facebook",
      icon: "logos:facebook",
      color: "#1877F2",
      description: "Tải video từ Facebook 1080 - 2K - 4K. Miễn Phí",
      hosts: ["facebook.com", "fb.com"],
      component: defineAsyncComponent(() => import("components/DLVideoFacebook.vue"))
    },
    {
      name: "Instagram",
      icon: "logos:instagram-icon",
      color: "#E1306C",
      description: "Tải xuống Video, hình ảnh, Reels, IGTV Insta trực tuyến",
      hosts: ["instagram.com"],
      component: defineAsyncComponent(() => import("components/DLVideoInstagram.vue"))
    },
    {
      name: "Twitter",
      icon: "logos:twitter",
      color: "#55acee",
      description: "Tải xuống video Twitter miễn phí",
      hosts: ["twitter.com"],
      component: defineAsyncComponent(() => import("components/DLVideoTwitter.vue"))
    }
  ]

  </script>

<style lang="scss" scoped>
  .input :deep(.q-field__control),
  .input :deep(.q-field__marginal) {
    height: 48px !important;
  }
  </style>
