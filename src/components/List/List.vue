<template>
  <li class='item-list'>
    <router-link :to='item.url'>
      <div class='flex'>
        <div class=''>
          <span v-if="item.tag">#</span>
          <span v-if="item.contest">(*)</span>
          <span v-if="item.code"><i class='uil uil-arrow'></i></span>
        </div>
        <div class=''>
          <p class='date' v-if='item.starttime'>{{ item.starttime | moment('dddd, MMMM Do YYYY')}} - {{ item.duration | duration('as', 'hours') }}hrs</p>
          {{ item.text }}
          <p class='rank' v-if='item.rank'>Rank: #{{ item.rank }}</p>
        </div>
       </div>
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
        .rank {
          font-size:0.8rem;
          font-weight:700;
          color:$secondary-color;
        }
        .date{
          color:rgb(88, 86, 86);
          font-size: 0.6rem;
          letter-spacing: 0.03rem;
        }
        &:hover{
          background: #eee;
        }
      }
}
</style>
