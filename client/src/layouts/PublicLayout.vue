<template>
    <div>
        <NavigationBar :mode="mode" @taggleSwitch="toggleSwitch()" />
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavigationBar from "../components/NavigationBar.vue";

const mode = ref<string>('');

function toggleSwitch() {
    if (mode.value === 'light') {
        mode.value = "dark"
    } else {
        mode.value = "light"
    }
}
</script>

<style scoped></style>