import logoTiktok from "src/assets/tiktok-logo-4500.svg"
import { defineAsyncComponent } from "vue"

export const tabs = [
  {
    name: "TikTok",
    icon: logoTiktok,
    image: true,
    color: "#25F4EE",
    description: "Không logo, hình mờ, watermark",
    hosts: ["tiktok.com", "tiktokv.com"],
    component: defineAsyncComponent(
      () => import("components/DLVideoTiktok.vue")
    ),
  },
  {
    name: "YouTube",
    icon: "logos:youtube-icon",
    color: "#FF0000",
    description: "Chuyển đổi không giới hạn và tải xuống miễn phí",
    hosts: [
      "youtube.com",
      "youtube-nocookie.com",
      "youtube.ae",
      "youtu.be",
      "gvt1.com",
      "google.com",
    ],
    component: defineAsyncComponent(
      () => import("components/DLVideoYoutube.vue")
    ),
  },
  {
    name: "Facebook",
    icon: "logos:facebook",
    color: "#1877F2",
    description: "Tải video từ Facebook 1080 - 2K - 4K. Miễn Phí",
    hosts: [
      "accountkit.com",
      "acebook.com",
      "faacebook.com",
      "facebbook.com",
      "facebook-dns.com",
      "facebook-hardware.com",
      "facebook.co",
      "facebook.com",
      "facebook.com.au",
      "facebook.com.mx",
      "facebook.it",
      "facebook.net",
      "fb.audio",
      "fb.com",
      "fb.gg",
      "fb.me",
      "fb.watch",
      "fbcdn.net",
      "fbe2e.com",
      "fbinfra.net",
      "fbpigeon.com",
      "fbsbx.com",
      "fbthirdpartypixel.com",
      "fbwat.ch",
      "internet.org",
      "m-freeway.com",
      "parse.com",
      "wit.ai",
    ],
    component: defineAsyncComponent(
      () => import("components/DLVideoFacebook.vue")
    ),
  },
  {
    name: "Instagram",
    icon: "logos:instagram-icon",
    color: "#E1306C",
    description: "Tải xuống Video, hình ảnh, Reels, IGTV Insta trực tuyến",
    hosts: ["instagram.com", "ig.me", "cdninstagram.com"],
    component: defineAsyncComponent(
      () => import("components/DLVideoInstagram.vue")
    ),
  },
  {
    name: "Twitter",
    icon: "logos:twitter",
    color: "#55acee",
    description: "Tải xuống video Twitter miễn phí",
    hosts: ["twitter.com"],
    component: defineAsyncComponent(
      () => import("components/DLVideoTwitter.vue")
    ),
  },
]

export function findTabFromUrl(url: string): typeof tabs[0] | undefined {
  const { host } = new URL(url)
  return tabs.find((tab) =>
    tab.hosts.some((item) => host.endsWith(`.${item}`) || item === host)
  )
}
