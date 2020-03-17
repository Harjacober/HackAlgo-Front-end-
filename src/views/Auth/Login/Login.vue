<template>
    <div class='auth-container'>
      <!-- <h1 class='logo color-white  text-center'> HackAlgo </h1> -->
        <div class='auth-content'>
            <div class='auth-content__panel'>
            <div class='auth-content__top text-center'>
                <h4 class='heading '>Login</h4>
                <p class='text '> <i class='uil uil-padlock'></i> Create a free account</p>
            </div>
            <ValidationObserver v-slot='{ handleSubmit }'>
                <form @submit.prevent='handleSubmit(onSubmit)'>
                    <ValidationProvider :rules='formControls.username.validationRules' v-slot='{ errors }' name='username'>
                        <TextInput
                            :label='formControls.username.label'
                            name='username'
                            v-model='formControls.username.value'
                            required
                            autocomplete='off'
                            interfaceClass='black'
                            :error='errors[0]'
                            :placeholder='formControls.username.placeholder'
                        >
                        </TextInput>
                    </ValidationProvider>
                    <ValidationProvider :rules='formControls.password.validationRules' v-slot='{ errors }' name='password'>
                        <PasswordInput
                        :label='formControls.password.label'
                            name='password'
                            v-model='formControls.password.value'
                            interfaceClass='black'
                            required
                            :error='errors[0]'
                            :placeholder='formControls.password.placeholder'
                        >
                        </PasswordInput>
                    </ValidationProvider>
                    <Button
                        value='Login'
                        :isLoading='isLoading'
                    >
                    </Button>
                </form>
            </ValidationObserver>
             <div class="auth-content__bottom text-center">
                    <p class="text ">Forgotten password? <router-link to="/recover-password">Recover</router-link></p>
                    <p class="text ">New here? <router-link to="/register">Create an account</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { mapGetters } from 'vuex';
import { TextInput, Button, PasswordInput } from '@/components/Form';

export default {
    name: 'Login',
    components: {
        TextInput,
        Button,
        PasswordInput,
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            formControls: {
                username: {
                    value: '',
                    label: 'Username',
                    touched: false,
                    placeholder: 'E.g coderarc',
                    validationRules: {
                        required: true,
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
            isLoading: false,
        };
    },
     computed: {
        ...mapGetters(['currentUser', 'authFeedback']),
    },
    methods: {
        onSubmit(e) {
            this.isLoading = true;
            const data = {
                username: this.formControls.username.value,
                pswd: this.formControls.password.value,
            };
            this.$store.dispatch('LOGIN', data);
        },
    },
    watch: {
        authFeedback(newValue) {
            this.isLoading = false;
            if (newValue.error) {
                this.$toaster.error(newValue.message || 'Whoops something went wrong');
            } else {
                this.$toaster.success(newValue.message || 'Successfully Logged in');
                setTimeout(() => {
                    this.$router.push('/dashboard');
                }, 500);
            }
        },
    },
};
</script>
<style lang='sass' scoped>

</style>
