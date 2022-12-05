<template>
  <div class="flex md:flex-nowrap justify-center">
    <q-input
      v-model="url"
      standout="text-white"
      class="input w-full max-w-[607px]"
      :placeholder="placeholder"
      type="url"
      @keypress="emit('keypress:input')"
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
      @click="emit('click:download', url)"
    >
      <Icon
        icon="fluent:arrow-download-24-filled"
        width="1.5em"
        height="1.5em"
      />
      Tải xuống
    </q-btn>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { useQuasar } from "quasar";
import { ref } from "vue"

defineProps<{
  placeholder: string
}>()

const emit = defineEmits<{
  (name: "click:download", value: string): void
  (name: "keypress:input"): void
}>()
const $q = useQuasar()

const url = ref("")

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
