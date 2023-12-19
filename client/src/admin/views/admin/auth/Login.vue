<template>
    <div>
        <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5">
            <div class="modal-dialog" role="document">
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
                        <div v-if="submitted">
                            <h2>Submission successful!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore, type LoginData } from "@/admin/stores/auth";

import { useRouter } from "vue-router"
const submitted = ref<boolean>(false)

const router = useRouter();
const authStore = useAuthStore();
const submitHandler = async (formData: LoginData) => {

    try {
        console.log("🚀 ~ file: Register.vue:59 ~ submitHandler ~ formData:", formData)
        const response = await authStore.login(formData);

        router.replace({ name: "core.admin.dashboard" })
        console.log(response.data);

        submitted.value = true;
    } catch (error: Error | any) {
        console.error("Error submitting form:", error);
    }
}
</script>

<style scoped></style>