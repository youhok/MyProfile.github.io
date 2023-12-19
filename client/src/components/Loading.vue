<template>
    <div>
        <div class="spinner-wrapper d-flex justify-content-center m-5">
            <div class="code-loader" v-if="!isloading">
                <span>{</span><span>}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const isloading = ref<boolean>(false);
onMounted(() => {
    document.onreadystatechange = () => {
        if (document.readyState == "complete") {
            isloading.value = true;
        }
    }
})
</script>

<style scoped>
.spinner-wrapper {
    top: 300px;
    left: 0;

    position: fixed;
    width: 93%;
    /* height: 100%; */
    z-index: 9999;
    /* display: flex; */
    /* justify-content: center; */
    align-items: center;
}


.code-loader {
    color: var(--primary);
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 100px;
    opacity: 0.8;
}

.code-loader span {
    display: inline-block;
    animation: pulse_414 0.4s alternate infinite ease-in-out;
}

.code-loader span:nth-child(odd) {
    animation-delay: 0.4s;
}

@keyframes pulse_414 {
    to {
        transform: scale(0.8);
        opacity: 0.5;
    }
}



@media (min-width: 375px) and (max-width: 667px) {
    .spinner-wrapper {
        width: 75%;
        top: 198px;
    }
}

@media (min-width: 767px) and (max-width: 1023px) {
    .spinner-wrapper {
        width: 85%;
        top: 198px;
    }
}

@media (min-width: 540px) and (max-width: 720px) {
    .spinner-wrapper {
        width: 81%;
        top: 198px;
    }
}

/* @media (min-width: 280px) and (max-width: 653px) {
    .spinner-wrapper {
        width: 66%;
        top: 198px;
    }
} */
</style>