<template>
    <router-link :to="to" class="btn link-button ripple" :class='(type)? type : "primary"'>
    <slot />
    </router-link>
</template>
<script>
export default {
    name: 'link-button',
    props: {
        to: {
            type: String,
            default: '',
        },
        type: String,
    },
};
</script>

<style lang="scss">

.link-button{
    padding:10px 20px;
    box-shadow:0 5px 10px 0 rgba(0,0,0,0.1);
    font-weight:600;
    font-size:0.8rem;
    letter-spacing:0.04rem;
    color:#fff;
    font-weight:500;
    opacity:1;
    transition:0.3s;
    i{
        font-size:1.2rem;
        padding-right:5px;
    }
    &.primary{
        background:$primary-color;
    }
    &.secondary{
        background:$secondary-color;
    }
    &.white{
        background: #fff;
        color:$secondary-color;
        &:hover{
            box-shadow:0 10px 18px 0 rgba(0,0,0,0.2);
            background: #000;
        }
    }
    &:hover{
        box-shadow:0 10px 18px 0 rgba(0,0,0,0.2);
        background: #34b452;
    }
}
</style>
