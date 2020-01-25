<template>
  <Layout pageName="Dashboard">
    <div class="dashboard">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <PrimaryCard classNames='green-card flex flex-wrap'>
            <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex middle">
              <img src="@/assets/svg/contests-x.svg" class="img">
            </div>
            <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 content">
              <h3 class="heading"> Contests </h3>
              <p class="text">We've run 919 contests with 15083 winners to date. Join the winner's circle! Publish your project to enter one of our current contests for your chance to win a ...</p>
              <LinkButton to="/contests" type='white'> Get Started </LinkButton>
            </div>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ">
           <PrimaryCard classNames='flex flex-wrap'>
            <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex middle">
              <img src="@/assets/svg/contests-xx.svg" class="img">
            </div>
            <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 content">
              <h3 class="heading"> Practice problems </h3>
              <p class="text">We've run 919 contests with 15083 winners to date. Join the winner's circle! Publish your project to enter one of our current contests for your chance to win a ...</p>
              <LinkButton to="/problem-set" type='secondary'> Get Started </LinkButton>
            </div>
          </PrimaryCard>
        </div>
      </div>
       <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <PrimaryCard classNames='dasboard-card'>
            <h3 class="heading"> Explore </h3>
            <ul class='list'>
              <List :item='{
                  tag: true,
                  text: "Data Struture",
                  url: "#"
              }'/>
              <List :item='{
                  tag: true,
                  text: "Tress",
                  url: "#"
              }'/>
              <List :item='{
                  tag: true,
                  text: "Mathematical Modeling",
                  url: "#"
              }'/>
              <List :item='{
                  tag: true,
                  text: "Heaps & Hashmaps",
                  url: "#"
              }'/>
            </ul>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <PrimaryCard classNames='dasboard-card'>
             <h3 class="heading"> Upcoming Contests </h3>
              <ul class='list'>
                <List :item='{
                  contest: true,
                  text: "Google uplabs challenge",
                  date: "January , 15th, 2020 - 4hrs",
                  url: "#"
                }'/>
                <List :item='{
                  contest: true,
                  text: "Futa codemental club 2020",
                  date: "January , 15th, 2020 - 4hrs",
                  url: "#"
                }'/>
                <List :item='{
                  contest: true,
                  text: "Aganifa challenge",
                  date: "January , 15th, 2020 - 4hrs",
                  url: "#"
                }'/>
                <List :item='{
                  contest: true,
                  text: "hashmap 2020",
                  date: "January , 15th, 2020 - 4hrs",
                  url: "#"
                }'/>
              </ul>
          </PrimaryCard>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import LinkButton from '@/components/Button/LinkButton.vue';
import List from '@/components/List/List.vue';

export default {
  name: 'dashboard',
  components: {
    Layout, PrimaryCard, LinkButton, List,
  },
};

</script>

<style lang="scss">
.dashboard {
  .primary-card{
    min-height:300px;
    padding:30px;
    .img{
      width:auto;
      height:auto;
    }
    .content{
      padding:20px 0;
    }
    .heading{
      color:#000;
      font-weight:700;
    }
    .text{
      color:#000;
      font-size:0.8rem;
      font-weight:400;
      line-height:1.6rem;
      padding:0 5px;
      padding-bottom: 10px;
    }
  }
  .green-card{
    background:$secondary-color;
    .heading{
      color:#fff;
    }
    .text{
      color:#fff;
    }
  }

  .dasboard-card{
    min-height: 450px;
    .heading{
      font-weight:600;
      font-size:1.3rem
    }
  }
}
</style>
