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
        @include MQ($breakpoint-md){
            font-size:0.8rem;
            padding:18px 5px;
            font-weight:500;
        }
    }
    a.active{
        color:$secondary-color;
        font-weight:500;
        border-bottom:3px solid $secondary-color;
        background:rgba(0,0,0,0.01)
    }
}

</style>
