<template>
    <div class='code-editor__wrapper'>
        <PrimaryCard class='code-editor__card'>
            <div class='code-editor__top'>
                <div class=' flex flex-wrap'>
                    <p>Change Language:
                        <select @change='handleLanguageChange' :value='mode'>
                            <option selected>Javascript</option>
                            <option>Go</option>
                            <option>Php</option>
                            <option>C</option>
                            <option>C++</option>
                            <option>Python</option>
                            <option>Java</option>
                        </select>
                    </p>
                    <p>Change theme:
                    <select @change="handleThemeChange" :value='theme'>
                        <option>3024-day</option>
                        <option>3024-night</option>
                        <option>abcdef</option>
                        <option>ambiance</option>
                        <option>ayu-dark</option>
                        <option>ayu-mirage</option>
                        <option>base16-dark</option>
                        <option>base16-light</option>
                        <option>bespin</option>
                        <option>blackboard</option>
                        <option>cobalt</option>
                        <option>colorforth</option>
                        <option>darcula</option>
                        <option selected>dracula</option>
                        <option>duotone-dark</option>
                        <option>duotone-light</option>
                        <option>eclipse</option>
                        <option>elegant</option>
                        <option>erlang-dark</option>
                        <option>gruvbox-dark</option>
                        <option>hopscotch</option>
                        <option>icecoder</option>
                        <option>idea</option>
                        <option>isotope</option>
                        <option>lesser-dark</option>
                        <option>liquibyte</option>
                        <option>lucario</option>
                        <option>material</option>
                        <option>material-darker</option>
                        <option>material-palenight</option>
                        <option>material-ocean</option>
                        <option>mbo</option>
                        <option>mdn-like</option>
                        <option>midnight</option>
                        <option>monokai</option>
                        <option>moxer</option>
                        <option>neat</option>
                        <option>neo</option>
                        <option>night</option>
                        <option>nord</option>
                        <option>oceanic-next</option>
                        <option>panda-syntax</option>
                        <option>paraiso-dark</option>
                        <option>paraiso-light</option>
                        <option>pastel-on-dark</option>
                        <option>railscasts</option>
                        <option>rubyblue</option>
                        <option>seti</option>
                        <option>shadowfox</option>
                        <option>solarized dark</option>
                        <option>solarized light</option>
                        <option>the-matrix</option>
                        <option>tomorrow-night-bright</option>
                        <option>tomorrow-night-eighties</option>
                        <option>ttcn</option>
                        <option>twilight</option>
                        <option>vibrant-ink</option>
                        <option>xq-dark</option>
                        <option>xq-light</option>
                        <option>yeti</option>
                        <option>yonce</option>
                        <option>zenburn</option>
                    </select>
                    </p>
                </div>
                <div class='to-right flex'>
                    <Button
                        type='outlined'
                        :isLoading='isRunning'
                        @click='handleRunCode'
                        :disabled='isSubmitting'
                    > Run Code
                    </Button>
                    <Button
                        type='filled'
                        :isLoading='isSubmitting'
                        @click='handleSubmit'
                        :disabled='isRunning'
                    > Submit
                    </Button>
                </div>
            </div>
            <textarea id='editor' name='code'>
            </textarea>
            <div class='code-editor__bottom'>
                <!-- <div class='checkboxes'>
                    <label><input type='radio' name='stype' v-model='stype' value='sample'/> Sample testcase </label>
                    <label><input type='radio' name='stype' v-model='stype' value='test'/> Test testcase </label>
                </div> -->
                <div class='to-left editor-form-group'>
                    <label for='file'> Choose a file</label>
                    <input type='file' class='editor-form-control file' id='file'  accept="js/*" @change='onFileChange'>
                </div>
                <div class='to-right'>
                    <Button
                        type='outlined'
                        :isLoading='isRunning'
                        @click='handleRunCode'
                        :disabled='isSubmitting'
                    > Run Code
                    </Button>
                    <Button
                        type='filled'
                        :isLoading='isSubmitting'
                        @click='handleSubmit'
                        :disabled='isRunning'
                    > Submit
                    </Button>
                </div>
            </div>
        </PrimaryCard>
        <PrimaryCard v-if="showCard" classNames='code-editor__output'>
            <div class='flex text-center spinner-container middle'  v-if='isRunning || isSubmitting'>
                <div >
                    <p>Running Test cases</p>
                    <clip-loader  color="#ccc" size="50px"></clip-loader>
                </div>
            </div>
            <div v-if='hasFeedback'>
                 <h3 class='heading' :class='countStatus.failed === 0? "success" : ""'> {{ message }} </h3>
                <div class='next-problem' v-if='nextProblem && problemType == "contest" && countStatus.failed === 0 && stype === "test"'>
                    <h2>Proceed to the next problem {{ nextProblem.name }}</h2>
                    <LinkButton type='white' :to='problemLink' allowPageLoad>NEXT PROBLEM </LinkButton>
                </div>
                <div class='feedback'>
                  <div class='case' v-for='(res, index) in result' v-bind:key='index' :class='res.passed ? "error" : "success"'>
                    <h3>
                        Testcase {{ index }}
                        <span class='badge success' v-if='res.passed'> Passed </span>
                        <span class='badge error' v-if='!res.passed'> Failed </span>
                    </h3>
                    <p class='output'>Output: {{res.output}}</p>
                    <p class='log'>{{res.errput}}</p>
                  </div>
                </div>
            </div>
        </PrimaryCard>
    </div>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/3024-day.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/theme/abcdef.css';
import 'codemirror/theme/ambiance.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/theme/ayu-mirage.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/theme/bespin.css';
import 'codemirror/theme/base16-light.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/colorforth.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/duotone-dark.css';
import 'codemirror/theme/duotone-light.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/elegant.css';
import 'codemirror/theme/erlang-dark.css';
import 'codemirror/theme/gruvbox-dark.css';
import 'codemirror/theme/hopscotch.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/theme/isotope.css';
import 'codemirror/theme/lesser-dark.css';
import 'codemirror/theme/liquibyte.css';
import 'codemirror/theme/lucario.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/theme/mbo.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/moxer.css';
import 'codemirror/theme/neat.css';
import 'codemirror/theme/neo.css';
import 'codemirror/theme/night.css';
import 'codemirror/theme/nord.css';
import 'codemirror/theme/oceanic-next.css';
import 'codemirror/theme/panda-syntax.css';
import 'codemirror/theme/paraiso-dark.css';
import 'codemirror/theme/paraiso-light.css';
import 'codemirror/theme/pastel-on-dark.css';
import 'codemirror/theme/railscasts.css';
import 'codemirror/theme/rubyblue.css';
import 'codemirror/theme/seti.css';
import 'codemirror/theme/shadowfox.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/tomorrow-night-bright.css';
import 'codemirror/theme/tomorrow-night-eighties.css';
import 'codemirror/theme/ttcn.css';
import 'codemirror/theme/twilight.css';
import 'codemirror/theme/vibrant-ink.css';
import 'codemirror/theme/xq-dark.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/theme/yeti.css';
import 'codemirror/theme/idea.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/theme/yonce.css';
import 'codemirror/theme/zenburn.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/go/go';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/fold/markdown-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/php/php';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/markdown/markdown';
import Http from '@/helpers/http';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Button from '@/components/Button/Button.vue';
import LinkButton from '@/components/Button/LinkButton.vue';


export default {
    name: 'code-editor',
    components: {
        PrimaryCard,
        Button,
        LinkButton,
        ClipLoader,
    },
    props: ['problemId', 'userId', 'ctype', 'problemType', 'contestId', 'nextProblem'],
    data() {
        return {
            theme: 'dracula',
            mode: 'Javascript',
            isRunning: false,
            hasFeedback: false,
            hasError: false,
            feedback: '',
            showCard: false,
            codefile: null,
            submitted: false,
            isSubmitting: false,
            stype: 'sample',
            message: '',
            result: [],
            countStatus: { passed: 0, failed: 0 },
            /* eslint-disable */
            specialMode: {
                'C++':'text/x-c++src', 
                'C': 'text/x-csrc', 
                'Java': 'text/x-java',
            },
        };
    },
    mounted() {
        this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
            mode: this.mode.toLowerCase(),
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            lineWrapping: true,
        });

        if (this.userId && localStorage.getItem(this.userId)) {
            const storage = JSON.parse(localStorage.getItem(this.userId));
            this.mode = storage.mode;
            this.theme = storage.theme;
        }
        /* eslint-disable */
        this.editor.setOption('theme', this.theme);
        this.editor.save();
    },
    computed: {
        problemLink() {
            /* eslint-disable */
            return `/contests/${this.ctype}/${this.contestId}/dashboard/${this.nextProblem._id}/solve`;
        },
    },
    methods: {
        handleThemeChange(e) {
            this.theme = e.target.value;
            this.editor.setOption('theme', this.theme);
            this.editor.save();

            if(this.userId)
            localStorage.setItem(this.userId, JSON.stringify({mode: this.mode, theme: this.theme}));
        },
        handleLanguageChange(e) {
            let mode = e.target.value
            this.mode = mode;
            if (this.specialMode.hasOwnProperty(mode)){
                mode = this.specialMode[mode];
            }
            this.editor.setOption('mode', mode.toLowerCase());
            this.editor.getDoc().setValue('');
            this.editor.save();

            if(this.userId)
            localStorage.setItem(this.userId, JSON.stringify({mode: this.mode, theme: this.theme}));
        },
        handleRunCode() {
            this.isRunning = true;
            this.stype = 'sample';
            this.sendRequest();
        },
        sendRequest() {
            this.showCard = true;
            this.hasFeedback = false;
            const langs = {
                'python': 'py', 
                'javascript': 'js', 
                'go': 'go',
                'c': 'c',
                'php': 'php',
                'c++': 'cpp',
            };
            const formData = new FormData(); 

            const data = {
                prblmid: this.problemId,
                codecontent: this.editor.getValue(),
                lang: langs[this.mode.toLowerCase()],
                stype: this.stype,
                codefile: this.codefile || '',
            };
            if (this.problemType === 'contest') {
                data.ctype = this.ctype || '';
                data.contestid = this.contestId || '';
            }

            for (var i in data ) {
                formData.append(i, data[i]);
            }
            const url = (this.problemType == 'contest')? '/contest/run/code/' : '/run/code/';
            Http().post(url, formData, 
            {
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then((response) => {
                this.hasFeedback = true;
                this.result = response.data.data[0].result
                this.countStatus.failed = 0;
                this.countStatus.passed = 0;
                for(let i in this.result){
                    if( this.result[i].passed === true){
                        this.countStatus.passed += 1;
                    } else {
                        this.countStatus.failed += 1;
                    }
                }
                this.message = (this.countStatus.failed !== 0)? `${this.countStatus.passed} passed and ${this.countStatus.failed} failed.` : 'Successfully passed all test cases. kudoz 👍';
            })
            .catch((error) => {
                this.hasFeedback = true;
                this.countStatus.failed =1;
                this.message = 'An error occurred';
                this.feedback = error.response.data.message || "Whoops!! something went wrong.";
            })
            .finally(() => {
                this.isRunning = false;
                this.isSubmitting = false;
                window.scrollTo(1500, 1500);
            });
        },
        handleSubmit() {
            this.isSubmitting = true;
            this.stype = 'test';
            this.sendRequest();
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.codefile = files[0];
        },
    },
    watch: {
        userId(value){
            
            if (value && localStorage.getItem(value)) {
                const storage = JSON.parse(localStorage.getItem(value));
                this.mode = storage.mode;
                this.theme = storage.theme;
            }
            /* eslint-disable */
            const mode = this.specialMode.hasOwnProperty(this.mode) ? this.specialMode[mode] : this.mode;
            this.editor.setOption('mode', mode.toLowerCase());
            this.editor.setOption('theme', this.theme);
            this.editor.save();
        },
    },
};

</script>

<style lang='scss'>
.code-editor__wrapper {
    .spinner-container{
        padding:20px;
    }
    .code-editor__output{
        min-height: 50px;
        padding:40px 0;
        .heading{
            padding:0 15px;
            font-size:1.2rem;
            &.success{
                color:$secondary-color;
                font-weight:700;
            }
        }
    }
    .next-problem {
        background: $secondary-color;
        padding:20px;
        color:#fff;
        margin:10px;
        border-radius:10px;
    }
    .feedback {
        padding: 20px;
        font-weight:500;
        font-size:0.8rem;
        line-height: 2rem;
    
        .case{
            padding:20px 10px;
            border-radius:5px;
            margin:5px 0;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.07);
            .badge.error{
                background:$red;
                color:#fff;
                padding:4px 20px;
                border-radius:5px;
            }
            .badge.success{
                background: $secondary-color;
                color:#fff;
                padding:4px 20px;
                border-radius:5px;
            }
        }
    }
}
.CodeMirror {
    border: 1px solid black; 
    font-size:1.14rem;
    height:600px !important;
}
.code-editor__card{
    margin-top:50px;
    .code-editor__top,.code-editor__bottom{
        min-height: 80px;
        background:#fff;
        padding:10px;
        position:relative;
        p{
            padding:20px;
            font-weight:700;
            margin:5px;
            select{
                padding:10px;
                border-radius:5px;
                margin-left:10px;
                font-size:0.9rem;
                font-family: $font-family-muli;
            }
        }

        .btn{
            margin:5px;
            font-weight:700;
            text-transform:uppercase;
        }
        .to-right{
            top:30px;
            @include MQ($breakpoint-lg){
                position: relative;
                top:0;
            }
        }
    }
    .code-editor__bottom{
        .editor-form-group {
            padding:10px;
            label {
                display:block;
                font-weight:600;
                padding:5px 0;
            }
            .editor-form-control{
                outline:none;
                font-family:$primary-font-family;
            }
            @include MQ($breakpoint-lg){
                position: relative;
            }
        }
        .checkboxes{
            padding:10px;
            label{
                padding:15px;
                display: inline-block;
            }
        }
        .to-right{
            top:15px;
             @include MQ($breakpoint-lg){
                position: relative;
                top:0;
            }
        }
    }
    .code-editor{
        min-height:500px;
        border-radius:0 0 5px 5px;
        background-color: #1c2434;
    }
}

</style>
