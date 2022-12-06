<template>
  <q-page class="px-[30px] sm:px-[60px]">
    <q-card
      class="bg-c1 mx-auto max-w-[890px] mt-15 w-full rounded-xl text-center"
    >
      <q-card-section>
        <h1 class="text-[24px] font-weight-medium mb-2">
          Công cụ tải video {{ tabActive.name }}
        </h1>
        <h2 class="text-subtitle1">{{tabActive.description}}</h2>
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
              :is="tabActive.component"
            />
          </keep-alive>
        </div>
      </q-card-section>
    </q-card>


    <div class="row leading-normal my-24 mx-[-30px]">
      <div class="col-12 text-center">
        <h2 class="text-[32px] font-weight-medium mb-4">Tại sao bạn nên sử dụng DLVideo</h2>
        <p class="text-[18px] leading-[1.5] text-gray-400">
          DLVideo là công cụ hỗ trợ Download Video đa năng trên TikTok, Youtube, Facebook, Instagram và Twitter cho phép bạn tải xuống các video và ảnh chất lượng cao: Full HD, 2K, 4K.
          Tải và lưu video, ảnh về điện thoại, máy tính miễn phí với chất lượng cao nhất. Tải video, ảnh trên web, không cần cài đặt phần mềm. Hỗ trợ thiết bị Android, PC và iOS.
        </p>
      </div>


      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
      <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
        <q-card-section>
          <Icon icon="file-icons:easybuild" width="28" class="text-green-500 mb-4 mx-3 "/>
          <div class="text-[20px] mb-3 font-weight-medium">Chất lượng cao nhất và không có logo</div>
          <div class="">Hỗ trợ nhiều định dạng, đặc biệt là cho phép bạn download Facebook video full HD, 4K kèm âm thanh. Hầu hết các công cụ khác chỉ có thể giúp bạn tải xuống video Facebook với chất lượng HD. Các video TikTok bạn tải từ công cụ này sẽ không có logo khó chịu như khi bạn tải bằng TikTok.</div>
        </q-card-section>
      </q-card>
      </div>
      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
      <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
        <q-card-section>
          <Icon icon="fluent:clock-24-regular" width="28" class="text-green-500 mb-4 mx-3 "/>
          <div class="text-[20px] mb-3 font-weight-medium">Dễ sử dụng</div>
          <div class="">Tải xuống video, ảnh bằng cách sử dụng trình duyệt của bạn: Chúng tôi luôn muốn giữ mọi thứ đơn giản nhất cho bạn. Bạn không cần phải tải xuống hoặc cài đặt bất kỳ phần mềm nào (ngoại trừ YouTube yêu cầu extension AnimeVsub Helper).</div>
        </q-card-section>
      </q-card>
      </div>
      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
      <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
        <q-card-section>
          <Icon icon="fluent:money-off-24-regular" width="28" class="text-green-500 mb-4 mx-3 "/>
          <div class="text-[20px] mb-3 font-weight-medium">Miễn phí</div>
          <div class="">Nó luôn miễn phí. Bạn có thể tới các trang của nhà cung cấp rồi nhấn vào quảng cáo để ủng hộ họ</div>
        </q-card-section>
      </q-card>
      </div>



      <div class="col-12 text-center mt-10">
        <h2 class="text-[32px] font-weight-medium mb-4">Làm thế nào để tải video, ảnh</h2>
        <p class="text-[18px] leading-[1.5] text-gray-400">
         Công cụ tải video, ảnh từ TikTok, Youtube, Facebook, Instagram, Twitter không logo
        </p>
      </div>



      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
      <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
        <q-card-section>
            <q-responsive :ratio="328/237">
              <video src="https://snapsave.app/vn/media/copy-and-paste.mp4" muted loop />
            </q-responsive>
            <div class="text-[20px] mb-3 font-weight-medium">
              <span class="inline-block w-[30px] h-[36px] text-[20px] text-green-400">1</span>
              Sao chép và dán link video
            </div>
            <div class="">ao chép liên kết của video mà bạn muốn tải xuống, sau đó dán vào ô nhập liệu vào SnapSave</div>
        </q-card-section>
      </q-card>
      </div>S
      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
      <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
        <q-card-section>
            <q-responsive :ratio="328/237">
              <video src="https://snapsave.app/vn/media/copy-and-paste.mp4" muted loop />
            </q-responsive>
            <div class="text-[20px] mb-3 font-weight-medium">
              <span class="inline-block w-[30px] h-[36px] text-[20px] text-green-400">2</span>
              Chọn chất lượng
            </div>
            <div class="">Chọn chất lượng mà bạn muốn tải xuống</div>
        </q-card-section>
      </q-card>
      </div>
      <div class="col-12 sm:col-4 px-3 md:px-5 py-12">
      <q-card class="col-12 sm:col-4 px-2 py-2 !bg-[#202b39] bg-opacity-72">
        <q-card-section>
            <q-responsive :ratio="328/237">
              <video src="https://snapsave.app/vn/media/copy-and-paste.mp4" muted loop />
            </q-responsive>
            <div class="text-[20px] mb-3 font-weight-medium">
              <span class="inline-block w-[30px] h-[36px] text-[20px] text-green-400">3</span>
              Download
            </div>
            <div class="">Chờ máy chủ của chúng tôi xử lý và tải xuống thiết bị của bạn.</div>
        </q-card-section>
      </q-card>
      </div>



        <div class="col-12 text-center mt-10">
          <h2 class="text-[32px] font-weight-medium mb-4">DLVideo - Trình tổng hợp tải video, ảnh tốt</h2>
          <p class="text-[18px] leading-[1.5] text-gray-400">
              Các tính năng chính của DLVideo
          </p>
        </div>


        <div class="col-12">
          <div class="text-[26px] font-weight-medium py-2 mt-6">Download Facebook Video</div>
          <p>
            DLVideo được phát minh để giúp bạn tải video trên Facebook và lưu tất cả các loại video từ Facebook vào thiết bị của bạn với chất lượng tốt nhất (lên đến 4K). Các video trên bài viết thường / Xem, video Livestream, video trong nhóm công khai / riêng tư,… đều được tải & lưu từ Fb một cách dễ dàng chỉ với vài cú nhấp chuột thông qua trình duyệt
          </p>
          <div class="text-[26px] font-weight-medium py-2 mt-6">Download Facebook Video</div>
          <p>
           DLVideo cũng có thể tải xuống câu chuyện video Fb với chất lượng tốt nhất. Tất cả những gì bạn cần là kết bạn với người tạo Câu chuyện trên Fb và làm theo các bước như tải video Facebook riêng tư.
          </p>
          <div class="text-[26px] font-weight-medium py-2 mt-6">Download TikTok Video không logo</div>
          <p>
            DLVideo cho phép bạn tải xuống video từ TikTok không có logo TikTok như khi bạn tải xuống trực tiếp từ ứng dụng
          </p>
          <div class="text-[26px] font-weight-medium py-2 mt-6">Download từ YouTube, Instagram và Twitter</div>
          <p>
            Ngoài ra DLVideo còn cho phép bạn tải xuống ảnh hoặc video từ các nguồn như YouTube, Instagram, Twitter với sự trợ giúp của các nhà cung cấp dịch vụ
          </p>
        </div>

        <div class="col-12 text-center mt-10">
          <h2 class="text-[32px] font-weight-medium mb-4">Các câu hỏi thường gặp</h2>

        </div>

        <div class="col-12">
          <div class=" mx-[-16px]">
          <q-expansion-item
          v-for="item in questions" :key="item.title"
                  expand-separator
                >
                <template #header>
                  <div class="text-[16px] font-weight-medium flex items-center w-full">
                  <Icon icon="fluent:chat-help-24-regular" width="24"  class="mr-2"/>
                  {{ item.title }}
                  </div>
                </template>
                <p class="py-2 mx-4" v-html="item.content " />
                </q-expansion-item>

          </div>
        </div>



        <div class="col-12 text-center mt-10">
          <h2 class="text-[32px] font-weight-medium mb-4">Tuyên bố từ chối trách nhiệm</h2>

        </div>
        <div class="col-12">
          <p>
            Việc tải xuống Video từ YouTube vi phạm nghiêm trọng chính sách của Google LLC đối với các quyền tác giả. Vui lòng không sử dụng công cụ này cho các mục đích thương mại hoặc đăng tải trái phép các video có bản quyền
            <br>
            <br>
            YouTube có thể khởi kiện chúng tôi về việc vi phạm chính sách của họ như khi họ kiện <a href="https://www.google.com/url?sa=t&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiEyqy-oeT7AhXZad4KHRthCUUQFnoECA0QAQ&url=https%3A%2F%2Fgithub.com%2Fytdl-org%2Fyoutube-dl&usg=AOvVaw2KxrP_I9fwbiuLYhnhT3SE" target="_blank">youtube-dl</a>
            nhưng chúng tôi không quan tâm đây là một công cụ mã nguồn mở được cấp phép theo giấy phép <a href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt" target="_blank">MIT</a> bất cứ ai cũng có thể đóng góp, phân phối và sử dụng nó. Chúng tôi chỉ cung cấp công cụ, có sử dụng hay không là việc của bạn.
            <br>
            <br>
            <b>Nếu bạn có vấn đề gì đó về bản quyền video hoặc hình ảnh với công cụ này vui lòng đừng liên hệ chúng tôi vì chúng tôi không thể giải quyết chúng.</b>
          </p>
        </div>


        <div class="col-12 text-center mt-10">
          <h2 class="text-[32px] font-weight-medium mb-4">Các công cụ được cung cấp bởi</h2>
          <p class="text-[18px] leading-[1.5] text-gray-400">
              Mỗi tính năng tải xuống khác nhau được cung cấp bởi những nhà cung cấp dưới đây
          </p>
        </div>

        <div class="row col-12 text-center mt-5">
          <a v-for="item in serviceProvider" :key="item.name" :href="item.homepage" target="_blank" class="col px-4">
            <div class="w-[100px] h-[100px] text-center mx-auto">
              <q-img :src="item.logo" width="100%" height="auto" class="rounded-[25px] top-1/2 transform translate-y-[-50%]"/>
            </div>
            <div class="text-subtitle1 font-weight-medium">{{ item.name }}</div>
            <div class="text-grey-5 font-weight-regular text-caption">{{ item.provider }}</div>
          </a>
        </div>


    </div>
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

const tabActive = computed(() => tabs.find((item) => item.name === tab.value) ?? tabs[0])

const questions = [
  {
    title:" Tôi có thể lưu video trên điện thoại của mình không?",
    content: "Tất nhiên, việc lưu video về máy sau khi bạn tải xong thông thường sẽ ở thư mục Download của máy Windows hoặc Android, Còn Iphone thì phức tạp hơn xem thêm ở trên."
  },
  {
    title: "Tôi có thể tải xuống video phát Trực tiếp trên Facebook không?",
    content: "Tất nhiên rồi, Nhưng bạn chỉ có thể tải xuống các video Trực tiếp trên Facebook nhưng chỉ sau khi chúng kết thúc. còn trong lúc phát sẽ không thể tải được."
  },
  {
    title: "Cách tải về máy tính như thế nào?",
    content: "Trên máy tính Chỉ cần sao chép liên kết của video và dán nó vào hộp nhập liên kết được cung cấp ở đầu trang này và nhấn nút Tải xuống là xong! Xem thêm hướng dẫn sử dụng SnapSave Hướng dẫn sử dụng Snapsave để tải video"
  },
  {
    title: "Làm thế nào để tải về Android?",
    content: "Cũng giống như tải video trên FB từ máy tính, rất đơn giản hãy truy cập SnapSave.App -> Nhập Link Video -> Và Bấm Download -> Chọn chất lượng bạn muốn tải về (Hỗ trợ đến Video 4K)"
  },
  {
    title: "Làm thế nào để tải về Iphone(IOS)?",
    content: "Đối với IOS phức tạp hơn 1 chút, vì IOS không hỗ trợ tải Video trực Tiếp nên bạn cần tải thêm ứng dụng Documents by Readdle, Mở ứng dụng lên, Chọn trình duyệt -> Truy cập DLVideo -> Nhập Link Video -> Và Bấm Download -> Chọn chất lượng bạn muốn tải về."
  },
  {
    title: "Tôi có phải tải xuống hay cài đặt gì không?",
    content: "Thông thường bạn không phải tải xuống gì cả tuy nhiên nếu bạn muốn tải xuống video YouTube hoặc tăng tốc độ tải xuống bạn cần tải ứng dụng DLVideo xuống hoặc cài đặt extension <a href='https://github.com/anime-vsub/extension-animevsub-helper' target='_blank' class='text-blue-500 font-weight-medium'>AnimeVsub Helper</a>"
  },
  {
    title: "Tác dụng của extension AnimeVsub Helper hoặc ứng dụng DLVideo",
    content: "Nếu bạn cài đặt ứng dụng DLVideo hoặc extension AnimeVsub Helper tốc độ tải xuống video và ảnh sẽ tăng đáng kể và điều này là bắt buộc nếu bạn muốn tải video YouTube từ DLVideo"
  }
]

const serviceProvider = [
  {
    name: "TikWM",
    logo: "https://tikwm.com/images/logo2.png",
    homepage: "https://tikwm.com",
    provider: "cung cấp dịch vụ TikTok download"
  },
  {
    name: "SSYoutube",
    logo: "https://ssyoutube.com/img/logo.svg",
    homepage: "https://ssyoutube.com",
    provider: "cung cấp dịch vụ Twitter, Instagram download"
  },
  {
    name: "SnapSave",
    logo: "https://snapsave.app/apple-icon-180x180.jpg?v=1.1",
    homepage: "https://snapsave.app",
    provider: "cung cấp dịch vụ Facebook download"
  },
  {
    name: "Y2Mate",
    logo: "https://www.y2mate.com/themes/images/logo.png",
    homepage: "https://y2mate.com",
    provider: "cung cấp dịch vụ YouTube download"
  },
  {
    name: "AnimeVsub",
    logo: "https://animevsub.ga/icons/favicon-128x128.png",
    homepage: "https://animevsub.ga",
    provider: "cung cấp dịch extension trợ giúp"
  }
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
