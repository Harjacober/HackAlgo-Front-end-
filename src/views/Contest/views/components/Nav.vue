<template>
   <nav class="contest-nav">
            <ul class="flex flex-wrap">
                <li class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <router-link to="/contests/ghsusis-uwuwjs8-ksksos/dashboard" > <i class='uil uil-user'></i> Dashboard</router-link>
                </li>
                <li class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <router-link to="/contests/ghsusis-uwuwjs8-ksksos/submission"> <i class='uil uil-padlock'></i> Submission</router-link>
                </li>
                <li class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
                    <router-link to="/contests/ghsusis-uwuwjs8-ksksos/scoreboard"> <i class='uil uil-padlock'></i> Scoreboard</router-link>
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

.contest-nav{
    background:#fff;
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
        color:$secondary-color;
        font-weight:500;
        border-bottom:3px solid $secondary-color;
        background:rgba(0,0,0,0.01)
    }
}

</style>
