
<template>
    <MDBNavbar expand="lg" :class="`navbar-${mode}`" :bg="mode" container>
        <MDBNavbarBrand href="#"><img src="../assets/image/youhokLogo.png" class="Logo img-fluid border border-4 rounded-circle" alt=""></MDBNavbarBrand>
        <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent"></MDBNavbarToggler>
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bg-dark"></span>
        </button> -->
        <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
            <MDBNavbarNav class="mb-2 mb-lg-0">
                <MDBNavbarItem class="nav-item">
                    <router-link class="nav-link" v-for="route in publicRoutes" :key="route.name" :to="route.path">{{
                        $t(`navbar.${route.meta?.pageTitle}`)
                    }}</router-link>
                </MDBNavbarItem>
            </MDBNavbarNav>
                <button class="button translate-button" v-if="toggleLangangStore.isShowLang ? $i18n.locale = 'KH' : $i18n.locale = 'EN'"
                    @click="toggleLangangStore.toggleLang()">
                    <img src="../assets/image/united-states.png" alt="" srcset="" v-if="toggleLangangStore.isShowLang == false" class="img-fluid">
                    <img src="../assets/image/cambodia.png" alt="" srcset="" class="img-fluid" v-else>
                </button>
            <Toggle :mode="mode" @taggleSwitch="$emit('taggleSwitch')" />
        </MDBCollapse>
    </MDBNavbar>
</template> 

<script setup lang="ts">
import routes from '../router/routes'
import { ref } from 'vue';
import Toggle from './Toggle.vue';
import { useToggleSidebarStore } from '@/admin/stores/toggleSidebar'; // Replace with the correct path

const toggleLangangStore = useToggleSidebarStore();


const publicRoutes = routes[0].children.filter((rc) => rc.name !== 'routeChecker' && rc.name !== 'project.detail');

import {
    MDBIcon,
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdb-vue-ui-kit';







const collapse1 = ref(false);
const dropdown1 = ref(false);
const props = defineProps({
    mode: {
        type: String,
        requrie: true,
    }
})


</script>

<style scoped>

.Logo{
    height:auto;
    width: 65px;
    
}
.nav-item a {
    /* color: black; */
    position: relative;
    display: inline-block;
    font-size: 14px;
    text-decoration: none;
    margin: 0 10px;
}

.nav-item a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 3px;
    background: var(--primary);
    border-radius: 40px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .3s;
}

.nav-item a:hover::after {
    transform-origin: left;
    transform: scaleX(1);
}

/* a.router-link-active {
    color: var(--primary);
} */

/* translate button */
.block {
    width: 70px;
    height: 70px;
    background: rgb(36, 23, 23);
    border-radius: 15px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.block--dark {
    background-color: #078f81;
}

.block--card {
    width: 800px;
    height: 800px;
    justify-content: flex-end;
    align-items: flex-start;
}

.button {
    background: none;
    outline: none;
    display: inline-block;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}



.translate-button:hover {
    background-color: var(--primary);
    border-radius: 50%;
    cursor: pointer;
    transition: all 1s ease;
}


.block--card .translate-button {
    margin-top: 15px;
}


.block--card .translate-button {
    margin-right: 4px;
}
</style>