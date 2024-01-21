<template>
    <div>
        <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-4 shadow">
                    <div class="modal-body p-5">
                        <FormKit type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'"
                            submit-label="Register" @submit="submitHandler" :actions="false">
                            <h2 class="fw-bold mb-0">Register</h2>
                            <p>Please register your name</p>
                            <hr />
                            <FormKit type="text" name="username" label="username" placeholder="username"
                                help="What do people call you?" validation="required" />

                            <FormKit type="text" name="email" label="Email" placeholder="Email" help="your email"
                                validation="required|email" />

                            <FormKit type="text" name="first_name" label="first_name" placeholder="first_name"
                                help="your firstname" validation="required" />

                            <FormKit type="text" name="last_name" label="last_name" placeholder="last_name"
                                help="your lastname" validation="required" />


                            <div class="double">
                                <FormKit type="password" name="password" label="Password"
                                    validation="required|length:6|matches:/[^a-zA-Z]/" :validation-messages="{
                                        matches: 'Please include at least one symbol',
                                    }" placeholder="Your password" help="Choose a password" />
                                <FormKit type="password" name="password_confirm" label="Confirm password"
                                    placeholder="Confirm password" validation="required|confirm"
                                    help="Confirm a password" />
                            </div>
                            <FormKit type="submit" label="Register" />

                        </FormKit>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore, type RegisterData } from "@/admin/stores/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const authStore = useAuthStore();


const submitted = ref<boolean>(false);
const submitHandler = async (formData: RegisterData) => {

    try {

        const response = await authStore.register(formData);

        router.replace({ name: "core.login" })
        console.log(response.data);

        submitted.value = true;
    } catch (error: Error | any) {
        console.error("Error submitting form:", error);
    }
}


</script>

<style scoped>
.modal {
    height: 100vh;
    height: 100vh;
    background: #474bff;
    background: -webkit-linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
    background: linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
}

.double {
    display: flex;
    gap: 20px;
}
</style>