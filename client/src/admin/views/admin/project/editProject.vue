<template>
    <div>
        <div class="container-fluid ">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <h3>Update Project</h3>

                    </div>
                </div>
            </div>

            <div class="row wrapper">
                <div class="col-12">
                    <FormKit :form-class="submitted ? 'hide' : 'show'" id="licenseForm" type="form" v-model="formData"
                        @submit="submit">
                        <FormKit type="file" name="thumbnailFile" label="Thumnail*" accept=".jpg,.png,.pdf"
                            :wrapper-class="{ 'formkit-wrapper': false }" validation="required" />

                        <FormKit type="select" label="Category*" :wrapper-class="{ 'formkit-wrapper': false }"
                            name="categoryId" placeholder="Select options" :options="categoryOptions" />

                        <FormKit type="text" name="name" label="Name*" :wrapper-class="{ 'formkit-wrapper': false }"
                            placeholder="Enter your project name" validation="required" />

                        <FormKit type="textarea" name="description" :wrapper-class="{ 'formkit-wrapper': false }"
                            label="Description*" placeholder="Enter your description" validation="required" />

                        <FormKit type="textarea" name="features" label="Features*"
                            :wrapper-class="{ 'formkit-wrapper': false }" placeholder="Enter your features"
                            validation="required" />


                        <FormKit type="file" name="screenshotFiles" label="Screenshots*" accept=".jpg,.png,.pdf"
                            :wrapper-class="{ 'formkit-wrapper': false }" multiple="true" validation="required" />

                        <p>Demo Link</p>


                        <div class="modal-content rounded-3 shadow-sm mt-3 bg-body-tertiary">
                            <div class="modal-body p-4">
                                <div class="container-fluid">
                                    <FormKit type="list" v-model="formData.demoLinks" dynamic #default="{ items }">
                                        <div v-for="(item, index) in items" :key="item" class="row">
                                            <FormKit type="group" :index="index">
                                                <div class="col-lg-5 col-sm-12">
                                                    <FormKit type="text" name="name"
                                                        :wrapper-class="{ 'formkit-wrapper': false }" label="Name*" />
                                                </div>
                                                <div class="col-lg-5 col-sm-12">
                                                    <FormKit type="url" name="link"
                                                        :wrapper-class="{ 'formkit-wrapper': false }" label="Url*"
                                                        validation="required|url" />
                                                </div>
                                                <div class="col-lg-2 col-sm-12 ">
                                                    <button class="card-Delete__button bg-danger "
                                                        @click="formData.demoLinks?.splice(index, 1)">
                                                        <i class="bi bi-node-plus"></i> Delete
                                                    </button>
                                                </div>
                                            </FormKit>
                                        </div>
                                        <button type="button" @click="addDemoLink" class="card-form__button">
                                            <i class="bi bi-node-plus"></i> Add
                                        </button>

                                    </FormKit>

                                </div>
                            </div>
                        </div>


                        <div class="d-flex gap-3 mt-2 ">
                            <div class="toggle-switch ">
                                <input class="toggle-input" id="toggle" type="checkbox" v-model="formData.downloadable">
                                <label class="toggle-label" for="toggle"></label>
                            </div>
                            <div class="Download">
                                Downloadable
                            </div>
                        </div>

                        <template v-if="formData.downloadable">
                            <h5>Platforms*</h5>
                            <FormKit type="list" name="platforms">
                                <div class="modal-content rounded-3 shadow-sm mt-3 bg-body-tertiary">
                                    <div class="modal-body p-4">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <FormKit type="group">
                                                    <div class="col-4">
                                                        <FormKit label="Icon*" name="icon" value="ti ti-brand-windows"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" disabled />
                                                    </div>
                                                    <div class="col-4">
                                                        <FormKit label="Name*" name="name" value="Windows"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" disabled />
                                                    </div>
                                                    <div class="col-4">
                                                        <FormKit type="url" name="url" label="Url*"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" />
                                                    </div>
                                                </FormKit>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-content rounded-3 shadow-sm mt-3 bg-body-tertiary">
                                    <div class="modal-body p-4">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <FormKit type="group">
                                                    <div class="col-4">
                                                        <FormKit label="Icon*" name="icon" value="ti ti-brand-finder"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" disabled />
                                                    </div>
                                                    <div class="col-4">
                                                        <FormKit label="Name*" name="name" value="Mac"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" disabled />
                                                    </div>
                                                    <div class="col-4">
                                                        <FormKit type="url" name="url" label="Url*"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" />
                                                    </div>
                                                </FormKit>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="modal-content rounded-2 shadow-sm mt-3 bg-body-tertiary">
                                    <div class="modal-body p-4">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <FormKit type="group">
                                                    <div class="col-4">

                                                        <FormKit label="Icon*" name="icon" value="ti ti-brand-ubuntu"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" disabled />
                                                    </div>
                                                    <div class="col-4">
                                                        <FormKit label="Name*" name="name" value="Linux"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" disabled />
                                                    </div>
                                                    <div class="col-4">
                                                        <FormKit type="url" name="url" label="Url*"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" />
                                                    </div>
                                                </FormKit>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-content rounded-2 shadow-sm mt-3 bg-body-tertiary">
                                    <div class="modal-body p-4">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <FormKit type="group">
                                                    <div class="col-4">
                                                        <FormKit label="Icon*" name="icon" value="ti ti-brand-apple"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" disabled />
                                                    </div>
                                                    <div class="col-4">
                                                        <FormKit label="Name*" name="name" value="IOS"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" disabled />
                                                    </div>
                                                    <div class="col-4">
                                                        <FormKit type="url" name="url" label="Url*"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" />
                                                    </div>
                                                </FormKit>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-content rounded-3 shadow-sm mt-3 mb-3  bg-body-tertiary">
                                    <div class="modal-body p-4">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <FormKit type="group">
                                                    <div class="col-4">
                                                        <FormKit label="Icon*" name="icon" value="ti ti-brand-android"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" disabled />
                                                    </div>
                                                    <div class="col-4">
                                                        <FormKit label="Name*" name="name" value="Android"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" disabled />
                                                    </div>
                                                    <div class="col-4">
                                                        <FormKit type="url" name="url" label="Url*"
                                                            :wrapper-class="{ 'formkit-wrapper': false }" />
                                                    </div>
                                                </FormKit>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FormKit>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12">
                                        <FormKit label="Requirements" name="requirements"
                                            :wrapper-class="{ 'formkit-wrapper': false }" />
                                    </div>
                                </div>
                            </div>


                        </template>

                        <FormKit type="datetime-local" name="releaseDate" :wrapper-class="{ 'formkit-wrapper': false }"
                            label="Release Date*" validation="required" />

                        <FormKit type="textarea" name="note" :wrapper-class="{ 'formkit-wrapper': false }" label="Note"
                            placeholder="Enter your note" validation="required" />


                        <FormKit type="select" label="Status*" :wrapper-class="{ 'formkit-wrapper': false }" name="status"
                            :options="[
                                'Completed',
                                'Development',
                                'Coming Soon',
                            ]" validation="required" />

                    </FormKit>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { ref, onMounted } from 'vue'
// import { type Option } from '@/admin/options/staticOption';
import { type Project, projectController } from "@/admin/controllers/projectController";
import { CategoriesController, type Categories } from "@/admin/controllers/categoriesController";
// import DynamicOptions from '@/admin/options/dynamicOption';
import { toast } from "vue3-toastify";
import { useRoute } from "vue-router";
import ConvertFile from '@/admin/utils/convert-file';
const route = useRoute()
// const router = useRouter()
const categoryOptions = ref<{ label: string; value: string }[]>([]);
// const categoryOpts = ref<Option[]>([]);
const submitted = ref<boolean>(false);
const id = route.params.id.toString();
import compressor from '@/admin/utils/compressor';

onMounted(async () => {
    const tempCategories = await CategoriesController.getAll()
    categoryOptions.value = tempCategories.map((category:any) => ({
        label: `${category.enName} - ${category.khName} - ${category.type}`,
        value: category._id
    }));
    // categoryOpts.value = DynamicOptions.categroyOption(tempCategories)
    const tempProject: Project = await projectController.getOne(id);
    if (tempProject.thumbnail && tempProject.thumbnail.name && tempProject.thumbnail.url) {
        const thumbnailFile = await ConvertFile.fromUrl(tempProject.thumbnail.url, tempProject.thumbnail.name)
        const thumbnailFileObject = {
            name: tempProject.thumbnail.name,
            file: thumbnailFile,
        };
        tempProject.thumbnailFile = [thumbnailFileObject];
    }

    tempProject.screenshotFiles = []
    for (let index = 0; index < tempProject.screenshots.length; index++) {
        const screenshot = tempProject.screenshots[index];
        if (screenshot && screenshot.url && screenshot.name) {
            const convertedFile = await ConvertFile.fromUrl(screenshot.url, screenshot.name);
            // console.log(convertedFile)
            // Make sure tempProject.screenshotFiles is still defined before updating the file
            tempProject.screenshotFiles.push({ name: screenshot.name, file: convertedFile });
        }
    }

    const formatDateTime = moment(tempProject.releaseDate).utc().format('YYYY-MM-DDTHH:mm');
    tempProject.releaseDate = formatDateTime

    formData.value = tempProject
})



const formData = ref<Project>({
    categoryId: '',
    categoryDoc: {
        khName: '',
        enName: '',
        status: '',
        type: '',
        _id: ''
    },
    name: '',
    thumbnail: {},
    // thumbnailName: '',
    // thumbnailBase64: '',
    description: '',
    features: [],
    screenshots: [],
    demoLinks: [],
    requirements: [],
    releaseDate: '',
    note: '',
    downloadable: false,
    status: 'Completed'
});

const addDemoLink = () => {
    formData.value.demoLinks?.push({
        name: '',
        link: '',
    })
}



const submit = async (formdata: Project) => {
    // Let's pretend this is an ajax request:
    console.log(formData)
    try {
        if (formdata.thumbnailFile && formdata.thumbnailFile.length > 0 && formdata.thumbnailFile[0].file) {
            const thumbnailFile = formdata.thumbnailFile[0].file
            console.log("O File", thumbnailFile)
            let thumnailBob: Blob | File = thumbnailFile;
            if (thumbnailFile.size > 1000000) {
                thumnailBob = await compressor(thumbnailFile, 0.6) as Blob
            }
            console.log("🚀 ~ submit ~ thumnailBob:", thumnailBob)
            const thumnailBase64 = await ConvertFile.toBase64(thumnailBob);
            formdata.thumbnail.name = formdata.thumbnailFile[0].name!
            formdata.thumbnail.base64 = thumnailBase64
        }

        if (formdata.screenshotFiles && formdata.screenshotFiles.length > 0) {
            for (let index = 0; index < formdata.screenshotFiles.length; index++) {
                const screenshot = formdata.screenshotFiles[index];
                // const screenshot_Blob_File = await compressor(screenshot.file!) as Blob;
                // console.log(screenshot_Blob_File);
                // const screenshotBase64 = await ConvertFile.toBase64(screenshot_Blob_File);
                // console.log(screenshotBase64)
                // formdata.screenshots.push({ name: screenshot.name, base64: screenshotBase64 });
                if (screenshot) {
                    const screenshot_Blob_File = await compressor(screenshot.file!) as Blob;
                    console.log(screenshot_Blob_File);
                    const screenshotBase64 = await ConvertFile.toBase64(screenshot_Blob_File);
                    console.log(screenshotBase64)
                    formdata.screenshots.push({ name: screenshot.name, base64: screenshotBase64 });
                }

            }
        }
  
        const response = await projectController.update(id, formdata);
        toast.success(response.message);
        submitted.value = true;
        // router.back()
    } catch (error: Error | any) {
        console.error("Error submitting form:", error);
    }
}

</script>

<style scoped>
.Download {
    margin-top: 11px;
}

.card-form__button {
    width: 100%;
    height: 40px;
    background: var(--primary);
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 500;
    font-family: "Source Sans Pro", sans-serif;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
}

.card-Delete__button {
    width: 100%;
    height: 40px;
    /* background: red; */
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 500;
    font-family: "Source Sans Pro", sans-serif;
    /* box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3); */
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
}

/* toggle */


.toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 10px;
}

/* Giriş stil */
.toggle-switch .toggle-input {
    display: none;
}

/* Anahtarın stilinin etrafındaki etiketin stil */
.toggle-switch .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 24px;
    background-color: #e63946;
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.3s;
}

/* Anahtarın yuvarlak kısmının stil */
.toggle-switch .toggle-label::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
}

/* Anahtarın etkin hale gelmesindeki stil değişiklikleri */
.toggle-switch .toggle-input:checked+.toggle-label {
    background-color: #4CAF50;
}

.toggle-switch .toggle-input:checked+.toggle-label::before {
    transform: translateX(16px);
}

/* Light tema */
.toggle-switch.light .toggle-label {
    background-color: #BEBEBE;
}

.toggle-switch.light .toggle-input:checked+.toggle-label {
    background-color: #9B9B9B;
}

.toggle-switch.light .toggle-input:checked+.toggle-label::before {
    transform: translateX(6px);
}

/* Dark tema */
.toggle-switch.dark .toggle-label {
    background-color: #4B4B4B;
}

.toggle-switch.dark .toggle-input:checked+.toggle-label {
    background-color: #717171;
}

.toggle-switch.dark .toggle-input:checked+.toggle-label::before {
    transform: translateX(16px);
}
</style>