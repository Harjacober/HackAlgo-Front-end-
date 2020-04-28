<template>
  <div class="app-layout">
      <Sidebar :isMobileOpen='isMobileSidebarOpen' @closeSidebar='closeSidebar'/>
      <main class="app-layout__main">
        <Header @openSidebar='openSidebar' :enableSearch='true'/>
          <div class="app-content">
            <h4 class="heading"> {{ pageName }}</h4>
            <slot></slot>
          </div>
        <Footer/>
      </main>
    </div>
</template>

<script>
import Header from '../Header/Header.vue';
import Footer from '../Footer/Footer.vue';
import Sidebar from '../Sidebar/Sidebar.vue';

export default {
  name: 'layout',
  components: {
    Header, Footer, Sidebar,
  },
  props: {
    pageName: {
      type: String,
      default: '',
    },
  },
  methods: {
    closeSidebar() {
      this.isMobileSidebarOpen = false;
    },
    openSidebar() {
      this.isMobileSidebarOpen = true;
    },
  },
  data() {
    return {
      isMobileSidebarOpen: false,
    };
  },
  mounted() {
    this.$store.dispatch('CONTEST');
  },
};
</script>

<style lang="scss">
// APP LAYOUT STYLES
.app-layout{
    background:$bg-primary-color;
    min-height:100vh;
  }

  .app-layout__main{
    padding-left:250px;
    margin:0 auto;

    @include MQ($breakpoint-md){
      padding:0;
    }
  }

  .app-content{
    margin:0 auto;
    max-width:1200px;
    padding:10px 15px;
    padding-top:90px;
    min-height:500px;
    .heading{
      font-size:1.6rem;
      letter-spacing:0.03rem;
      font-weight:700;
      padding:10px 5px;
    }
  }
.spinner-container{
    display: inline-block !important;
    width:100% !important;
   .v-spinner{
      // background:#fff;
      display:inline-block;
      padding:10px;
      border-radius:10px;
      // box-shadow: 0 10px 30px 0 rgba(0,0,0,0.09);
    }
}
.content-placeholder{
  min-height: 500px;
  padding:40px;
  .content-placeholder__panel{
    width:100%
  }
  img{
    max-width:400px;
    margin: 0 auto;
  }
}
</style>
