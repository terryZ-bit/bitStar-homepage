<template>
  <button class="dark-red-btn" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// 暗红色按钮
button.dark-red-btn {
  height: 36px;
  width: 100%;
  background-color: #e4103d;
  color: white;
  font-family: pingfang;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ff0037;
  }
}
</style>
