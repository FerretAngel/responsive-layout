<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useResponsiveLayoutStore } from "responsive-layout-vue";

const store = useResponsiveLayoutStore();
</script>

<template>
  <nav class="grid place-items-center">
    <button
      class="absolute top-2 right-2 z-50 text-blue-500 text-2xl md:hidden"
      @click="store.toggleNav">
      <Icon icon="lucide:x" />
    </button>
    <h2 class="text-xl p-4">Navigation</h2>
  </nav>
</template>
