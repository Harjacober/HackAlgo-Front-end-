<template>
  <Layout  headerTitle="Robinson Crusoe" headerTimer="50Min">
    <PrimaryCard classNames="contest-dasboard__card flex flex-wrap">
        <div class='w-full md:w-1/3'>
          <div class='problem-instruction'>
            <div class='content'>
              <h3 class='title'> Robinson Crusoe </h3>
              <h4 class='heading'> instructions </h4>
              Robinson Crusoe decides to explore his isle. On a sheet of paper he plans the following process.<br>

              His hut has coordinates origin = [0, 0]. From that origin he walks a given distance d on a line that has a given angle ang with the x-axis. He gets to a point A. (Angles are measured with respect to the x-axis)<br><br>

              From that point A he walks the distance d multiplied by a constant distmult on a line that has the angle ang multiplied by a constant angmult and so on and on.<br><br>

              We have d0 = d, ang0 = ang; then d1 = d * distmult, ang1 = ang * angmult etc ...<br><br>

              Let us suppose he follows this process n times. What are the coordinates lastx, lasty of the last point?<br><br>

              The function crusoe has parameters;<br>

              n : numbers of steps in the process<br>
              d : initial chosen distance<br>
              ang : initial chosen angle in degrees<br>
              distmult : constant multiplier of the previous distance<br>
              angmult : constant multiplier of the previous angle<br>

               n : numbers of steps in the process<br>
              d : initial chosen distance<br>
              ang : initial chosen angle in degrees<br>
              distmult : constant multiplier of the previous distance<br>
              angmult : constant multiplier of the previous angle<br>
          </div>
        </div>
      </div>
      <div class='w-full md:w-2/3'>
        <CodeEditor/>
      </div>
    </PrimaryCard>
  </Layout>
</template>

<script>
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
