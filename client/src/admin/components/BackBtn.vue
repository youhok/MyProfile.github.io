<template>
    <div>
        <button type="button" class="btn btn-primary Btn-add" @click="$router.back()">{{ labelBtn }}</button>
    </div>
</template>

<script setup lang="ts">
defineProps({
    labelBtn: { type: String, default: 'Back' }
})
</script>

<style scoped></style>