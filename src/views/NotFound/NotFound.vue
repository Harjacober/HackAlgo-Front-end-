<template>
  <PageLayout>
      <div class='flex flex-wrap not-found__content'>
        <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
            <div class='not-found-img__wrapper'>
                <img src='../../assets/svg/404.svg' />
            </div>
        </div>
         <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 '>
            <div class='content'>
                <h3 class='heading'>Page Not Found</h3>
                <p class='text'>The page you are looking is not available</p>
                <LinkButton to='/' type='secondary'>
                  <i class="uil uil-arrow-left" ></i> Go Home
                </LinkButton>
            </div>
        </div>
      </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/Layout/PageLayout.vue';
import LinkButton from '@/components/Button/LinkButton.vue';

export default {
  name: 'not-found',
  components: {
    PageLayout,
    LinkButton,
  },
};

</script>

<style lang="scss" scoped>

.not-found__content{
    min-height: 700px;
    padding:160px 0;
    max-width: 1000px;
    margin:0 auto;
    .not-found-img__wrapper{
        padding:30px;
        img{
            width:100%;
            height:auto;
        }
    }
    .content{
        padding:100px 10px;
        @include MQ($breakpoint-md){
            text-align:center;
            padding:40px 10px;
        }
        .heading{
            font-size: 2.4rem;
            font-weight:700;
            font-family: $font-family-segoe;
            @include MQ($breakpoint-md){
               font-size:1.6rem
            }
        }
        .text{
            font-size:0.9rem;
            padding:5px 0;
             line-height: 2.5rem;
            letter-spacing: 0.03rem;
            @include MQ($breakpoint-md){
               font-size:0.9rem
            }
        }
    }
}
</style>
