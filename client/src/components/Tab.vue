<template>
    <div class="container">
        <nav>
            <div class="nav nav-tabs " id="nav-tab" role="tablist">
                <button v-for="category in categories" :key="category._id" @click="showID(category._id)" class="nav-link"
                    :class="{ 'active': isActiveCategory(category) }" :id="`nav-${category.enName}-tab`"
                    data-bs-toggle="tab" :data-bs-target="`#nav-${category.enName}`" type="button" role="tab"
                    :aria-controls="`nav-${category.enName}`" aria-selected="false">
                    {{ toggleLangangStore.isShowLang ? category.khName : category.enName }}
                </button>
            </div>
        </nav>
        <div class="row">
            <div class="col-12 mt-3">
                <div class="container mt-2 ">
                    <div v-if="isLoading" class="text-center mt-5">
                        <div class="d-flex justify-content-center align-items-center mt-5">
                            <div class="loader"></div>
                        </div>
                    </div>
                    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                        <div v-for="project in projects" :key="project._id" class="col-12 mt-3">
                            <cardComponents :image-publice-id="project.thumbnail.public_id" :project-name="project.name"
                                :description="project.description" @project-detail="navigateToProjectDetail(project._id)"
                                v-if="project._id" class="img-fluid" />
                        </div>
                    </div>
                </div>
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
import { useToggleSidebarStore } from '@/admin/stores/toggleSidebar';

const toggleLangangStore = useToggleSidebarStore();

const categories = ref<Categories[]>([{
    _id: 'all',
    khName: 'ទាំងអស់',
    enName: 'All',
    type: '',
    status: ''
}]);

const isLoading = ref(false)
const currentCategory = ref('all'); // Add a reactive variable to track the current category

const projects = ref<Project[]>();

const showID = async (categoryId: string) => {
    currentCategory.value = categoryId;
    await getProjects(categoryId);
}

const router = useRouter();

const navigateToProjectDetail = (id: string) => {
    console.log(id)
    router.push({ name: 'project.detail', params: { id } });
};

const getProjects = async (categoryId: string) => {
    try {
        isLoading.value = true;
        const resultProjects = await projectController.getAll(categoryId === 'all' ? {} : { categoryId });
        projects.value = resultProjects;
        isLoading.value = false;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const isActiveCategory = (category: Categories) => {
    return currentCategory.value === category._id;
}

onMounted(async () => {
    try {
        const resultCategories = await CategoriesController.getAll();
        categories.value = unionBy(categories.value, resultCategories);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    await getProjects('all');
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


/* loading */
/* loading */
.loader {
    width: 5em;
    height: 5em;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    animation: spin 3s infinite;
}

.loader::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
}

@keyframes spin {
    0% {
        transform: rotate(-45deg);
    }

    50% {
        transform: rotate(-360deg);
        border-radius: 50%;
    }

    100% {
        transform: rotate(-45deg);
    }
}
</style>