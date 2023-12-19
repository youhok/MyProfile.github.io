<template>
    <div class="container">

        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">{{
                        $t('pages.project.topSide.components.websiteBtn') }}</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                    type="button" role="tab" aria-controls="nav-profile" aria-selected="false">{{
                        $t('pages.project.topSide.components.MoblieBtn') }}</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    type="button" role="tab" aria-controls="nav-contact" aria-selected="false">{{
                        $t('pages.project.topSide.components.WorkflowBtn') }}</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                tabindex="0">
                <h1>Website</h1>

            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                <h1>Moblie</h1>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                <h1>WorkFlow </h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

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