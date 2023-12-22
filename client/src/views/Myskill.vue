<template>
    <div class="container min-h-inherit">
        <div class="row min-h-inherit  align-items-center p-3 ">

            <div class=" col-lg-6 col-md-12 order-2 col-sm-12 order-2">

                <h1>
                    {{ $t('pages.about.skills.header') }}
                </h1>
                <p>
                    {{ $t('pages.about.skills.content.talk') }}
                </p>

                <button class="ui-btn" @click="click">
                    <span>
                        {{ $t('pages.about.leftSide.components.projectBtn') }}
                    </span>
                </button>
            </div>

            <div class="col-lg-6 col-md-12 order-1 col-sm-12 order-2 ">
                <h1>{{ $t('pages.about.skills.header-3') }}</h1>
                <h5>HTML/CSS/Javascript/Typescript</h5>
                <div class="progress-container">
                    <div class="progress" style="width: 85%"></div>

                </div>
                <h5>Node Js / Vue Js </h5>
                <div class="progress-container">
                    <div class="progress" style="width: 80%"></div>
                </div>
                <h5>Express.js</h5>
                <p></p>
                <div class="progress-container">
                    <div class="progress" style="width: 80%"></div>
                </div>
                <h5>Moblie App</h5>
                <p></p>
                <div class="progress-container">
                    <div class="progress" style="width: 90%"></div>
                </div>
                <h1>{{ $t('pages.about.skills.header-2') }}</h1>
                <Vue3Marquee>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" class="skills">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                        class="skills" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                        class="skills" />
                </Vue3Marquee>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import { useRouter } from 'vue-router'
const router = useRouter();
const click = () => {
    router.push({
        path: '/project'
    })
}


</script>

<style scoped>
.skills {
    height: 60px;
    width: 60px;
}

/* button style */
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




.progress-container {
    display: inline-block;
    vertical-align: top;
    *vertical-align: auto;
    *zoom: 1;
    *display: inline;
    height: 12px;
    width: 100%;
    background: #d4e7ed;
    -moz-box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(0, 0, 0, 0.005);
    -webkit-box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(0, 0, 0, 0.005);
    box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(0, 0, 0, 0.005);
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    overflow: hidden;
}

.progress-container .progress {
    width: 0;
    min-width: 2%;
    height: 100%;
    background: var(--primary);
    border-right: 1px solid var(--primary);
    -moz-transition: width 1.6s ease-in-out;
    -o-transition: width 1.6s ease-in-out;
    -webkit-transition: width 1.6s ease-in-out;
    transition: width 1.6s ease-in-out;
    -webkit-animation: growWidth 1.6s ease-in-out;
}

@-webkit-keyframes growWidth {
    0% {
        width: 0;
    }
}
</style>