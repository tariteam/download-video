<template>
  <form @submit.prevent="onSubmit" class="flex md:flex-nowrap justify-center">
    <q-input
      v-model="url"
      standout="text-white"
      class="input w-full max-w-[607px]"
      :placeholder="placeholder"
      type="url"
      :rules="[
        (v) => !!v || 'Yêu cầu nhập URL',
        (v) => isWebUri(v) || 'URL không hợp lệ',
      ]"
      lazy-rules
    >
      <template v-slot:prepend>
        <Icon icon="humbleicons:link" width="20" height="20" />
      </template>
      <template v-slot:append>
        <q-btn
          no-caps
          unelevated
          class="bg-[rgba(25,118,210,0.2)] text-blue"
          @click="pasteFromClipboard"
        >
          <Icon icon="fluent:clipboard-24-filled" />
          Dán
        </q-btn>
      </template>
    </q-input>

    <q-btn
      class="bg-[#00be63] h-[48px] text-[18px] md:text-[16px] w-full md:w-auto mt-3 md:mt-0 md:ml-3 max-w-[607px]"
      no-caps
      type="submit"
    >
      <Icon
        icon="fluent:arrow-download-24-filled"
        width="1.5em"
        height="1.5em"
      />
      Tải xuống
    </q-btn>
  </form>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { QBtn, QInput, useQuasar } from "quasar"
import { useType } from "src/composibles/useType"
import { isWebUri } from "src/logic/isWebUri"
import { findTabFromUrl } from "src/pages/IndexPage.shared"
import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

const props = defineProps<{
  placeholder: string
  type: string
}>()

const emit = defineEmits<{
  (name: "click:download", value: string): void
  (name: "keypress:input"): void
}>()
const $q = useQuasar()
const route = useRoute()
const router = useRouter()
const type = useType()

const url = ref("")
watch(
  () => route.query.url,
  (uri) => {

    if (!uri) return
    uri = uri.toString()

    if (!isWebUri(uri)) return console.warn("url query is not url")

    const typeUrl = findTabFromUrl(uri)?.name

    if (!typeUrl) {
      $q.notify({
        position: "bottom-right",
        message: "URL này không được hỗ trợ",
      })
      return
    }

    if (typeUrl !== props.type) {
      if (!window.inited) {
      window.inited = true
      // redirect
      router.replace({
        ...route,
        query: {
          ...route.query,
          type: typeUrl
        },
      })
    }

      return
    }

    window.inited = true
    url.value = uri
    if (route.query.autoDownload) onSubmit()
  },
  { immediate: true }
)

async function onSubmit() {
  const typeUrl = findTabFromUrl(url.value)?.name

  if (!typeUrl) {
    $q.notify({
      position: "bottom-right",
      message: "URL này không được hỗ trợ",
    })
    return
  }

  if (typeUrl !== type.value) {
    // redirect
    await router.push({
      ...route,
      query: {
        ...route.query,
        type: typeUrl,
        url: url.value,
          autoDownload: true
      },
    })

    return
  }

  router.push({
    ...route,
    query: {
      ...route.query,
      url: url.value,
    },
  })

  emit("click:download", url.value)
}

async function pasteFromClipboard() {
  try {
    const permission = await navigator.permissions.query({
      name: "clipboard-read",
    })
    if (permission.state === "denied") {
      // eslint-disable-next-line functional/no-throw-statement
      throw new Error("Not allowed to read clipboard.")
    }
    const clipboardContents = await navigator.clipboard.read()

    for (const item of clipboardContents) {
      if (!item.types.includes("text/plain")) {
        // eslint-disable-next-line functional/no-throw-statement
        throw new Error("Clipboard contains URL data.")
      }
      const blob = await item.getType("text/plain")

      url.value = new TextDecoder().decode(await blob.arrayBuffer())
    }
  } catch (err) {
    $q.notify({
      position: "bottom-right",
      message: (err as Error).message,
    })
  }
}
</script>

<style lang="scss" scoped></style>
