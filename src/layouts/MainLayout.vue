<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-c1">
      <q-toolbar class="h-[54px]">
        <q-toolbar-title class="flex items-center">
          <q-avatar size="2em">
            <img src="/src/assets/icon-trans.webp" />
          </q-avatar>
          <span class="font-weight-medium dlvideo">DLVideo</span>
        </q-toolbar-title>

        <!-- <q-btn round class="bg-[#ffffff33] mr-4" size="12px" @click="$q.dark.toggle()">
          <Icon
            v-if="$q.dark.isActive"
            icon="fluent:weather-sunny-24-regular"
            width="25"
            height="25"
          />
          <Icon
            v-else
            icon="fluent:weather-moon-24-filled"
            width="25"
            height="25"
            :horizontalFlip="true"
          />
        </q-btn> -->
        <q-btn round class="bg-[#ffffff33]" size="12px">
          <Icon icon="fluent:globe-24-regular" width="25" height="25" />


          <q-menu class="bg-c1 rounded-xl">
 <q-list class="bg-transparent">
                <q-item class="rounded-xl">
                  <q-item-section>
                    Chọn ngôn ngữ của bạn
                  </q-item-section>
                </q-item>
                <!-- <q-separator class="bg-[rgba(255,255,255,0.1)]" /> -->
                <q-item
                  v-for="{ name, code } in languages"
                  :key="code"
                  clickable
                  v-ripple
                  class="rounded-xl"
                  @click="systemStore.locale = code"
                >
                  <q-item-section avatar class="min-w-0">
                    <Icon
                      v-if="systemStore.locale === code"
                      icon="fluent:checkmark-24-regular"
                      width="20"
                      height="20"
                    />
                    <span v-else class="block w-[20px]" />
                  </q-item-section>
                  <q-item-section>{{ name }}</q-item-section>
                </q-item>
              </q-list>

          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>


    <div class=" px-4 text-caption text-grey-5 text-center">
       <q-separator />

      <p class="py-6">
        (c) MIT License Copyright {{ new Date().getFullYear() }} by DLVideo
      </p>
    </div>
  </q-layout>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { useQuasar } from "quasar"
import { languages } from "src/i18n"
import { useSystemStore } from "stores/system"

const $q = useQuasar()

const systemStore = useSystemStore()
</script>

<style lang="scss" scoped>
.dlvideo {
  filter: drop-shadow(-2px -1px 0 #24f6f0) brightness(110%);
  text-shadow: 2px 2px #fe2d52;
}
</style>
