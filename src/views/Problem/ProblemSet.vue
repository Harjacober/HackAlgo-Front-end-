<template>
  <Layout pageName="Problem Set">
    <div class="problems">
      <div class='flex middle content-placeholder'  v-if='!isLoading && problems.length == 0'>
        <div class='text-center content-placeholder__panel'>
          <img src='@/assets/svg/non.svg'/>
          <p class='text'> No problem to display at this time</p>
        </div>
      </div>
      <div class='flex text-center spinner-container middle'  v-if='isLoading'>
        <clip-loader  color="#ccc" size="50px"></clip-loader>
      </div>
      <div class="flex flex-wrap" v-if='!isLoading'>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"  v-for='problem in problems' v-bind:key='problem.starttime'>
          <ProblemCard :item='{
            title: problem.name,
            url: `/problem-set/${problem._id}/solve`,
            ...problem
          }'/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import ProblemCard from '@/components/Card/ProblemCard.vue';
import Layout from '@/components/Layout/Layout.vue';
import Http from '@/helpers/http';

export default {
  name: 'problem-set',
  components: {
    Layout,
    ProblemCard,
    ClipLoader,
  },
  data() {
    return {
      isLoading: true,
      problems: [],
    };
  },
  mounted() {
    this.populateProblems();
  },
  methods: {
    populateProblems(tag) {
       /* eslint-disable */
      Http.get(`/get/problemset/?page=1&limit=50${tag ? '&tags=' + tag.replace(/\-/g,' ') : ' '}`)
      .then((response) => {
        this.problems = response.data.data;
        if(tag) this.$progress.done();
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
    },
  },
  watch: {
    '$route.query.tag': function(tag) {
      this.$progress.start();
      this.populateProblems(tag);
    },
  },
};

</script>

<style lang="scss" scoped>
.spinner-container{
    min-height:300px;
    padding:200px 0;
}
</style>
