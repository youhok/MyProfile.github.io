<template>
    <div>
        <FormKit type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'" submit-label="create"
            :actions="false" @submit="submitHandler">
            <div class="container mt-5 ">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-sm-12 col-md-6">
                        <FormKit type="text" name="khName" label="khmer" placeholder="khName" validation="required" />
                    </div>
                    <div class="col-lg-3 col-sm-12 col-md-6">
                        <FormKit type="text" name="enName" label="english" placeholder="enName" validation="required" />
                    </div>
                    <div class="col-lg-3 col-sm-12 col-md-6">
                        <FormKit type="select" label="Type" name="type" placeholder="Select a Type"
                            :options="StaticOption.type" />
                    </div>
                    <div class="col-lg-3 col-sm-12 col-md-6">
                        <FormKit type="select" label="Status" name="status" placeholder="Select a Status"
                            :options="StaticOption.status" />

                    </div>

                    <div class="d-flex">
                        <FormKit type="submit" label="Create" />

                    </div>
                </div>
            </div>
            <!-- <div v-if="submitted">
                <h2>Submission successful!</h2>

            </div> -->
        </FormKit>




    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StaticOption from '@/admin/options/staticOption'
import { CategoriesController, type Categories } from "@/admin/controllers/categoriesController"
import { useRouter } from "vue-router";

const router = useRouter();

const submitted = ref<boolean>(false)
const submitHandler = async (formdata: Categories) => {
    // Let's pretend this is an ajax request:
    try {
        console.log("🚀 ~ file: Register.vue:59 ~ submitHandler ~ formData:", formdata)
        const response = await CategoriesController.create(formdata);

        console.log(response.data);
        router.back()
        submitted.value = true;
    } catch (error: Error | any) {
        console.error("Error submitting form:", error);
    }
}



</script>

<style scoped></style>