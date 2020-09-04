<template>
  <Layout pageName="Dashboard">
    <div class="dashboard">
      <div class="flex flex-wrap">
        <div class="w-full md:w-full lg:w-1/2 xl:w-1/2">
          <PrimaryCard classNames='green-card flex flex-wrap'>
            <div class="w-full md:w-full lg:w-1/2 xl:w-1/2 flex middle">
              <img src="@/assets/svg/contests-x.svg" class="img">
            </div>
            <div class="w-full md:w-full lg:w-1/2 xl:w-1/2 content">
              <h3 class="heading"> Contests </h3>
              <p class="text">We've run 919 contests with 15083 winners to date. Join the winner's circle! Publish your project to enter one of our current contests for your chance to win a ...</p>
              <LinkButton to="/contests" type='white'> Get Started </LinkButton>
            </div>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-full lg:w-1/2 xl:w-1/2 ">
           <PrimaryCard classNames='flex flex-wrap'>
            <div class="w-full md:w-full lg:w-1/2 xl:w-1/2 flex middle">
              <img src="@/assets/svg/contests-xx.svg" class="img">
            </div>
            <div class="w-full md:w-full lg:w-1/2 xl:w-1/2 content">
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
            <div class='flex text-center middle card-placeholder'  v-if='!isLoadingTag && tags.length == 0'>
              <img src='@/assets/svg/non.svg'/>
            </div>
            <div class='flex text-center spinner-container middle'  v-if='isLoadingTag'>
                <clip-loader  color="#ccc" size="50px"></clip-loader>
             </div>
            <ul class='list' v-if='!isLoadingTag'>
              <List
                v-for='tag in tags'
                v-bind:key='tag'
                :item='{
                  tag: true,
                  text: tag,
                  url: `/problem-set?tag=${tag.replace(/\s/g,"-")}`,
              }'/>
            </ul>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <PrimaryCard classNames='dasboard-card'>
             <h3 class="heading"> Upcoming Contests </h3>
             <div class='flex text-center middle card-placeholder'  v-if='!isLoadingContest && contests.length == 0'>
              <div>
                <img src='@/assets/svg/non.svg'/>
                <p class='text'>No contest to display at this time </p>
              </div>
            </div>
             <div class='flex text-center spinner-container middle'  v-if='isLoadingContest'>
                <clip-loader  color="#ccc" size="50px"></clip-loader>
             </div>
              <ul class='list' v-if='!isLoadingContest'>
                <List
                  v-for='contest in contests'
                  v-bind:key='contest._id'
                  :item='{
                    contest: true,
                    text: contest.title,
                    url: `/contests/${contest._id}`,
                    ...contest
                  }'
                />
              </ul>
          </PrimaryCard>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import Layout from '@/components/Layout/Layout.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import LinkButton from '@/components/Button/LinkButton.vue';
import List from '@/components/List/List.vue';
import Http from '@/helpers/http';

export default {
  name: 'dashboard',
  components: {
    Layout, PrimaryCard, LinkButton, List, ClipLoader,
  },
  data() {
    return {
      contests: [],
      tags: [],
      isLoadingContest: true,
      isLoadingTag: true,
    };
  },
  mounted() {
    this.populateTags();
    this.populateContests();
  },
  methods: {
    populateTags() {
      Http().get('/get/problemtags/')
      .then((response) => {
         this.tags = response.data.data.slice(0, 6);
      })
      .finally(() => {
        this.isLoadingTag = false;
      });
    },
    populateContests() {
      Http().get('/contest/many/TYPEA/active/?page=1&limit=6')
      .then((response) => {
        this.contests = response.data.data.slice(0, 6);
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        this.isLoadingContest = false;
      });
    },
  },
};

</script>

<style lang="scss">
.dashboard {
  .primary-card{
    min-height:300px;
    padding:30px;
    .img{
      width:100%;
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
  .card-placeholder{
    width:100%;
    min-height: 200px;
    img{
      width:100%;
      height:200px;
      margin:40px 0;
    }
    .text{
      color:#555;
      font-size:0.8rem;
    }
  }
  .spinner-container{
    padding:110px 30px;
  }
}
</style>
