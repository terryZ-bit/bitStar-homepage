<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <div class="logo">
        <img src="@/assets/imgs/navbar/logo.png" alt="官网logo" />
      </div>

      <!-- 导航栏列表 -->
      <div class="nav-list">
        <router-link :to="navItem.to" v-for="(navItem, navIdx) in navList" :key="navIdx" :title="navItem.name">
          <div class="nav-item">
            <div class="nav-icon">
              <img :src="navItem.iconPath" :alt="`${navItem.name}的Icon`" />
            </div>
            <div class="nav-content">
              <div class="nav-text">{{ navItem.name }}</div>
              <div class="nav-active-star" v-show="navItem.isActive">
                <i class="iconfont icon-star-fill"></i>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navList: [
        {
          name: '首页',
          iconPath: require('@/assets/imgs/navbar/1.png'),
          isActive: true,
          to: '/',
        },
        {
          name: '新闻动态',
          iconPath: require('@/assets/imgs/navbar/2.png'),
          isActive: false,
          to: '/news',
        },
        {
          name: '课程介绍',
          iconPath: require('@/assets/imgs/navbar/3.png'),
          isActive: false,
          to: '/courses',
        },
        {
          name: '师资力量',
          iconPath: require('@/assets/imgs/navbar/4.png'),
          isActive: false,
          to: '/teachers',
        },
        {
          name: '会员服务',
          iconPath: require('@/assets/imgs/navbar/5.png'),
          isActive: false,
          to: '/vip',
        },
      ],
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        const path = to.path
        this.navList.forEach((item) => {
          item.isActive = false
          if (item.to === path) item.isActive = true
        })
      },
      immediate: true,
    },
  },
}
</script>

<style lang="less">
.navbar-wrapper {
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;

  .navbar {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    // <!-- 导航栏列表 -->

    .nav-list {
      display: flex;

      .nav-item {
        display: flex;
        align-items: center;
        margin-left: 33px;
        cursor: pointer;
        height: 100%;

        .nav-icon {
          height: 35px;

          img {
            height: 100%;
          }
        }

        .nav-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          padding: 0 8px;

          .nav-text {
            color: #333;
            font-size: 18px;
          }

          .nav-active-star {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate3d(-50%, 100%, 0);
            color: rgb(254, 174, 66);
            font-size: 19px;
          }
        }
      }
    }
  }
}
</style>
