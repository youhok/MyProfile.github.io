<template>
    <div>
        <div class="col-12">
            <FormKit type="form" :model-value="initialValues" id="registration-example"
                :form-class="submitted ? 'hide' : 'show'" submit-label="Update" @submit="submitHandler">
                <FormKit type="text" name="khName" label="Your name in khmer" placeholder="khName" validation="required" />
                <FormKit type="text" name="enName" label="Your name in english" placeholder="enName"
                    validation="required" />
                <div class="double">
                    <FormKit type="select" label="Status" name="status" placeholder="Select a Status"
                        :options="StaticOption.status" />

                </div>
            </FormKit>

            <div v-if="submitted">
                <h2>Submission successful!</h2>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import StaticOption from '@/admin/options/staticOption'
import { categoriesSubController, type subCategories } from "@/admin/controllers/subCategoriesController"
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from 'vue';

const route = useRoute()
const router = useRouter()
const id = route.params.id.toString()
const submitted = ref<boolean>(false)
const initialValues = ref<subCategories>()
onMounted(async () => {
    initialValues.value = await categoriesSubController.getOne(id)
})


const submitHandler = async (formdata: subCategories) => {
    // Let's pretend this is an ajax request:
    try {
        console.log("🚀 ~ file: Register.vue:59 ~ submitHandler ~ formData:", formdata)
        const response = await categoriesSubController.update(id, formdata);
        console.log(response.data);
        submitted.value = true;
        router.back()
    } catch (error: Error | any) {
        console.error("Error submitting form:", error);
    }
}
</script>

<style scoped></style>