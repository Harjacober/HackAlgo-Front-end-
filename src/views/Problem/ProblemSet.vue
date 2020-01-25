<template>
  <Layout pageName="Problem Set">
    <div class="problems">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <PrimaryCard classNames='problem-card'>
            <p class='level'> Dificulty: <span>5.0  </span></p>
            <h3 class='title'> Robinson Crusoe </h3>
            <ul class='tags'>
              <li>
                <a href="#"> Trees</a>
              </li>
              <li>
                <a href="#"> Dst</a>
              </li>
              <li>
                <a href="#"> array</a>
              </li>
            </ul>
            <LinkButton type="secondary" to='/problem-set/es345-678-e92/solve'> Solve Problem </LinkButton>
          </PrimaryCard>
        </div>

         <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <PrimaryCard classNames='problem-card'>
            <p class='level'> Dificulty: <span>5.0  </span></p>
            <h3 class='title'> Robinson Crusoe </h3>
            <ul class='tags'>
              <li>
                <a href="#"> Trees</a>
              </li>
              <li>
                <a href="#"> Dst</a>
              </li>
              <li>
                <a href="#"> array</a>
              </li>
            </ul>
            <LinkButton type="secondary" to='/problem-set/es345-678-e92/solve'> Solve Problem </LinkButton>
          </PrimaryCard>
        </div>

         <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <PrimaryCard classNames='problem-card'>
            <p class='level'> Dificulty: <span>5.0  </span></p>
            <h3 class='title'> Robinson Crusoe </h3>
            <ul class='tags'>
              <li>
                <a href="#"> Trees</a>
              </li>
              <li>
                <a href="#"> Dst</a>
              </li>
              <li>
                <a href="#"> array</a>
              </li>
            </ul>
            <LinkButton type="secondary" to='/problem-set/es345-678-e92/solve'> Solve Problem </LinkButton>
          </PrimaryCard>
        </div>

         <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <PrimaryCard classNames='problem-card'>
            <p class='level'> Dificulty: <span>5.0  </span></p>
            <h3 class='title'> Robinson Crusoe </h3>
            <ul class='tags'>
              <li>
                <a href="#"> Trees</a>
              </li>
              <li>
                <a href="#"> Dst</a>
              </li>
              <li>
                <a href="#"> array</a>
              </li>
            </ul>
            <LinkButton type="secondary" to='/problem-set/es345-678-e92/solve'> Solve Problem </LinkButton>
          </PrimaryCard>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Layout from '@/components/Layout/Layout.vue';
import LinkButton from '@/components/Button/LinkButton.vue';

export default {
  name: 'problem-set',
  components: {
    Layout,
    PrimaryCard,
    LinkButton,
  },
};

</script>

<style lang="scss" scoped>
.problem-card{
  padding:25px 20px;
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
          padding:5px 8px;
          margin-right:5px;
          margin-top:-2px;
          display:inline-block;
          border-radius: 100%;
          color:rgb(163, 162, 162);
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
