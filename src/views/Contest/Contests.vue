<template>
  <Layout pageName="Contests">
    <nav class='contests-nav'>
      <div class='contests-nav__panel'>
       <VSelect
        v-model='selectedFilter'
        :options="types"
        @select='filterContests'
      />
      </div>
    </nav>
    <div class="contests">
      <div class='flex text-center middle content-placeholder'  v-if='!isLoading && !isError && contests.length == 0'>
        <div class='text-center content-placeholder__panel'>
          <img src='@/assets/svg/non.svg'/>
          <p class='text'> No contest to display at this time</p>
        </div>
      </div>
      <div class='flex text-center middle content-placeholder'  v-if='isError'>
        <div class='text-center content-placeholder__panel'>
          <img src='@/assets/svg/non.svg'/>
          <p class='text'>Whoops!! something went wrong</p>
        </div>
      </div>
      <div class='flex text-center spinner-container middle'  v-if='isLoading'>
        <clip-loader  color="#ccc" size="50px"></clip-loader>
      </div>
      <div class="flex flex-wrap contests-card__wrapper" v-if='!isLoading && !isError'>
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4" v-for='contest in contests' v-bind:key='contest._id'>
          <PrimaryCard classNames='contest-card'>
            <router-link :to='"/contests/"+contest.contesttype+"/"+contest._id' class='link'>
              <h3 class='title'> {{ contest.title }} </h3>
              <p class='summary'> {{ contest.desc.slice(0, 100) }} </p>
              <p class='time'>{{ contest.starttime | moment('dddd, MMMM Do YYYY')}} - {{ contest.duration | duration('as', 'hours') }}hrs </p>
            </router-link>
            <Button type="secondary" v-if='!contest.registered' @click='RegisterContest( contest )'> Register </Button>
            <span class='success' v-if='contest.registered && contest.status !== 400'><i class='uil uil-check-square'></i> Sucessfully registered </span>
            <span class='success' v-if='contest.status === 400'><i class='uil uil-check-square'></i> Completed </span>
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
import VSelect from '@/components/Select/index.vue';

export default {
  name: 'contests',
  components: {
    Layout,
    PrimaryCard,
    Button,
    ClipLoader,
    RegisterContestModal,
    VSelect,
  },
  data() {
    return {
      isLoading: true,
      contests: [],
      isModalVisible: false,
      isError: false,
      isEmpty: false,
      currentContest: {},
      selectedFilter: this.$route.query.type || 'all',
      types: [
        'all',
        'started',
        'active',
        'registered',
      ],
    };
  },
  mounted() {
    if (!this.$route.query.type) {
      this.$router.push('/contests?type=all');
    }

    this.populateContests(this.selectedFilter);
  },
  methods: {
    populateContests(type) {
       /* eslint-disable */
      const registered = type && type.toLowerCase() === 'registered';
      if (registered) {
        type = 'active';
      }

      Http().get(`/contest/many/TYPEA/${type}/?page=1&limit=50`)
      .then((response) => {
        if (registered) {
        this.contests = this.contests.filter(contest => contest.registered === true);
        } else {
          this.contests = response.data.data;
        }
        this.isError = false;
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 400) {
          this.isEmpty = true;
        } else {
          this.isError = true;
        }
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
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    hideDropdown() {
      this.isDropdownOpen = false;
    },
     filterContests(type) {
      if (type === this.$route.query.type) return;

      this.$router.push({
        path: '/contests',
        query: {
          type,
        },
      });
    },
  },
  watch: {
    /* eslint-disable */
    '$route.query.type': function (type) {
      this.populateContests(type);
    },
  },
};

</script>

<style lang="scss" scoped>
.contest{
  width:100%;
}
.contests-nav{
    // border-bottom:1px solid #ddd;
    position: relative;
    .contests-nav__panel {
      position: absolute;
      right:0;
      .filter-button {
        padding:0 0;
        padding-left: 10px;
        border:none;
        span {
          background:#fff;
          color:#000;
          padding:5px 0;
          width:100%;
          border-radius:0 5px 5px 0;
          display:inline-block
        }
      }
    }
}
.contests-card__wrapper {
  margin-top:50px;
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
