<template>
  <Layout headerTitle="Robinson Crusoe" headerTimer="50Min">
    <PrimaryCard classNames="contest-dasboard__card">
      <h3 class='heading'> Problem Set</h3>
       <div class='problem-set flex flex-wrap'>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
           <ProblemCard :item='item'/>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
           <ProblemCard :item='item'/>
        </div>
       </div>
      <div class='text-center button-wrapper'>
       <Button type='secondary'> Submit Solution </Button>
      </div>
    </PrimaryCard>
  </Layout>
</template>

<script>
import Layout from './components/Layout.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import ProblemCard from '@/components/Card/ProblemCard.vue';
import Button from '@/components/Button/Button.vue';

export default {
  name: 'contest-dasboard',
  components: {
    Layout,
    PrimaryCard,
    ProblemCard,
    Button,
  },
  data() {
    return {
      item: {
        title: 'Robinson Crusoe',
        url: '/contests/ghsusis-uwuwjs8-ksksos/dashboard/ghsusis-uwuwjs8-ksksos/solve',
        tags: ['array', 'dst', 'hashmap', 'trees'],
        dificulty: 'hard',
      },
    };
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
