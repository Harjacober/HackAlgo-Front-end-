<template>
    <PrimaryCard class="code-editor__card">
        <div class='code-editor__top'></div>
        <div class="code-editor">
        </div>
    </PrimaryCard>
</template>

<script>
import PrimaryCard from '@/components/Card/PrimaryCard.vue';

export default {
  name: 'code-editor',
  components: {
    PrimaryCard,
  },
};

</script>

<style lang="scss" scoped>
.code-editor__card{
    margin-top:50px;
    .code-editor__top{
        min-height: 100px;
        background:#fff;
    }
    .code-editor{
        min-height:400px;
        border-radius:0 0 5px 5px;
        background-color: #1c2434;
    }
}
</style>
