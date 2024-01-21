<template>
    <div class="card">
        <CloudImage :imageName="imagePubliceId" :width="300" :height="300" :responsiveSteps="[300]" :radius="0" />
        <div class="card__content">
            <p class="card__title">{{ projectName }}</p>
            <p class="card__description">
                {{ description }}
            </p>
            <div class="d-flex justify-content-center align-content-lg-center  mt-4 ">
                <button @click="emit('projectDetail')">
                    Read More
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { projectController, type Project } from "@/admin/controllers/projectController";
import CloudImage from "@/admin/components/CloudImage.vue";

const dataProject = ref<Project[]>([]);

defineProps({
    imagePubliceId: String,
    projectName: String,
    description: String,
})

const emit = defineEmits(['projectDetail'])

onMounted(
    async () => {
        try {
            const response = await projectController.getAll();
            dataProject.value = response;
            console.log("🚀 ~ response:", response)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
</script>

<style scoped>
.card {
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
    transform: rotateX(0deg);
}

.card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
}

.card:hover svg {
    scale: 0;
}

.card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: black;
    /* background: ;
            -webkit-backdrop-filter: blur(16px);
            backdrop-filter: blur(16px); */
    /* border: 1px solid rgba(255, 255, 255, 0.275); */
    line-height: 1.4;
}

/* button style */

button {
    position: relative;
    background: none;
    border: solid 1px #121212;
    transition: linear 250ms;
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
}

button:is(:hover, :focus) {
    color: #fff;
}

button::after {
    position: absolute;
    content: '';
    inset: 0;
    z-index: -1;
    background-color: #121212;
    transform-origin: left;
    transform: scaleX(0);
    transition: linear 250ms;
}

button:is(:hover, :focus)::after {
    transform: scale(1);
}
</style>
