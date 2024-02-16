<template>
    <div class="container text-center min-h-inherit">
        <div class="row min-h-inherit  align-items-center p-5 ">
            <div class="col-lg-12">
                <h1>{{ $t('pages.contact.leftSide.header') }}</h1>
                <h4>{{ $t('pages.contact.leftSide.content') }}</h4>

                <!-- <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
                    <SplideSlide>
                        <img src="../assets/image/javascript.jpg" alt="Sample 1" class="img-fluid">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="../assets/image/htmlcssjavascript.jpg" alt="Sample 2" class="img-fluid">
                    </SplideSlide>
                    <SplideSlide>
                        <img src="../assets/image/tc39.jpg" alt="Sample 2" class="img-fluid">
                    </SplideSlide>
                </Splide> -->

                <div class="social__container">

                    <!-- social__item twitter -->
                    <div class="social__item">
                        <a target="_blank" href="https://twitter.com/YouhokH" class="social__icon--twitter"><i
                                class="icon--twitter"></i></a>
                    </div>
                    <!-- /social__item twiter -->

                    <!-- social__item google+ -->
                    <div class="social__item">
                        <a target="_blank" href="https://plus.google.com/u/0/+StevenRoberts-mbh/posts"
                            class="social__icon--googleplus"><i class="icon--googleplus"></i></a>
                    </div>
                    <!-- /social__item google+ -->


                    <!-- social__item facebook -->
                    <div class="social__item">
                        <a target="_blank" href="https://web.facebook.com/hengyouhok/" class="social__icon--facebook"><i
                                class="icon--facebook"></i></a>
                    </div>
                    <!-- /social__item facebook -->


                    <!-- social__item instagram -->
                    <div class="social__item">
                        <a target="_blank" href="https://www.instagram.com/hengyouhok/" class="social__icon--instagram"><i
                                class="icon--instagram"></i></a>
                    </div>
                    <!-- /social__item instagram -->

                    <!-- social__item github -->
                    <div class="social__item">
                        <a target="_blank" href="https://github.com/youhok" class="social__icon--github"><i
                                class="icon--github"></i></a>
                    </div>
                    <!-- /social__item github -->
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import '@splidejs/vue-splide/css/sea-green';


// import { defineComponent } from 'vue';
// import { Splide, SplideSlide } from '@splidejs/vue-splide';

// defineComponent({
//     components: {
//         Splide,
//         SplideSlide,
//     },
// });



</script>

<style scoped>
@charset "UTF-8";
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);

*,
*::before,
*::after {
    box-sizing: border-box;
}


.color {
    color: var(--primary);
}

.social__item {
    display: inline-block;
    margin-right: 0.05em;

}

[class^=icon--] {
    font-family: "FontAwesome";
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

[class^=social__icon] {
    position: relative;
    top: 0;
    font-size: 1em;
    width: 2em;
    height: 2em;
    color: white;
    text-decoration: none;
    border-radius: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0.25em -0.25em rgba(0, 0, 0, 0.2);
    transition: background-color 150ms ease-in-out, top 250ms linear, box-shadow 250ms linear;
}

[class^=social__icon]::before {
    position: absolute;
    background-color: #333;
    font-size: 1rem;
    display: block;
    padding: 0.25em 0.5em;
    top: -3.5em;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: top 250ms linear, opacity 150ms linear 150ms;
}

[class^=social__icon]::after {
    font-size: 1rem;
    content: "";
    position: absolute;
    top: -1.9em;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.5em 0.5em 0 0.5em;
    border-color: #333 transparent transparent transparent;
    opacity: 0;
    transition: top 250ms linear, opacity 150ms linear 150ms;
}

[class^=social__icon]:hover,
[class^=social__icon]:focus,
[class^=social__icon]:active {
    top: -0.25em;
    box-shadow: 0 0.5em 0.25em -0.25em rgba(0, 0, 0, 0.3);
    outline: none;
}

[class^=social__icon]:hover::before,
[class^=social__icon]:focus::before,
[class^=social__icon]:active::before {
    opacity: 1;
    top: -2.5em;
}

[class^=social__icon]:hover::after,
[class^=social__icon]:focus::after,
[class^=social__icon]:active::after {
    opacity: 1;
    top: -0.9em;
}



.icon--twitter::before {
    content: "";
}

.social__icon--twitter {
    background-color: #1da1f2;
}

.social__icon--twitter::before {
    content: "Twitter";
}

.social__icon--twitter:hover,
.social__icon--twitter:focus,
.social__icon--twitter:active {
    background-color: #1989ce;
}

.icon--facebook::before {
    content: "";
}

.social__icon--facebook {
    background-color: #3b5998;
}

.social__icon--facebook::before {
    content: "Facebook";
}

.social__icon--facebook:hover,
.social__icon--facebook:focus,
.social__icon--facebook:active {
    background-color: #324c81;
}

.icon--googleplus::before {
    content: "";
}

.social__icon--googleplus {
    background-color: #dd4b39;
}

.social__icon--googleplus::before {
    content: "Google+";
}

.social__icon--googleplus:hover,
.social__icon--googleplus:focus,
.social__icon--googleplus:active {
    background-color: #bc4030;
}


.icon--instagram::before {
    content: "";
}

.social__icon--instagram {
    background-color: #5851db;
}

.social__icon--instagram::before {
    content: "Instagram";
}

.social__icon--instagram:hover,
.social__icon--instagram:focus,
.social__icon--instagram:active {
    background-color: #4b45ba;
}


.icon--github::before {
    content: "";
}

.social__icon--github {
    background-color: #333;
}

.social__icon--github::before {
    content: "GitHub";
}

.social__icon--github:hover,
.social__icon--github:focus,
.social__icon--github:active {
    background-color: #2b2b2b;
}



.icon--rss::before {
    content: "";
}

.social__icon--rss {
    background-color: #f26522;
}

.social__icon--rss::before {
    content: "RSS";
}

.social__icon--rss:hover,
.social__icon--rss:focus,
.social__icon--rss:active {
    background-color: #ce561d;
}

.social__container {
    font-size: 1em;
    padding: 35px;
}

/* card */






@media only screen and (min-width: 67.5em) {
    .social__container {
        font-size: 1.5em;
    }


}

@media only screen and (min-width: 105em) {
    .social__container {
        font-size: 2em;
    }


}
</style>

