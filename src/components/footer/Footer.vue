<template>
  <div class="footer-wrap">
    <!-- :style="{ backgroundImage: `url(${require('@/assets/imgs/footer/footer.png')})` }" -->
    <div class="footer-background" v-lazy:background-image="require('@/assets/imgs/footer/footer.png')">
      <div class="content">
        <div class="left">
          <div class="title">比力星球国际婴幼儿托育中心</div>
          <div class="item">
            <div class="name">联系电话<i></i></div>
            ：023-67144635
          </div>
          <div class="item">
            <div class="name">联系地址<i></i></div>
            ：重庆市渝北区福泉路49号3-1比力星球
          </div>
          <div class="item">
            <div class="name">网址<i></i></div>
            ：https://www.bilixingqiu.com
          </div>
        </div>
        <div class="right">
          <div class="account">
            <img v-lazy="require('@/assets/imgs/footer/official-account.png')" alt="微信公众号" />
            <div class="tip">微信公众号</div>
          </div>
          <div class="service">
            <img v-lazy="require('@/assets/imgs/footer/service.png')" alt="微信客服" />
            <div class="tip">微信在线客服</div>
          </div>
          <div class="map" @click="navigateToMap" title="点击查看详细地图">
            <!-- <iframe @load="translateMap" src="./map.html" frameborder="0"></iframe> -->
            <img v-lazy="require('@/assets/imgs/footer/home-map.png')" alt="地图" />
          </div>
          <!-- 跳转到图片详情页面 -->
          <a ref="mapNavigator" href="./map.html" target="_blank"></a>
        </div>
      </div>
    </div>
    <div class="footer-text">比力星球国际托育早教中心&nbsp;&nbsp;&nbsp;渝ICP备1XXXXX76号-2&nbsp;&nbsp;&nbsp;统一社会信用代码&nbsp;9XXXXXXXMA4L654996</div>
  </div>
</template>

<script>
export default {
  methods: {
    // 跳转地图页面
    navigateToMap() {
      const mapNavigator = this.$refs.mapNavigator
      mapNavigator.click()
    },

    // 将地图滚动到显示标签出来，并绑定点击事情打开地图详情
    // translateMap(e) {
    //   try {
    //     const map = e.target
    //     if (!map) return

    //     const html = map.contentDocument.documentElement
    //     html.scrollTop = 50
    //     html.scrollLeft = 150

    //     // 点击打开iframe
    //     setTimeout(() => {
    //       try {
    //         map.contentDocument.querySelector('#map > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1)').click()

    //         html.onclick = function (e) {
    //           const a = document.createElement('a')
    //           a.target = '_blank'
    //           a.href = './map.html'
    //           a.click()
    //         }
    //       } catch (error) {}
    //     }, 0)
    //   } catch (error) {
    //     console.log('地图加载load失败: ', error)
    //   }
    // },
  },
}
</script>

<style lang="less">
.footer-wrap {
  .footer-background {
    height: 401px;
    background-size: 100%;
    background-repeat: no-repeat;

    .content {
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      position: relative;
      top: 57%;
      transform: translate3d(0, -50%, 0);
    }

    .left {
      .title {
        font-size: 30px;
        color: white;
        margin-bottom: 27px;
      }

      .item {
        height: 20px;
        font-size: 20px;
        display: flex;
        margin-bottom: 15px;
        color: rgb(235, 244, 218);

        .name {
          width: 83px;
          text-align: justify;

          i {
            display: inline-block;
            width: 100%;
          }
        }
      }
    }

    .right {
      padding-top: 10px;
      display: flex;

      .account,
      .service {
        width: 122px;
        margin-right: 33px;

        img {
          width: 100%;
        }
      }

      .tip {
        font-size: 18px;
        color: white;
        text-align: center;
      }

      .map {
        width: 280px;
        height: 181px;
        cursor: pointer;

        // iframe {
        //   width: 150%;
        //   height: 150%;
        //   transform: scale(0.67) translate3d(-25%, -25%, 0);
        // }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .footer-text {
    height: 65px;
    font-size: 16px;
    line-height: 65px;
    text-align: center;
  }
}
</style>
