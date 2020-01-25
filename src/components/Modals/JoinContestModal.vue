<template>
  <div class="modal-container">
      <div class="modal-backdrop" v-bind:style="modalBackdropStyle" ></div>
      <div class="modal-container__panel" v-bind:style="modalContainerPanelStyle" @click="close">
        <div
            class="modal compose-modal"
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
            <h5 class="text-center">Join Contest</h5>
        </header>
        <form v-on:submit.prevent="handleSubmit" class="form">
            <section class="modal-body">
                <text-area
                    placeholder="New content...."
                    required="required"
                    name="content"
                ></text-area>
            </section>
            <footer class="modal-footer">
                <button
                    type="submit"
                    class="btn btn-ok"
                >
                    Join
                </button>

                <span
                    type="button"
                    class="btn btn-cancel"
                    @click="close"
                    >
                    Close
                </span>
            </footer>
        </form>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { TextArea } from '../Form';

export default {
    name: 'join-contest-modal',
    components: {
        TextArea,
    },
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleSubmit() {
            this.$toaster.success('Successfully saved.. ');
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
    },
};
</script>
<style lang="scss">
.compose-modal{
    max-width:450px;
    .form{
        .form-control{
            font-size:0.8rem;
        }
    }
}
</style>
