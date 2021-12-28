<template>
  <div class="news-wrap">
    <!-- :style="{ backgroundImage: `url(${require('@/assets/imgs/news/banner.jpg')})` }" -->
    <div class="banner" v-lazy:background-image="require('@/assets/imgs/news/banner.jpg')"></div>

    <div class="news">
      <div class="title">新闻中心</div>

      <router-link :to="'/news-detail/' + newsItem.id" v-for="newsItem in newsList" :key="newsItem.id">
        <div class="news-item">
          <!-- :style="{ backgroundImage: `url(${newsItem.imgUrl})` }" -->
          <div class="left-img" v-lazy:background-image="newsItem.imgUrl" ></div>
          <div class="content">
            <div class="title">{{ newsItem.title }}</div>
            <div class="date">
              <i class="iconfont">&#xe74b;</i>
              &nbsp;{{ newsItem.date }}&nbsp;&nbsp;&nbsp;{{ newsItem.week }}
            </div>
            <div class="text" v-html="newsItem.text"></div>
          </div>
        </div>
      </router-link>

      <div class="pagination">
        <div class="first-page" @click="toFirstPage">首页</div>
        <el-pagination layout="prev, pager, next" :current-page="currentPage" :total="totalCount" :page-size="pageSize"> </el-pagination>
        <div class="last-page" @click="toLastPage">尾页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      newsList: [
        {
          id: 1,
          title: '重庆医科大学赵勇教授一行到比力星球调研，达成多项合作意向',
          date: '2021-11-30',
          week: '星期二',
          text: '幼儿膳食，营养中国。随着国家对0-3岁托育行业的重视程度逐年加深，托育行业的朝阳发展已然是大势所趋。<br>11月30日，重庆医科大学公共卫生与管理学院教授、硕士生导师、注册营养师赵勇教授及其硕士生团队，佰膳社区营养食堂的负责人兼营养师李剑锋，王婧一起到访比力星球展开深入调研，比力星球创始团队成员乔宝亮、胡翠芳、执行园长黎欢等参与交流.....',
          imgUrl: require('@/assets/imgs/news/news1.png'),
        },
      ],
      pageSize: 10,
      totalCount: 20,
      currentPage: 1,
    }
  },
  methods: {
    toFirstPage() {
      this.currentPage = 1
    },
    toLastPage() {
      this.currentPage = Math.ceil(this.totalCount / this.pageSize)
    },
  },
}
</script>

<style lang="less">
.banner {
  padding-top: 26.077812828%;
  background-size: cover;
  background-position: center;
}
.news {
  width: 1045px;
  margin: auto;

  > .title {
    font-size: 40px;
    font-weight: bold;
    color: #96ca3f;
    text-align: center;
    margin-top: 107px;
  }

  .news-item {
    display: flex;
    padding: 80px 0;
    border-bottom: 2px solid rgb(241, 241, 241);

    .left-img {
      flex: 0 0 345px;
      height: 260px;
      background-position: center;
      background-size: cover;
    }

    .content {
      margin-left: 63px;

      .title {
        font-size: 20px;
        color: #252525;
        margin: 10px 0;
      }

      .date {
        font-size: 14px;
        color: #666;
        margin-bottom: 20px;

        i {
          font-size: 18px;
        }
      }

      .text {
        font-size: 16px;
        color: #b4b4b4;
        line-height: 24px;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #333;
    margin-top: 112px;
    margin-bottom: 130px;

    .first-page {
      margin-right: 43px;
      cursor: pointer;
    }
    .last-page {
      margin-left: 43px;
      cursor: pointer;
    }

    .btn-prev .el-icon,
    .btn-next .el-icon {
      font-size: 22px;
    }

    .el-pager li {
      color: #333;
      font-size: 22px;
      padding: 0 24px;
    }

    .el-pager li.active {
      color: #96ca3f;
    }
  }
}
</style>
