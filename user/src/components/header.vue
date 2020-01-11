<template>
    <header class="flex nowrap gen-pad col-lg-6 justify-content-space-between">
        <div class="flex align-items-center nowrap">
            <a @click.prevent="toggleMenu" class="mobile-menu">
                <i class="material-icons">menu</i>
            </a>
            <div class="logo-holder">
                <!-- <img class="logo" src="../assets/img/logo.png" alt=""> -->
                <p>StudentHack</p>
            </div>
            <div>
                <menu v-bind:class="{ mobile: isMobile }" class="menu flex">
                    <router-link to="/home">Home</router-link>
                    <router-link to="/home">Top</router-link>
                    <router-link to="/home">Problemset</router-link>
                    <router-link to="/home">GYM</router-link>
                    <router-link to="/home">Rating</router-link>
                    <router-link to="/home">Help</router-link>
                </menu>
            </div>
        </div>
        <div>
            <a class="profile-menu">
                <img src="../assets/img/user-circle-solid.svg" alt="">
            </a>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header {
    background: #24292e;
    min-height: 50px;
}
.logo-holder {
    color: #FFF;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    ::after {
        content: '';
        display: inline-block;
        width: 10px; height: 15px;
        background-color: rgb(3, 224, 114);
        margin-left: 5px;
    }
}
.menu {
    margin-left: 50px;
    a {
        padding: 5px 15px;
        color: #e1eaff;
        font-size: 14px;
        text-transform: capitalize;
    }
    a:hover {
        color: #FFF;
    }
}
a.profile-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px; height: 45px;
    border-radius: 50%;
    color: #fff;
    position: relative;
    img{
        width: 30px; height: 30px;
    }
}
a.mobile-menu {
    color: #FFF;
    display: none;
    @media only screen and (max-width: 720px) {
        display: flex;
    }
}
@media only screen and (max-width: 720px) {
  .menu {
      display: none;
      position: absolute;
      top: 55px; left: 0;
      padding: 20px;
      margin: 0;
      background: #20242d;
      flex-flow: column nowrap;
      width: 100%;
  }
  .menu.mobile {
      display: flex;
  }
}
</style>
<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    toggleMenu() {
      if (this.isMobile) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    },
  },
};
</script>
