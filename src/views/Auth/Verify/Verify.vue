<template>
    <div class='auth-container'>
     <div class='text-center'>
            <router-link to='/'><h1 class='logo text-center'> CodeGees </h1> </router-link>
        </div>
        <div class='auth-content'>
            <div class='auth-content__panel'>
            <div class='auth-content__top text-center'>
                <h4 class='heading '>Verify</h4>
                <p class='text '>
                    Hello!, We sent a 11-digit verification code to your email address
                    <span v-if='this.currentUser.email'>({{ this.currentUser.email || ''}})</span>.
                    Enter the code below
                </p>
            </div>
            <ValidationObserver v-slot='{ handleSubmit }'>
                <form @submit.prevent='handleSubmit(onSubmit)'>
                    <ValidationProvider :rules='formControls.email.validationRules' v-slot='{ errors }' name='email' v-if='currentUser.email'>
                        <TextInput
                            :label='formControls.email.label'
                            name='email'
                            v-model='formControls.email.value'
                            required
                            autocomplete='off'
                            :error='errors[0]'
                            interfaceClass='black'
                            :hidden='(!currentUser.email)? true : false'
                            :placeholder='formControls.email.placeholder'
                            :disabled='(currentUser.email)? true : false'
                        >
                        </TextInput>
                    </ValidationProvider>
                    <ValidationProvider :rules='formControls.code.validationRules' v-slot='{ errors }' name='code'>
                        <TextInput
                          :label='formControls.code.label'
                            name='code'
                            v-model='formControls.code.value'
                            interfaceClass='black'
                            required
                            :error='errors[0]'
                            :placeholder='formControls.code.placeholder'
                        >
                        </TextInput>
                    </ValidationProvider>
                    <Button
                        value='Verify'
                        :isLoading='isLoading'
                    >
                    </Button>
                </form>
            </ValidationObserver>
            </div>
        </div>
    </div>
</template>
<script >
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { mapGetters } from 'vuex';
import { TextInput, Button } from '@/components/Form';

export default {
    name: 'register',
    components: {
        TextInput,
        Button,
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            formControls: {
                code: {
                    value: '',
                    label: 'verification Code',
                    touched: false,
                    placeholder: '0xxxxxxxxxx',
                    validationRules: {
                        required: true,
                    },
                },
                email: {
                    value: '',
                    label: 'Email address',
                    touched: false,
                    placeholder: 'e.g ay@example.com',
                    validationRules: {
                        required: true,
                        email: true,
                    },
                },
            },
            isLoading: false,
        };
    },
    mounted() {
        this.formControls.email.value = this.currentUser.email || '';
    },
    computed: {
        ...mapGetters(['currentUser', 'authFeedback']),
    },
    methods: {
        onSubmit(e) {
            this.isLoading = true;
            const data = {
                id: this.formControls.code.value,
            };
            this.$store.dispatch('VERIFY', data);
        },
    },
    watch: {
        authFeedback(newValue) {
            this.isLoading = false;
            if (newValue.error) {
                this.$toaster.error(newValue.message || 'Whoops something went wrong');
            } else {
                this.$toaster.success(newValue.message || 'Successfully verified');
                setTimeout(() => {
                    this.$router.push('/login');
                }, 500);
            }
        },
    },
};
</script>
<style lang='sass' scoped>

</style>
