<template>
    <nav class="navbar navbar-expand px-3 border-botton">

        <button class="btn" id="sidebar-toggle" @click="toggleSidebar.toggleSidebar()">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse navbar shadow-none">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a href="#" data-bs-toggle="dropdown" class="nav-icon pe-md-0">
                        <img src="../assets/image/profile.jpg" class="avatar img-fluid rounded " alt="">
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <router-link class="dropdown-item" :to="{ name: 'core.admin.profile' }">Profile</router-link>
                        <!-- <a href="#" class="dropdown-item">Setting</a> -->
                        <a href="#" class="dropdown-item" @click="logout()">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useToggleSidebarStore } from '../stores/toggleSidebar';
import { useRouter } from "vue-router";
import { useAuthStore } from "@/admin/stores/auth";
const toggleSidebar = useToggleSidebarStore();
const router = useRouter();
const authStore = useAuthStore();
async function logout() {
    await authStore.logout()
        .then(res => {
            router.replace({ name: 'core.login' })
        }).catch(err => {
            console.log(err)
        })
}
</script>

<style scoped>
.avatar {
    height: 40px;
    width: 40px;
}

.navbar-expand .navbar-nav {
    margin-left: auto;
}

/* .navbar {
    width: 1900px;
} */
</style>