<template>
  <Layout pageName="Dashboard">
    <div class="dashboard">
      <div class="flex flex-wrap">
        <div class="w-1/2 ">
          <PrimaryCard classNames='green-card flex flex-wrap'>
            <div class="w-1/2 flex middle">
              <img src="@/assets/svg/contests-x.svg" class="img">
            </div>
            <div class="w-1/2 content">
              <h3 class="heading"> Contests </h3>
              <p class="text">We've run 919 contests with 15083 winners to date. Join the winner's circle! Publish your project to enter one of our current contests for your chance to win a ...</p>
              <LinkButton to="/contests"> Get Started </LinkButton>
            </div>
          </PrimaryCard>
        </div>
        <div class="w-1/2 ">
           <PrimaryCard classNames='flex flex-wrap'>
            <div class="w-1/2 flex middle">
              <img src="@/assets/svg/contests-xx.svg" class="img">
            </div>
            <div class="w-1/2 content">
              <h3 class="heading"> Practice problems </h3>
              <p class="text">We've run 919 contests with 15083 winners to date. Join the winner's circle! Publish your project to enter one of our current contests for your chance to win a ...</p>
              <LinkButton to="/contests"> Get Started </LinkButton>
            </div>
          </PrimaryCard>
        </div>
      </div>
       <div class="flex flex-wrap">
        <div class="w-1/2 ">
          <PrimaryCard classNames=''>

          </PrimaryCard>
        </div>
        <div class="w-1/2 ">
          <PrimaryCard classNames=''>

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

export default {
  name: 'dashboard',
  components: {
    Layout, PrimaryCard, LinkButton,
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
}
</style>
