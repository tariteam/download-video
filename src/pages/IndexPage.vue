<template>
  <q-page class="px-[30px] sm:px-[60px]">
    <q-card
      class="bg-c1 mx-auto max-w-[890px] mt-15 w-full rounded-xl text-center"
    >
      <q-card-section>
        <h1 class="text-[24px] font-weight-medium mb-2">
          {{ t("cong-cu-tai-video-_name", [tabActive.name]) }}
        </h1>
        <h2 class="text-subtitle1">{{ tabActive.description }}</h2>
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
            <Component :is="tabActive.component" />
          </keep-alive>
        </div>
      </q-card-section>
    </q-card>

    <div class="row leading-normal my-24 mx-[-30px]">
      <div class="col-12 text-center">
        <h2 class="text-[32px] font-weight-medium mb-4">
          {{ t("tai-sao-ban-nen-su-dung-dlvideo") }}
        </h2>
        <p class="text-[18px] leading-[1.5] text-gray-400">
          {{
            t(
              "dlvideo-la-cong-cu-ho-tro-download-video-da-nang-tren-tiktok-youtube-facebook-instagram-va-twitter-cho-phep-ban-tai-xuong-cac-video-va-anh-chat-luong-cao-full-hd-2k-4k-tai-va-luu-video-anh-ve-dien-thoai-may-tinh-mien-phi-voi-chat-luong-cao-nhat-tai-video-anh-tren-web-khong-can-cai-dat-phan-mem-ho-tro-thiet-bi-android-pc-va-ios"
            )
          }}
        </p>
      </div>

      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
        <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
          <q-card-section>
            <Icon
              icon="file-icons:easybuild"
              width="28"
              class="text-green-500 mb-4 mx-3"
            />
            <div class="text-[20px] mb-3 font-weight-medium">
              {{ t("chat-luong-cao-nhat-va-khong-co-logo") }}
            </div>
            <div class="">
              {{
                t(
                  "ho-tro-nhieu-dinh-dang-dac-biet-la-cho-phep-ban-download-facebook-video-full-hd-4k-kem-am-thanh-hau-het-cac-cong-cu-khac-chi-co-the-giup-ban-tai-xuong-video-facebook-voi-chat-luong-hd-cac-video-tiktok-ban-tai-tu-cong-cu-nay-se-khong-co-logo-kho-chiu-nhu-khi-ban-tai-bang-tiktok"
                )
              }}
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
        <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
          <q-card-section>
            <Icon
              icon="fluent:clock-24-regular"
              width="28"
              class="text-green-500 mb-4 mx-3"
            />
            <div class="text-[20px] mb-3 font-weight-medium">
              {{ t("de-su-dung") }}
            </div>
            <div class="">
              {{
                t(
                  "tai-xuong-video-anh-bang-cach-su-dung-trinh-duyet-cua-ban-chung-toi-luon-muon-giu-moi-thu-don-gian-nhat-cho-ban-ban-khong-can-phai-tai-xuong-hoac-cai-dat-bat-ky-phan-mem-nao-ngoai-tru-youtube-yeu-cau-extension-animevsub-helper"
                )
              }}
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
        <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
          <q-card-section>
            <Icon
              icon="fluent:money-off-24-regular"
              width="28"
              class="text-green-500 mb-4 mx-3"
            />
            <div class="text-[20px] mb-3 font-weight-medium">
              {{ t("mien-phi") }}
            </div>
            <div class="">
              {{
                t(
                  "no-luon-mien-phi-ban-co-the-toi-cac-trang-cua-nha-cung-cap-roi-nhan-vao-quang-cao-de-ung-ho-ho"
                )
              }}
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 text-center mt-10">
        <h2 class="text-[32px] font-weight-medium mb-4">
          {{ t("lam-the-nao-de-tai-video-anh") }}
        </h2>
        <p class="text-[18px] leading-[1.5] text-gray-400">
          {{
            t(
              "cong-cu-tai-video-anh-tu-tiktok-youtube-facebook-instagram-twitter-khong-logo"
            )
          }}
        </p>
      </div>

      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
        <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
          <q-card-section>
            <q-responsive :ratio="328 / 237">
              <video
                src="https://snapsave.app/vn/media/copy-and-paste.mp4"
                muted
                loop
              />
            </q-responsive>
            <div class="text-[20px] mb-3 font-weight-medium">
              <span
                class="inline-block w-[30px] h-[36px] text-[20px] text-green-400"
                >1</span
              >
              {{ t("sao-chep-va-dan-link-video") }}
            </div>
            <div class="">
              {{
                t(
                  "ao-chep-lien-ket-cua-video-ma-ban-muon-tai-xuong-sau-do-dan-vao-o-nhap-lieu-vao-snapsave"
                )
              }}
            </div>
          </q-card-section>
        </q-card>
      </div>
      S
      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
        <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
          <q-card-section>
            <q-responsive :ratio="328 / 237">
              <video
                src="https://snapsave.app/vn/media/copy-and-paste.mp4"
                muted
                loop
              />
            </q-responsive>
            <div class="text-[20px] mb-3 font-weight-medium">
              <span
                class="inline-block w-[30px] h-[36px] text-[20px] text-green-400"
                >2</span
              >
              {{ t("chon-chat-luong") }}
            </div>
            <div class="">{{ t("chon-chat-luong-ma-ban-muon-tai-xuong") }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
        <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
          <q-card-section>
            <q-responsive :ratio="328 / 237">
              <video
                src="https://snapsave.app/vn/media/copy-and-paste.mp4"
                muted
                loop
              />
            </q-responsive>
            <div class="text-[20px] mb-3 font-weight-medium">
              <span
                class="inline-block w-[30px] h-[36px] text-[20px] text-green-400"
                >3</span
              >
              {{ t("download") }}
            </div>
            <div class="">
              {{
                t(
                  "cho-may-chu-cua-chung-toi-xu-ly-va-tai-xuong-thiet-bi-cua-ban"
                )
              }}
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 text-center mt-10">
        <h2 class="text-[32px] font-weight-medium mb-4">
          {{ t("dlvideo-trinh-tong-hop-tai-video-anh-tot") }}
        </h2>
        <p class="text-[18px] leading-[1.5] text-gray-400">
          {{ t("cac-tinh-nang-chinh-cua-dlvideo") }}
        </p>
      </div>

      <div class="col-12">
        <div class="text-[26px] font-weight-medium py-2 mt-6">
          {{ t("download-facebook-video") }}
        </div>
        <p>
          {{
            t(
              "dlvideo-duoc-phat-minh-de-giup-ban-tai-video-tren-facebook-va-luu-tat-ca-cac-loai-video-tu-facebook-vao-thiet-bi-cua-ban-voi-chat-luong-tot-nhat-len-den-4k-cac-video-tren-bai-viet-thuong-xem-video-livestream-video-trong-nhom-cong-khai-rieng-tu-deu-duoc-tai"
            )
          }}
          {{
            t(
              "and-luu-tu-fb-mot-cach-de-dang-chi-voi-vai-cu-nhap-chuot-thong-qua-trinh-duyet"
            )
          }}
        </p>
        <div class="text-[26px] font-weight-medium py-2 mt-6">
          {{ t("download-facebook-video") }}
        </div>
        <p>
          {{
            t(
              "dlvideo-cung-co-the-tai-xuong-cau-chuyen-video-fb-voi-chat-luong-tot-nhat-tat-ca-nhung-gi-ban-can-la-ket-ban-voi-nguoi-tao-cau-chuyen-tren-fb-va-lam-theo-cac-buoc-nhu-tai-video-facebook-rieng-tu"
            )
          }}
        </p>
        <div class="text-[26px] font-weight-medium py-2 mt-6">
          {{ t("download-tiktok-video-khong-logo") }}
        </div>
        <p>
          {{
            t(
              "dlvideo-cho-phep-ban-tai-xuong-video-tu-tiktok-khong-co-logo-tiktok-nhu-khi-ban-tai-xuong-truc-tiep-tu-ung-dung"
            )
          }}
        </p>
        <div class="text-[26px] font-weight-medium py-2 mt-6">
          {{ t("download-tu-youtube-instagram-va-twitter") }}
        </div>
        <p>
          {{
            t(
              "ngoai-ra-dlvideo-con-cho-phep-ban-tai-xuong-anh-hoac-video-tu-cac-nguon-nhu-youtube-instagram-twitter-voi-su-tro-giup-cua-cac-nha-cung-cap-dich-vu"
            )
          }}
        </p>
      </div>

      <div class="col-12 text-center mt-10">
        <h2 class="text-[32px] font-weight-medium mb-4">
          {{ t("cac-cau-hoi-thuong-gap") }}
        </h2>
      </div>

      <div class="col-12">
        <div class="mx-[-16px]">
          <q-expansion-item
            v-for="item in questions"
            :key="item.title"
            expand-separator
          >
            <template #header>
              <div
                class="text-[16px] font-weight-medium flex items-center w-full"
              >
                <Icon
                  icon="fluent:chat-help-24-regular"
                  width="24"
                  class="mr-2"
                />
                {{ item.title }}
              </div>
            </template>
            <p class="py-2 mx-4" v-html="item.content" />
          </q-expansion-item>
        </div>
      </div>

      <div class="col-12 text-center mt-10">
        <h2 class="text-[32px] font-weight-medium mb-4">
          {{ t("tuyen-bo-tu-choi-trach-nhiem") }}
        </h2>
      </div>
      <div class="col-12">
        <p>
          {{
            t(
              "viec-tai-xuong-video-tu-youtube-vi-pham-nghiem-trong-chinh-sach-cua-google-llc-doi-voi-cac-quyen-tac-gia-vui-long-khong-su-dung-cong-cu-nay-cho-cac-muc-dich-thuong-mai-hoac-dang-tai-trai-phep-cac-video-co-ban-quyen"
            )
          }}
          <br />
          <br />
          {{
            t(
              "youtube-co-the-khoi-kien-chung-toi-ve-viec-vi-pham-chinh-sach-cua-ho-nhu-khi-ho-kien"
            )
          }}
          <a
            href="https://www.google.com/url?sa=t&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiEyqy-oeT7AhXZad4KHRthCUUQFnoECA0QAQ&url=https%3A%2F%2Fgithub.com%2Fytdl-org%2Fyoutube-dl&usg=AOvVaw2KxrP_I9fwbiuLYhnhT3SE"
            target="_blank"
            >youtube-dl</a
          >
          {{
            t(
              "nhung-chung-toi-khong-quan-tam-day-la-mot-cong-cu-ma-nguon-mo-duoc-cap-phep-theo-giay-phep"
            )
          }}
          <a
            href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt"
            target="_blank"
            >MIT</a
          >
          {{
            t(
              "bat-cu-ai-cung-co-the-dong-gop-phan-phoi-va-su-dung-no-chung-toi-chi-cung-cap-cong-cu-co-su-dung-hay-khong-la-viec-cua-ban"
            )
          }}
          <br />
          <br />
          <b>{{
            t(
              "neu-ban-co-van-de-gi-do-ve-ban-quyen-video-hoac-hinh-anh-voi-cong-cu-nay-vui-long-dung-lien-he-chung-toi-vi-chung-toi-khong-the-giai-quyet-chung"
            )
          }}</b>
        </p>
      </div>

      <div class="col-12 text-center mt-10">
        <h2 class="text-[32px] font-weight-medium mb-4">
          {{ t("cac-cong-cu-duoc-cung-cap-boi") }}
        </h2>
        <p class="text-[18px] leading-[1.5] text-gray-400">
          {{
            t(
              "moi-tinh-nang-tai-xuong-khac-nhau-duoc-cung-cap-boi-nhung-nha-cung-cap-duoi-day"
            )
          }}
        </p>
      </div>

      <div class="row col-12 text-center mt-5">
        <a
          v-for="item in serviceProvider"
          :key="item.name"
          :href="item.homepage"
          target="_blank"
          class="col px-4"
        >
          <div class="w-[100px] h-[100px] text-center mx-auto">
            <q-img
              :src="item.logo"
              width="100%"
              height="auto"
              class="rounded-[25px] top-1/2 transform translate-y-[-50%]"
            />
          </div>
          <div class="text-subtitle1 font-weight-medium">{{ item.name }}</div>
          <div class="text-grey-5 font-weight-regular text-caption">
            {{ item.provider }}
          </div>
        </a>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { QCard, QCardSection, QPage, QTab, QTabs } from "quasar"
import { useType } from "src/composibles/useType"
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import { useRoute, useRouter } from "vue-router"

import { tabs } from "./IndexPage.shared"

const route = useRoute()
const router = useRouter()
const type = useType()
const { t } = useI18n()

const tab = computed<string>({
  get() {
    return type.value
  },
  set(type) {
    router.replace({
      ...route,
      query: {
        ...route.query,
        type,
      },
    })
  },
})

const tabActive = computed(
  () => tabs.find((item) => item.name === tab.value) ?? tabs[0]
)

const questions = [
  {
    title: t("toi-co-the-luu-video-tren-dien-thoai-cua-minh-khong"),
    content: t(
      "tat-nhien-viec-luu-video-ve-may-sau-khi-ban-tai-xong-thong-thuong-se-o-thu-muc-download-cua-may-windows-hoac-android-con-iphone-thi-phuc-tap-hon-xem-them-o-tren"
    ),
  },
  {
    title: t("toi-co-the-tai-xuong-video-phat-truc-tiep-tren-facebook-khong"),
    content: t(
      "tat-nhien-roi-nhung-ban-chi-co-the-tai-xuong-cac-video-truc-tiep-tren-facebook-nhung-chi-sau-khi-chung-ket-thuc-con-trong-luc-phat-se-khong-the-tai-duoc"
    ),
  },
  {
    title: t("cach-tai-ve-may-tinh-nhu-the-nao"),
    content: t(
      "tren-may-tinh-chi-can-sao-chep-lien-ket-cua-video-va-dan-no-vao-hop-nhap-lien-ket-duoc-cung-cap-o-dau-trang-nay-va-nhan-nut-tai-xuong-la-xong-xem-them-huong-dan-su-dung-snapsave-huong-dan-su-dung-snapsave-de-tai-video"
    ),
  },
  {
    title: t("lam-the-nao-de-tai-ve-android"),
    content: t(
      "cung-giong-nhu-tai-video-tren-fb-tu-may-tinh-rat-don-gian-hay-truy-cap-snapsave-app-greater-than-nhap-link-video-greater-than-va-bam-download-greater-than-chon-chat-luong-ban-muon-tai-ve-ho-tro-den-video-4k"
    ),
  },
  {
    title: t("lam-the-nao-de-tai-ve-iphone-ios"),
    content: t(
      "doi-voi-ios-phuc-tap-hon-1-chut-vi-ios-khong-ho-tro-tai-video-truc-tiep-nen-ban-can-tai-them-ung-dung-documents-by-readdle-mo-ung-dung-len-chon-trinh-duyet-greater-than-truy-cap-dlvideo-greater-than-nhap-link-video-greater-than-va-bam-download-greater-than-chon-chat-luong-ban-muon-tai-ve"
    ),
  },
  {
    title: t("toi-co-phai-tai-xuong-hay-cai-dat-gi-khong"),
    content: t(
      "thong-thuong-ban-khong-phai-tai-xuong-gi-ca-tuy-nhien-neu-ban-muon-tai-xuong-video-youtube-hoac-tang-toc-do-tai-xuong-ban-can-tai-ung-dung-dlvideo-xuong-hoac-cai-dat-extension-less-than-a-href-https-github-com-anime-vsub-extension-animevsub-helper-target-_blank-class-text-blue-500-font-weight-medium-greater-than-animevsub-helper-less-than-a-greater-than"
    ),
  },
  {
    title: t("tac-dung-cua-extension-animevsub-helper-hoac-ung-dung-dlvideo"),
    content: t(
      "neu-ban-cai-dat-ung-dung-dlvideo-hoac-extension-animevsub-helper-toc-do-tai-xuong-video-va-anh-se-tang-dang-ke-va-dieu-nay-la-bat-buoc-neu-ban-muon-tai-video-youtube-tu-dlvideo"
    ),
  },
]

const serviceProvider = [
  {
    name: "TikWM",
    logo: "https://tikwm.com/images/logo2.png",
    homepage: "https://tikwm.com",
    provider: t("cung-cap-dich-vu-tiktok-download"),
  },
  {
    name: "SSYoutube",
    logo: "https://ssyoutube.com/img/logo.svg",
    homepage: "https://ssyoutube.com",
    provider: t("cung-cap-dich-vu-twitter-instagram-download"),
  },
  {
    name: "SnapSave",
    logo: "https://snapsave.app/apple-icon-180x180.jpg?v=1.1",
    homepage: "https://snapsave.app",
    provider: t("cung-cap-dich-vu-facebook-download"),
  },
  {
    name: "Y2Mate",
    logo: "https://www.y2mate.com/themes/images/logo.png",
    homepage: "https://y2mate.com",
    provider: t("cung-cap-dich-vu-youtube-download"),
  },
  {
    name: "AnimeVsub",
    logo: "https://animevsub.ga/icons/favicon-128x128.png",
    homepage: "https://animevsub.ga",
    provider: t("cung-cap-dich-extension-tro-giup"),
  },
]
</script>

<style lang="scss" scoped>
.input :deep(.q-field__control),
.input :deep(.q-field__marginal) {
  height: 48px !important;
}

a {
  @apply text-blue-500 font-weight-medium;
}
</style>
