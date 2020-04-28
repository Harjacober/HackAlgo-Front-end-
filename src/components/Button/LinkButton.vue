<template>
    <span>
        <router-link :to="to" class="btn link-button" :class='classNames' v-if='!allowPageLoad'>
        <slot />
        </router-link>
        <a :href='to' class="btn link-button ripple" :class='(type)? type : "primary"'  v-if="allowPageLoad"> <slot /> </a>
    </span>
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
        allowPageLoad: Boolean,
        DisableRipple: Boolean,
    },
    computed: {
        classNames() {
            let classs = '';
            if (!this.DisableRipple) {
               classs += ' ripple';
            }
            if (this.type) {
                classs += ` ${this.type}`;
            } else {
                classs += ' primary';
            }
            return classs;
        },
    },
};
</script>

<style lang="scss">

.link-button{
    padding:10px 20px;
    box-shadow:0 5px 10px 0 rgba(0,0,0,0.1);
    font-weight:600;
    font-size:0.9rem;
    letter-spacing:0.04rem;
    color:#fff;
    font-weight:500;
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
        }
    }
}
</style>
