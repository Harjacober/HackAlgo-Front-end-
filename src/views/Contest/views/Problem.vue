<template>
  <Layout  headerTitle="Robinson Crusoe">
    <PrimaryCard classNames="contest-dasboard__card flex flex-wrap">
        <div class='w-full md:w-1/3'>
          <div class='problem-instruction'>
            <div class='content'>
              <h3 class='title'> {{problem.name}} </h3>
              <h4 class='heading'> Problem Statement </h4>
              <p v-html="problemStatement"/>
          </div>
        </div>
      </div>
      <div class='w-full md:w-2/3'>
        <CodeEditor
          :problemId='problem._id'
          :userId='currentUser.uid'
          :ctype='$route.params.type'
          problemType='contest'
          :contestId='$route.params.slug'
          :nextProblem='nextProblem'
        />
      </div>
    </PrimaryCard>
  </Layout>
</template>

<script>
import { mapGetters } from 'vuex';
import Marked from 'marked';
import Layout from './components/Layout.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Button from '@/components/Button/Button.vue';
import CodeEditor from '@/components/CodeEditor/CodeEditor.vue';

export default {
  name: 'contest-problem',
  components: {
    Layout,
    PrimaryCard,
    CodeEditor,
  },
  data() {
    return {
      problem: {},
      nextProblem: null,
    };
  },
  computed: {
    ...mapGetters(['currentContest', 'currentUser']),
    problemStatement() {
      if (!this.problem.problemstatement) return '';
      const md = new Marked.Renderer();
      return Marked(this.problem.problemstatement, { renderer: md });
    },
  },
  watch: {
    currentContest() {
      /* eslint-disable */
      this.problem = this.currentContest.contest.problems.filter(contest => contest._id == this.$route.params.problem_slug)[0];
      const index = this.currentContest.contest.problems.findIndex(prob => prob._id == this.problem._id);
      this.nextProblem = this.currentContest.contest.problems[index+1] || false;
    },
  },
};
</script>

<style lang="scss" scoped>

.contest-dasboard__card{
  min-height: 700px;
  margin:0;
  .primary-card{
    margin:0;
  }
  .problem-instruction{
    min-height: 500px;
    padding:20px;
    height:100vh;
    overflow-y: scroll;
    padding-bottom:200px;
    .heading{
      font-size:0.9rem;
      font-weight:500;
      letter-spacing: 0.03rem;
      text-transform: uppercase;
      padding:15px 0;
    }
    .title{
      padding:10px 0;
      font-size:1.4rem;
      font-weight:500;
    }
  }
}
</style>
