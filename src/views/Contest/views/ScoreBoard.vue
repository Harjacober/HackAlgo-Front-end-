<template>
  <Layout headerTitle="Robinson Crusoe" headerTimer="50Min">
    <PrimaryCard classNames="contest-scoreboard__card">
      <table class="w-full">
        <thead>
          <tr>
            <th class="px-4 py-2  text-left">S/N</th>
            <th class="px-4 py-2  text-left">Username</th>
            <th class="px-4 py-2  text-left">Attempted problem</th>
            <th class="px-4 py-2  text-left">Point</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2 text-left">1</td>
            <td class="border px-4 py-2 text-left">Dejavu</td>
            <td class="border px-4 py-2 text-left">2</td>
            <td class="border px-4 py-2 text-left">8,158</td>
          </tr>
          <tr class="">
            <td class="border px-4 py-2 text-left">2</td>
            <td class="border px-4 py-2 text-left">Adam</td>
            <td class="border px-4 py-2 text-left">2</td>
            <td class="border px-4 py-2 text-left">2,112</td>
          </tr>
          <tr>
            <td class="border px-4 py-2 text-left">3</td>
            <td class="border px-4 py-2 text-left">Chris</td>
            <td class="border px-4 py-2 text-left">1</td>
            <td class="border px-4 py-2 text-left">1,280</td>
          </tr>
        </tbody>
      </table>
    </PrimaryCard>
  </Layout>
</template>

<script>
import socket from 'socket.io-client';
import Layout from './components/Layout.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Button from '@/components/Button/Button.vue';

export default {
  name: 'scoreboard',
  components: {
    Layout,
    PrimaryCard,
  },
  mounted() {
    const io = socket('ws://api.codegees.com/:9000/scoreboard/');
    io.on('connect', () => {
      io.emit('my event', {
          data: 'I\'m connected!',
      });
      io.on('newscore', (data) => {
        console.log(data);
      });
      console.log('received an event');
    });
  },
};
</script>

<style lang="scss" scoped>

.contest-scoreboard__card{
  min-height: 700px;
  padding:30px 0;
  font-weight:500;
  font-size:0.8rem;
}
</style>
