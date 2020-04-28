<template>
  <Layout>
    <PrimaryCard classNames="contest-dasboard__card">
      <h3 class='heading'> Problem Set</h3>
       <div class='problem-set flex flex-wrap'>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2" v-for="(problem, index) in currentContest.contest.problems" v-bind:key="index">
           <ProblemCard :item='{
            title: problem.name,
            url: `/contests/${$route.params.type}/${$route.params.slug}/dashboard/${problem._id}/solve`,
            ...problem
          }'/>
        </div>
       </div>
      <!-- <div class='text-center button-wrapper'>
       <Button type='secondary' @click='submitContest'> Submit Solution </Button>
      </div> -->
    </PrimaryCard>
  </Layout>
</template>

<script>
import { mapGetters } from 'vuex';
import Layout from './components/Layout.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import ProblemCard from '@/components/Card/ProblemCard.vue';
import Button from '@/components/Button/Button.vue';
import Http from '@/helpers/http';

export default {
  name: 'contest-dasboard',
  components: {
    Layout,
    PrimaryCard,
    ProblemCard,
  },
  data() {
    return {
      timeUp: false,
    };
  },
  computed: {
    ...mapGetters(['currentContest']),
  },
  methods: {
    submitContest(e) {
      console.log(this.currentContest.contest);
    },
  },
};
</script>

<style lang="scss" scoped>

.contest-dasboard__card{
  min-height: 700px;
  margin:0 30px;
  .heading{
    font-size:1.4rem;
    padding:10px;
    font-weight:500;
  }
  .button-wrapper{
    margin:40px 0;
    .btn{
      font-size:1.2rem;
    }
  }
  .problem-card{
    border:1px solid $secondary-color;
  }
}
</style>
