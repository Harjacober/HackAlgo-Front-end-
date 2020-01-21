<template>
  <div class="flex flex-col flex-no-wrap w-full about">
    <algoHeader/>
    <section class="about-hero relative flex w-full column justify-center h-screen bg-gray-400
      ">
      <img class="w-full h-screen z-10 absolute object-cover" src="../../assets/img/about.jpg" alt="">
      <div class="flex absolute w-full h-screen bg-green-900 z-20 about-backdrop"></div>
      <h1 class="text-3xl lg:w-5/12 z-30 py-6
        px-5 lg:px-20 text-gray-100">About Hack-algo</h1>
      <p class="z-30
        px-5 lg:px-20 text-gray-100 lg:w-7/12">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod minus accusamus fugit. Earum quasi vitae illo adipisci voluptatibus laboriosam rerum ipsam, modi quidem ad, molestias minus eos consequuntur animi cumque?
      </p>
      <p class="z-30
        px-5 lg:px-20 text-gray-100 lg:w-7/12 mt-4">
        Version 0.1
      </p>
      <div class="flex mt-4">
        <router-link class="flex text-center p-3 link-tag rounded-sm" to="/login">
          SIGN UP
        </router-link>
      </div>
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
