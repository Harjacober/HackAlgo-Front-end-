<template>
  <footer class="w-full px-5 lg:px-20 py-3 page-footer">
      <div class="flex lg:w-5/12 info">
        <p class="flex text-center lg:w-12/12 text-gray-500 text">
            <!-- eslint-disable-next-line -->
            At StudentHack, our mission is to help you improve yourself and land your dream job. We have a sizable repository of interview resources for many companies. In the past few years, our users have landed jobs at top companies around the world.
         </p>
      </div>
      <div class="flex justify-center w-auto lg:w-5/12 pt-8 text">
          <p class="text-gray-500">Copyright &copy; 2020 {{name}}. | Priacy Policy</p>
      </div>
  </footer>
</template>
<style lang="scss" scoped>
    .page-footer {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        padding:50px 0;
        .text{
            font-size: 0.8rem;
        }
    }
</style>
<script>
export default {
    props: ['name'],
};
</script>
