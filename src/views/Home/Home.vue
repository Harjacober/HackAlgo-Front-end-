<template>
  <PageLayout>
    <div class='hero'>
      <div class='flex flex-wrap container middle hero-panel md:flex-row-reverse lg:flex-row-reverse'>
        <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
          <div class='hero-bg animate-me' data-transition='fadeInRight'></div>
        </div>
        <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
          <div class='hero-content'>
            <h3 class="heading animate-me" data-transition='pulse'> Learning how to solve algorithms just got easier</h3>
            <p class='summary'>
              Understanding computer algorithms and data structures doesn’t have to be complicated. CodeGees helps you learn the intricacies of designing efficient algorithms, minus the complications.
            </p>
            <div class='hero-actions'>
              <LinkButton to='/login' type='secondary'> Login </LinkButton>
              <LinkButton to='/register' type='white'> Get Started </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class='about-section'>
      <div class='container about-section__panel'>
        <div class='flex flex-wrap'>
          <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
             <div class='about-bg animate-me' data-transition='fadeInLeft'>
                <img src='../../assets/svg/about.svg'/>
              </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div class='about'>
              <div class='container-top'>
                <h1 class='heading'> About CodeGees</h1>
                <p class='sub-heading'> <strong>ALGORITHMS. PROBLEM SOLVING. CONTESTS</strong></p>
              </div>
              <div class='text'>
                  CodeGees is a developer community managed by a team of passionate techies. CodeGees wishes to bridge the disconnect between student developers and employment opportunities.
                  To gain an offer in reputable tech companies, candidates are required to pass the technical interview which is dominantly a test of core knowledge in data structures and algorithms.
                  The main goal of CodeGees is to equip students with the skills necessary to ace every technical interview, and the community aims to achieve this by providing students with detailed resources.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='the-why'>
      <div class='the-why__panel container'>
        <div class='container-top text-center'>
          <h1 class='heading'> Why codeGees Matters.</h1>
          <p class='sub-heading'>Three(3) simple reasons on why we matter. </p>
        </div>
        <div class='flex flex-wrap'>
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3 '>
            <PrimaryCard classNames='the-why__card animate-me' data-transition='fadeInUp'>
              <p class='icon-container li-orange'>
                <i class="uil uil-book-alt"></i>
              </p>
              <p class='text'>
                 Gain first-hand access to relevant lectures on data structures and algorithms taught by competent tutors
              </p>
            </PrimaryCard>
          </div>
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3'>
            <PrimaryCard classNames='the-why__card animate-me' data-transition='fadeInUp'>
               <p class='icon-container li-green'>
                <i class="uil uil-edit-alt"></i>
              </p>
              <p class='text'>
                 Enjoy free resume-writing and mock-interview sessions as a community member
              </p>
            </PrimaryCard>
          </div>
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3'>
            <PrimaryCard classNames='the-why__card animate-me' data-transition='fadeInUp'>
               <p class='icon-container li-red'>
                <i class="uil uil-brackets-curly"></i>
              </p>
              <p class='text'>
                 Access well-curated algorithmic problems rightly modelled around real-life scenarios and what is to come in your technical interviews
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
          <p class='sub-heading'>codeGees plays an important problem solving role for aspiring problem solver </p>
        </div>
        <div class='features-content'>
          <div class='flex flex-wrap feature'>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card__bg first animate-me' data-transition='fadeInLeft'>
                <img src='../../assets/svg/data.svg'/>
              </div>
            </div>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card'>
                <h2 class='heading'>
                   Algorithms & Data sructures
                </h2>
                <p class='text'>
                 Over 200 well-curated problems ranging from basic to advanced algorithms & data structures problems.
                </p>
                <LinkButton to='/problem-set' type='secondary'>
                  <i class="uil uil-brackets-curly"></i> Problem Set
                </LinkButton>
              </div>
            </div>
          </div>
           <div class='flex flex-wrap md:flex-row-reverse lg:flex-row-reverse feature'>
             <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card__bg first animate-me' data-transition='fadeInRight'>
                <img src='../../assets/svg/contests.svg'/>
              </div>
            </div>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card'>
                <h2 class='heading'>
                  Periodic contests participation
                </h2>
                <p class='text'>
                 Participate in periodic contests to test your knowledge, increase your rating, and get tailored information as a top-rated member
                </p>
                <LinkButton to='/contests' type='secondary'>
                  <i class="uil uil-dice-five"></i> Contests
                </LinkButton>
              </div>
            </div>
          </div>
          <div class='flex flex-wrap feature'>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card__bg animate-me' data-transition='fadeInLeft'>
                <img src='../../assets/svg/job.svg'/>
              </div>
            </div>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 '>
              <div class='feature-card'>
                <h2 class='heading'>
                   First-hand Internship opportunities
                </h2>
                <p class='text'>
                 Explore first-hand information about internship opportunities on the Community Feeds section
                </p>
                <LinkButton to='/slack.com' __blank type='secondary'>
                  <i class="uil uil-slack"></i> Join Community
                </LinkButton>
              </div>
            </div>
          </div>
          <div class='flex flex-wrap md:flex-row-reverse lg:flex-row-reverse feature'>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
              <div class='feature-card__bg animate-me' data-transition='fadeInRight'>
                <img src='../../assets/svg/code.svg'/>
              </div>
            </div>
            <div class='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 '>
              <div class='feature-card'>
                <h2 class='heading'>
                  Programming languages
                </h2>
                <p class='text'>
                  Our solutions, contests and algorithm questions supports some of the top 10 programming languages.
                </p>
                <div class='flex flex-wrap text-center'>
                  <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3 animate-me lang-wrap' data-transition='fadeInUp'>
                    <PrimaryCard classNames='lang text-center'>
                      <i class="devicon-go-plain"></i>
                      Go
                    </PrimaryCard>
                  </div>
                  <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3 animate-me lang-wrap' data-transition='fadeInUp'>
                    <PrimaryCard classNames='lang text-center'>
                      <!-- in your body -->
                      <i class="devicon-python-plain"></i>
                      Python
                    </PrimaryCard>
                  </div>
                  <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3 animate-me lang-wrap' data-transition='fadeInUp'>
                    <PrimaryCard classNames='lang text-center'>
                      <i class="devicon-javascript-plain"></i>
                      Javascript
                    </PrimaryCard>
                  </div>
                  <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3 animate-me lang-wrap' data-transition='fadeInUp'>
                    <PrimaryCard classNames='lang text-center'>
                      <i class="devicon-cplusplus-plain"></i>
                      C++
                    </PrimaryCard>
                  </div>
                   <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3 animate-me lang-wrap' data-transition='fadeInUp'>
                    <PrimaryCard classNames='lang text-center'>
                      <i class="devicon-c-plain"></i>
                      C
                    </PrimaryCard>
                  </div>
                  <div class='w-full md:w-1/3 lg:w-1/3 xl:w-1/3 animate-me lang-wrap' data-transition='fadeInUp'>
                    <PrimaryCard classNames='lang text-center'>
                      <i class="devicon-php-plain"></i>
                      PHP
                    </PrimaryCard>
                  </div>
                </div>
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
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3 animate-me testimonial-card__wrap' data-transition='fadeInUp'>
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
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3 animate-me testimonial-card__wrap' data-transition='fadeInUp'>
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
          <div class='w-full md:w-1/2 lg:w-1/3 xl:w-1/3 animate-me testimonial-card__wrap' data-transition='fadeInUp'>
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
          <h1 class='heading animate-me' data-transition='pulse'> Like what you see?</h1>
          <p class='sub-heading'>You are few steps away from mastering problem solving</p>
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
  mounted() {
    const config = {
      rootMargin: '50px 20px 75px 30px',
      threshold: [0, 0.25, 0.75, 1],
    };
    const images = document.querySelectorAll('.animate-me');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { transition } = entry.target.dataset;
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add(transition);
        } else {
          entry.target.classList.remove(transition);
        }
      });
    }, config);

    images.forEach((image) => {
      observer.observe(image);
    });
  },
};
</script>

<style lang='scss'>
@import '@/assets/scss/_animations.scss';

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
      font-size:1.5rem;
      padding-top:0;
    }
    &.pulse {
      animation: pulse .7s ease-out;
    }
  }
  .summary {
    padding: 20px 0;
    font-size:1rem;
    line-height: 1.6rem;
    font-weight: 400;
     @include MQ($breakpoint-md) {
      font-size:0.9rem;
    }
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
      height: 30vh;
      position: relative;
      bottom:-50px;
    }
    &.fadeInRight {
      animation: fadeInRight .7s ease-out;
    }
  }
}
.about-section{
  background: $secondary-color;
  color:#fff;
  .about-section__panel{
    padding:150px 0;
    .container-top{
      padding-bottom: 5px;
    }
    .about {
      margin: 0 auto;
      max-width: 460px;
    }
    .text {
       padding:0 40px;
    }
    .about-bg {
      min-height: 200px;
      img {
        width:100%;
        height: auto;
      }
      @include MQ($breakpoint-md) {
        margin: 0 20px;
      }
      &.fadeInLeft {
        animation: fadeInLeft .7s ease-out;
      }
    }
  }
}
.the-why {
  margin-bottom:100px;
  .the-why__card{
    padding:80px 30px;
    border-radius: 20px;
    min-height: 400px;
    &.fadeInUp {
      animation: fadeInUp .7s ease-out;
    }
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
  .feature {
    margin-bottom: 100px;
    @include MQ($breakpoint-md) {
       margin-bottom: 0;
    }
  }
  .feature-card {
     padding:80px 30px;
     margin:0 30px;
     max-width: 460px;
      @include MQ($breakpoint-md) {
       margin: 0;
      }
     .heading {
       font-family: $font-family-segoe;
       font-size: 2rem;
       @include MQ($breakpoint-md) {
          font-size:1.5rem;
        }
     }
     .text {
       padding:20px 0;
       font-size: 1rem;
        @include MQ($breakpoint-md) {
          font-size:0.9rem;
        }
     }
     .lang-wrap {
        &.fadeInUp {
          animation: fadeInUp .7s ease-out;
        }
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
    min-height: 200px;
    img {
      width:100%;
      height: auto;
    }
    @include MQ($breakpoint-md) {
       margin: 0 20px;
    }
    &.fadeInLeft {
      animation: fadeInLeft .7s ease-out;
    }
    &.fadeInRight {
      animation: fadeInRight .7s ease-out;
    }
  }
}

.testimonials {
   margin-bottom: 100px;
   .testimonial-card__wrap {
     &.fadeInUp {
      animation: fadeInUp .7s ease-out;
    }
  }
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
  max-width: 1300px;
  margin: 0 auto;
  box-shadow: 0 40px 20px 0 rgba(0,0,0,0.09);
  border-radius: 10px;
  box-shadow: 0 59px 51px -34px rgba(0,0,0,0.2);
  .page-bottom__panel{
    padding:40px 0;
  }
  .heading {
    &.pulse {
      animation: pulse .7s ease-out;
    }
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
