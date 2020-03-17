<template>
    <PrimaryCard class='code-editor__card'>
        <div class='code-editor__top'>
            <div class=' flex flex-wrap'>
                <p>Change Language:
                    <select @change='handleLanguageChange'>
                        <option selected>Javascript</option>
                        <option>Go</option>
                        <option>C#</option>
                        <option>C++</option>
                        <option>Python</option>
                        <option>Java</option>
                    </select>
                </p>
                <p>Change theme:
                <select @change="handleThemeChange">
                    <option >default</option>
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
                <Button type='outlined'> Run Code</Button>
                <Button type='filled'> Submit</Button>
            </div>
        </div>
        <textarea id='editor' name='code'>
        </textarea>
        <div class='code-editor__bottom'>
            <div class='to-right'>
                <Button type='outlined'> Run Code</Button>
                <Button type='filled'> Submit</Button>
            </div>
        </div>
    </PrimaryCard>
</template>

<script>
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
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/markdown/markdown';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Button from '@/components/Button/Button.vue';

export default {
    name: 'code-editor',
    components: {
        PrimaryCard,
        Button,
    },
    data() {
        return {
            theme: 'dracula',
            mode: 'javascript',
        };
    },
    mounted() {
        this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
            mode: this.mode,
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            lineWrapping: true,
        });
        /* eslint-disable */
        this.editor.setOption('theme', this.theme);
        this.editor.save();
    },
    methods: {
        handleThemeChange(e) {
            this.theme = e.target.value;
            this.editor.setOption('theme', this.theme);
            this.editor.save();
        },
        handleLanguageChange(e) {
            const sepcialMode = {'c++':'text/x-c++src', 'c#': 'text/x-csharp', 'java': 'text/x-java'};
            let mode = e.target.value.toLowerCase();
            this.mode = mode;
            if (sepcialMode.hasOwnProperty(mode)){
                mode = sepcialMode[mode];
            }
            this.editor.setOption('mode', mode);
            this.editor.getDoc().setValue('');
            this.editor.save();
        },
    },
};

</script>

<style lang='scss'>
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
        .to-right{
            top:15px;
        }
    }
    .code-editor{
        min-height:500px;
        border-radius:0 0 5px 5px;
        background-color: #1c2434;
    }
}
</style>
