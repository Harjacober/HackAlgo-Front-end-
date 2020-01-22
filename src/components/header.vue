<template>
    <header class="flex flex-no-wrap w-full overflow-x-hidden justify-between px-5 lg:px-20">
        <div class="flex flex-col items-center w-full overflow-hidden flex-no-wrap
            lg:flex-row">
            <div class="logo-holder p-3">
                <p class="text-sm">HACK-ALGO</p>
            </div>
            <div class=" flex w-full overflow-x-hidden">
                <menu class="menu w-12/12 flex
                    overflow-x-scroll
                    lg:overflow-x-hidden lg:ml-20">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/home">Problemset</router-link>
                    <router-link to="/home">GYM</router-link>
                    <router-link to="/home">Rating</router-link>
                    <router-link to="/home">Help</router-link>
                </menu>
            </div>
        </div>
        <div>
            <a class="profile-menu">
                <!-- <img src="../assets/img/user-circle-solid.svg" alt=""> -->
            </a>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header {
    background: $primary-color;
    min-height: 50px;
}
.logo-holder {
    color: #FFF;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    text-transform: uppercase;
    ::after {
        content: '';
        display: inline-block;
        width: 3px; height: 15px;
        background-color: rgb(3, 224, 114);
        margin-left: 5px;
    }
}
.menu {
    a {
        padding: 5px 15px;
        color: #e1eaff;
        font-size: 15px;
        text-transform: capitalize;
    }
    a:hover {
        color: #FFF;
    }
}
a.mobile-menu {
    color: #FFF;
    display: none;
    @media only screen and (max-width: 720px) {
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
  },
};
</script>
