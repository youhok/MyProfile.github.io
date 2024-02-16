<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h3>Edit Sub Category</h3>
                </div>
            </div>
        </div>
        <div class="container-fluid mt-5">
            <FormKit type="form" :model-value="initialValues" id="registration-example"
                :form-class="submitted ? 'hide' : 'show'" @submit="submitHandler">

                <div class="row">
                    <div class="col-lg-12">
                        <FormKit type="select" label="Category*" :wrapper-class="{ 'formkit-wrapper': false }"
                            name="categoryId" placeholder="categoryId" :options="categoryOptions" />
                    </div>
                    <div class="col-lg-12">
                        <FormKit type="text" name="khName" label="Your name in khmer"
                            :wrapper-class="{ 'formkit-wrapper': false }" placeholder="khName" validation="required" />
                    </div>
                    <div class="col-lg-12">
                        <FormKit type="text" name="enName" label="Your name in english"
                            :wrapper-class="{ 'formkit-wrapper': false }" placeholder="enName" validation="required" />
                    </div>
                    <div class="col-lg-12">
                        <FormKit type="select" label="Status" name="status" :wrapper-class="{ 'formkit-wrapper': false }"
                            placeholder="Select a Status" :options="StaticOption.status" />
                    </div>

                </div>
            </FormKit>
        </div>
    </div>
</template>

<script setup lang="ts">
import StaticOption, { type Option } from '@/admin/options/staticOption'
import { categoriesSubController, type subCategories } from "@/admin/controllers/subCategoriesController"
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from 'vue';
import { CategoriesController } from "@/admin/controllers/categoriesController";
// import DynamicOptions from '@/admin/options/dynamicOption';
import { toast } from "vue3-toastify";
const route = useRoute()
const router = useRouter()
const id = route.params.id.toString()
console.log("🚀 ~ file: editSubCategory.vue:48 ~ id:", id)
const submitted = ref<boolean>(false)
const initialValues = ref()
// const categoryOpts = ref<Array<Option>>([])
const categoryOptions = ref<{ label: string; value: string }[]>([]);

onMounted(async () => {
    const tempCategories = await CategoriesController.getAll()
    categoryOptions.value = tempCategories.map((category:any) => ({
        label: `${category.enName} - ${category.khName} - ${category.type}`,
        value: category._id
    }));

    // categoryOpts.value = DynamicOptions.categroyOption(tempCategories)
    initialValues.value = await categoriesSubController.getOne(id)

    console.log("🚀 ~ file: editSubCategory.vue:60 ~ onMounted ~ initialValues:", initialValues.value)
})


const submitHandler = async (formdata: subCategories) => {
    // Let's pretend this is an ajax request:
    try {
        const response = await categoriesSubController.update(id, formdata);
        toast.success(response.message)
        submitted.value = true;
        router.back()
    } catch (error: Error | any) {
        console.error("Error submitting form:", error);
    }
}
</script>

<style scoped></style>