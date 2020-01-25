<template>
  <Layout :pageName='problem.title'>
    <div class='problem'>
      <nav class='problem-nav'>
        <ul >
          <li >
            <router-link to='/problem-set'> Problem Set</router-link>
          </li>
          <li > <i class='uil uil-angle-right'></i> </li>
          <li >
            <router-link to='#' class='active'>  Robinson Crusoe</router-link>
          </li>
        </ul>
      </nav>
      <PrimaryCard classNames="problem-card">
        <h4 class='heading'> instructions </h4>
        <div class='content'>
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
        </div>
      </PrimaryCard>
       <CodeEditor/>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
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
      problem: {
        title: 'Robinson Crusoe',
      },
    };
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
