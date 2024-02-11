<template>
 
    <div class="container mt-4">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 ">
                <div class="image-prev" v-if="dataProjectDetail">
                    <CloudImage :imageName="dataProjectDetail.thumbnail.public_id" :width="350" :height="450"
                        :responsiveSteps="[400]" :radius="3" />
                </div>
            </div>
            <div class="col-lg-6  col-md-12 col-sm-12">
                <h2 class="title" v-if="dataProjectDetail" >{{ dataProjectDetail.name }}</h2>
                <div class="tips">
                    <div class="stars d-flex gap-5">
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                             <p v-if="dataProjectDetail">
                                <a  :href="`${dataProjectDetail.demoLinks[0].link}`"
                                    style="text-decoration: none !important">
                                    {{ dataProjectDetail.demoLinks[0]?.name }}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                        class="bi bi-box-arrow-up-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5" />
                                        <path fill-rule="evenodd"
                                            d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0z" />
                                    </svg>
                                </a>
                            </p>
                        </div>
                        <div>
                         <p class="day" v-if="dataProjectDetail">{{ formatTime }}</p> 
                        </div>

                    </div>

                </div>

                <p class="desc" v-if="dataProjectDetail">
                    {{ dataProjectDetail.description }}
                </p>

             
                <template v-if="dataProjectDetail">
                    <template v-if="dataProjectDetail.downloadable == !false">
                        <button class="cssbuttons-io" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-download" viewBox="0 0 16 16">
                                    <path
                                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                    <path
                                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                </svg>
                                Download
                            </span>
                        </button>
                    </template>
                </template>

                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-12">
                            <div class="card-footer">
                                <div class="stats">
                                    <div class="stat">
                                        <span class="label">
                                            <div>
                                                CATEGORY
                                            </div>
                                        </span>
                                        <span class="value">website</span>
                                    </div>
                                    <div class="stat">
                                        <span class="label">
                                            <div>
                                                STATUS
                                            </div>
                                        </span>
                                        <span class="value" v-if="dataProjectDetail">{{ dataProjectDetail.status }}</span>
                                    </div>
                                    <div class="stat">
                                        <span class="label">
                                            <div>
                                                RELEASEDATE
                                            </div>
                                        </span>
                                         <span class="value" v-if="dataProjectDetail">{{ formatDates }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="row mt-5">
            <div class="col-12">
                <div class="note bg-body-secondary">
                    <div v-if="dataProjectDetail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-journal" viewBox="0 0 16 16">
                            <path
                                d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                            <path
                                d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                        </svg> :
                        {{ dataProjectDetail.note }}
                    </div>
                </div>
            </div>

        </div>

        
        <div class="container mt-5 p-4 ">
            <div class="row">
                <div class="col-12" v-if="dataProjectDetail">
                    
                    <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                        clickable: true,
                    }" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="screenshot in dataProjectDetail.screenshots" :key="screenshot._id">
                            <CloudImage :imageName="screenshot.public_id" :width="350" :height="450"
                                :responsiveSteps="[400]" :radius="3" />
                        </swiper-slide>

                    </swiper>
                </div>
            </div>  

        </div>

   
        <template class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content rounded-4">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Which one your platform ?</h1>
                    </div>
                    <div class="modal-body" v-if="dataProjectDetail">
                        <button v-for="platform in dataProjectDetail.platforms" :key="platform._id" type="button"
                            class="btn btn-light d-flex gap-4 w-100 mt-1 rounded-3" @click="openPlatformLink(platform.url)">
                            <i :class="`${platform.icon}`"></i> {{ platform.name }} 
                        </button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </template>

        <div class="row bg-body-tertiary p-4 rounded-4 ">
            <div class="col-lg-6 col-md-12 col-sm-12 ">
                <h2>FEATURES</h2>
                <hr>
                <ul v-if="dataProjectDetail">
                    <li>{{ dataProjectDetail.features[0] }}</li>
                </ul>

            </div>
            <div class="col-lg-6  col-md-12 col-sm-12 ">
                <h2>REQUIREMENTS</h2>
                <hr>
                <ul v-if="dataProjectDetail">
                    <li>{{ dataProjectDetail?.requirements[0] }}</li>
                </ul>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { projectController, type Project } from "@/admin/controllers/projectController"
import { useRoute, useRouter } from "vue-router";
import CloudImage from "@/admin/components/CloudImage.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
const modules = [Pagination];


const route = useRoute()
// const router = useRouter()
import moment from 'moment'


const id = route.params.id

const dataProjectDetail = ref();

const formatDates = ref();
const formatTime = ref();


onMounted(
    async () => {
        const tempProjectdetail: Project = await projectController.getOne(id as string) 
        console.log("data respone", tempProjectdetail)
        const formattedReleaseDate = moment(tempProjectdetail.releaseDate).format("MMM Do YY")
        const formattedTimes = moment(tempProjectdetail.releaseDate).startOf('day').fromNow();
        console.log(formattedReleaseDate)
        console.log(formattedTimes)
        formatDates.value = formattedReleaseDate
        formatTime.value = formattedTimes
        dataProjectDetail.value = tempProjectdetail
        console.log("data in ref", dataProjectDetail.value)
    })


const openPlatformLink = (link: string | undefined) => {
    if (link) {
        window.open(link, '_blank');
    }
}

</script>

<style scoped>
.title {
    font-size: 3.2rem;
    font-weight: 800;
    width: 100%;
    max-width: 600px;
}


.desc {
    width: 100%;
    max-width: 600px;
    font-size: 16px;
    font-weight: 200;
    text-transform: capitalize;
    margin-top: 10px;
}

/* day style */
.day {
    padding: 3px 15px;
    border-radius: 20px;
    background-color: var(--primary);
    color: white;
}

/* stars style */
.stars {
    display: flex;
    width: max-content;
    gap: 5px;
    font-size: 15px;
}

.stars p {
    opacity: 0.8;
}

.stars i {
    color: #ffa600;
}

/* image style */

.image-prev {
    width: max-content;
    height: max-content;
    --font-color: #323232;
    --bg-color: #e0e0e0;
    border-radius: 20px;
    background: var(--bg-color);
    box-shadow: -9px 9px 18px #5a5a5a,
        9px -9px 18px #ffffff;
    display: flex;
    flex-direction: column;
    transition: .4s;
    position: relative;
}


.image-prev:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 10px 2px #5a5a5a;
}

.image-prev img {
    width: 100%;
    max-width: 350px;
    height: auto;
    object-fit: cover;
    border-radius: 20px;


}


/* button style */

.cssbuttons-io {
    position: relative;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;
    border-radius: 10em;
    cursor: pointer;
    border: none;
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: ghostwhite;
    overflow: hidden;
}

.cssbuttons-io svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
}

.cssbuttons-io span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.8em 1.2em 0.8em 1.05em;
}

.cssbuttons-io::before,
.cssbuttons-io::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.cssbuttons-io::before {
    content: "";
    background: #000;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

.cssbuttons-io:hover::before {
    transform: translate3d(100%, 0, 0);
}

.cssbuttons-io:active {
    transform: scale(0.95);
}

/* footer  */

card-footer {
    /* position: absolute; */
    left: 0;
    width: 100%;
    bottom: 20px;
}

.stat {
    box-sizing: border-box;
    width: calc(100% / 3);
    float: left;
    text-align: center;
}

.stat:nth-child(2) {
    border-left: 1px solid grey;
}

.stat:nth-child(3) {
    border-left: 1px solid grey;
}

.stat .label {
    display: block;
    text-transform: uppercase;
    /* font-weight: 350px;
    font-size: 16px; */

    letter-spacing: 1px;
    color: #95989A;
}



.stat .value {
    /* display: block; */
    color: white;
    padding: 1px 5px;
    /* font-weight: 700;
    font-size: 20px; */
    margin-top: 5px;
    border-radius: 20px;
    background-color: var(--primary);
}
</style>