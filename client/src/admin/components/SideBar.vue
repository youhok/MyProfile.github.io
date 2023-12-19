<template>
    <aside id="sidebar">
        <div class="h-100">
            <div class="sidebar-logo">
                <a href="#">Youhok</a>
            </div>
            <ul class="sidebar-nav">
                <li class="side-header">
                    Admin Element
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                        <i class="bi bi-list-ul"></i>
                        Dashboard
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link" data-bs-target="#pages" data-bs-toggle="collapse"
                        aria-expanded="false">
                        <i class="bi bi-file-earmark-fill pe-2 "></i>
                        Pages
                    </a>
                    <ul id="pages" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link">pages 1</a>
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link">pages 2</a>
                        </li>
                    </ul>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link" data-bs-target="#setting" data-bs-toggle="collapse"
                        aria-expanded="false">
                        <i class="bi bi-gear-wide-connected"></i>
                        setting
                    </a>
                    <ul id="setting" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link">category</a>
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link">subcategory</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">


</script>

<style scoped>
#sidebar {
    max-width: 264px;
    min-width: 264px;
    background: var(--primary);
    min-height: 100vh;
    transition: all 0.35s ease-in-out;
}

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
    font-size: 0.955rem;
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
    max-width: 264px;
    min-width: 264px;
    background: var(--primary);
    min-height: 100vh;
    transition: all 0.35s ease-in-out;
}
</style>