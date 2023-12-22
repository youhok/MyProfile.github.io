<template>
    <div>
        <div class="modal  d-block bg-body-secondary p-4 py-md-5">
            <div class="modal-dialog blur" role="document">
                <div class="modal-content rounded-4 shadow">
                    <div class="modal-body p-5">
                        <FormKit type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'"
                            submit-label="Register" @submit="submitHandler" :actions="false">
                            <h2 class="fw-bold mb-0">Login</h2>
                            <p>Please Enter your Email and Password</p>
                            <hr />
                            <FormKit type="text" name="email" label="Email" placeholder="Email"
                                validation="required|email" />
                            <div class="double">
                                <FormKit type="password" name="password" label="Password" placeholder="Enter your password"
                                    validation="required" />
                            </div>
                            <FormKit type="submit" label="Login" />
                        </FormKit>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore, type LoginData } from "@/admin/stores/auth";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import { useRouter } from "vue-router"
const submitted = ref<boolean>(false)

const router = useRouter();
const authStore = useAuthStore();
const submitHandler = async (formData: LoginData) => {
    try {
        console.log("🚀 ~ file: Register.vue:59 ~ submitHandler ~ formData:", formData)
        const response = await authStore.login(formData);
        console.log("🚀 ~ file: Login.vue:44 ~ submitHandler ~ response:", response.error)
        router.replace({ name: "core.admin.dashboard" })
        console.log(response);
        submitted.value = true;
    } catch (error: Error | any) {
        if (error == 'Email or password is incorrect' || error == 'Request failed with status code 401') {
            toast("Email or password is incorrect!", {
                "theme": "auto",
                "type": "error",
                "transition": "slide",
                "dangerouslyHTMLString": true
            })
        }
    }
}
</script>

<style scoped>
.modal {
    height: 100vh;
    background: #474bff;
    background: -webkit-linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
    background: linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
}

.modal-dialog {
    margin-top: 200px;
}

@media (max-width: 667px) {
    .modal-dialog {
        margin-top: 100px;
    }
}
</style>