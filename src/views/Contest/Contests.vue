<template>
  <Layout pageName="Contests">
    <nav class='contests-nav'>
      <ul>
        <li><router-link to='/contests?type=all' > All </router-link></li>
        <li><router-link to='/contests?type=registered' > Registered </router-link ></li>
      </ul>
    </nav>
    <div class="contests">
      <div class='flex text-center middle content-placeholder'  v-if='!isLoading && contests.length == 0'>
        <div class='text-center content-placeholder__panel'>
          <img src='@/assets/svg/non.svg'/>
          <p class='text'> No contest to display at this time</p>
        </div>
      </div>
      <div class='flex text-center spinner-container middle'  v-if='isLoading'>
        <clip-loader  color="#ccc" size="50px"></clip-loader>
      </div>
      <div class="flex flex-wrap" v-if='!isLoading'>
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4" v-for='contest in contests' v-bind:key='contest._id'>
          <PrimaryCard classNames='contest-card'>
            <router-link :to='"/contests/"+contest._id' class='link'>
              <h3 class='title'> {{ contest.title }} </h3>
              <p class='summary'> {{ contest.desc }} </p>
              <p class='time'>{{ contest.starttime | moment('dddd, MMMM Do YYYY')}} - {{ contest.duration | duration('as', 'hours') }}hrs </p>
            </router-link>
            <Button type="secondary" v-if='!contest.registered' @click='RegisterContest( contest )'> Register </Button>
            <span class='success' v-if='contest.registered'><i class='uil uil-check-square'></i> Sucessfully registered </span>
          </PrimaryCard>
        </div>
      </div>
    </div>
    <RegisterContestModal :isVisible='isModalVisible' @close='closeModal' :contest='currentContest'/>
  </Layout>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Layout from '@/components/Layout/Layout.vue';
import Button from '@/components/Button/Button.vue';
import Http from '@/helpers/http';
import { RegisterContestModal } from '@/components/Modals';

export default {
  name: 'contests',
  components: {
    Layout,
    PrimaryCard,
    Button,
    ClipLoader,
    RegisterContestModal,
  },
  data() {
    return {
      isLoading: true,
      contests: [],
      isModalVisible: false,
      currentContest: {},
    };
  },
  mounted() {
    if (!this.$route.query.type) {
      this.$router.push('/contests?type=all');
    }
    this.populateContests();
  },
  methods: {
    populateContests() {
      Http.get('/contest/many/TYPEA/active/?page=1&limit=50')
      .then((response) => {
        this.contests = response.data.data;
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
    },
    closeModal() {
      this.isModalVisible = false;
    },
    RegisterContest(contest) {
      this.currentContest = contest;
      this.isModalVisible = true;
    },
  },
  watch: {
    /* eslint-disable */
    '$route.query.type': function (type) {
      if (type.toLowerCase() === 'registered') {
        this.contests = this.contests.filter(contest => contest.registered === true);
      } else {
        this.populateContests()
      }
    },
  },
};

</script>

<style lang="scss" scoped>
.contest{
  width:100%;
}
.contests-nav{
    border-bottom:1px solid #ddd;
    li{
      display:inline-block;
      a{
        padding:15px 30px;
        font-weight:600;
        cursor:pointer;
        opacity:0.7;
        transition:0.3s;
        display:block;
        &:hover{
          opacity:1;
        }
        &.active{
          border-bottom:3px solid $secondary-color;
          position:relative;
          bottom:-1px;
          opacity:1;
        }
      }
    }
  }
.contest-card{
  padding:25px 20px;
  transition: 0.5s;
  &:hover{
      background: rgb(241, 241, 241);
    }
  .link {
    color:#000;
    display:block;
  }
  .title{
    font-size: 1.2rem;
    color:#000;
    font-weight:600;
  }
  .summary{
    padding:30px 0;
    padding-top:10px;
    font-size:0.9rem;
    color:#111;
  }
  .success{
    font-weight:600;
    letter-spacing: 0.03rem;
    color:$secondary-color;
    font-size:0.8rem;
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
.spinner-container{
    min-height:300px;
    padding:200px 0;
}
</style>
