<template>
    <div class="auth-container">
        <div class="auth-content">
            <div class="auth-content__top text-center">
                <h4 class="heading color-white">Reset</h4>
                <p class="text color-white"> <i class='uil uil-fast-mail'></i> Enter your email</p>
            </div>
            <form v-on:submit.prevent="handleSubmit">
                <TextInput
                    :label="formControls.email.label"
                    name="email"
                    v-model="formControls.email.value"
                    required
                    :placeholder="formControls.email.placeholder"
                >
                </TextInput>

                <Button
                    value="Reset"
                >
                </Button>
            </form>
            <div class="auth-content__bottom text-center">
                <p class="text"><router-link to="/login">Login Here</router-link></p>
            </div>
        </div>
    </div>
</template>

<script >
import { TextInput, Button } from '@/components/Form';

export default {
    name: 'reset',
    components: {
        TextInput,
        Button,
    },
    data() {
        return {
            formControls: {
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
<style lang="sass" scoped></style>
