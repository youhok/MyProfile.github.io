<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link class="nav-link" v-for="route in routebackend" :key="route.name" :to="route.path">{{
                route.meta.pageTitle }}</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#appNavbar"
                aria-controls="appNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="appNavbar">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <!-- <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page">Home</router-link> -->
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li v-if="isAuthenticated" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ user.username }}
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link :to="{ name: 'admin.user' }" class="dropdown-item">Profile</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><button @click="logout" class="dropdown-item btn btn-danger">Logout</button></li>
                        </ul>
                    </li>
                    <template v-else>
                        <li class="nav-item"><router-link class="nav-link" v-for="route in routebackend" :key="route.name"
                                :to="route.children[0].path">{{ route.children[0].meta.pageTitle }}</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" v-for="route in routebackend" :key="route.name"
                                :to="route.children[1].path">{{ route.children[1].meta.pageTitle }}</router-link></li>
                    </template>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import routebackend from "../router/admin_routes";
import { useAuthStore } from "@/admin/stores/auth";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const user = computed(() => {
    return authStore.userDetail
})

const isAuthenticated = computed(() => {
    return authStore.isAuthenticated
})

async function logout() {
    await authStore.logout()
    // .then(res => {
    //     router.replace({ name: 'admin' })
    // }).catch(err => {
    //     console.log(err.message)
    // })
}


</script>

<style scoped></style>