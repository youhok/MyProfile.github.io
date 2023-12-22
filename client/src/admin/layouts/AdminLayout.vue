<template>
    <div class="wrapper">
        <SideBar v-if="toggleSidebar.isShowSidebar" />
        <div class="content">
            <NavBar />
            <div class="dashboard-content px-3 pt-4">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
import { useToggleSidebarStore } from '../stores/toggleSidebar';
const toggleSidebar = useToggleSidebarStore();
</script>

<style scoped>
/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
.content {
    min-height: 100vh;
    width: 100%;
}



.wrapper {
    display: flex;
    align-items: stretch;
}


.card {
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    margin-bottom: 24px;
}

.illustration {
    /* background-color: #f8f7ff; */
    color: var(--bs-emphas);
}

.illustration-img {
    max-width: 150px;
    width: 100%;
}
</style>