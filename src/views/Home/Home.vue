<template>
  <PageLayout>
    <div class='hero'>
      <div class='flex flex-wrap container middle hero-panel '>
        <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
          <div class='hero-content'>
            <transition name="fade">
            <h3 class="heading">A Gentle Guide to problem solving</h3>
            </transition>
            <p class='summary'>
              Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Autem mollitia, architecto eos reiciendis, doloribus ducimus
              doloremque porro laudantium ex maxime sit consequatur animi dolore facilis eum incidunt omnis.
              Eligendi, minima?
            </p>
            <div class='hero-actions'>
              <LinkButton to='/login' type='secondary'> Login </LinkButton>
              <LinkButton to='/register' type='white'> Get Started </LinkButton>
            </div>
          </div>
        </div>
        <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
          <div class='hero-bg'></div>
        </div>
      </div>
    </div>
    <div class='the-why'>
      <div class='the-why__panel container'>
        <div class='container-top text-center'>
          <h1 class='heading'> Why CodeGess Matters.</h1>
          <p class='sub-heading'>CodeGess plays an important problem solving role for aspiring problem solver </p>
        </div>
        <div class='flex flex-wrap'>
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3'>
            <PrimaryCard classNames='the-why__card'>
              <p class='icon-container li-orange'>
                <i class="uil uil-blogger-alt"></i>
              </p>
              <p class='text'>
                 Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Autem mollitia, architecto eos reiciendis, doloribus ducimus
                  doloremque porro laudantium ex maxime sit consequatur animi dolore facilis eum incidunt omnis.
                  Eligendi, minima?
              </p>
            </PrimaryCard>
          </div>
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3'>
            <PrimaryCard classNames='the-why__card'>
               <p class='icon-container li-green'>
                <i class="uil uil-0-plus"></i>
              </p>
              <p class='text'>
                 Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Autem mollitia, architecto eos reiciendis, doloribus ducimus
                  doloremque porro laudantium ex maxime sit consequatur animi dolore facilis eum incidunt omnis.
                  Eligendi, minima?
              </p>
            </PrimaryCard>
          </div>
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3'>
            <PrimaryCard classNames='the-why__card'>
               <p class='icon-container li-red'>
                <i class="uil uil-brackets-curly"></i>
              </p>
              <p class='text'>
                 Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Autem mollitia, architecto eos reiciendis, doloribus ducimus
                  doloremque porro laudantium ex maxime sit consequatur animi dolore facilis eum incidunt omnis.
                  Eligendi, minima?
              </p>
            </PrimaryCard>
          </div>
        </div>
      </div>
    </div>
    <div class='features'>
      <div class='features-panel container'>
        <div class='container-top'>
          <h1 class='heading'> Features.</h1>
          <p class='sub-heading'>CodeGess plays an important problem solving role for aspiring problem solver </p>
        </div>
        <div class='features-content'>
          <div class='flex flex-wrap md:flex-row-reverse lg:flex-row-reverse'>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card'>
                <h2 class='heading'>
                   Peer Learning
                </h2>
                <p class='text'>
                  Production-ready declarative animations
                  Framer Motion automatically generates natural animations for every props it receives.
                </p>
                <p class='text'>
                  Production-ready declarative animations
                  Framer Motion automatically generates natural animations for every props it receives.
                </p>
              </div>
            </div>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card__bg first'>
                <img src='../../assets/svg/peer.svg'/>
              </div>
            </div>
          </div>
          <div class='flex flex-wrap'>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card'>
                <h2 class='heading'>
                   Animations
                </h2>
                <p class='text'>
                  Production-ready declarative animations
                  Framer Motion automatically generates natural animations for every props it receives.
                </p>
                <p class='text'>
                  Production-ready declarative animations
                  Framer Motion automatically generates natural animations for every props it receives.
                </p>
                <p class='text'>
                  Production-ready declarative animations
                  Framer Motion automatically generates natural animations for every props it receives.
                </p>
              </div>
            </div>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card__bg'>
                <img src='../../assets/svg/develop.svg'/>
              </div>
            </div>
          </div>
          <div class='flex flex-wrap md:flex-row-reverse lg:flex-row-reverse'>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 '>
              <div class='feature-card'>
                <h2 class='heading'>
                  Programming languages
                </h2>
                <p class='text'>
                  Production-ready declarative animations
                  Framer Motion automatically generates natural animations for every props it receives.
                </p>
                <div class='flex flex-wrap'>
                  <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3 '>
                    <PrimaryCard classNames='lang text-center'>
                      <i class="devicon-go-plain"></i>
                      Go
                    </PrimaryCard>
                  </div>
                  <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
                    <PrimaryCard classNames='lang text-center'>
                      <!-- in your body -->
                      <i class="devicon-python-plain"></i>
                      Python
                    </PrimaryCard>
                  </div>
                  <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
                    <PrimaryCard classNames='lang text-center'>
                      <i class="devicon-javascript-plain"></i>
                      Javascript
                    </PrimaryCard>
                  </div>
                  <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
                    <PrimaryCard classNames='lang text-center'>
                      <i class="devicon-cplusplus-plain"></i>
                      C++
                    </PrimaryCard>
                  </div>
                   <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3'>
                    <PrimaryCard classNames='lang text-center'>
                      <!-- in your body -->
                      <i class="devicon-csharp-plain"></i>
                      C#
                    </PrimaryCard>
                  </div>
                </div>
              </div>
            </div>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card__bg'>
                <img src='../../assets/svg/product.svg'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class='testimonials'>
      <div class='testimonials-panel container'>
        <div class='container-top text-center'>
          <h1 class='heading'>What students are saying?</h1>
          <p class='sub-heading'>amazing.... </p>
        </div>
        <div class='flex flex-wrap'>
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3'>
            <PrimaryCard classNames='testimonial-card'>
              <p class='text '>
                 <span>"</span>Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Autem mollitia, architecto eos reiciendis, doloribus ducimus
                  doloremque porro laudantium ex maxime sit consequatur animi dolore facilis eum incidunt omnis.
                  Eligendi, minima?<span>"</span>
              </p>
              <div class='user-wrap flex'>
                <img src='@/assets/svg/feature.svg' />
                <div class='user'>
                  <h3 class='name'>Akinola Ayo</h3>
                  <p class='course'> CS Undergraduate </p>
                </div>
              </div>
            </PrimaryCard>
          </div>
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3'>
            <PrimaryCard classNames='testimonial-card'>
              <p class='text '>
                 <span>"</span>Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Autem mollitia, architecto eos reiciendis, doloribus ducimus
                  doloremque porro laudantium ex maxime sit consequatur animi dolore facilis eum incidunt omnis.
                  Eligendi, minima?<span>"</span>
              </p>
              <div class='user-wrap flex'>
                <img src='@/assets/svg/feature.svg' />
                <div class='user'>
                  <h3 class='name'>Akinola Ayo</h3>
                  <p class='course'> CS Undergraduate </p>
                </div>
              </div>
            </PrimaryCard>
          </div>
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3'>
            <PrimaryCard classNames='testimonial-card'>
              <p class='text '>
                 <span>"</span>Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Autem mollitia, architecto eos reiciendis, doloribus ducimus
                  doloremque porro laudantium ex maxime sit consequatur animi dolore facilis eum incidunt omnis.
                  Eligendi, minima?<span>"</span>
              </p>
              <div class='user-wrap flex'>
                <img src='@/assets/img/boy.svg' />
                <div class='user'>
                  <h3 class='name'>Akinola Ayo</h3>
                  <p class='course'> CS Undergraduate </p>
                </div>
              </div>
            </PrimaryCard>
          </div>
        </div>
      </div>
    </div>
    <div class='page-bottom'>
      <div class='container page-bottom__panel'>
        <div class='container-top text-center'>
          <h1 class='heading'> Like what you see?</h1>
          <p class='sub-heading'>Take action today....</p>
        </div>
        <div class='actions text-center'>
            <LinkButton to='/login' type='primary'> Login </LinkButton>
            <LinkButton to='/register' type='white'> Get Started </LinkButton>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/Layout/PageLayout.vue';
import LinkButton from '@/components/Button/LinkButton.vue';
import PrimaryCard from '@/components/Card/PrimaryCard.vue';

export default {
  name: 'home',
  components: {
    PageLayout,
    LinkButton,
    PrimaryCard,
  },
};
</script>

<style lang='scss'>
.hero {
  min-height: 200px;
  padding:0 10px;
  .hero-content {
    max-width:500px;
    @include MQ($breakpoint-md) {
      padding-top:50px;
    }
  }
  .heading {
    font-size: 4rem;
    font-family: $font-family-segoe;
    font-weight:800;
    @include MQ($breakpoint-md) {
      font-size:2rem;
    }
  }
  .summary {
    padding: 20px 0;
    font-size:0.9rem;
    line-height: 1.6rem;
    font-weight: 400;
  }
  .hero-actions {
    .btn {
      margin-right:10px;
      width:150px;
    }
  }
  .hero-bg {
    height: 100vh;
    background: url('../../assets/svg/hero-bg.svg');
    background-size: 100% 90%;
    background-repeat: no-repeat;
     @include MQ($breakpoint-md) {
      height: 50vh;
    }
  }
}

.the-why {
  margin-bottom:100px;
  .the-why__card{
    padding:80px 30px;
    border-radius: 20px;
    .icon-container {
      padding:20px;
      border-radius:100%;
      margin:20px 0;
      display:inline-block;
      &.li-orange {
        background: #ffeccd;
      }
      &.li-green {
        background: $light-green;
      }
      &.li-red {
        background: $light-red;
      }
      i {
        font-size:3rem;
      }
    }
    .text {
      line-height: 1.6rem;
    }
  }
}
.features {
  // margin-bottom: 100px;
  .feature-card {
     padding:80px 30px;
     margin:0 30px;
     margin-bottom: 150px;
     min-height: 100px;
     border-radius: 20px;
     .heading {
       font-family: $font-family-segoe;
     }
     .text {
       padding:20px 0;
     }
     .lang {
       padding:30px;
       min-height:50px;
       border-radius:15px;
       font-family: $font-family-segoe;
       font-weight: 700;
       i {
         display:block;
         font-size: 2rem;
       }
     }
  }
  .feature-card__bg {
    min-height: 400px;
    img {
      width:100%;
      height: auto;
    }
  }
}

.testimonials {
   margin-bottom: 100px;
   .testimonial-card{
     border-radius: 20px;
   }
  .text {
    padding:40px;
    padding-bottom: 10px;
    font-size:1rem;
    line-height: 1.6rem;
    letter-spacing: 0.02rem;
    span {
      font-size:2rem;
      color:#ccc;
      font-style: italic;
    }
  }
  .user-wrap {
    padding:20px;
    img {
      width:50px;
      height:50px;
      margin-top:10px;
      border-radius: 100%;
      background: #fff;
      border-left:1px solid $secondary-color;
      border-right:1px solid $secondary-color;
      border-top:1px solid #fff;
      padding:5px;
      border-bottom:1px solid #fff;
    }
    .user {
      padding:10px;
    }
    .name {
      padding:2px;
      font-size:0.9rem;
    }
    .course {
      font-size: 0.8rem;
    }
  }
}
.page-bottom {
  background: $secondary-color;
  color:#fff;
  .page-bottom__panel{
    padding:100px 0;
  }
  .actions {
    position: relative;
    top:-40px;
    .btn {
      margin-right:10px;
      width:150px;
    }
  }
}
</style>
