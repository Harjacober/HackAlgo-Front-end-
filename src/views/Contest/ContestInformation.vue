<template>
  <Layout :pageName="contest.title">
    <div class="contest-info">
      <nav class='contest-info__nav'>
        <ul >
          <li >
            <router-link to='/contests'> Contests </router-link>
          </li>
          <li > <i class='uil uil-angle-right'></i> </li>
          <li >
            <router-link :to='$route.path' class='active'> {{ contest.title }} </router-link>
          </li>
        </ul>
      </nav>
      <PrimaryCard class="contest-info__card">
        <h4 class='heading'> About </h4>
        <div class='flex flex-wrap info-top'>
          <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div class='date-info info-card'>
              <h3 class='heading'> Scheduled date </h3>
              <h4 class='date'> {{ contest.starttime | moment('dddd, MMMM Do YYYY, h:mm:ss a') }} </h4>
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div class='duration-info info-card'>
              <h3 class='heading'> Duration </h3>
              <h4 class='duration'> {{ contest.duration | duration('as', 'hours') }}hours </h4>
            </div>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div class='duration info-card'>
              <h3 class='heading'> Want to participate? </h3>
              <Button type="secondary" v-if='!contest.registered' @click='registerContest'> Register </Button>
              <span class='success' v-if='contest.registered'><i class='uil uil-check-square'></i> Sucessfully registered </span>
            </div>
          </div>
        </div>
        <div class='content content-desc'></div>
      </PrimaryCard>
    </div>

    <RegisterContestModal :isVisible='isModalVisible' @close='closeModal' :contest='contest'/>
  </Layout>
</template>

<script>
import Marked from 'marked';
import Layout from '@/components/Layout/Layout.vue';
import Button from '@/components/Button/Button.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Http from '@/helpers/http';
import { RegisterContestModal } from '@/components/Modals';

export default {
  name: 'contests-information',
  components: {
    Layout,
    Button,
    PrimaryCard,
    RegisterContestModal,
  },
  data() {
    return {
      contest: {},
      isModalVisible: false,
    };
  },
   mounted() {
    this.populateContest();
  },
  methods: {
    populateContest() {
      Http.get(`/contest/TYPEA/${this.$route.params.slug}/`)
      .then((response) => {
        this.contest = response.data.data;
        /* eslint-disable no-underscore-dangle */
        this.contest._id = this.$route.params.slug;
        const md = new Marked.Renderer();
        document.querySelector('.content-desc').innerHTML = Marked(this.contest.desc, { renderer: md });
      })
      .finally(() => {
        this.isLoading = false;
      });
    },
    closeModal() {
      this.isModalVisible = false;
    },
    registerContest() {
      this.isModalVisible = true;
    },
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
      background-color:rgb(248, 248, 248);
      border-radius:5px;
    }
    .heading{
      font-size:1rem;
      font-weight:700;
      letter-spacing: 0.03rem;
      text-transform: uppercase;
      padding:15px 0;
    }
    .date, .duration{
      font-weight:500;
    }
    .content{
      padding:20px 0;
    }
  }
}
</style>
