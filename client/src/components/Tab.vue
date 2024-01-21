<template>
    <div class="container">
        <nav>
            <div class="nav nav-tabs " id="nav-tab" role="tablist">
                <button v-for="category in categories" :key="category._id" @click="showID(category._id)" class="nav-link "
                    :id="`nav-${category.enName}-tab`" data-bs-toggle="tab" :data-bs-target="`#nav-${category.enName}`"
                    type="button" role="tab" :aria-controls="`nav-${category.enName}`" aria-selected="false">{{
                        category.enName }}</button>
            </div>
        </nav>
        <div class="col mt-3">
            <div class="container mt-2 ">

                <div class="row  row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div v-for="project in projects" :key="project._id">
                        <cardComponents :image-publice-id="project.thumbnail.public_id" :project-name="project.name"
                            :description="project.description" @project-detail="navigateToProjectDetail(project._id)"
                            v-if="project._id" />
                    </div>
                </div>

                <!-- <template v-if="isLoading">
                    <div class="row mt-5">
                        <div class="col-12">
                            <Loading />
                        </div>
                    </div>
                </template> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import cardComponents from "./card/cardComponents.vue";
import { CategoriesController, type Categories } from '@/admin/controllers/categoriesController';
import { projectController, type Project } from "@/admin/controllers/projectController";
import { onMounted, ref } from "vue";
import { unionBy } from 'lodash'
import { useRouter } from 'vue-router';
// import Loading from "./Loading.vue";



const categories = ref<Categories[]>([{
    _id: 'all',
    khName: 'ទាំងអស់',
    enName: 'All',
    type: '',
    status: ''
}]);

const isLoading = ref(false)


const projects = ref<Project[]>()



const showID = async (categoryId: string) => {
    await getProjects(categoryId)
}


const router = useRouter();

const navigateToProjectDetail = (id: string) => {
    router.push({ name: 'project.detail', params: { id } });
};



const getProjects = async (categoryId: string) => {
    try {
        isLoading.value = true
        const resultProjects = await projectController.getAll(categoryId === 'all' ? {} : { categoryId })
        projects.value = resultProjects
        isLoading.value = false
        console.log("🚀 ~ getProjects ~ projects.value:", projects.value)
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}


onMounted(
    async () => {
        try {
            const resultCategories = await CategoriesController.getAll();
            categories.value = unionBy(categories.value, resultCategories);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        await getProjects('all')
    });





</script>


<style scoped>
.container .nav .active {
    color: var(--primary);
    /* border: 2px solid black; */
    border-top: 4px solid var(--primary);

}

.nav-link {
    color: var(--primary);
    /* border-top: 2px solid var(--primary); */
}
</style>