<template>
  <div class="app-layout" >
    <Header :viewContent="viewContent"/>
      <div class="app-layout-content__container">
        <!-- <h3 class="page-heading">{{ page }}</h3> -->
        <div class="app-layout__content">
          <slot></slot>
        </div>
      </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
export default {
  name: "layout",
  components:{
    Header, Footer
  },
  data (){},
  props:{},
  methods:{}

}
</script>

<style lang="scss">
.app-layout{
  background:$bg-primary-color;
  min-height:100vh;
}
.app-layout-content__container{
  margin:30px auto;
  max-width:600px;
  min-height:550px;
  padding:5px 0;
  padding-top:100px;
  .page-heading{
    padding:10px 0;
  }
}
.app-layout__content{
  background:#fff;
  min-height:200px;
  border-radius:5px;
  box-shadow:0 4px 10px 0 rgba(0,0,0,0.07);
  margin:20px 0;
}
</style>


