<template>
  <div id="app">
    <x-navbar v-if="navbarExclude.indexOf($route.name) === -1"></x-navbar>
    <keep-alive>
      <router-view />
    </keep-alive>
    <x-footer v-if="footerExclude.indexOf($route.name) === -1"></x-footer>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  components: {
    'x-navbar': Navbar,
    'x-footer': Footer,
  },
  data() {
    return {
      navbarExclude: ['example', 'news-detail'],
      footerExclude: ['example', 'news-detail'],
    }
  },
}
</script>

<style lang="less"></style>
