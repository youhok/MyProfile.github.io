<template>
    <div>

        <div class="container-fluid ">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <h2>Edit Category</h2>

                    </div>
                </div>
            </div>
        </div>

        <FormKit type="form" :model-value="initialValues" id="registration-example"
            :form-class="submitted ? 'hide' : 'show'" submit-label="create" :actions="false" @submit="submitHandler">
            <div class="container-fluid mt-5 ">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <FormKit type="text" name="khName" label="khmer" placeholder="khName"
                            :wrapper-class="{ 'formkit-wrapper': false }" validation="required" />
                    </div>
                    <div class="col-lg-12 ">
                        <FormKit type="text" name="enName" label="english" placeholder="enName"
                            :wrapper-class="{ 'formkit-wrapper': false }" validation="required" />
                    </div>
                    <div class="col-lg-12">
                        <FormKit type="select" label="Type" name="type" placeholder="Select a Type"
                            :wrapper-class="{ 'formkit-wrapper': false }" :options="StaticOption.type" />
                    </div>
                    <div class="col-lg-12">
                        <FormKit type="select" label="Status" name="status" placeholder="Select a Status"
                            :wrapper-class="{ 'formkit-wrapper': false }" :options="StaticOption.status" />

                    </div>
                    <div class="d-flex">
                        <FormKit type="submit" label="Update" />

                    </div>
                </div>
            </div>
        </FormKit>
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
import { toast } from "vue3-toastify";


// import editMessageSuccess from '@/admin/utils/edit-message-success';
onMounted(async () => {
    initialValues.value = await CategoriesController.getOne(id)
})

//methods
const submitHandler = async (formdata: Categories) => {
    // Let's pretend this is an ajax request:
    try {
        const response = await CategoriesController.update(id, formdata);
        toast.success(response.message);
        submitted.value = true;
        router.back()
    } catch (error: Error | any) {
        console.error("Error submitting form:", error);
    }
}


</script>

<style scoped></style>