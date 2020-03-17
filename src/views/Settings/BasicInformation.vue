<template>
  <Layout pageName="Settings">
    <PrimaryCard classNames="settings">
    <Nav />
    <ValidationObserver v-slot='{ handleSubmit }'>
        <form @submit.prevent='handleSubmit(onSubmit)'>
            <div class="form-group form-profile__group flex middle flex-wrap">
                <div class="w-1/7">
                    <div class="profile-image__container">
                        <img src="/assets/myAvatar.png" class="profile-image"/>
                        <label hidden>
                            <input type="file" name="avatar" hidden/>
                            <span class="edit-btn btn"> <i class="uil uil-pen"></i></span>
                        </label>
                    </div>
                </div>
                <div class="w-3/7 ">
                    <div class="profile-details">
                        <h3 class="name">{{currentUser.username}}</h3>
                        <p class="email">{{currentUser.email}}</p>
                    </div>
                </div>
            </div>
            <ValidationProvider v-slot='{ errors }' name='name'>
                <TextInput
                    label="Fullname"
                    name="name"
                    v-model="currentUser.name"
                    autocomplete="off"
                    interfaceClass="black"
                    :error='errors[0]'
                    placeholder="E.G thompson peter"
                >
                </TextInput>
            </ValidationProvider>
            <ValidationProvider rules='required' v-slot='{ errors }' name='username'>
                <TextInput
                    label='Username'
                    name='username'
                    v-model='currentUser.username'
                    required
                    autocomplete='off'
                    interfaceClass='black'
                    :error='errors[0]'
                    placeholder='E.G kodak'
                >
                </TextInput>
            </ValidationProvider>
            <ValidationProvider rules='required|email' v-slot='{ errors }' name='email'>
                <TextInput
                    label='Email Address'
                    name='email'
                    v-model='currentUser.email'
                    required
                    autocomplete='off'
                    :error='errors[0]'
                    interfaceClass='black'
                    placeholder='E.G ay@example.com'
                >
                </TextInput>
            </ValidationProvider>
            <ValidationProvider v-slot='{ errors }' name='location'>
                <TextInput
                    label='Location'
                    name='location'
                    v-model='currentUser.location'
                    autocomplete='off'
                    interfaceClass='black'
                    :error='errors[0]'
                    placeholder='E.G Lagos, Nigeria'
                >
                </TextInput>
            </ValidationProvider>
             <ValidationProvider v-slot='{ errors }' name='summary'>
                <TextArea
                    label='location'
                    name='location'
                    v-model='currentUser.summary'
                    autocomplete='off'
                    interfaceClass='black'
                    :error='errors[0]'
                    placeholder='Write something about yourself...'
                >
                </TextArea>
            </ValidationProvider>
            <Button
                value="Save Changes"
                :isLoading='isLoading'
            >
            </Button>
        </form>
    </ValidationObserver>
    </PrimaryCard>
  </Layout>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { mapGetters } from 'vuex';
import { TextInput, TextArea, Button } from '@/components/Form';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Nav from './components/Nav.vue';
import Layout from '@/components/Layout/Layout.vue';

export default {
    name: 'basic-information',
    components: {
        Layout, TextInput, Button, Nav, PrimaryCard, TextArea, ValidationProvider, ValidationObserver,
    },
    data() {
        return {
            isLoading: false,
        };
    },
    computed: {
        ...mapGetters(['currentUser', 'updateFeedback']),
    },
    methods: {
        onSubmit(e) {
            this.isLoading = true;
            const data = {
                uniqueid: this.currentUser.uid,
                ...this.currentUser,
            };
            this.$store.dispatch('UPDATE_USER', data);
        },
    },
    watch: {
        updateFeedback(newValue) {
            this.isLoading = false;
            if (newValue.error) {
                this.$toaster.error(newValue.message || 'Whoops something went wrong');
            } else {
                this.$toaster.success(newValue.message || 'Successfully updated');
            }
        },
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
        font-family:$font-family-muli;
    }
    .email{
        font-weight:400;
        font-size:.8rem;
        font-family:$font-family-muli;
    }
}
</style>
