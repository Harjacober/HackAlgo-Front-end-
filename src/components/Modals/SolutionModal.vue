<template>
  <div class="modal-container">
      <div class="modal-backdrop" v-bind:style="modalBackdropStyle" ></div>
      <div class="modal-container__panel" v-bind:style="modalContainerPanelStyle" @click="close">
        <div
            class="modal solution-modal"
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
            <h5 class="text-center">{{ submission.name }} Solution</h5>
        </header>
        <div class='code-container'>
            <div class='code-container__panel'>
                <textarea id='code' name='code'/>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/go/go';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';

export default {
    name: 'solution-modal',
    components: {},
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
        submission: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            /* eslint-disable */
            theme: 'dracula',
            specialMode: {
                'c++':'text/x-c++src', 
                'c#': 'text/x-csharp', 
                'java': 'text/x-java',
                'py': 'python',
                'js': 'javascript',
            },
        };
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
    mounted() {
        
        this.code = CodeMirror.fromTextArea(document.getElementById('code'), {
            mode: 'python',
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            lineWrapping: true,
            readOnly: 'nocursor',
        });

        /* eslint-disable */
        this.code.setOption('theme', this.theme);
        this.code.save();
    },
    computed: {
        modalContainerPanelStyle() {
            if (this.isVisible) {
                return {
                   visibility: 'visible',
                };
            }
            return null;
        },
        modalStyle() {
            if (this.isVisible) {
                return {
                    transform: 'scale(1)',
                    opacity: 1,
                    WebkitTransform: 'scale(1)',
                };
            }

            return null;
        },
        modalBackdropStyle() {
            if (this.isVisible) {
                return {
                    opacity: 0.7,
                    visibility: 'visible',
                };
            }
            return null;
        },
    },
    watch: {
        submission(value) {
            const lang = value.lang.toLowerCase();
            const mode = this.specialMode.hasOwnProperty(lang) ? this.specialMode[lang] : lang;
            this.code.setOption('mode', mode.toLowerCase());
            this.code.setOption('theme', this.theme);
            this.code.setValue(value.codecontent);
            this.code.save();
        },
    },
};
</script>
<style lang="scss">
.solution-modal{
    max-width:500px;
    &.modal{
        top:40px !important;
    }
    .code-container {
        padding-bottom: 50px;
        width:100%;
        position: relative;
        right:0px;
        textarea {
            min-height: 100px !important;
        }
    }
    .code-container__panel{
        height:500px;
        overflow-y: scroll;
    }
}
</style>
