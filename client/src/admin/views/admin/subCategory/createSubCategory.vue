<template>
    <div>
        <FormKit type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'" submit-label="create"
            :actions="false" @submit="submitHandler">
            <div class="container mt-5 ">
                <div class="row align-items-center">

                    <div class="col-lg-3 col-sm-12 col-md-6">
                        <FormKit type="select" name="categoryId" placeholder="categoryId" validation="required"
                            :options="categoryOpts" />
                    </div>
                    <div class="col-lg-3 col-sm-12 col-md-6">
                        <FormKit type="text" name="khName" label="Your name in khmer" placeholder="khName"
                            validation="required" />
                    </div>
                    <div class="col-lg-3 col-sm-12 col-md-6">
                        <FormKit type="text" name="enName" label="Your name in english" placeholder="enName"
                            validation="required" />
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
        </FormKit>



        <!-- <div v-if="submitted">
            <h2>Submission successful!</h2>

        </div> -->
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import StaticOption, { type Option } from '@/admin/options/staticOption';
import { useRouter } from "vue-router";
import { CategoriesController, type Categories } from "@/admin/controllers/categoriesController";
import { categoriesSubController, type subCategories } from "@/admin/controllers/subCategoriesController"
import DynamicOptions from '@/admin/options/dynamicOption';
import { onMounted } from 'vue';
const submitted = ref<boolean>(false);
const categoryOpts = ref<Option[]>([]);

const router = useRouter();
onMounted(async () => {
    const tempCategories = await CategoriesController.getAll()
    console.log("🚀 ~ file: createSubCategory.vue:51 ~ onMounted ~ tempCategories:", tempCategories)
    categoryOpts.value = DynamicOptions.categroyOption(tempCategories)
    console.log("🚀 ~ file: createSubCategory.vue:53 ~ onMounted ~   categoryOpts.value:", categoryOpts.value)
})
const submitHandler = async (formdata: subCategories) => {

    try {

        const response = await categoriesSubController.create(formdata);

        console.log(response.data);
        router.back()
        submitted.value = true;
    } catch (error: Error | any) {
        console.error("Error submitting form:", error);
    }
}
</script>

<style scoped></style>