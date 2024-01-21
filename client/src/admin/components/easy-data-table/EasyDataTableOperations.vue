<template>
    <div>
        <template v-if="!showDeleteConfirmation">
            <button type="button" class="btn btn-primary  btn-sm" @click="emit('edit')"><i
                    :class="`bi bi-${editIcon}`"></i></button>
            <button type="button" class="btn btn-danger  btn-sm" @click="showDeleteConfirmationDialog"><i
                    :class="`bi bi-${deleteIcon}`"></i></button>
        </template>
        <template v-else>
            <Vue3Marquee :duration="2">
                <p>Are you sure?</p>
            </Vue3Marquee>
            <button type="button" class="btn btn-secondary  btn-sm" @click="hideDeleteConfirmationDialog">Cancel</button>
            <button type="button" class="btn btn-danger  btn-sm" @click="emit('delete')">Yes</button>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Vue3Marquee } from 'vue3-marquee'

defineProps({
    editIcon: {
        type: String,
        default: 'pencil-square'
    },
    deleteIcon: {
        type: String,
        default: 'trash',
    }
})
const emit = defineEmits(['edit', 'delete'])

const showDeleteConfirmation = ref<boolean>(false);

const showDeleteConfirmationDialog = () => {
    showDeleteConfirmation.value = true;
};

const hideDeleteConfirmationDialog = () => {
    showDeleteConfirmation.value = false;
};

</script>

<style scoped></style>