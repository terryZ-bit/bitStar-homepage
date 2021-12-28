<template>
  <div class="vip-wrap">
    <!-- :style="{ backgroundImage: `url(${require('@/assets/imgs/vip/banner.png')})` }" -->
    <div class="banner" v-lazy:background-image="require('@/assets/imgs/vip/banner.png')" ></div>

    <div class="vip">
      <div class="service">
        <img src="@/assets/imgs/vip/vip-service.png" alt="会员服务" />
      </div>

      <div class="contact">
        <div class="title">联系我们</div>
        <div class="map">
          <img src="@/assets/imgs/vip/vip-map.png" alt="比力地图" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.banner {
  padding-top: 26.077812828%;
  background-size: cover;
  background-position: center;
}

.vip {
  width: 1193px;
  margin: auto;

  .service {
    margin-top: 157px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .contact {
    margin-top: 146px;

    .title {
      font-size: 40px;
      font-weight: bold;
      color: #96ca3f;
      text-align: center;
    }

    .map {
      margin-top: 44px;
      margin-bottom: 104px;

      img {
        width: 100%;
        height: 100%;
        border: 10px solid rgb(150, 203, 63);
      }
    }
  }
}
</style>
