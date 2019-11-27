<template>
  <div id="app">
    <uiHeader></uiHeader>
    <router-view/>
  </div>
</template>
<script>
import uiHeader from '@/components/header.vue';

export default {
  components: {
    uiHeader,
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
