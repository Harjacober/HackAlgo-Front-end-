<template>
  <Layout pageName="Problem Set">
    <div class="problems">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <ProblemCard :item='item'/>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <ProblemCard :item='item'/>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <ProblemCard :item='item'/>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <ProblemCard :item='item'/>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <ProblemCard :item='item'/>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <ProblemCard :item='item'/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ProblemCard from '@/components/Card/ProblemCard.vue';
import Layout from '@/components/Layout/Layout.vue';

export default {
  name: 'problem-set',
  components: {
    Layout,
    ProblemCard,
  },
  data() {
    return {
      item: {
        title: 'Robinson Crusoe',
        url: '/problem-set/es345-678-e92/solve',
        tags: ['array', 'dst', 'hashmap', 'trees'],
        dificulty: 'hard',
      },
    };
  },
};

</script>

<style lang="scss" scoped>

</style>
