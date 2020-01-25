<template>
  <Layout pageName="Contests">
    <div class="contests">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
          <PrimaryCard classNames='contest-card'>
            <h3 class='title'> Futa Supercoder club </h3>
            <p class='summary'> We've run 919 contests with 15083 winners to date. Join the winner's </p>
            <p class='time'> January , 15th, 2020 - 4hrs </p>
            <LinkButton type="secondary" to='/contests/slug'> Join </LinkButton>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
          <PrimaryCard classNames='contest-card'>
            <h3 class='title'> Futa Supercoder club </h3>
            <p class='summary'> We've run 919 contests with 15083 winners to date. Join the winner's </p>
            <p class='time'> January , 15th, 2020 - 4hrs </p>
            <LinkButton type="secondary" to='/contests/slug'> Join </LinkButton>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
          <PrimaryCard classNames='contest-card'>
            <h3 class='title'> Futa Supercoder club </h3>
            <p class='summary'> We've run 919 contests with 15083 winners to date. Join the winner's </p>
            <p class='time'> January , 15th, 2020 - 4hrs </p>
            <LinkButton type="secondary" to='/contests/slug'> Join </LinkButton>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
          <PrimaryCard classNames='contest-card'>
            <h3 class='title'> Futa Supercoder club </h3>
            <p class='summary'> We've run 919 contests with 15083 winners to date. Join the winner's </p>
            <p class='time'> January , 15th, 2020 - 4hrs </p>
            <LinkButton type="secondary" to='/contests/slug'> Join </LinkButton>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
          <PrimaryCard classNames='contest-card'>
            <h3 class='title'> Futa Supercoder club </h3>
            <p class='summary'> We've run 919 contests with 15083 winners to date. Join the winner's </p>
            <p class='time'> January , 15th, 2020 - 4hrs </p>
            <LinkButton type="secondary" to='/contests/slug'> Join </LinkButton>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
          <PrimaryCard classNames='contest-card'>
            <h3 class='title'> Futa Supercoder club </h3>
            <p class='summary'> We've run 919 contests with 15083 winners to date. Join the winner's </p>
            <p class='time'> January , 15th, 2020 - 4hrs </p>
            <LinkButton type="secondary" to='/contests/slug'> Join </LinkButton>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
          <PrimaryCard classNames='contest-card'>
            <h3 class='title'> Futa Supercoder club </h3>
            <p class='summary'> We've run 919 contests with 15083 winners to date. Join the winner's </p>
            <p class='time'> January , 15th, 2020 - 4hrs </p>
            <LinkButton type="secondary" to='/contests/slug'> Join </LinkButton>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
          <PrimaryCard classNames='contest-card'>
            <h3 class='title'> Futa Supercoder club </h3>
            <p class='summary'> We've run 919 contests with 15083 winners to date. Join the winner's </p>
            <p class='time'> January , 15th, 2020 - 4hrs </p>
            <LinkButton type="secondary" to='/contests/slug'> Join </LinkButton>
          </PrimaryCard>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Layout from '@/components/Layout/Layout.vue';
import LinkButton from '@/components/Button/LinkButton.vue';

export default {
  name: 'contests',
  components: {
    Layout,
    PrimaryCard,
    LinkButton,
  },
};

</script>

<style lang="scss" scoped>
.contest-card{
  padding:25px 20px;
  .title{
    font-size: 1.2rem;
    color:#000;
    font-weight:500;
  }
  .summary{
    padding:30px 0;
    padding-top:10px;
    font-size:0.9rem;
    color:#111;
  }
  .time{
    font-size:0.7rem;
    font-weight:500;
    letter-spacing: 0.01rem;
    margin-bottom: 10px;
    position: relative;
    color:rgb(92, 89, 89);
    &:after{
      content:'';
      width:40px;
      height:3px;
      background: $secondary-color;
      top:-6px;
      left:0;
      position: absolute;

    }
  }
}
</style>
