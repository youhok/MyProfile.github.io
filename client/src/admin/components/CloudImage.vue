<template>
    <AdvancedImage :cld-img="myImg" :style="{ 'border-radius': radius + '%' }" :plugins="plugins" />
</template>

<script setup lang="ts">
import { AdvancedImage, responsive, lazyload, placeholder } from "@cloudinary/vue";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import type { PropType } from "vue";
const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_NAME
    }
})

type ResponsiveStepsType = number | number[];

const props = defineProps({
    imageName: String,
    radius: { type: Number, default: 50 },
    width: { type: Number, default: 128 },
    height: { type: Number, default: 128 },
    responsiveSteps: { type: Array as PropType<ResponsiveStepsType>, default: [40] },
    placeholderMode: { type: String, default: 'blur' },
    quality: { type: [String, Number], default: 'auto' }
})

const myImg = cld.image(props.imageName)

// plugins
const plugins = [responsive({ steps: props.responsiveSteps }), lazyload({ rootMargin: '0px', threshold: 0.25 }), placeholder({ mode: props.placeholderMode })];
myImg.resize(fill(props.width, props.height)).format('auto').quality(props.quality)
</script>

<style scoped>
/* .project-image {
    margin-right: 10px;
    display: inline-block;
    width: 40px;
    height: 40px;
    object-fit: cover;
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 10%);
} */
</style>