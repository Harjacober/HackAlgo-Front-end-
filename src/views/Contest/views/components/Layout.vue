<template>
   <div class="contest-app__layout" :class='pageClassName'>
      <!-- <Sidebar /> -->
     <Header :headerTitle='headerTitle' :headerTimer='headerTimer'/>
        <main class="contest-app__layout__main">
            <Nav />
            <slot></slot>
        </main>
    <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import Nav from './Nav.vue';

export default {
  name: 'contest-layout',
  components: {
    Header, Footer, Nav,
  },
  props: {
    pageName: {
      type: String,
      default: '',
    },
    pageClassName: {
      type: String,
      default: '',
    },
    headerTitle: String,
    headerTimer: String,
  },
  methods: {},

};
</script>

<style lang="scss">
// APP LAYOUT STYLES
.contest-app__layout{
    background:$bg-primary-color;
    min-height:100vh;
    background:#fff;
    .header{
        width:100%;
        left:0;
    }
    .contest-app__layout__main{
        padding:10px 0;
        padding-top:70px;
        min-height:500px;
    }
}
</style>
