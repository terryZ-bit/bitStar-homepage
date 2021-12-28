<template>
  <div class="course-block" :style="{  width, height, float, margin: hasMargin ? '0 16px 16px 0' : '0' }">
    <div class="mask">
      <slot></slot>
    </div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    // imgUrl: {
    //   type: String,
    // },
    width: {
      type: String,
      default: '282px',
    },
    height: {
      type: String,
      default: '260px',
    },
    float: {
      type: String,
      default: 'left',
    },
    label: {
      type: String,
    },
    hasMargin: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="less" scoped>
.course-block {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  float: left;
  position: relative;
  cursor: pointer;
  font-family: pingfang;
  // border: 1px solid black;

  .mask {
    width: 100%;
    height: ~'calc(100% - 40px)';
    padding: 0 45px;
    background-color: rgba(0, 0, 0, 0.3);
    visibility: hidden;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: white;
  }

  &:hover {
    .mask {
      visibility: visible;
    }
  }

  .label {
    width: 100%;
    font-size: 20px;
    color: #fff;
    background-color: #f5be00;
    line-height: 55px;
    text-align: center;
    position: absolute;
    bottom: 0;
  }
}
</style>
