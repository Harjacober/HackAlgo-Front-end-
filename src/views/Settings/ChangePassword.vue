<template>
  <Layout pageName="Settings">
      <PrimaryCard classNames="settings">
      <Nav />
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
      </PrimaryCard>
  </Layout>
</template>


<script>
import { mapGetters } from 'vuex';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import { Button, PasswordInput } from '@/components/Form';
import Nav from './components/Nav.vue';
import Layout from '@/components/Layout/Layout.vue';

export default {
  name: 'change-password',
  components: {
    Layout, Button, PasswordInput, Nav, PrimaryCard, ValidationProvider, ValidationObserver,
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
                        min: 6,
                    },
                },
                confirm_password: {
                    value: '',
                    label: 'Confirm Password',
                    touched: false,
                    placeholder: '***********',
                    validationRules: {
                        confirmed: 'new_password',
                    },
                },
            },
            isLoading: false,
        };
    },
    computed: {
        ...mapGetters(['updateFeedback']),
    },
    methods: {
        onSubmit(e) {
            this.isLoading = true;
            const data = {
                pswd: this.formControls.new_password.value,
            };
            this.$store.dispatch('CHANGE_PASSWORD', data);
        },
    },
    watch: {
        updateFeedback(newValue) {
            this.isLoading = false;
            if (newValue.error) {
                this.$toaster.error(newValue.message || 'Whoops something went wrong');
            } else {
                this.$toaster.success(newValue.message || 'Your password changes has been saved sucessfully.');
                this.formControls.new_password.value = '';
                this.formControls.confirm_password.value = '';
            }
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
