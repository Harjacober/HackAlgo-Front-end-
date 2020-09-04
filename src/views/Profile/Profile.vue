<template>
  <Layout pageName="Profile">
    <div class="profile">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
          <PrimaryCard classNames='profile-card__left text-center profile-card'>
            <img src='/assets/myAvatar.png' class='avatar'/>
            <div class='content'>
              <h2 class='fullname text-center'> {{ user.name }} </h2>
              <h3 class='username'> <i class='uil uil-at'></i> {{ user.username }} </h3>
              <p class='email'><i class='uil uil-envelope'></i> {{ user.email }}</p>
            </div>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-3/4 xl:w-3/4">
          <PrimaryCard classNames='profile-card__right profile-card'>
            <div class='division'>
              <h3 class='heading'>Overview</h3>
              <div class='content flex flex-wrap'>
                  <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 stats-card__wrapper">
                      <PrimaryCard classNames='stats-card text-center'>
                        <p class='stats-title'>Solved Challenges</p>
                        <h3 class='stats-number'> {{ Object.keys(user.solvedProblems).length }} </h3>
                      </PrimaryCard>
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 stats-card__wrapper">
                    <PrimaryCard classNames='stats-card text-center'>
                      <p class='stats-title'>Contests</p>
                      <h3 class='stats-number'> {{ contests.length }} </h3>
                    </PrimaryCard>
                  </div>
              </div>
            </div>
            <div class='division '>
              <h3 class='heading'>Problem Set</h3>
              <div class='content'>
                  <div class='flex text-center middle placeholder'  v-if='!isLoadingUser && user.solvedProblems.length == 0'>
                    <div>
                      <img src='@/assets/svg/non.svg'/>
                      <p class='text'>No problem to display at this time </p>
                    </div>
                  </div>
                  <div class='flex text-center spinner-container middle'  v-if='isLoadingUser'>
                    <clip-loader  color="#ccc" size="50px"></clip-loader>
                  </div>
                  <ul class='list'>
                   <List
                   v-for='(problem, id) in user.solvedProblems'
                   v-bind:key='id'
                   :item='{
                      code: true,
                      text: problem,
                      url: `/problem-set/${id}/solve`
                  }'/>
                </ul>
              </div>
            </div>
            <div class='division'>
              <h3 class='heading'>Contests</h3>
              <div class='content'>
                <div class='flex text-center middle placeholder'  v-if='!isLoadingContest && contests.length == 0'>
                  <div>
                    <img src='@/assets/svg/non.svg'/>
                    <p class='text'>No contest to display at this time </p>
                  </div>
                </div>
                <div class='flex text-center spinner-container middle'  v-if='isLoadingContest'>
                  <clip-loader  color="#ccc" size="50px"></clip-loader>
                </div>
                <ul class='list'>
                  <List
                  v-for='(contest, id) in contests'
                  v-bind:key='id'
                  :item='{
                    contest: true,
                    text: contest.title,
                    starttime: contest.timeentered,
                    url: `/contests/${contest._id}`,
                    ...contest
                  }'/>
                </ul>
              </div>
            </div>
          </PrimaryCard>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Layout from '@/components/Layout/Layout.vue';
import List from '@/components/List/List.vue';
import Http from '@/helpers/http';

export default {
  name: 'profile',
  components: {
    Layout,
    PrimaryCard,
    ClipLoader,
    List,
  },
  data() {
    return {
      user: {
        solvedProblems: [],
      },
      isLoadingContest: true,
      isLoadingUser: true,
      contests: [],
    };
  },
  mounted() {
    this.populateUser();
  },
  methods: {
    populateUser() {
       /* eslint-disable */
      Http().get(`/user/profile/?username=${this.$route.params.username}`)
      .then((response) => {
        this.user = response.data.data;
        this.user.solvedProblems = (this.user.solvedProblems)? this.user.solvedProblems : [];
        this.isLoadingUser = false;
        this.populateUserContests(this.user._id);
      })
      .catch((error) => {
        this.isLoadingUser = false;
      })
    },
    populateUserContests(id) {
       /* eslint-disable */
      Http()({
        method: "get",
        url: '/my/contest/history/',
        params: { userid: id },
      })
      .then((response) => {
        this.contests = response.data.data;
      })
      .finally(() => {
        this.isLoadingContest = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-card{
  padding:20px;
  .placeholder{
    padding:10px;
    width:500px;
    margin:0 auto;
    img{
      width:100%;
      height:200px;
    }
    .text{
      font-size:0.8rem;
    }
  }
}
.profile-card__left{
  min-height:400px;
  .avatar{
    border-radius:100%;
    display: inline-block;
  }
  .content{
    text-align: left;
  }
  .fullname{
    font-size:1.3rem;
    font-weight:600;
    margin-top: 20px;
    font-family: $font-family-montserrat
  }
  .username, .email{
    font-family: $font-family-muli;
    font-size:0.8rem;
    font-weight:500;
    color:rgb(88, 88, 88);
  }
  .email{
    color:rgb(105, 103, 103);
  }
  .uil{
    padding:5px 0;
    margin-right:2px;
    display:inline-block;
    border-radius: 100%;
    font-size:1.2rem;
    position: relative;
    top:2px;
    color:rgb(184, 179, 179)
  }
}
.profile-card__right{
  .division{
    .heading{
      font-size:1.3rem;
    }
    .stats-card__wrapper{
      &:last-child{
        .stats-card{
          background: $secondary-color;
          color:#fff;
        }
      }
    }
    .stats-card{
      padding:40px;
      color:$secondary-color;
    }
    .stats-title{
      padding:4px;
      font-size:0.8rem;
      // color:#666;
    }
    .stats-number{
      font-size:1.5rem;
      font-weight:700;
      padding:5px 0;
    }
    .content{
      min-height: 200px;
    }
  }
}
</style>
