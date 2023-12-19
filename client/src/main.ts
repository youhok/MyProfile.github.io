import './assets/main.css';
import 'animate.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import { authentication } from './admin/plugins/authentications';

import VueSplide from '@splidejs/vue-splide';

import { plugin, defaultConfig } from "@formkit/vue";
import '@formkit/themes/genesis'

import { createPinia } from 'pinia'

import Vue3Marquee from 'vue3-marquee'
import EN from './locale/en.json';
import KH from './locale/kh.json';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueProgressBar from "@aacassandra/vue3-progressbar";

const i18n = createI18n({
    locale: 'EN',
    messages: {
        EN: EN,
        KH: KH,
    }
});


const options = {
    color: `var(--primary)`,
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: "top",
    inverse: false,
};

const pinia = createPinia();


const app = createApp(App);
app.use(pinia);

app.use(VueProgressBar, options);
app.use(VueSplide);
app.use(Vue3Marquee);
app.use(i18n);
app.use(plugin, defaultConfig());

authentication.install().then(() => {
    app.use(router)
    app.mount('#app')
})

// ...


// Navigation Router Guards
const progress = app.config.globalProperties.$Progress


router.beforeEach(async (to, from, next) => {
    progress.start()
    next()
})
//  hook the progress bar to finish after we've finished moving router-view
router.afterEach(() => {
    progress.finish()
})


