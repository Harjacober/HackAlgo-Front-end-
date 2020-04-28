<template>
   <div class="contest-app__layout" :class='pageClassName' >
      <Sidebar :isMobileOpen='isMobileSidebarOpen' @closeSidebar='closeSidebar'/>
     <Header
        :headerTitle='currentContest.contest.title'
        @openSidebar='openSidebar'
      />
        <main class="contest-app__layout__main">
            <Nav />
            <slot></slot>
        </main>
    <Footer/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Nav from './Nav.vue';

export default {
  name: 'contest-layout',
  components: {
    Header, Footer, Nav, Sidebar,
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
  computed: {
    ...mapGetters(['currentContest', 'contestTimeUp']),
  },
  mounted() {
    this.$store.dispatch('CONTEST', { slug: this.$route.params.slug });
  },
  watch: {
    currentContest(value) {
      if (value.error) {
        this.$router.push('/dashboard');
        this.$toaster.error('Page Not found');
      }
    },
    contestTimeUp(value) {
      this.$router.push('/dashboard');
      this.$toaster.success('Contest has ended successfully. Thanks');
    },
  },
};
</script>

<style lang="scss">
// APP LAYOUT STYLES
.contest-app__layout{
    background:$bg-primary-color;
    min-height:100vh;
    background:#fff;
    .app-layout__sidebar{
      display:none;
    }
    .header{
        width:100%;
        left:0;
        .harmburger-btn{
          display:block;
        }
    }
    .contest-app__layout__main{
        padding:10px 0;
        padding-top:70px;
        min-height:500px;
    }
}
</style>
