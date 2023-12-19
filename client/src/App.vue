
<template>
  <div class="content" :class="mode" :data-bs-theme="mode">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :mode="mode" :is="Component" />
      </transition>
    </router-view>
    <vue-progress-bar></vue-progress-bar>
    <LoadingVue />
  </div>
</template>
<script setup lang="ts">
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
