<template>
    <button class="btn button ripple" :disabled="isLoading" :class='(type)? type : "primary"' @click='$emit("click")' v-bind="$attrs">
        <clip-loader :loading="isLoading" size="16px"></clip-loader>
        <span v-if="!isLoading"><slot></slot></span>
    </button>
</template>
<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

export default {
    name: 'p-button',
    components: {
        ClipLoader,
    },
    props: {
        to: {
            type: String,
            default: '',
        },
        type: String,
        isLoading: {
            type: Boolean,
            default: false,
        },
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
    transition:0.5s;
    i{
        font-size:1.2rem;
        padding-right:5px;
    }
    &.primary{
        background:$primary-color;
        border:1px solid $primary-color;
        &:hover{
            box-shadow:0 10px 18px 0 rgba(0,0,0,0.2);
            opacity: 0.8;
            color:$secondary-color;
        }
    }
    &.secondary, &.filled{
        background:$secondary-color;
        border:1px solid $secondary-color;
        &:hover{
            box-shadow:0 10px 18px 0 rgba(0,0,0,0.2);
            opacity: 0.8;
            color:#fff;
        }
    }
    &.white{
        background: #fff;
        color:$secondary-color;
        border:1px solid #fff;
        &:hover{
            box-shadow:0 10px 18px 0 rgba(0,0,0,0.2);
            background: #000;
            border:1px solid #000;
        }
    }
    &.outlined{
        color:$secondary-color;
        background:#fff;
        border:1px solid $secondary-color;
        &:hover{
           color:#fff;
           background:$secondary-color;
        }
    }
}

.button.outlined:disabled {
    width:120px;
    &:hover {
        background: none;
        color:$secondary-color;
        box-shadow: none;
    }
}
.button:disabled {
    width:120px;
}
</style>
