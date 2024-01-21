<template>
  <div :class="isDark ? 'dark' : 'light'" :data-bs-theme="isDark ? 'dark' : 'light'">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :mode="isDark ? 'dark' : 'light'" :is="Component" />
      </transition>
    </router-view>
    <vue-progress-bar></vue-progress-bar>
    <!-- <LoadingVue /> -->
  </div>
</template>
<script setup lang="ts">
import { useDark } from '@vueuse/core';
const isDark = useDark();
// import LoadingVue from "@/components/Loading.vue";
</script>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-out;
}
</style>
