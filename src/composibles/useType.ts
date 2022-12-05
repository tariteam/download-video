import { tabs } from "src/pages/IndexPage.shared"
import { computed } from "vue"
import { useRoute } from "vue-router"

export function useType() {
  const route = useRoute()

  return computed(() => {
    const type = route.query.type?.toString().toLowerCase()

    const tab = !type
      ? undefined
      : tabs.find((item) => item.name.toLowerCase() === type)

    return tab?.name ?? "TikTok"
  })
}
