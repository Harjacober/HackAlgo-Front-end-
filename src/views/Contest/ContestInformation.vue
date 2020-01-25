<template>
  <Layout :pageName="contest.title">
    <div class="contest-info">
      <nav class='contest-info__nav'>
        <ul >
          <li >
            <router-link to='/problem-set'> Contests </router-link>
          </li>
          <li > <i class='uil uil-angle-right'></i> </li>
          <li >
            <router-link to='#' class='active'> Ruby Gen Contest 2020 </router-link>
          </li>
        </ul>
      </nav>
      <PrimaryCard class="contest-info__card">
        <h4 class='heading'> About </h4>
        <div class='flex flex-wrap info-top'>
          <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div class='date-info info-card'>
              <h3 class='heading'> Scheduled date </h3>
              <h1 lass='date'> Dec 15, 2019 06:01 AM WAT </h1>
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div class='duration-info info-card'>
              <h3 class='heading'> Duration </h3>
              <h1 class='duration'> 5hours </h1>
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div class='duration info-card'>
              <h3 class='heading'> Want to participate? </h3>
              <Button type='secondary'> Join </Button>
            </div>
          </div>
        </div>
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
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout.vue';
import Button from '@/components/Button/Button.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';

export default {
  name: 'contests-information',
  components: {
    Layout,
    Button,
    PrimaryCard,
  },
  data() {
    return {
      contest: {
        title: 'Ruby Gen Contest 2020',
      },
    };
  },
};

</script>

<style lang="scss" scoped>
.contest-info{
  min-height:300px;
  .contest-info__nav{
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
  .contest-info__card{
    min-height: 500px;
    padding:20px 30px;
    .info-top{
      padding:20px;
      border:1px solid #ddd;
      margin:10px 0;
      border-radius:5px;
    }
    .heading{
      font-size:1rem;
      font-weight:500;
      letter-spacing: 0.03rem;
      text-transform: uppercase;
      padding:15px 0;
    }
    .content{
      padding:20px 0;
    }
  }
}
</style>
