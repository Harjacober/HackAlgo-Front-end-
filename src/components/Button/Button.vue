<template>
    <button class="btn button ripple" :class='(type)? type : "primary"' @click='$emit("click")'>
    <slot />
    </button>
</template>
<script>
export default {
    name: 'p-button',
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

.button{
    padding:10px 20px;
    box-shadow:0 5px 10px 0 rgba(0,0,0,0.1);
    font-weight:600;
    font-size:0.9rem;
    letter-spacing:0.04rem;
    color:#fff;
    font-weight:500;
    outline: none;
    opacity:1;
    transition:0.3s;
    i{
        font-size:1.2rem;
        padding-right:5px;
    }
    &.primary{
        background:$primary-color;
        border:1px solid $primary-color;
    }
    &.secondary, &.filled{
        background:$secondary-color;
        border:1px solid $secondary-color;
    }
    &.white{
        background: #fff;
        color:$secondary-color;
        border:1px solid #fff;
        &:hover{
            box-shadow:0 10px 18px 0 rgba(0,0,0,0.2);
            background: #000;
        }
    }
    &.outlined{
        color:$secondary-color;
        background:#fff;
        border:1px solid $secondary-color;
        &:hover{
           color:#fff;
        }
    }
    &:hover{
        box-shadow:0 10px 18px 0 rgba(0,0,0,0.2);
        background: #34b452;
    }
}
</style>
