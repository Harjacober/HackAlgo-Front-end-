<template>
  <div class="flex flex-col flex-no-wrap w-full home">
    <section class="flex w-full column justify-center h-screen bg-gray-400
      p-5 lg:p-20">
      <h1 class="text-3xl lg:w-2/12">The Collaboration Platform for API Development</h1>
      <div class="flex mt-4">
        <router-link class="flex text-center p-3 link-tag rounded-sm" to="/login">
          SIGN UP
        </router-link>
      </div>
    </section>
    <section class="flex flex-col lg:flex-row content-center justify-center w-full h-auto
      p-5 lg:p-20">
      <img class="flex object-contain lg:w-5/12" src="../../assets/img/git.svg" alt="">
      <div class="flex flex-col justify-center content-center lg:w-5/12 lg:p-10 flex-no-wrap">
        <p class="text-xl py-3 text-center">Sharpen your skill</p>
        <p class="lg:w-12/12 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem mollitia, architecto eos reiciendis, doloribus ducimus doloremque porro laudantium ex maxime sit consequatur animi dolore facilis eum incidunt omnis. Eligendi, minima?</p>
        <div class="flex mt-4 justify-center">
          <router-link class="flex text-center p-3 link-tag rounded-sm" to="/about">
            Learn More
          </router-link>
        </div>

      </div>
    </section>
    <section class="flex flex-col lg:flex-row-reverse content-center justify-center w-full h-auto
      p-5 lg:p-20 bg-gray-200">
      <img class="flex object-contain lg:w-4/12" src="../../assets/img/copy-wisdom.png" alt="">
      <div class="flex flex-col justify-center lg:w-8/12 lg:p-10 flex-no-wrap">
        <p class="text-xl py-3 lg:w-9/12 text-center">Gain collaborative wisdom</p>
        <p class="lg:w-9/12 text-center">
          Compare your solution with others after each kata for greater understanding. Discuss the kata, best practices, and innovative techniques with the community.</p>
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
</style>

<script>
import algoFooter from '../../components/footer.vue';

export default {
  name: 'home',
  components: {
    algoFooter,
  },
};
</script>
