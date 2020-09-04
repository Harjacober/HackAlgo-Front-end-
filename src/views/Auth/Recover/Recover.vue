<template>
    <div class='auth-container'>
      <div class='text-center'>
            <router-link to='/'><h1 class='logo text-center'> CodeGees </h1> </router-link>
        </div>
        <div class='auth-content'>
            <div class='auth-content__panel'>
             <div class="auth-content__top text-center">
                <h4 class="heading ">Password Recovery</h4>
                <p class="text "> <i class='uil uil-padlock'></i> recover your password securely</p>
            </div>
            <ValidationObserver v-slot='{ handleSubmit }'>
                <form @submit.prevent='handleSubmit(onSubmit)'>
                    <ValidationProvider :rules='formControls.email.validationRules' v-slot='{ errors }' name='email'>
                         <TextInput
                            :label="formControls.email.label"
                            name="email"
                            v-model="formControls.email.value"
                            required
                            :error='errors[0]'
                            :placeholder="formControls.email.placeholder"
                        >
                        </TextInput>
                    </ValidationProvider>
                    <Button
                        value='Recover'
                        :isLoading='isLoading'
                    >
                    </Button>
                </form>
            </ValidationObserver>
             <div class="auth-content__bottom text-center">
                <p class="text"><router-link to="/login">Login Here</router-link></p>
            </div>
            </div>
        </div>
    </div>
</template>
<script >
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { mapGetters } from 'vuex';
import { TextInput, Button } from '@/components/Form';

export default {
    name: 'Login',
    components: {
        TextInput,
        Button,
        ValidationProvider,
        ValidationObserver,
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
            isLoading: false,
        };
    },
    computed: {
        ...mapGetters(['authFeedback']),
    },
    methods: {
        onSubmit(e) {
            this.isLoading = true;
            const data = {
                email: this.formControls.email.value,
            };
            this.$store.dispatch('RECOVER', data);
        },
    },
    watch: {
        authFeedback(newValue) {
            this.isLoading = false;
            if (newValue.error) {
                this.$toaster.error(newValue.message || 'Whoops something went wrong');
            } else {
                this.$toaster.success(newValue.message || 'We have sucessfully sent a password reset link to your email address.');
            }
        },
    },
};
</script>
<style lang='sass' scoped>

</style>
