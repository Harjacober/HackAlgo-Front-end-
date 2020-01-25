<template>
    <div class="primary-card" :class="classNames">
        <slot> </slot>
    </div>
</template>

<script>
export default {
    name: 'primary-card',
    props: {
        classNames: {
            type: String,
            default: '',
        },
    },
};
</script>

<style scoped lang="scss">
.primary-card{
    background:#fff;
    border-radius:6px;
    box-sizing:border-box;
    margin:10px;
    box-shadow:0 3px 6px 0 rgba(0,0,0,0.05);
    min-height:150px;
}
</style>
