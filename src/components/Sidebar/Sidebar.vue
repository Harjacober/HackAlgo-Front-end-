<template>
    <div class='aside-wrapper'>
        <aside class="app-layout__sidebar ">
            <div class="app-layout-sidebar__panel sidebar-panel">
                <div class="app-layout-sidebar__top">
                    <div class="logo-container text-center">
                        <h4 class="logo"> HackAlgo. </h4>
                    </div>
                </div>
                <nav class="app-layout-sidebar__nav">
                    <ul class="nav-lists__top">
                        <li>
                            <router-link to="/dashboard"   activeclass='active' class="ripple"><i class='uil uil-home'></i> Dashboard</router-link>
                        </li>
                        <li>
                            <router-link to="/contests" class="ripple"><i class='uil uil-dice-five'></i> Contests</router-link>
                        </li>
                        <li>
                            <router-link to="/problem-set" class="ripple"><i class='uil uil-science'></i> Problem Set</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
       <div class="app-layout-mobile__sidebar" >
          <div class="backdrop" :style='sidebarMobileOverlayStyle' @click="$emit('closeSidebar')"></div>
          <div class="app-layout-mobile__sidebar__panel sidebar-panel" :style='sidebarMobileStyle' >
            <div class="app-layout-sidebar__top">
                    <div class="logo-container text-center">
                        <h4 class="logo"> HackAlgo. </h4>
                    </div>
                </div>
                <nav class="app-layout-sidebar__nav">
                    <ul class="nav-lists__top">
                        <li>
                            <router-link to="/dashboard"   activeclass='active' class="ripple"><i class='uil uil-home'></i> Dashboard</router-link>
                        </li>
                        <li>
                            <router-link to="/contests" class="ripple"><i class='uil uil-dice-five'></i> Contests</router-link>
                        </li>
                        <li>
                            <router-link to="/problem-set" class="ripple"><i class='uil uil-science'></i> Problem Set</router-link>
                        </li>
                    </ul>
                </nav>
          </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'sidebar',
    props: {
      isMobileOpen: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      sidebarMobileOverlayStyle() {
        const sidebarOverlayStyle = {};

        if (this.isMobileOpen) {
            // show overlay
            sidebarOverlayStyle.opacity = 0.4;
            sidebarOverlayStyle.visibility = 'visible';
        }

        return sidebarOverlayStyle;
      },
      sidebarMobileStyle() {
        const sidebarStyle = {};

        if (this.isMobileOpen) {
            // slide open sidebar
            sidebarStyle.transform = 'translateX(0%)';
            sidebarStyle.WebkitTransform = 'translateX(0%)';
        }

        return sidebarStyle;
      },
    },
};
</script>

<style lang="scss">
.app-layout__sidebar{
    background:$primary-color;
    position:relative;
    background: #fff;
    width:250px;
    height:100vh;
    position: fixed;
    z-index: 9999;
    @include MQ($breakpoint-md){
      display:none;
    }
    .app-layout-sidebar__panel{
      padding:10px 20px;
      position:relative;
      height:100vh;
      // background:rgba(255,255,255,0.08)
    }
}
.sidebar-panel{
  .logo-container{
      padding:0 10px;
      // color:#fff;
      margin:20px 0;
      font-weight:700;
      font-size:1.6rem;
      // border-radius:50px;
      letter-spacing:0.1rem;
      border-left:7px solid $secondary-color;
      // border-right:7px solid $secondary-color;
    }
    .app-layout-sidebar__nav{
      padding:10px 0;
      .nav-lists__bottom{
        position:relative;
        bottom:0;
      }
      li{
        display:block;
        a{
          display:block;
          // color:#fff;
          font-weight:500;
          padding:10px 16px;
          margin:5px 0;
          font-size:0.8rem;
          letter-spacing:0.01rem;
          border-radius:7px;
          transition: all 0.5s ease-in;
          i{
            font-size:1.5rem;
            position: relative;
            bottom:-1px;
            padding-right:3px;
          }

          &:hover{
            background:#eee;
          }
        }
        a.active{
          background:rgb(243, 243, 243);
          &:hover{
            background:rgb(224, 223, 223);
          }
        }
      }
    }
}
.app-layout-mobile__sidebar{
  position: relative;
  .backdrop{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 9999;
    visibility: hidden;
    background: rgb(3, 21, 29);
    opacity: 0;
    will-change: opacity;
    transition: opacity 0.233s cubic-bezier(0, 0, 0.21, 1);
  }
}
.app-layout-mobile__sidebar__panel{
    position:fixed;
    height:100%;
    background:#fff;
    overflow-y:auto;
    overflow-x:hidden;
    width:250px;
    left:0;
    top:0;
    bottom:0;
    box-shadow:0 10px 20px 0 rgba(0,0,0,.09);
    height:100vh;
    z-index: 9999;
    transition: transform .3s ease-out;
    transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1);
    transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1);
    transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1), -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1);
    transition: all 0.5s ease 0s;
        outline: none;
        will-change: transform;
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
                @include MQ($breakpoint-sm){
                    width:305px;
                }
    .app-layout-mobile__sidebar__panel{
      padding:10px 20px;
      position:relative;
      height:100vh;
      @include MQ($breakpoint-sm){
        padding:8px;
      }
    }
}
</style>
