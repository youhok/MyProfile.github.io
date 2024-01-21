<template>
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Youhok</h3>
        </div>

        <ul class="list-unstyled components">
            <li class="">
                <router-link class="dropdown-item" v-for="route in priveteRoute" :key="route.name" :to="route.path">
                    <i :class="`${route.meta.icon}`"></i>
                    {{ route.meta.pageTitle }}
                </router-link>
            </li>
            <li>
                <a href="#">
                    <i class="glyphicon glyphicon-briefcase"></i>
                    About
                </a>
                <a href="#pageSubmenu">
                    <i class="bi bi-people-fill"></i>
                    Teamwork
                </a>
                <!-- <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li><a href="#">category</a></li>
                    <li><a href="#">subcategory</a></li>
                </ul> -->
            </li>
            <li>
                <a href="#">
                    <i class="glyphicon glyphicon-link"></i>
                    Portfolio
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="glyphicon glyphicon-paperclip"></i>
                    FAQ
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="bi bi-phone"></i>
                    Contact
                </a>
            </li>
        </ul>

        <ul class="list-unstyled CTAs">
            <li class="sidebar-item">
                <a href="#" class="sidebar-link" data-bs-target="#setting" data-bs-toggle="collapse" aria-expanded="false">
                    <i class="bi bi-gear-wide-connected"></i>
                    setting
                </a>
                <ul id="setting" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <router-link class="sidebar-link" :to="{ name: 'core.admin.category.index' }">category</router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link class="sidebar-link"
                            :to="{ name: 'core.admin.indexSubCategory' }">subcategory</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import adminRoutes from '../router/admin_routes';

const excludedRouteNames = [
    'core.admin.category.create',
    'core.admin.createSubCategory',
    'core.admin.profile',
    'core.admin.category.index',
    'core.admin.editCategory',
    'core.admin.indexSubCategory',
    'core.admin.editSubCategory',
    'core.admin.projectCreate',
    'core.admin.projectEdit'
];

const priveteRoute = adminRoutes[0].children[2].children?.filter((rc) => !excludedRouteNames.includes(rc.name));


</script>

<style scoped>
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


a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}


.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

i,
span {
    display: inline-block;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */


#sidebar {
    min-width: 250px;
    max-width: 250px;
    /* background: #7386D5; */
    background: #474bff;
    background: -webkit-linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
    background: linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
    color: #fff;
    transition: all 0.3s;
}

#sidebar.active {
    min-width: 80px;
    max-width: 80px;
    text-align: center;
}

#sidebar.active .sidebar-header h3,
#sidebar.active .CTAs {
    display: none;
}

#sidebar.active .sidebar-header strong {
    display: block;
}

#sidebar ul li a {
    text-align: left;
}

#sidebar.active ul li a {
    padding: 20px 10px;
    text-align: center;
    font-size: 0.85em;
}

#sidebar.active ul li a i {
    margin-right: 0;
    display: block;
    font-size: 1.8em;
    margin-bottom: 5px;
}

#sidebar.active ul ul a {
    padding: 10px !important;
}

#sidebar.active a[aria-expanded="false"]::before,
#sidebar.active a[aria-expanded="true"]::before {
    top: auto;
    bottom: 5px;
    right: 50%;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
}

#sidebar .sidebar-header {
    padding: 20px;
    /* background: #6d7fcc; */
}

#sidebar .sidebar-header strong {
    display: none;
    font-size: 1.8em;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
}

#sidebar ul li a i {
    margin-right: 10px;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #fff;
    /* background: #6d7fcc; */
}


a[data-toggle="collapse"] {
    position: relative;
}

a[aria-expanded="false"]::before,
a[aria-expanded="true"]::before {
    content: '\e259';
    display: block;
    position: absolute;
    right: 20px;
    font-family: 'Glyphicons Halflings';
    font-size: 0.6em;
}

a[aria-expanded="true"]::before {
    content: '\e260';
}


ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    /* background: #6d7fcc; */
    background: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(13px);
    backdrop-filter: blur(13px);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article,
a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}
</style>