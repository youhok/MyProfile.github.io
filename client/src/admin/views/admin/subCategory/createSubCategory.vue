<template>
    <div>
        <div class="container-fluid ">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <h2>Create Sub Category</h2>
                        <BackBtn />
                    </div>
                </div>
            </div>
        </div>

        <FormKit type="form" id="create" :form-class="submitted ? 'hide' : 'show'" submit-label="create" :actions="false"
            @submit="submitHandler">
            <div class="container-fluid mt-5 ">
                <div class="row">

                    <div class="col-lg-12">
                        <FormKit type="select" label="Category*" :wrapper-class="{ 'formkit-wrapper': false }"
                            name="categoryId" placeholder="categoryId" :options="categoryOpts" />
                    </div>
                    <div class="col-lg-12">
                        <FormKit type="text" name="khName" label="Name (KH)" :wrapper-class="{ 'formkit-wrapper': false }"
                            placeholder="khName" />
                    </div>
                    <div class="col-lg-12">
                        <FormKit type="text" name="enName" label="Name (EN)" :wrapper-class="{ 'formkit-wrapper': false }"
                            placeholder="enName" />
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

import { ref } from 'vue';
import StaticOption, { type Option } from '@/admin/options/staticOption';
import { CategoriesController } from "@/admin/controllers/categoriesController";
import { categoriesSubController, type subCategories } from "@/admin/controllers/subCategoriesController"
import DynamicOptions from '@/admin/options/dynamicOption';
import { onMounted } from 'vue';
import BackBtn from '@/admin/components/BackBtn.vue';
const submitted = ref<boolean>(false);
const categoryOpts = ref<Option[]>([]);
import { toast } from 'vue3-toastify';
import { reset } from '@formkit/vue';


onMounted(async () => {
    const tempCategories = await CategoriesController.getAll()
    categoryOpts.value = DynamicOptions.categroyOption(tempCategories)
})
const submitHandler = async (formdata: subCategories) => {

    try {
        const response = await categoriesSubController.create(formdata);
        console.log(response.data);
        toast.success(response.message)
        submitted.value = true;
        reset('create')
    } catch (error: Error | any) {
        toast.error(error)
    }
}
</script>

<style scoped></style>