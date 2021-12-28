<template>
  <div class="title-wrapper">
    <div class="title">
      <div class="num" :style="{ color }">{{ num }}</div>
      <div class="text" :style="{ backgroundColor }">
        <div class="zh-text">{{ zhText }}</div>
        <div class="en-text">{{ enText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      default: '00',
    },
    zhText: {
      type: String,
      default: '一些中文文本',
    },
    enText: {
      type: String,
      default: '一些英文文本',
    },
    color: {
      type: String,
      default: '#a4d158',
    },
    backgroundColor: {
      type: String,
      default: 'white',
    },
  },
}
</script>

<style lang="less" scoped>
// 统一标题
.title {
  position: relative;
  font-family: siyuan-bold;

  .num {
    color: #a4d158;
    font-size: 160px;
    margin: 0 auto;
    text-align: center;
  }

  .text {
    position: absolute;
    background-color: white;
    top: 55.5%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    text-align: center;

    .zh-text {
      font-size: 36px;
      color: #252525;
      padding-top: 5px;
    }

    .en-text {
      font-size: 18px;
      color: #dbdbdb;
      font-family: siyuan-normal;
    }
  }
}
</style>
