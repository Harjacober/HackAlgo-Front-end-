<template>
  <div class="flex column nowrap col-lg-6">
    <uiHeader></uiHeader>
    <router-view/>
    <uiFooter></uiFooter>
  </div>
</template>
<style lang="scss" scoped>
</style>
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
