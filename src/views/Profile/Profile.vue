<template>
  <Layout pageName="Profile">
    <div class="profile">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
          <PrimaryCard classNames='profile-card__left text-center profile-card'>
            <img src='/assets/myAvatar.png' class='avatar'/>
            <div class='content'>
              <h2 class='fullname text-center'> {{ user.fullname }} </h2>
              <h3 class='username'> <i class='uil uil-at'></i> {{ user.username }} </h3>
              <p class='email'><i class='uil uil-envelope'></i> {{ user.email }}</p>
            </div>
          </PrimaryCard>
        </div>
        <div class="w-full md:w-1/2 lg:w-3/4 xl:w-3/4">
          <PrimaryCard classNames='profile-card__right profile-card'>
            <div class='division'>
              <h3 class='heading'>Overview</h3>
              <div class='content flex flex-wrap'>
                  <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 stats-card__wrapper">
                      <PrimaryCard classNames='stats-card text-center'>
                        <p class='stats-title'>Solved Challenges</p>
                        <h3 class='stats-number'> 100 + </h3>
                      </PrimaryCard>
                  </div>
                  <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 stats-card__wrapper">
                    <PrimaryCard classNames='stats-card text-center'>
                      <p class='stats-title'>Contests</p>
                      <h3 class='stats-number'> 100 + </h3>
                    </PrimaryCard>
                  </div>
              </div>
            </div>
            <div class='division '>
              <h3 class='heading'>Problem Set</h3>
              <div class='content'>
                  <ul class='list'>
                  <li >
                    <a href='#' >
                      <span><i class='uil uil-arrow'></i></span> Robinson Crusoe
                    </a>
                  </li>
                  <li >
                    <a href='#'>
                      <span><i class='uil uil-arrow'></i></span> String reverse
                    </a>
                  </li>
                  <li >
                    <a href='#'>
                      <span><i class='uil uil-arrow'></i></span> Dynamic array manipualtion
                    </a>
                  </li>
                  <li >
                    <a href='#'>
                      <span><i class='uil uil-arrow'></i></span> ZipZap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='division'>
              <h3 class='heading'>Contests</h3>
              <div class='content'>
                <ul class='list'>
                  <li >
                    <a href='#' >
                      <span>(*)</span> Google uplabs challenge
                      <p class='time'>January , 15th, 2020 - 4hrs</p>
                    </a>
                  </li>
                  <li >
                    <a href='#'>
                      <span>(*)</span> Aganifa challenge
                      <p class='time'>January , 15th, 2020 - 4hrs</p>
                    </a>
                  </li>
                  <li >
                    <a href='#'>
                      <span>(*)</span> hashmap 2020
                      <p class='time'>January , 15th, 2020 - 4hrs</p>
                    </a>
                  </li>
                  <li >
                    <a href='#'>
                      <span>(*)</span> Futa Supercoder club
                      <p class='time'>January , 15th, 2020 - 4hrs</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </PrimaryCard>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import PrimaryCard from '@/components/Card/PrimaryCard.vue';
import Layout from '@/components/Layout/Layout.vue';

export default {
  name: 'profile',
  components: {
    Layout,
    PrimaryCard,
  },
  data() {
    return {
      user: {
        fullname: 'Akinola Ayodeji',
        username: 'dejavuakinola1234',
        email: 'akinayodeji4all@gmail.com',
      },
    };
  },
};

</script>

<style lang="scss" scoped>
.profile-card{
  padding:20px;
}
.profile-card__left{
  min-height:400px;
  .avatar{
    border-radius:100%;
    display: inline-block;
  }
  .content{
    text-align: left;
  }
  .fullname{
    font-size:1.3rem;
    font-weight:600;
    margin-top: 20px;
    font-family: $font-family-monserrat
  }
  .username, .email{
    font-family: $font-family-monserrat;
    font-size:0.8rem;
    font-weight:500;
    color:rgb(88, 88, 88);
  }
  .email{
    color:rgb(105, 103, 103);
  }
  .uil{
    padding:5px 0;
    margin-right:2px;
    display:inline-block;
    border-radius: 100%;
    font-size:1.2rem;
    position: relative;
    top:2px;
    color:rgb(184, 179, 179)
  }
}
.profile-card__right{
  .division{
    .heading{
      font-size:1.3rem;
    }
    .stats-card__wrapper{
      &:last-child{
        .stats-card{
          background: $secondary-color;
          color:#fff;
        }
      }
    }
    .stats-card{
      padding:40px;
      color:$secondary-color;
    }
    .stats-title{
      padding:4px;
      font-size:0.8rem;
      // color:#666;
    }
    .stats-number{
      font-size:1.5rem;
      font-weight:700;
      padding:5px 0;
    }
    .content{
      min-height: 200px;
      li{
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
          .time{
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
    }
  }
}
</style>
