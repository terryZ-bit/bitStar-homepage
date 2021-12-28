<template>
  <div class="news-detail-wrap">
    <div class="news-detail">
      <div class="title">
        {{ news.title }}
      </div>
      <div class="date"><i class="iconfont">&#xe74b;</i>&nbsp; {{ news.date }}&nbsp;{{ news.week }}</div>
      <div class="text" v-html="news.text"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: {
        title: '重庆医科大学赵勇教授一行来到比力星球，达成多项合作意向',
        date: '2021-11-30',
        week: '星期二',
        text: 'sdfkjsdklfjksdjfkj',
      },
    }
  },
}
</script>

<style lang="less" scoped>
.news-detail {
  width: 1000px;
  margin: auto;

  .title {
    margin-top: 121px;
    font-size: 26px;
    color: #252525;
  }
  .date {
    margin-top: 17px;
    font-size: 18px;
    color: #666;
    display: flex;
    align-items: center;

    i {
      font-size: 23px;
    }
  }
  .text {
    margin-top: 79px;
    font-size: 16px;
    color: #333;

    img {
      width: 657px;
      margin: 0 auto;
      text-align: justify;
    }
  }
}
</style>
