<template>
    <div class="auth-container">
      <!-- <h1 class="logo color-white  text-center"> HackAlgo </h1> -->
        <div class="auth-content">
            <div class="auth-content__top text-center">
                <h4 class="heading color-white">Register</h4>
                <p class="text color-white"> <i class='uil uil-padlock'></i> Create a free account</p>
            </div>
            <form v-on:submit.prevent="handleSubmit">
                <TextInput
                    :label="formControls.username.label"
                    name="username"
                    v-model="formControls.username.value"
                    required
                    autocomplete="off"
                    :placeholder="formControls.username.placeholder"
                >
                </TextInput>
                <TextInput
                    :label="formControls.email.label"
                    name="email"
                    v-model="formControls.email.value"
                    required
                    autocomplete="off"
                    :placeholder="formControls.email.placeholder"
                >
                </TextInput>

                <PasswordInput
                   :label="formControls.password.label"
                    name="password"
                    v-model="formControls.password.value"
                    required
                    :placeholder="formControls.password.placeholder"
                >
                </PasswordInput>

                <Button
                    value="Login"
                >
                </Button>
            </form>
             <div class="auth-content__bottom text-center">
                <p class="text color-white">Already have an account? <router-link to="/login">Login</router-link></p>
            </div>
        </div>
    </div>
</template>
<script >
import { TextInput, Button, PasswordInput } from '@/components/Form';

export default {
    name: 'register',
    components: {
        TextInput,
        Button,
        PasswordInput,
    },
    data() {
        return {
            formControls: {
                username: {
                    value: '',
                    label: 'Username',
                    touched: false,
                    placeholder: '',
                    validationRules: {
                        required: true,
                    },
                },
                email: {
                    value: '',
                    label: 'Email address',
                    touched: false,
                    placeholder: 'e.g joe@example.com',
                    validationRules: {
                        required: true,
                        email: true,
                    },
                },
                password: {
                    value: '',
                    label: 'Password',
                    touched: false,
                    placeholder: '***********',
                    validationRules: {
                        required: true,
                    },
                },
            },
            submitted: false,
        };
    },
    computed: {

    },
    methods: {
        handleSubmit() {
            this.submitted = true;
        },
    },
};
</script>
<style lang="sass" scoped>

</style>
