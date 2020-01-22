<template>
  <Layout pageName="Settings">
      <PrimaryCard classNames="settings">
      <Nav />
      <form v-on:submit.prevent="handleSubmit">
        <div class="form-group form-profile__group flex middle flex-wrap">
              <div class="w-1/7">
                  <div class="profile-image__container">
                      <img src="/assets/myAvatar.png" class="profile-image"/>
                      <label >
                          <input type="file" name="avatar" hidden/>
                          <span class="edit-btn btn"> <i class="uil uil-pen"></i></span>
                      </label>
                  </div>
              </div>
              <div class="w-3/7 ">
                  <div class="profile-details">
                      <h3 class="name">{{formControls.fullname.value}}</h3>
                      <p class="email">{{formControls.email.value}}</p>
                  </div>
              </div>
        </div>
         <TextInput
            :label="formControls.fullname.label"
            name="username"
            v-model="formControls.fullname.value"
            required
            autocomplete="off"
            interfaceClass="black"
            :placeholder="formControls.fullname.placeholder"
        >
        </TextInput>
         <TextInput
            :label="formControls.username.label"
            name="username"
            v-model="formControls.username.value"
            required
            autocomplete="off"
            interfaceClass="black"
            :placeholder="formControls.username.placeholder"
        >
        </TextInput>
        <TextInput
            :label="formControls.email.label"
            name="email"
            v-model="formControls.email.value"
            required
            autocomplete="off"
            interfaceClass="black"
            :placeholder="formControls.email.placeholder"
        >
        </TextInput>
        <Button
            value="Save Changes"
        >
        </Button>
      </form>
    </PrimaryCard>
  </Layout>
</template>

<script>
import { TextInput, Button } from '@/components/Form';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Nav from './components/Nav.vue';
import Layout from '@/components/Layout/Layout.vue';

export default {
  name: 'basic-information',
  components: {
    Layout, TextInput, Button, Nav, PrimaryCard,
  },
  data() {
    return {
        formControls: {
            fullname: {
                value: 'Akinola Ayodeji',
                label: 'Fullname',
                touched: false,
                placeholder: 'E.g coderarc',
                validationRules: {
                    required: true,
                },
            },
            username: {
                value: 'codeerarc',
                label: 'Username',
                touched: false,
                placeholder: 'E.g coderarc',
                validationRules: {
                    required: true,
                },
            },
            email: {
                value: 'akinayodeji4all@gmail.com',
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
};
</script>

<style lang="scss" scoped>

.profile-image__container{
    padding:20px;
    position:relative;
    .profile-image{
        box-shadow:0 8px 10px 0px rgba(0,0,0,0.09);
        border-radius:100%;
        widows: 9px;
        height:90px;
    }
    .edit-btn{
        color:$primary-color;
        position:absolute;
        bottom:25px;
        right:15px;
        padding:3px 2px;
        border-radius:100%;
        background:#fff;
        font-size:1rem;
        transition:0.3s;
        &:hover{
            background: $bg-primary-color;
        }
    }
}
.profile-details{
    padding:10px;
    .name{
        font-size:0.9rem;
        font-weight:600;
        font-family:$font-family-monserrat;
    }
    .email{
        font-weight:400;
        font-size:.8rem;
        font-family:$font-family-monserrat;
    }
}
</style>
