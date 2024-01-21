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

</script>

<style scoped>
main {
    min-height: calc(100vh - 66px);
}
</style>