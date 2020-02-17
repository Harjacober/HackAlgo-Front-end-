<template>
     <div class='auth-container'>
      <!-- <h1 class='logo color-white  text-center'> HackAlgo </h1> -->
        <div class='auth-content'>
            <div class='auth-content__panel'>
                <div class="auth-content__top text-center">
                    <h4 class="heading">Reset Password </h4>
                </div>
                <ValidationObserver v-slot='{ handleSubmit }'>
                    <form @submit.prevent='handleSubmit(onSubmit)'>
                        <ValidationProvider :rules='formControls.new_password.validationRules' v-slot='{ errors }' name='new_password' vid="new_password">
                            <PasswordInput
                                :label="formControls.new_password.label"
                                name="New password"
                                v-model="formControls.new_password.value"
                                required
                                 interfaceClass='black'
                                :error='errors[0]'
                                :placeholder="formControls.new_password.placeholder"
                            >
                            </PasswordInput>
                        </ValidationProvider>
                        <ValidationProvider :rules='formControls.confirm_password.validationRules' v-slot='{ errors }' name='confirm_password'>
                            <PasswordInput
                            :label="formControls.confirm_password.label"
                                name="Confirm password"
                                v-model="formControls.confirm_password.value"
                                required
                                 interfaceClass='black'
                                :error='errors[0]'
                                :placeholder="formControls.confirm_password.placeholder"
                            >
                            </PasswordInput>
                        </ValidationProvider>
                        <Button
                            value='Save'
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
import { Button, PasswordInput } from '@/components/Form';

export default {
    name: 'change-password',
    components: {
        Button,
        ValidationProvider,
        ValidationObserver,
        PasswordInput,
    },
    data() {
        return {
            formControls: {
                new_password: {
                    value: '',
                    label: 'Password',
                    touched: false,
                    placeholder: '***********',
                    validationRules: {
                        required: true,
                        min: 6,
                    },
                },
                confirm_password: {
                    value: '',
                    label: 'Confirm Password',
                    touched: false,
                    placeholder: '***********',
                    validationRules: {
                        required: true,
                        confirmed: 'new_password',
                    },
                },
            },
            isLoading: false,
        };
    },
    mounted() {
        this.id = this.$route.params.id;
        this.email = this.$route.params.email;
    },
    computed: {
        ...mapGetters(['authFeedback']),
    },
    methods: {
        onSubmit(e) {
            this.isLoading = true;
            const data = {
                changepswdid: this.id,
                email: this.email,
                pswd: this.formControls.new_password.value,
            };
            this.$store.dispatch('RESET_PASSWORD', data);
        },
    },
    watch: {
        authFeedback(newValue) {
            this.isLoading = false;
            if (newValue.error) {
                this.$toaster.error(newValue.message || 'Whoops something went wrong');
            } else {
                this.$toaster.success(newValue.message || 'Your password changes has been saved sucessfully. login');
                setTimeout(() => {
                    this.$router.push('/login');
                }, 500);
            }
        },
    },
};
</script>
<style lang="sass" scoped>

</style>
