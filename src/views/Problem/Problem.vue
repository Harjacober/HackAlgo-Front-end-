<template>
  <Layout :pageName='problem.name'>
    <div class='problem'>
      <nav class='problem-nav'>
        <ul >
          <li >
            <router-link to='/problem-set'> Problem Set</router-link>
          </li>
          <li > <i class='uil uil-angle-right'></i> </li>
          <li >
            <router-link :to='$route.path' class='active'> {{ problem.name }} </router-link>
          </li>
        </ul>
      </nav>
      <PrimaryCard classNames="problem-card">
        <h4 class='heading'> Problem Statement </h4>
        <div class='content content-desc' v-html="problemStatement"/>
      </PrimaryCard>
       <CodeEditor :problemId='problemId' :userId='currentUser.uid'/>
    </div>
  </Layout>
</template>

<script>
import { mapGetters } from 'vuex';
import Marked from 'marked';
import Layout from '@/components/Layout/Layout.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Http from '@/helpers/http';
import CodeEditor from '@/components/CodeEditor/CodeEditor.vue';

export default {
  name: 'problem',
  components: {
    Layout,
    PrimaryCard,
    CodeEditor,
  },
  data() {
    return {
      problem: {},
      problemId: '',
    };
  },
   mounted() {
    this.problemId = this.$route.params.slug;
    this.populateProblem();
  },
  computed: {
    ...mapGetters(['currentUser']),
    problemStatement() {
      if (!this.problem.problemstatement) return '';
      const md = new Marked.Renderer();
      return Marked(this.problem.problemstatement, { renderer: md });
    },
  },
  methods: {
    populateProblem() {
      Http.get(`/get/problem/?prblmid=${this.$route.params.slug}`)
      .then((response) => {
        this.problem = response.data.data;
      })
      .catch(error => this.$router.push('/dashboard'))
      .finally(() => {
        this.isLoading = false;
      });
    },
  },
};

</script>

<style lang="scss" scoped>
.problem{
  min-height:300px;
  .problem-nav{
    padding-bottom:5px;
    li{
      display:inline-block;
      padding:0 5px ;
      font-weight:400;
      font-size:0.7rem;
      &:nth-child(2){
        padding:0 1px;
        i{
          font-size:1.1rem;
          position: relative;
          opacity:0.6;
        }
      }
      a{
        display:block;
        color:#000;
        &.active{
          color:$secondary-color;
          font-weight:500;
        }
      }
    }
  }
  .problem-card{
    min-height: 500px;
    padding:20px;
    .heading{
      font-size:1rem;
      font-weight:500;
      letter-spacing: 0.03rem;
      text-transform: uppercase;
      padding:15px 0;
    }
  }
}
</style>
