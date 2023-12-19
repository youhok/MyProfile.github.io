<template>
    <div class="col-12">
        <FormKit type="form" :model-value="initialValues" id="registration-example"
            :form-class="submitted ? 'hide' : 'show'" submit-label="Update" @submit="submitHandler">
            <FormKit type="text" name="khName" label="Your name in khmer" placeholder="khName" validation="required" />
            <FormKit type="text" name="enName" label="Your name in english" placeholder="enName" validation="required" />
            <div class="double">
                <FormKit type="select" label="Type" name="type" placeholder="Select a Type" :options="StaticOption.type" />
                <FormKit type="select" label="Status" name="status" placeholder="Select a Status"
                    :options="StaticOption.status" />

            </div>
        </FormKit>

        <div v-if="submitted">
            <h2>Submission successful!</h2>

        </div>
    </div>
</template>

<script setup lang="ts">
import StaticOption from '@/admin/options/staticOption'
import { useRoute, useRouter } from "vue-router";
import { CategoriesController, type Categories } from "@/admin/controllers/categoriesController"
import { onMounted, ref } from 'vue';

const route = useRoute()
const router = useRouter()
const id = route.params.id.toString();
const submitted = ref<boolean>(false)
const initialValues = ref<Categories>()

onMounted(async () => {
    initialValues.value = await CategoriesController.getOne(id)
})

//methods
const submitHandler = async (formdata: Categories) => {
    // Let's pretend this is an ajax request:
    try {
        console.log("🚀 ~ file: Register.vue:59 ~ submitHandler ~ formData:", formdata)
        const response = await CategoriesController.update(id, formdata);
        console.log(response.data);
        submitted.value = true;
        router.back()
    } catch (error: Error | any) {
        console.error("Error submitting form:", error);
    }
}


</script>

<style scoped></style>