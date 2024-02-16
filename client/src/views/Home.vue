<template>
    <div class="container min-h-inherit ">
        <div class="row min-h-inherit  align-items-center p-5    ">

            <div class=" col-lg-6 col-md-12 order-2 col-sm-12 order-2">
                <div class="card">

                    <img src="../assets/image/photo_2023-09-30_13-43-21.jpg" alt="" class="img-fluid ">

                </div>
            </div>

            <div class="col-lg-6 col-md-12 order-1 col-sm-12 order-2 ">
                <p class="Font-P">{{ $t('pages.home.rightSide.sub-header') }}</p>
                <h2 class="title">{{ $t('pages.home.rightSide.sub-header-2') }}</h2>
                <div class="Font-P2">
                    {{ $t('pages.home.rightSide.sub-header-3') }}
                    <v-typical class="blink" :steps="[
                        'Website',
                        1000,
                        'Moblie',
                        1000,
                        'Creative',
                        1000]" :loop="Infinity" :wrapper="'h2'">
                    </v-typical>
                     Developer
                </div>

                <h3>{{ $t('pages.home.rightSide.header') }}</h3>
                <ButtonGroup />
                <Iconmedia />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { onMounted } from "vue";
import ButtonGroup from "../components/ButtonGroup.vue";
import Iconmedia from "../components/Iconmedia.vue"
// import { TxtAnime } from "txtanime.js";
import VTypical from 'vue-typical';
// onMounted(() => {
//     new TxtAnime("#element", {
//         effect: 'txt-an-7',
//         text: ['Website', 'Moblie', 'Creative'],
//     })
// })
</script>

<style scoped>
.Font-P {
    font-size: 30px;
}

.Font-P2 {
    display: flex; /* Use flexbox to align items horizontally */
    align-items: center; /* Center items vertically */
    gap: 20px;
}
.blink{
    color: var(--primary);
    font-size: 45px;
}


#element {
    color: var(--primary);
}

.Font-P2 {
    font-size: 45px;
}

.title {
    font-size: 45px;
}

/* card-style */



.card {
    cursor: pointer;
    width: 18rem;
    height: 30, 6rem;
    background: rgb(255, 255, 255);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all .2s;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);
}

.card:hover {
    box-shadow: -12px 12px 2px -1px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width:576px) {

    /* For mobile phones: */
    .card {
        display: none;
    }

    .Font-P {
        margin-top: 50px;
    }

}
</style>