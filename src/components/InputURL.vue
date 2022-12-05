<template>
  <div class="flex md:flex-nowrap justify-center">
    <q-input
      v-model="url"
      standout="text-white"
      class="input w-full max-w-[607px]"
      placeholder="Dán liên kết TikTok vào đây"
      @keypress="emit('keypress:input')"
    >
      <template v-slot:prepend>
        <Icon icon="humbleicons:link" width="20" height="20" />
      </template>
      <template v-slot:append>
        <q-btn no-caps unelevated class="bg-[rgba(25,118,210,0.2)] text-blue">
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
import { ref } from "vue"

const emit = defineEmits<{
  (name: "click:download", value: string): void
  (name: "keypress:input"): void
}>()

const url = ref("")
</script>

<style lang="scss" scoped></style>
