<template>
    <div class="container min-h-inherit">
        <div class="row  min-h-inherit   align-items-center p-5 ">

            <div class=" col-lg-6 col-md-12  col-sm-12 mb-3">
                <h1>
                    <span>{{ $t('pages.about.leftSide.header') }}</span>
                </h1>

                <p> {{ $t('pages.about.leftSide.content[0]') }} </p>


                <button class="ui-btn" @click="click">
                    <span>
                        {{ $t('pages.about.leftSide.components.projectBtn') }}
                    </span>
                </button>
            </div>

            <div class="col-lg-6 col-md-12  col-sm-12 ">
                <div class="card">

                    <div class="top">
                        <div class="dots">
                            <div class="dot dot-1"></div>
                            <div class="dot dot-2"></div>
                            <div class="dot dot-3"></div>
                        </div>
                        <p class="g-color">_&gt;</p>
                    </div>
                    <div class="bottom">
                        <p class="code">
                            <span class="red">function</span> <span class="violet">helloWorld</span><span
                                class="blue">(</span><span class="orange">text</span><span class="blue">)</span><span
                                class="blue">{</span><br>
                            <span class="red space-4">for</span><span class="orange">(</span><span class="red">let</span>
                            <span class="white">i</span> <span class="red">=</span> <span class="blue">0</span> <span
                                class="white">; i</span> <span class="red">&lt;</span> <span class="blue">10</span> <span
                                class="white">; i</span><span class="red">++</span><span class="orange">){</span><br>
                            <span class="blue space-4x2">console</span><span class="white">.</span><span
                                class="violet">log(</span><span class="blue">`${</span><span class="orange">text</span><span
                                class="blue">}`</span><span class="violet">)</span><span class="white">;</span><br>
                            <span class="orange space-4">}</span><br>
                            <span class="blue">}</span><br>
                            <br>
                            <span class="violet">helloWorld</span><span class="blue">('Hello World')</span><span
                                class="white">;</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();
const click = () => {
    router.push({
        path: '/project'
    })
}

</script>

<style scoped>
.ui-btn {
    --btn-default-bg: #010314;
    --btn-padding: 10px 16px;
    --btn-hover-bg: rgb(51, 51, 51);
    --btn-transition: .3s;
    --btn-letter-spacing: .1rem;
    --btn-animation-duration: 1.2s;
    --btn-shadow-color: rgba(0, 0, 0, 0.137);
    --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
    --hover-btn-color: var(--primary);
    --default-btn-color: #fff;
    --font-size: 16px;
    /* 👆 this field should not be empty */
    --font-weight: 600;
    --font-family: Menlo, Roboto Mono, monospace;
}

/* button settings 👆 */



.ui-btn {
    box-sizing: border-box;
    padding: var(--btn-padding);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--default-btn-color);
    font: var(--font-weight) var(--font-size);
    background: var(--btn-default-bg);
    cursor: pointer;
    transition: var(--btn-transition);
    overflow: hidden;
    box-shadow: var(--btn-shadow);
    border-radius: 10px;
    border: 2px solid #2A2B3A;
}

.ui-btn span {
    letter-spacing: var(--btn-letter-spacing);
    transition: var(--btn-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;
}

.ui-btn span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    background: inherit;
}

.ui-btn:hover,
.ui-btn:focus {
    background: var(--btn-default-bg);
    box-shadow: 0px 0px 10px 0px var(--primary);
    border: 2px solid var(--primary);
    ;
}

.ui-btn:hover span,
.ui-btn:focus span {
    color: var(--hover-btn-color);
}

.ui-btn:hover span::before,
.ui-btn:focus span::before {
    animation: chitchat linear both var(--btn-animation-duration);
}

@keyframes chitchat {
    0% {
        content: "#";
    }

    5% {
        content: ".";
    }

    10% {
        content: "^{";
    }

    15% {
        content: "-!";
    }

    20% {
        content: "#$_";
    }

    25% {
        content: "№:0";
    }

    30% {
        content: "#{+.";
    }

    35% {
        content: "@}-?";
    }

    40% {
        content: "?{4@%";
    }

    45% {
        content: "=.,^!";
    }

    50% {
        content: "?2@%";
    }

    55% {
        content: "\;1}]";
    }

    60% {
        content: "?{%:%";
        right: 0;
    }

    65% {
        content: "|{f[4";
        right: 0;
    }

    70% {
        content: "{4%0%";
        right: 0;
    }

    75% {
        content: "'1_0<";
        right: 0;
    }

    80% {
        content: "{0%";
        right: 0;
    }

    85% {
        content: "]>'";
        right: 0;
    }

    90% {
        content: "4";
        right: 0;
    }

    95% {
        content: "2";
        right: 0;
    }

    100% {
        content: "";
        right: 0;
    }
}



.card {
    font-family: monospace;
    /* margin-left: 140px; */
    width: auto;
    height: auto;
    /* background: #222222; */
    border: 2px solid #000;
    border-radius: 15px;
}


.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
}

.dots {
    display: flex;
    justify-content: last baseline;
}

.dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

.dot-1 {
    background-color: #ff605c;
}

.dot-2 {
    background-color: #ffbd44;
}

.dot-3 {
    background-color: #00ca4e;
}

.top p {
    font-size: 20px;
    font-weight: bold;
}

.dot,
.top p {
    margin: 5px;
}

.g-color {
    color: darkgreen;
}

.bottom {
    margin-top: 30px;
    padding: 0 25px;
}

.code {
    font-size: 15px;
}

.red {
    color: rgb(210, 63, 52);
}

.violet {
    color: rgb(181, 40, 203);
}

.blue {
    color: rgb(91, 131, 223);
}

.orange {
    color: rgb(195, 128, 3);
}

.white {
    color: rgb(163, 163, 163);
}

.space-4 {
    margin-left: 35px;
}

.space-4x2 {
    margin-left: 70px;
}



/* @media (max-width: 574px) {
    .card {
        margin-top: 30px;
        width: 260px;
        height: 369px;
        margin-left: 0px;
    }
}

@media (max-width: 574px) {
    .card {
        margin-top: 30px;
        width: 260px;
        height: 369px;
        margin-left: 0px;
    }
}

@media (max-width: 574px) {
    .card {
        margin-top: 30px;
        width: 260px;
        height: 369px;
        margin-left: 0px;
    }
} */


/* @media (min-width: 768px) {
    .card {
        margin-left: 120px;
        width: 360px;
        height: 290px;
    }
} */

/* @media (min-width: 540px) {
    .card {
        
        width: auto;
        height: auto;
    }
} */
</style>