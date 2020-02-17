<template>
  <div class="not-found">
      <Header/>
      <div class='flex flex-wrap not-found__content'>
        <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
            <div class='not-found-img__wrapper'>
                <img src='/assets/404_page.svg' />
            </div>
        </div>
         <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 '>
            <div class='content'>
                <h3 class='heading'>Page Not Found</h3>
                <p class='text'>The page you are looking is not available</p>
            </div>
        </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Header from '../../components/header.vue';
import Footer from '../../components/footer.vue';

export default {
  name: 'not-found',
  components: {
    Header,
    Footer,
  },
};

</script>

<style lang="scss" scoped>
.not-found__content{
    min-height: 700px;
    padding:160px 0;
    background:$primary-color;
    .not-found-img__wrapper{
        padding:30px;
        img{
             width:100%;
        }
    }
    .content{
        padding:100px 10px;
        color:$secondary-color;
        line-height: 2.5rem;
        @include MQ($breakpoint-md){
            text-align:center;
            padding:40px 10px;
        }
        .heading{
            font-size: 2.4rem;
            font-weight:700;
            @include MQ($breakpoint-md){
               font-size:1.6rem
            }
        }
        .text{
            font-size:1rem;
            padding:5px 0;
            @include MQ($breakpoint-md){
               font-size:0.9rem
            }
        }
    }
}
</style>
