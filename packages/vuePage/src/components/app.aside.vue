<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useResponsiveLayoutStore } from "responsive-layout-vue";

const store = useResponsiveLayoutStore();
</script>

<template>
  <aside class="grid place-items-center relative">
    <button
      class="absolute top-2 left-2 z-50 md:hidden text-blue-500 text-2xl"
      @click="store.toggleAside">
      <Icon icon="lucide:x" />
    </button>
    <h2 class="text-xl p-4">Aside</h2>
  </aside>
</template>
