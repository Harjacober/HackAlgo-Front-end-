<template>
  <div class="page-layout">
      <Header />
      <main class="page-main">
        <slot></slot>
      </main>
      <Footer />
    </div>
</template>

<script>
import Header from '../Header/PageHeader.vue';
import Footer from '../Footer/PageFooter.vue';

export default {
  name: 'layout',
  components: {
    Header, Footer,
  },
};
</script>

<style lang="scss">
.page-layout{
  background: rgb(232, 245, 239);
  min-height: 100vh;
  .page-main{
    min-height: 100vh;
  }
  .container {
    max-width: 1100px;
    margin:0 auto;
    .container-top{
      padding:40px;
      .heading {
        font-size: 3.5rem;
        font-family: $font-family-segoe;
        @include MQ($breakpoint-md) {
          font-size:1.5rem;
        }
      }
      .sub-heading {
        padding: 20px 0;
        font-size:1rem;
        font-weight: 400;
         @include MQ($breakpoint-md) {
          font-size:0.9rem;
        }
      }
    }
  }
}
</style>
