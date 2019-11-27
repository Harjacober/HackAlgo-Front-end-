<template>
  <div class="home">
    <section class="hero gen-pad flex align-items-center justify-content-space-between col-lg-6">
      <div class="flex column nowrap hero-texts">
        <p>We believe<br>The future is<br> Fast and smart.</p>
        <div class="flex nowrap mar-tb-15">
          <router-link to="/home">Login</router-link>
          <router-link to="/home" class="su">Sign Up</router-link>
        </div>
      </div>
      <img src="../assets/img/hero.svg" alt="hero image">
    </section>
    <section class="flex col-lg-6 align-items-center gen-pad mar-tb-30">
      <img class="img-400" src="../assets/img/hero2.svg" alt="hero image">
      <div class="flex column nowrap pars">
        <p class="text-25"><strong>Build the skills you'll need for the future</strong></p>
        <p class="mar-tb-15">
          CodeRun enables you to quickly and effectivly develop the
          leading edge skills necessary to succeed in enterprise and empower communities.
          <!-- eslint-disable-next-line -->
          Experience in any industry sector teaches us that workplace norms, performance standards, skill set relevance, knowledge requirements and business strategy are all relative! For this reason, Buildfutureskills.com has been developed!
          <br>
          <!-- eslint-disable-next-line -->
        </p>
      </div>
    </section>
    <section
    class="flex nowrap align-items-center
    justify-content-space-between col-lg-6 gen-pad survey mar-tb-30">
      <div class="flex column nowrap">
        <p class="text-25"> <strong>2020 Student Developer Skill Survey</strong> </p>
        <span>
          <router-link to="/home">Take the survey</router-link>
        </span>
      </div>
      <img src="../assets/img/Devskill.png" alt="">
    </section>
  </div>
</template>
<style lang="scss" scoped>
.survey {
  background: #e7e7e7;
  a {
    background: #24292e;
    color: #ffffff;
    padding: 8px 17px;
    margin: 20px 0;
    display: inline-block;
  }
  img {
    height: 250px;
    object-fit: contain;
  }
}
.pars {
  width: 500px;
  margin-left: 100px;
}
.hero {
  background: #24292e;
  height: calc(100vh - 60px);
  .hero-texts {
    a {
      padding: 5px 15px;
      margin-right: 15px;
      color: #ffffff;
      border: 1px solid #ffffff;
    }
    a.su {
        background: #ffffff;
        color: #24292e;
        font-weight: bold;
      }
  }
  img {
    width: 600px;
    object-fit: cover;
  }
  p {
    color: #ffffff;
    font-size: 40px;
    font-family: 'Nova Mono', monospace;
  }
}
</style>
<script>
export default {
  name: 'home',
};
</script>
