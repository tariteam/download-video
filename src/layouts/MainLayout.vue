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

        <q-btn round class="bg-[#ffffff33] mr-4" size="12px">
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
        </q-btn>
        <q-btn round class="bg-[#ffffff33]" size="12px">
          <Icon icon="fluent:globe-24-regular" width="25" height="25" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { useQuasar } from "quasar"

const $q = useQuasar()
</script>

<style lang="scss" scoped>
.dlvideo {
  filter: drop-shadow(-2px -1px 0 #24f6f0) brightness(110%);
  text-shadow: 2px 2px #fe2d52;
}
</style>
