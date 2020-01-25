<template>
    <header class="header">
        <div class="app-header">
            <div class="app-header__panel">
                <div class="app-header__left flex">
                    <button class="harmburger-btn btn reset-btn" @click="$emit('openSidebar')">
                        <i class='uil uil-bars'></i>
                    </button>
                    <h3 class='title' v-if='headerTitle'> {{ headerTitle }}</h3>
                    <div class='search-form flex' v-if='!headerTitle'>
                      <i class='uil uil-search search-icon'></i>
                      <input class='form-control' placeholder='Search' />
                    </div>
                </div>
                <nav class="app-header__nav to-right">
                    <ul >
                            <li class='timer list' v-if='headerTimer'>
                              <i class='uil uil-clock-three'></i>{{ headerTimer }}
                            </li>
                            <li class="profile list">
                                <div class="flex"   @click="toggleDropdown" ref="profileToggleNode">
                                    <img src="/assets/myAvatar.png" class="profile-image" alt="profile image"/>
                                    <p class="name">akinola!</p>
                                </div>
                                <dropdown
                                    :isDropdownOpen="isDropdownOpen"
                                    :styles="setStyles()"
                                    :refNode="profileToggleNode"
                                    @away= "hideDropdown"
                                >
                                <ul >
                                    <li>
                                        <router-link to="/settings"><i class="uil uil-cog"></i> Settings </router-link>
                                    </li>
                                     <li>
                                        <router-link to="/profile"><i class="uil uil-cog"></i> Profile </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/logout"><i class="uil uil-exit"></i> Logout</router-link>
                                    </li>
                                </ul>
                                </dropdown>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
import Dropdown from '../Dropdown/Dropdown.vue';

export default {
    name: 'app-header',
    components: {
        Dropdown,
    },
    data() {
        return {
            isDropdownOpen: false,
            profileToggleNode: '',
        };
    },
    props: {
        headerTitle: {
            type: String,
            default: null,
        },
         headerTimer: {
            type: String,
            default: null,
        },
    },
    mounted() {
        this.profileToggleNode = this.$refs.profileToggleNode;
    },
    methods: {
        setStyles() {
            return {
                top: '40px',
                right: '60px',
                width: '160px',
            };
        },
        goBack(event) {
            this.$router.go(-1);
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        hideDropdown() {
            this.isDropdownOpen = false;
        },
    },
};

</script>

<style lang="scss" >
.header{
  top:0;
  left:250px;
  right:0;
  width:calc(100% - 250px);
  z-index:999;
  background:#fff;
  position:fixed;
  @include MQ($breakpoint-md){
    width:100%;
    left:0;
  }
}
.app-header{
    width:100%;
    height:70px;
    position:relative;
    box-shadow:0 4px 16px 0 rgba(0,0,0,0.05);
    .app-header__panel{
      display:block;
      position:relative;
    }
    .app-header__left{
      padding:10px;
      @include MQ($breakpoint-md){
        padding:10px 5px;
      }
      .logo{
          color:#fff;
          padding:15px;
      }
      .harmburger-btn{
        padding:10px;
        border:none;
        font-size:1.5rem;
        cursor:pointer;
        display:none;
        outline:none;
        transition:0.233s cubic-bezier(0.215, 0.610, 0.355, 1);
        @include MQ($breakpoint-md){
          display:block;
        }
      }
      .title{
        padding:15px;
        font-weight: 500;
        font-size: 1.1rem;
      }
      .search-form{
        padding:5px;
        position:relative;
        @include MQ($breakpoint-md){
          display:none;
        }
        .search-icon{
          padding:17px 15px;
          position:absolute;
          left:3px;
          top:-2px;
          opacity:0.6;
        }
        .form-control{
          padding:5px 14px;
          font-size:0.8rem;
          padding-left:40px;
          color:rgb(48, 47, 47);
          font-weight:400;
          border-radius:5px;
          background:rgb(243, 243, 243);
          border: 1px solid $bg-primary-color;
          transition:.1s cubic-bezier(.4,1,.75,.9);
          &:hover{
            border:1px solid #dadada;
          }
        }
      }
    }
    .app-header__nav{
      padding:10px;
      li.list{
        display:inline-block;
        &.timer{
          letter-spacing: 0.05rem;
          font-weight:600;
          position: relative;
          top:-10px;
          box-shadow: 0 5px 20px 0 rgba(0,0,0,0.2);
          border-radius:5px;
          padding:7px 20px;
          border:1px solid $primary-color;
          background:$primary-color;
          color:#3fe065;
          .uil{
            font-size:1.1rem;
            margin-right:3px;
          }
        }
        a.link{
          display:block;
          padding:6px;
          font-size:1.5rem;
          position:relative;
          top:-10px;
          transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
          opacity:0.5;
          &:hover{
            opacity:1;
          }
        }

      }
      li.profile{
        padding:0 10px;
        border-radius:50px;
        position:relative;
        cursor:pointer;
        top:1px;
        .name{
          font-weight:400;
          font-size:0.9rem;
          padding:10px 0;
          display:block;
        }
        .profile-image{
          width:40px;
          height:40px;
          border-radius:100%;
          padding:4px;
        }
      }
    }
  }
</style>
