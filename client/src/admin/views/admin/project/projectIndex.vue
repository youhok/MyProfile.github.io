<template>
    <div>
        <div class="container-fluid  ">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <h2>Project</h2>
                        <button type="button" class="btn btn-primary Btn-add" @click="navigatetoCreate">Create</button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 mt-4">
                    <EasyDataTable buttons-pagination theme-color=var(--primary) show-index
                        table-class-name="customize-table shadow-sm" :headers="headers" :items="items">
                        <template #item-gallary="{ thumbnail }">
                            <div class="project-image-wrapper">
                                <CloudImage :imageName="thumbnail.public_id" class="project-image" />
                            </div>
                        </template>
                    </EasyDataTable>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import CloudImage from "@/admin/components/CloudImage.vue";
import { projectController } from "@/admin/controllers/projectController"
import type { Header, Item } from "vue3-easy-data-table";
import { useRouter } from 'vue-router';
import { ref, onMounted } from "vue";

const router = useRouter();


const navigatetoCreate = () => {
    router.push({
        path: '/core/admin/project/create'
    })
}



const headers: Header[] = [
    { text: "Gallary", value: "gallary" },
    { text: "Name", value: "name" },
    { text: "Description", value: "description" },
    { text: "Release Date", value: "releaseDate" },
    { text: "Status", value: "status" },
];



const items = ref<Item[]>([]);


onMounted(
    async () => {
        try {
            const response = await projectController.getAll();
            items.value = response;
            console.log("🚀 ~ file: projectIndex.vue:57 ~ items:", items.value)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

</script>

<style>
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


    --easy-table-loading-mask-background-color: white;
}

.project-image-wrapper {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-items: center;
}

.project-image {
    margin-right: 10px;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 10%);
}
</style>