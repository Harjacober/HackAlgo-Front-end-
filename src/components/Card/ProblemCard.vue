<template>
     <PrimaryCard classNames='problem-card'>
        <router-link :to='item.url'>
            <p class='level'> Dificulty: <span>{{ item.dificulty }}</span></p>
            <h3 class='title'> {{ item.title }} </h3>
            <ul class='tags'>
                <li v-for="tag in item.tags" :key='tag'>
                    <a href="#"> {{ tag }}</a>
                </li>
            </ul>
        </router-link>
        <LinkButton type="secondary" :to='item.url'> Solve Problem </LinkButton>
    </PrimaryCard>
</template>

<script>
import PrimaryCard from './PrimaryCard.vue';
import LinkButton from '../Button/LinkButton.vue';

export default {
    name: 'problem-card',
    components: {
        PrimaryCard,
        LinkButton,
    },
    props: {
        classNames: {
            type: String,
            default: '',
        },
        item: {
            type: Object,
            default: () => { },
        },
    },
};
</script>

<style scoped lang="scss">
.problem-card{
    padding:25px 20px;
    transition: 0.5s;
    &:hover{
        background: rgb(245, 245, 245);
    }
    .title{
        font-size: 1.4rem;
        color:#000;
        font-weight:500;
    }
    .level{
        padding-top:10px;
        font-size:0.7rem;
        color:#777;
        font-weight:500;
        span{
            background: #eee;
            padding:1px 8px;
            margin-right:5px;
            margin-top:-2px;
            display:inline-block;
            border-radius: 5px;
            color:rgb(128, 126, 126);
            }
    }
    .tags{
        padding:10px 0;
        li {
        display:inline-block;
        a{
            padding:5px 10px;
            font-size:0.6rem;
            letter-spacing: 0.03rem;
            display:inline-block;
            background:#eee;
            font-weight:500;
            text-transform: uppercase;
            transition: 0.4s;
            border-radius:5px;
            margin-right:5px;
            &:hover{
            background: rgb(192, 190, 190)
            }
        }
        }
    }
}
</style>
