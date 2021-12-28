import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueLazyLoadVideo from 'vue-lazyload-video'

// Register Components
// LazyVideo & LazyVideoAsGIF
Vue.use(VueLazyLoadVideo)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/imgs/warn.jpg'),
  loading: require('@/assets/imgs/loading.gif'),
  attempt: 1,
})
