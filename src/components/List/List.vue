<template>
  <li class='item-list'>
    <router-link :to='item.url' >
        <span v-if="item.tag">#</span>
        <span v-if="item.contest">(*)</span>
        <span v-if="item.code"><i class='uil uil-arrow'></i></span>
        {{ item.text }}
       <p class='date' v-if='item.starttime'>{{ item.starttime | moment('dddd, MMMM Do YYYY')}} - {{ item.duration | duration('as', 'hours') }}hrs</p>
    </router-link>
  </li>
</template>

<script>
export default {
    name: 'item-list',
    props: {
        item: {
            type: Object,
            default: () => { },
        },
    },
};

</script>

<style lang='scss' scoped>
li.item-list{
      display:block;
      a{
        border-bottom: 1px solid #eee;
        padding:15px 0;
        display:block;
        font-size:0.9rem;
        transition: 0.5s;
        font-weight:500;
        span{
          background: #eee;
          padding:5px 10px;
          margin-right:5px;
          margin-top:-2px;
          display:inline-block;
          border-radius: 100%;
          color:rgb(184, 179, 179);
           .uil{
              font-size:1.1rem;
              padding:2px 0;
              display:inline-block;
            }
        }
        .date{
          color:rgb(88, 86, 86);
          font-size: 0.6rem;
          letter-spacing: 0.03rem;
          margin-left:50px;
        }
        &:hover{
          background: #eee;
        }
      }
}
</style>
