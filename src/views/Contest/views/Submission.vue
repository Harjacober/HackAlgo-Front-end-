<template>
  <Layout headerTitle="Robinson Crusoe" headerTimer="50Min">
    <PrimaryCard classNames="contest-dasboard__card">
      <table class="w-full">
        <thead>
          <tr>
            <th class="px-4 py-2 text-left">S/N</th>
            <th class="px-4 py-2 text-left">Title</th>
            <th class="px-4 py-2 text-left">language</th>
            <th class="px-4 py-2 text-left">Date</th>
            <th class="px-4 py-2 text-left"> Status </th>
            <th class="px-4 py-2 text-left">Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(submission, index) in submissions" v-bind:key="submission._id">
            <td class="border px-4 py-2 text-left">{{index+1}}</td>
            <td class="border px-4 py-2 text-left title w-1/5">{{submission.name}}</td>
            <td class="border px-4 py-2 text-left lang">
              {{ submission.lang }}
            </td>
            <td class="border px-4 py-2 text-left date">
              {{ submission.timesubmitted | moment('dddd, MMMM Do YYYY') }}
            </td>
            <td class="border px-4 py-2 text-left passed" :class='submission.verdict.toLowerCase()'>
            {{submission.verdict}}
            </td>
            <td class="border px-4 py-2 text-left">
              <p>
                <LinkButton type ='secondary' :to='problemLink(submission.prblmid)'> View Problem</LinkButton>
              </p>
              <Button type ='outlined' @click='openModal(submission._id)'> View Solution</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </PrimaryCard>
    <SolutionModal
      :isVisible='isSolutionModalVisible'
      :submission='submission'
      @close='modal(false)'
    />
  </Layout>
</template>

<script>
import Layout from './components/Layout.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Button from '@/components/Button/Button.vue';
import LinkButton from '@/components/Button/LinkButton.vue';
import Http from '@/helpers/http';
import { SolutionModal } from '@/components/Modals';

export default {
  name: 'contest-submission',
  components: {
    Layout,
    PrimaryCard,
    Button,
    LinkButton,
    SolutionModal,
  },
  data() {
    return {
      isLoading: true,
      submissions: [],
      isError: false,
      isSolutionModalVisible: false,
      submission: {},
    };
  },
  mounted() {
    this.populateSubmissions();
  },
  methods: {
    modal(value) {
      this.isSolutionModalVisible = value;
    },
    openModal(id) {
      /* eslint-disable */
      const index = this.submissions.findIndex(sub => sub._id === id);
      this.submission = this.submissions[index];
      this.modal(true);
    },
    problemLink(id) {
      return `/contests/${this.$route.params.type}/${this.$route.params.slug}/dashboard/${id}/solve`;
    },
    populateSubmissions() {
      const payload = {
        contestid: this.$route.params.slug,
        contesttype: this.$route.params.type,
      };
      Http.get(`/my/submission/history/?contestid=${payload.contestid}&contesttype=${payload.contesttype}`)
      .then((response) => {
        this.submissions = response.data.data;
        this.isError = false;
      })
      .catch((error) => {
        this.isError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>

.contest-dasboard__card{
  min-height: 700px;
  padding:30px 0;
  font-weight:500;
  .title{
    font-weight:600;
  }
  .summary{
    font-size:0.8rem;
    font-weight:500;
    line-height: 1.7rem
  }
  .passed{
    color:$secondary-color;
  }
  .failed{
    color:$red
  }
}
</style>
