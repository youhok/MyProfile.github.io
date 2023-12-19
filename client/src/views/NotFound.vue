<template>
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1>404</h1>
        <h6>Page Not Found</h6>
        <p>Page you requested not found</p>
        <button class="btn btn-primary" @click="$router.back()">Go Back</button>
    </div>
</template>

<script setup lang="ts"></script>
<style scoped></style>