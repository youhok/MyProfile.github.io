<template>
    <div class="wrapper">
        <SideBar v-if="toggleSidebar.isShowSidebar" />
        <div class="main">
            <NavBar />
            <main class="content px-3 py-2">
                <router-view />
            </main>
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
.wrapper {
    align-items: stretch;
    display: flex;
    width: 100%;
}

a {
    cursor: pointer;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
}

li {
    list-style: none;
}

h4 {
    font-family: 'Poppins' sans-serif;
    font-size: 1.125rem;
    color: var(--bs-emphasis-color)
}

#sidebar {
    max-width: 15%;
    min-width: 15%;
    background: var(--primary);

    min-height: 100vh;
    transition: all 0.35s ease-in-out;
}

.main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 0;
    overflow: hidden;
    transition: all 0.35s ease-in-out;
    width: 100%;
    /* background: var(--bs-dark-bg-subtle); */
}

/* sidebar Elements Style */

.sidebar-logo {
    padding: 1.15rem;
}

.sidebar-logo a {
    color: #e9ecef;
    font-size: 1.15rem;
    font-size: 600;
}

.sidebar-nav {
    flex-grow: 1;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
    margin-left: 0;
}

.side-header {
    color: #e9ecef;
    font-size: .75rem;
    padding: 1.5rem 1.5rem .375rem;
}

a.sidebar-link {
    padding: .625rem 1.62rem;
    color: #e9ecef;
    position: relative;
    display: block;
    font-size: 0.875rem;
}

.sidebar-link[data-bs-toggle="collapse"]::after {
    border: solid;
    border-width: 0 .075rem .075rem 0;
    content: "";
    display: inline-block;
    padding: 2px;
    position: absolute;
    right: 1.5rem;
    top: 1.4rem;
    transform: rotate(-135deg);
    transition: all .2s ease-out;
}

.sidebar-link[data-bs-toggle="collapse"].collapsed::after {
    transform: rotate(45deg);
    transition: all .2s ease-out;
}

.avatar {
    height: 40px;
    width: 40px;
}

.navbar-expand .navbar-nav {
    margin-left: auto;
}

.content {
    flex: 1;
    max-width: 100vw;
    width: 100%;
}

@media (min-width: 768px) {
    .content {
        max-width: auto;
        width: auto;
    }

}

@media (max-width: 540px) {
    #sidebar {
        max-width: 40%;
        min-width: 40%;
        position: absolute;
    }

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