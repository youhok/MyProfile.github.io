<template>
    <div>
        <NavigationBar />
        <main>
            <router-view />
        </main>

    </div>
</template>

<script setup lang="ts">

import NavigationBar from "../components/NavigationBar.vue";



// const mode = ref<string>('');

// function toggleSwitch() {
//     if (mode.value === 'light') {
//         mode.value = "dark"
//     } else {
//         mode.value = "light"
//     }
// }



</script>

<style scoped>
main {
    min-height: calc(100vh - 66px);
}
</style>