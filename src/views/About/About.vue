<template>
  <div class="flex flex-col flex-no-wrap w-full about">
    <algoHeader/>
    <section class="about-hero relative flex flex-col items-center w-full justify-center h-screen bg-gray-400
      ">
      <p class="text-5xl text-center lg:w-10/12 py-6
        px-5 lg:px-20 text-gray-900 font-light">
        <b>Hack-algo</b>
        is where people learn to build softwares</p>
      <p class="z-30
        px-5 lg:px-20 text-gray-700 lg:w-7/12 text-center font-light">
        We're supporting a community with over 20million students leaning how to secure the skillset they'll need for the future.
      </p>
    </section>
    <algoFooter/>
  </div>
</template>

<style lang="scss" scoped>
  a.link-tag {
    background: $secondary-color;
    color: aliceblue;
  }
  .about-backdrop {
    opacity: 0.9;
  }
</style>

<script>
import algoFooter from '../../components/footer.vue';
import algoHeader from '../../components/header.vue';

export default {
  name: 'home',
  components: {
    algoFooter,
    algoHeader,
  },
};
</script>
