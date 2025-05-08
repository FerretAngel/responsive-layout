<script setup lang="ts">
import { ResponsiveLayout } from "responsive-layout-vue";
import AppHeader from "./components/app.header.vue";
import AppNav from "./components/app.nav.vue";
import AppAside from "./components/app.aside.vue";
import AppMain from "./components/app.main.vue";
</script>

<template>
  <ResponsiveLayout
    class="text-gray-600 font-bold tracking-wider max-w-[2100px] mx-auto shadow-2xl"
    :nav-width="'24rem'"
    :aside-width="'18rem'">
    <template #nav>
      <AppNav class="w-full h-full bg-pink-50" />
    </template>
    <template #aside>
      <AppAside class="w-full h-full bg-blue-50" />
    </template>
    <template #main>
      <div class="w-full h-full flex flex-col">
        <AppHeader class="bg-green-50" />
        <AppMain class="flex-1 bg-yellow-50" />
      </div>
    </template>
  </ResponsiveLayout>
</template>