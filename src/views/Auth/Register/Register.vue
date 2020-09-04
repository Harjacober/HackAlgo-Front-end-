<template>
    <div class='auth-container'>
      <div class='text-center'>
            <router-link to='/'><h1 class='logo text-center'> CodeGees </h1> </router-link>
        </div>
        <div class='auth-content'>
            <div class='auth-content__panel'>
            <div class='auth-content__top text-center'>
                <h4 class='heading '>Register</h4>
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
                    <ValidationProvider :rules='formControls.email.validationRules' v-slot='{ errors }' name='email'>
                        <TextInput
                            :label='formControls.email.label'
                            name='email'
                            v-model='formControls.email.value'
                            required
                            autocomplete='off'
                            :error='errors[0]'
                            interfaceClass='black'
                            :placeholder='formControls.email.placeholder'
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
                        value='Register'
                        :isLoading='isLoading'
                    >
                    </Button>
                </form>
            </ValidationObserver>
             <div class='auth-content__bottom text-center'>
                <p class='text '>Already have an account? <router-link to='/login'>Login</router-link></p>
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
    name: 'register',
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
                        min: 6,
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
                email: this.formControls.email.value,
                pswd: this.formControls.password.value,
            };
            this.$store.dispatch('REGISTER', data);
        },
    },
    watch: {
        authFeedback(newValue) {
            this.isLoading = false;
            if (newValue.error) {
                this.$toaster.error(newValue.message || 'Whoops something went wrong');
            } else {
                this.$toaster.success(newValue.message || 'Successfully registered');
                setTimeout(() => {
                    this.$router.push('/verify');
                }, 500);
            }
        },
    },
};
</script>
<style lang='sass' scoped>

</style>
