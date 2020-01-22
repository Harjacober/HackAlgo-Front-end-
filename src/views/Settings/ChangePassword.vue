<template>
  <Layout pageName="Settings">
      <PrimaryCard classNames="settings">
      <Nav />
      <form v-on:submit.prevent="handleSubmit">
        <PasswordInput
          :label="formControls.password.label"
            name="password"
            v-model="formControls.password.value"
            interfaceClass="black"
            required
            :placeholder="formControls.password.placeholder"
        >
        </PasswordInput>
        <PasswordInput
          :label="formControls.password.label"
            name="password"
            v-model="formControls.password.value"
            interfaceClass="black"
            required
            :placeholder="formControls.password.placeholder"
        >
        </PasswordInput>
        <Button
            value="Save Changes"
        >
        </Button>
      </form>
      </PrimaryCard>
  </Layout>
</template>

<script>
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import { Button, PasswordInput } from '@/components/Form';
import Nav from './components/Nav.vue';
import Layout from '@/components/Layout/Layout.vue';

export default {
  name: 'change-password',
  components: {
    Layout, Button, PasswordInput, Nav, PrimaryCard,
  },
  data() {
    return {
        formControls: {
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
};
</script>

<style lang="scss" scoped>

</style>
