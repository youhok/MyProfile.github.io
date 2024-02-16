<template>
    <div>
        <div class="container-fluid ">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <h2>Create Category</h2>
                        <BackBtn />
                    </div>
                </div>
            </div>
        </div>



        <FormKit type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'" submit-label="create"
            :actions="false" @submit="submitHandler">
            <div class="container-fluid mt-5 ">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <FormKit type="text" name="khName" label="khmer" :wrapper-class="{ 'formkit-wrapper': false }"
                            placeholder="khName" />
                    </div>
                    <div class="col-lg-12">
                        <FormKit type="text" name="enName" label="english" :wrapper-class="{ 'formkit-wrapper': false }"
                            placeholder="enName" />
                    </div>
                    <div class="col-lg-12">
                        <FormKit type="select" label="Type" name="type" :wrapper-class="{ 'formkit-wrapper': false }"
                            placeholder="Select a Type" :options="StaticOption.type" />
                    </div>
                    <div class="col-lg-12">
                        <FormKit type="select" label="Status" name="status" :wrapper-class="{ 'formkit-wrapper': false }"
                            placeholder="Select a Status" :options="StaticOption.status" />

                    </div>

                    <div class="d-flex">
                        <FormKit type="submit" label="Create" />
                    </div>
                </div>
            </div>
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import BackBtn from '@/admin/components/BackBtn.vue';
import { ref } from 'vue'
import StaticOption from '@/admin/options/staticOption'
import { CategoriesController, type Categories } from "@/admin/controllers/categoriesController"






import { toast } from "vue3-toastify";

const submitted = ref<boolean>(false)
const submitHandler = async (formdata: Categories) => {
    // Let's pretend this is an ajax request:
    try {
        const response = await CategoriesController.create(formdata);
        toast.success(response.message);
        submitted.value = true;
    } catch (error: Error | any) {
        console.error("Error submitting form:", error);
    }
}



</script>

<style scoped></style>