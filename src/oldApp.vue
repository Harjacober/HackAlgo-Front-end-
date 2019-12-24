<template>
  <div id="app">
    <uiHeader></uiHeader>
    <router-view/>
    <uiFooter></uiFooter>
  </div>
</template>
<script>
import uiHeader from '@/components/header.vue';
import uiFooter from '@/components/footer.vue';

export default {
  components: {
    uiHeader,
    uiFooter,
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
