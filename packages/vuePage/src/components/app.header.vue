<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useResponsiveLayoutStore } from "responsive-layout-vue";

const store = useResponsiveLayoutStore();
</script>

<template>
  <header class="flex items-center justify-between p-2">
    <button
      class="text-blue-500 text-2xl"
      @click="store.toggleNav">
      <Icon
        :icon="
          store.openNav ? 'lucide:panel-right-open' : 'lucide:panel-left-open'
        " />
    </button>
    <h1>APP HEADER</h1>
    <button
      class="text-blue-500 text-2xl"
      @click="store.toggleAside">
      <Icon
        :icon="
          store.openAside ? 'lucide:panel-left-open' : 'lucide:panel-right-open'
        " />
    </button>
  </header>
</template>
