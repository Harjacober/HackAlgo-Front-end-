<template>
  <Layout headerTitle="Robinson Crusoe" headerTimer="50Min">
    <PrimaryCard classNames="contest-dasboard__card">
      <table class="w-full">
        <thead>
          <tr>
            <th class="px-4 py-2 text-left">S/N</th>
            <th class="px-4 py-2 text-left">Title</th>
            <th class="px-4 py-2 text-left">Summary</th>
            <th class="px-4 py-2 text-left"> Status </th>
            <th class="px-4 py-2 text-left">Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2 text-left">1</td>
            <td class="border px-4 py-2 text-left title w-1/5">Robinson Crusoe </td>
            <td class="border px-4 py-2 text-left summary">
              Robinson Crusoe decides to explore his isle. On a sheet of paper he plans the following process
              sheet of paper he plans the following processsheet of paper he plans the following process
            </td>
            <td class="border px-4 py-2 text-left passed">
             passed
            </td>
            <td class="border px-4 py-2 text-left">
              <Button type ='secondary'> View Problem</Button>
              <Button type ='outlined'> View Solution</Button>
            </td>
          </tr>
           <tr>
            <td class="border px-4 py-2 text-left">2</td>
            <td class="border px-4 py-2 text-left title w-1/5">Robinson Crusoe</td>
            <td class="border px-4 py-2 text-left summary">
              Robinson Crusoe decides to explore his isle. On a sheet of paper he plans the following process
            </td>
            <td class="border px-4 py-2 text-left failed">
             failed
            </td>
            <td class="border px-4 py-2 text-left">
              <Button type ='secondary'> View Problem</Button>
              <Button type ='outlined'> View Solution</Button>
            </td>
          </tr>
           <tr>
            <td class="border px-4 py-2 text-left">3</td>
            <td class="border px-4 py-2 text-left title w-1/5">Robinson Crusoe</td>
            <td class="border px-4 py-2 text-left summary">
              Robinson Crusoe decides to explore his isle. On a sheet of paper he plans the following process
            </td>
            <td class="border px-4 py-2 text-left passed">
             passed
            </td>
            <td class="border px-4 py-2 text-left">
              <Button type ='secondary'> View Problem</Button>
              <Button type ='outlined'> View Solution</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </PrimaryCard>
  </Layout>
</template>

<script>
import Layout from './components/Layout.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Button from '@/components/Button/Button.vue';

export default {
  name: 'contest-submission',
  components: {
    Layout,
    PrimaryCard,
    Button,
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
