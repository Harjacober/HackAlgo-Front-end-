<template>
  <div class="modal-container">
      <div class="modal-backdrop" v-bind:style="modalBackdropStyle" ></div>
      <div class="modal-container__panel" v-bind:style="modalContainerPanelStyle" @click="close">
        <div
            class="modal register-contest-modal"
            role="modal"
            v-bind:style="modalStyle"
            v-on:click.stop
        >
        <header class="modal-header">
            <button
                type="button"
                class="back-btn to-left btn reset-btn"
                @click="close"
            >
                <i class="uil uil-arrow-left"></i>
            </button>
            <h5 class="text-center">Register for Contest</h5>
        </header>
        <form v-on:submit.prevent="handleSubmit" class="form">
            <section class="modal-body">
                <TextInput
                    label='Contest Title'
                    v-model='contest.title'
                    disabled
                    interfaceClass='black'
                >
                </TextInput>
                <TextInput
                    label='Contest Type'
                    v-model='contest.contesttype'
                    disabled
                    interfaceClass='black'
                >
                </TextInput>
                <TextInput
                    label='Username'
                    v-model='currentUser.username'
                    disabled
                    interfaceClass='black'
                >
                </TextInput>
                 <TextInput
                    label='Email Address'
                    v-model='currentUser.email'
                    disabled
                    interfaceClass='black'
                >
                </TextInput>
            </section>
            <footer class="modal-footer flex">
                <Button
                    value='Register'
                    :isLoading='isLoading'
                    classNames="btn-ok"
                />
                <div class="form-group text-center">
                <span
                    type="button"
                    class="btn btn-cancel"
                    @click="close"
                    >
                    Close
                </span>
                </div>
            </footer>
        </form>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import { TextArea, TextInput, Button, } from '../Form';

export default {
    name: 'register-contest-modal',
    components: {
        TextArea, TextInput, Button,
    },
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
        contest: {
            type: Object,
            default: ()=> ({}),
        },
    },
    data() {
        return {
            isLoading: false,
        };
    },
    methods: {
        handleSubmit() {
              this.isLoading = true;
                const data = {
                    userid: this.currentUser.uid,
                    contesttype: this.contest.contesttype,
                    contestid: this.contest._id
                };
                this.$store.dispatch('REGISTER_FOR_CONTEST', data);
        },
        close() {
            this.$emit('close');
        },
    },
    computed: {
        modalContainerPanelStyle() {
            if (this.isVisible) {
                return {
                   visibility: 'visible',
                };
            }
        },
        modalStyle() {
            if (this.isVisible) {
                return {
                    transform: 'scale(1)',
                    opacity: 1,
                    WebkitTransform: 'scale(1)',
                };
            }
        },
        modalBackdropStyle() {
            if (this.isVisible) {
                return {
                    opacity: 0.7,
                    visibility: 'visible',
                };
            }
        },
        ...mapGetters(['currentUser','registerContestFeedback']),
    },
    watch: {
        registerContestFeedback(newValue) {
            this.isLoading = false;
            if (newValue.error) {
                this.$toaster.error(newValue.message || 'Whoops something went wrong');
            } else {
                this.$toaster.success(newValue.message || `You have successful Registered #${this.contest.title}, check your email, we sent you a link.`);
                this.close();
            }
        },
    },
};
</script>
<style lang="scss">
.register-contest-modal{
    max-width:450px;
    .form{
        .form-control{
            font-size:0.8rem;
        }
    }
    &.modal{
        top:40px !important;
    }
}
</style>
