<template>
    <div>
        <div class="container-fluid mt-5 ">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <h1>Category</h1>
                        <button type="button" class="btn btn-primary Btn-add" @click="navigatetoCreate">Create</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <table class="content-table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">KhName</th>
                                <th scope="col">EnName</th>
                                <th scope="col">Type</th>
                                <th scope="col">Status</th>
                                <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in data" :key="index">
                                <th scope="row">{{ index }}</th>
                                <!-- <td>{{ item._id }}</td> -->
                                <td>{{ item.khName }}</td>
                                <td>{{ item.enName }}</td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.status }}</td>
                                <td>
                                    <template v-if="!showDeleteConfirmation">
                                        <button type="button" class="btn btn-primary" @click="navigateToEdit(item._id)"><i
                                                class="bi bi-pencil-square"></i></button>
                                        <button type="button" class="btn btn-danger"
                                            @click="showDeleteConfirmationDialog"><i class="bi bi-trash"></i></button>
                                    </template>
                                    <template v-else>
                                        <button type="button" class="btn btn-secondary"
                                            @click="hideDeleteConfirmationDialog">Cancel</button>
                                        <button type="button" class="btn btn-danger"
                                            @click="DeleteCategories(item._id)">Yes</button>
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { CategoriesController, type Categories } from '@/admin/controllers/categoriesController';
import { useRouter } from 'vue-router';

const router = useRouter();

const data = ref<Categories[]>([]);

const showDeleteConfirmation = ref<boolean>(false);

const showDeleteConfirmationDialog = () => {
    showDeleteConfirmation.value = true;
};
// console.log("🚀 ~ file: IndexCategory.vue:58 ~ data:", data)
const hideDeleteConfirmationDialog = () => {
    showDeleteConfirmation.value = false;
};



const navigateToEdit = (id: string) => {

    router.push({ name: 'editCategory', params: { id } });
};

const DeleteCategories = async (id: string) => {
    await CategoriesController.delete(id)
    data.value = data.value.filter((c) => c._id !== id)
}

const navigatetoCreate = () => {
    router.push({
        path: '/core/admin/category/create'
    })
}


onMounted(
    async () => {
        try {
            const response = await CategoriesController.getAll();
            console.log("🚀 ~ file: IndexCategory.vue:63 ~ response:", response)
            data.value = response;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

</script>

<style scoped>
.content-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    width: 100%;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
    background-color: var(--primary);
    color: #ffffff;
    text-align: left;
    font-weight: bold;
}

.content-table th,
.content-table td {
    padding: 12px 15px;
}

.content-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type {
    border-bottom: 2px solid var(--primary);
}

.content-table tbody tr.active-row {
    font-weight: bold;
    color: var(--primary);
}
</style>