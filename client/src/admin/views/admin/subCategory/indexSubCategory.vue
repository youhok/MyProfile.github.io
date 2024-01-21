<template>
    <div>
        <div class="container-fluid ">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <h2>Sub Category</h2>
                        <button type="button" class="btn btn-primary Btn-add" @click="navigatetoCreate">Create</button>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="col-12 mt-4 ">
                                <!-- Search  -->
                                <FormKit type="search" placeholder="Search..." v-model="searchValue">
                                    <template #prefixIcon>
                                        <i class="bi bi-search mx-2 "></i>
                                    </template>
                                </FormKit>
                                <!-- Operation -->
                                <EasyDataTable buttons-pagination theme-color=var(--primary) show-index
                                    table-class-name="customize-table shadow-sm" :headers="headers" :items="items"
                                    :search-field="searchField" :search-value="searchValue">
                                    <template #item-operation="item">
                                        <EasyDataTableOperations @delete="DeleteSubCategories(item._id)" @edit="
                                            navigateToEdit(item._id)" />
                                    </template>
                                </EasyDataTable>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import EasyDataTableOperations from "@/admin/components/easy-data-table/EasyDataTableOperations.vue"
import { useRouter } from 'vue-router';
import { categoriesSubController } from '@/admin/controllers/subCategoriesController';

import type { Header, Item } from "vue3-easy-data-table";

const searchField = ["khName", "status"];
const searchValue = ref();

const headers: Header[] = [
    { text: "KhName", value: "khName" },
    { text: "EnName", value: "enName" },
    { text: "Type", value: "type" },
    { text: "Status", value: "status" },
    { text: "Operation", value: "operation", width: 200 },
];

const items = ref<Item[]>([]);
console.log("🚀 ~ file: indexSubCategory.vue:59 ~ items:", items.value)

const router = useRouter();

const navigateToEdit = (id: string) => {

    router.push({ name: 'core.admin.editSubCategory', params: { id } });
};

const DeleteSubCategories = async (id: string) => {
    await categoriesSubController.delete(id)
    items.value = items.value.filter((c) => c._id !== id)
}

const navigatetoCreate = () => {
    router.push({
        path: '/core/admin/sub-category/create'
    })
}
onMounted(
    async () => {
        try {
            const response = await categoriesSubController.getAll();
            items.value = response;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
</script>

<style scoped>
.customize-table {
    --easy-table-border: 1px solid #e0e1dd;
    --easy-table-row-border: 1px solid #e0e1dd;

    --easy-table-header-font-size: 14px;
    --easy-table-header-height: 50px;
    --easy-table-header-font-color: #fff;
    --easy-table-header-background-color: var(--primary);

    --easy-table-header-item-padding: 10px 15px;

    --easy-table-body-even-row-font-color: #fff;
    --easy-table-body-even-row-background-color: #4c5d7a;

    --easy-table-body-row-font-color: black;
    --easy-table-body-row-background-color: white;
    --easy-table-body-row-height: 50px;
    --easy-table-body-row-font-size: 14px;

    --easy-table-body-row-hover-font-color: #2d3a4f;
    --easy-table-body-row-hover-background-color: #eee;

    --easy-table-body-item-padding: 10px 15px;

    --easy-table-footer-background-color: white;
    --easy-table-footer-font-color: black;
    --easy-table-footer-font-size: 14px;
    --easy-table-footer-padding: 0px 10px;
    --easy-table-footer-height: 50px;

    --easy-table-rows-per-page-selector-width: 70px;
    --easy-table-rows-per-page-selector-option-padding: 10px;
    --easy-table-rows-per-page-selector-z-index: 1;



    --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>