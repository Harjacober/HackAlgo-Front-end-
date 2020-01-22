<template>
   <nav class="settings-nav">
            <ul class="flex flex-wrap">
                <li class="w-1/2">
                    <router-link to="/settings/basic-information" > <i class='uil uil-user'></i> Basic Infomation</router-link>
                </li>
                <li class="w-1/2">
                    <router-link to="/settings/change-password"> <i class='uil uil-padlock'></i> Change password</router-link>
                </li>
            </ul>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>

.settings-nav{
    // padding:7px 0px;
    background:#fff;
    border-radius:6px;
    margin:10px 0;
    box-shadow:0 3px 5px 0 rgba(0,0,0,0.07);
    min-height:50px;
    background:#fff;
    li{
        position:relative;
    }
    a{
        padding:18px;
        font-size:1rem;
        display:block;
    }
    a.active{
        color:$primary-color;
        font-weight:500;
        border-bottom:3px solid $primary-color;
        background:rgba(0,0,0,0.01)
    }
}

</style>
