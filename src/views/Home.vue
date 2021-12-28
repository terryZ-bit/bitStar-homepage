<template>
  <div class="home-wrapper">
    <!-- 轮播图 -->
    <div class="carousel-wrapper">
      <!-- 轮播图中间的文本 -->
      <div class="carousel-text">
        <div class="text">0-3岁婴幼儿全日制照护服务</div>
        <div class="text">精心呵护您的宝贝</div>
        <div class="yourinfo-wrapper">
          <input type="text" v-model="yourinfo.name" name="name" placeholder="您的姓名" />
          <input type="text" v-model="yourinfo.phone" name="phone" placeholder="您的电话" />
          <input type="text" v-model="yourinfo.location" name="location" placeholder="所在区域" />
          <input type="text" v-model="yourinfo.childAge" name="child-age" placeholder="宝贝年龄" />
        </div>
        <div class="experience">
          <!-- 暗红色按钮 -->
          <x-red-btn @click="handleExperience">一日试拖体验</x-red-btn>
          <div class="tip">提交后三个工作日内联系您</div>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="carousel">
        <!-- 自定义切换按钮 -->
        <div class="prev" title="上一张" @click="prevHomeCarousel"><img src="@/assets/imgs/home/arrow-white.png" alt="" /></div>
        <div class="next" title="下一张" @click="nextHomeCarousel"><img src="@/assets/imgs/home/arrow-white.png" alt="" /></div>
        <el-carousel ref="homeCarousel" trigger="click" indicator-position="none" arrow="never" loop autoplay>
          <el-carousel-item v-lazy-container="{ selector: 'img' }" v-for="(carouselItem, carouselIdx) in carouselList" :key="carouselIdx">
            <img :data-src="carouselItem.imgPath" alt="banner图片" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 轮播底部弯曲遮罩 -->
      <div class="curved-mask">
        <img src="@/assets/imgs/home/carousel/radian.png" alt="" />
      </div>
    </div>

    <!-- 品牌故事 -->
    <div ref="brand" class="brand-wrapper">
      <div class="brand">
        <!-- 标题 -->
        <x-title num="01" zhText="比力星球品牌故事" enText="BRAND STORY"></x-title>

        <div v-if="ifBrand">
          <div class="detail">
            <!-- 鸡蛋型图片 -->
            <div class="egg">
              <img v-lazy="require('@/assets/imgs/home/brand/brand-egg.png')" alt="" />
            </div>
            <div class="text-describe">
              <p>比力星球儿童之家，致力于0-3岁婴幼儿全日制照护服务，基于“PIKLER”的教育理念，秉承“尊重及回应式”的托育理念，为适龄婴幼儿家庭提供定制化、个性化、长久性的共育服务。</p>
              <p>尊重及回应式保育是更高级的保育，是照料者与婴幼儿的日常照料中，形成的—种亲密且健康的互动关系!</p>
              <p>发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程</p>
              <p>发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程发展历程</p>
            </div>
          </div>
          <div class="detail-video">
            <LazyVideo :src="'https://node.freshone.top/upload_19bf3c2e0b9cb31520acd713abe42865.mp4'" />
          </div>
        </div>
      </div>
    </div>

    <!-- 新闻资讯 -->
    <div ref="news" class="news-wrapper">
      <div class="news">
        <!-- 标题 -->
        <x-title num="02" zhText="近期新闻资讯" enText="NEWS AND INFORMATION" :backgroundColor="'#f3f3f3'"></x-title>

        <div v-if="ifNews" class="news-list">
          <router-link to="">
            <div class="news-item">
              <div class="left-time">
                <div class="day">15</div>
                <div class="month">11</div>
              </div>
              <div class="content">
                <div class="title">标题标题标题</div>
                <div class="date">
                  <!-- <img src="@/assets/imgs/home/watches.png" alt="" /> -->
                  <i class="iconfont icon-clock"></i>&nbsp;2021-11-15 星期一
                </div>
                <div class="text">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容..</div>
              </div>
              <div class="right-img" v-lazy:background-image="require('@/assets/imgs/home/carousel/banner1.jpg')">

              </div>
            </div>
          </router-link>

          <div class="more-news-btn">
            <x-red-btn @click="handleMoreNews">更多新闻动态</x-red-btn>
          </div>
        </div>
      </div>
    </div>

    <!-- 课程特色 -->
    <div ref="courses" class="courses-wrapper">
      <x-title :num="'03'" :color="'#f5be00'" :zhText="'比力星球课程特色'" :enText="'COURSE FEATURES'"></x-title>
      <!-- :style="{ backgroundImage: `url(${course.img})` }" -->
      <div v-if="ifCourses" class="courses">
        <x-course-block v-lazy:background-image="course.img" v-for="(course, courseIdx) in courses" :key="courseIdx" :label="course.label" :width="course.width" :height="course.height" :float="course.float" :hasMargin="course.hasMargin">
          {{ course.text }}
        </x-course-block>
      </div>

      <div class="more-course">
        <x-red-btn @click="handleMoreCourses">更多课程特色 </x-red-btn>
      </div>
    </div>

    <!-- 师资力量 -->
    <div ref="teachers" class="teachers-wrapper">
      <x-title :num="'04'" :zhText="'核心师资团队'" :enText="'THE CORE TEAM'"></x-title>

      <div v-if="ifTeachers" class="teachers">
        <div class="leaders">
          <!-- :style="{ backgroundImage: `url(${leaderItem.imgUrl})` }" -->
          <div :class="{ item: true, down: leaderItem.direction === 'down' }" v-for="(leaderItem, leaderIdx) in leaderList" :key="leaderIdx" v-lazy:background-image="leaderItem.imgUrl" >
            <div class="mask" v-html="leaderItem.maskText"></div>
            <div class="label" :style="{ backgroundColor: leaderItem.labelBack }">
              <div class="name-duty">
                <span class="name">{{ leaderItem.name }}</span>
                /
                <span class="duty">{{ leaderItem.duty }}</span>
              </div>
              <div class="education">{{ leaderItem.education }}</div>
            </div>
          </div>
        </div>

        <div class="employees">
          <div class="prev" title="上一个" @click="prevEmployee"><img :src="require('@/assets/imgs/home/arrow-gray.png')" alt="" /></div>
          <div class="next" title="下一个" @click="nextEmployee"><img :src="require('@/assets/imgs/home/arrow-gray.png')" alt="" /></div>

          <div class="employee-list" @mouseenter="suspendEmployeeMove" @mouseleave="resumeEmployeeMove" title="已暂停">
            <div class="employee-item" v-for="(employeeItem, employeeIdx) in employeeList" :key="employeeIdx" :style="{ transform: `translate3d(${employeeItem.translateX}px, 0, 0)` }" :class="{ 'is-animation': employeeItem.isAnimation }">
              <!-- :style="{ backgroundImage: `url(${employeeItem.imgUrl})` }" -->
              <div class="avatar" v-lazy:background-image="employeeItem.imgUrl"  ></div>
              <div class="name-duty">
                <span class="name">{{ employeeItem.name }} </span>
                /
                <span class="duty">{{ employeeItem.duty }} </span>
              </div>
              <div class="profile">{{ employeeItem.profile }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="teachers-detail">
        <x-red-btn @click="handleTeachersDetail">师资力量详情</x-red-btn>
      </div>
    </div>

    <!-- 园区剪影 -->
    <div ref="garden" class="garden-wrapper">
      <x-title :num="'05'" :zhText="'园区欢乐剪影'" :enText="'A HAPPY MOMENT'" :color="'#f5be00'" :backgroundColor="'#f3f3f3'"></x-title>

      <div v-if="ifGarden" class="garden">
        <div class="prev" title="上一张" @click="prevGardenCarousel"><img :src="require('@/assets/imgs/home/arrow-gray.png')" alt="" /></div>
        <div class="next" title="下一张" @click="nextGardenCarousel"><img :src="require('@/assets/imgs/home/arrow-gray.png')" alt="" /></div>

        <el-carousel ref="gardenCarousel" trigger="click" height="780px" indicator-position="none" arrow="never" loop autoplay>
          <el-carousel-item v-for="(gardenItem, gardenIdx) in gardenList" :key="gardenIdx">
            <!-- :style="{ backgroundImage: `url(${imgItem})` }" -->
            <div v-for="(imgItem, imgIdx) in gardenItem" :key="imgIdx" v-lazy:background-image="imgItem"   ></div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 赞助合作伙伴 -->
    <div ref="partners" class="partners-wrapper">
      <x-title :num="'06'" :zhText="'赞助合作伙伴'" :enText="'PARTNERS'"></x-title>

      <div v-if="ifPartners" class="partners">
        <div class="item" v-for="(item, idx) in 8" :key="idx">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/home/Title.vue'
import RedBtn from '@/components/home/RedBtn.vue'
import CourseBlock from '@/components/home/CourseBlock.vue'

export default {
  name: 'Home',
  components: {
    'x-title': Title,
    'x-red-btn': RedBtn,
    'x-course-block': CourseBlock,
  },
  data() {
    return {
      // 轮播图
      carouselList: [
        {
          imgPath: require('@/assets/imgs/home/carousel/banner1.jpg'),
          to: '/',
        },
      ],
      // 你的信息
      yourinfo: {
        name: '',
        phone: '',
        location: '',
        childAge: '',
      },
      // 课程特色图片
      courses: [
        {
          img: require('@/assets/imgs/courses/1.png'),
          label: '多元艺术美育',
          width: '580px',
          height: '282px',
          float: undefined,
          hasMargin: true,
          text: '生活是艺术创作的源泉，利用有创新性的艺术材料和工具，带领宝宝体验涂鸦、雕塑、绘画、拓印、拼贴、印染等艺术活动，在捏、挤、压、按、投和嵌入等精细动作中，对宝贝进行美学启蒙。在动手、动脑、动心中提高孩子的想象创造能力和艺术素养。',
        },
        {
          img: require('@/assets/imgs/courses/2.png'),
          label: '音律小玩家',
          width: undefined,
          height: '282px',
          float: undefined,
          hasMargin: true,
          text: '生活是艺术创作的源泉，利用有创新性的艺术材料和工具，带领宝宝体验涂鸦、雕塑、绘画、拓印、拼贴、印染等艺术活动，在捏、挤、压、按、投和嵌入等精细动作中，对宝贝进行美学启蒙。在动手、动脑、动心中提高孩子的想象创造能力和艺术素养。',
        },
        {
          img: require('@/assets/imgs/courses/3.jpg'),
          label: '特色体验活动',
          width: undefined,
          height: '558px',
          float: 'right',
          hasMargin: false,
          text: '生活是艺术创作的源泉，利用有创新性的艺术材料和工具，带领宝宝体验涂鸦、雕塑、绘画、拓印、拼贴、印染等艺术活动，在捏、挤、压、按、投和嵌入等精细动作中，对宝贝进行美学启蒙。在动手、动脑、动心中提高孩子的想象创造能力和艺术素养。',
        },
        {
          img: require('@/assets/imgs/courses/4.png'),
          label: '感官运动探索',
          width: undefined,
          height: undefined,
          float: undefined,
          hasMargin: true,
          text: '生活是艺术创作的源泉，利用有创新性的艺术材料和工具，带领宝宝体验涂鸦、雕塑、绘画、拓印、拼贴、印染等艺术活动，在捏、挤、压、按、投和嵌入等精细动作中，对宝贝进行美学启蒙。在动手、动脑、动心中提高孩子的想象创造能力和艺术素养。',
        },
        {
          img: require('@/assets/imgs/courses/5.png'),
          label: '科学实验室',
          width: undefined,
          height: undefined,
          float: undefined,
          hasMargin: true,
          text: '生活是艺术创作的源泉，利用有创新性的艺术材料和工具，带领宝宝体验涂鸦、雕塑、绘画、拓印、拼贴、印染等艺术活动，在捏、挤、压、按、投和嵌入等精细动作中，对宝贝进行美学启蒙。在动手、动脑、动心中提高孩子的想象创造能力和艺术素养。',
        },
        {
          img: require('@/assets/imgs/courses/6.jpg'),
          label: '数学思维启蒙',
          width: undefined,
          height: undefined,
          float: undefined,
          hasMargin: true,
          text: '生活是艺术创作的源泉，利用有创新性的艺术材料和工具，带领宝宝体验涂鸦、雕塑、绘画、拓印、拼贴、印染等艺术活动，在捏、挤、压、按、投和嵌入等精细动作中，对宝贝进行美学启蒙。在动手、动脑、动心中提高孩子的想象创造能力和艺术素养。',
        },
      ],
      // 领导
      leaderList: [
        {
          imgUrl: require('@/assets/imgs/teachers/leaders/1.jpg'),
          maskText: '广东白云学院广播影视编导系 系主任<br>《中国好声音》华南赛区总导演<br>高级心理咨询师<br>萨提亚亲子关系咨询师<br>知名育儿KOL',
          name: '胡翠芳',
          duty: '创始人、园长',
          education: '辽宁大学 艺术学硕士',
          labelBack: '#a4d158',
          direction: 'up',
        },
        {
          imgUrl: require('@/assets/imgs/teachers/leaders/1.jpg'),
          maskText: '广东白云学院广播影视编导系 系主任<br>《中国好声音》华南赛区总导演<br>高级心理咨询师<br>萨提亚亲子关系咨询师<br>知名育儿KOL',
          name: '乔宝亮',
          duty: '联合创始人',
          education: '辽宁大学 管理学学士',
          labelBack: 'rgba(0, 0, 0, 0.5)',
          direction: 'down',
        },
        {
          imgUrl: require('@/assets/imgs/teachers/leaders/1.jpg'),
          maskText: '广东白云学院广播影视编导系 系主任<br>《中国好声音》华南赛区总导演<br>高级心理咨询师<br>萨提亚亲子关系咨询师<br>知名育儿KOL',
          name: '徐 平',
          duty: '联合创始人',
          education: '辽宁大学 艺术学硕士',
          labelBack: 'rgba(0, 0, 0, 0.5)',
          direction: 'up',
        },
        {
          imgUrl: require('@/assets/imgs/teachers/leaders/4.jpg'),
          maskText: '广东白云学院广播影视编导系 系主任<br>《中国好声音》华南赛区总导演<br>高级心理咨询师<br>萨提亚亲子关系咨询师<br>知名育儿KOL',
          name: '黎 欢',
          duty: '执行园长',
          education: '东北师范大学 学前教育学士',
          labelBack: 'rgba(0, 0, 0, 0.5)',
          direction: 'down',
        },
      ],
      // 员工
      employeeList: [
        {
          name: '豹豹',
          duty: '教学组长',
          profile: '老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介',
          imgUrl: require('@/assets/imgs/teachers/members/1.jpg'),
          translateX: 0,
          isAnimation: true,
        },
        {
          name: '欣欣',
          duty: '瞌睡班主任老师',
          profile: '老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介',
          imgUrl: require('@/assets/imgs/teachers/members/2.jpg'),
          translateX: 0,
          isAnimation: true,
        },
        {
          name: '谭谭',
          duty: '咿呀班主任老师',
          profile: '老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介',
          imgUrl: require('@/assets/imgs/teachers/members/3.jpg'),
          translateX: 0,
          isAnimation: true,
        },
        {
          name: '梅梅',
          duty: '瞌睡班育儿老师',
          profile: '老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介',
          imgUrl: require('@/assets/imgs/teachers/members/4.jpg'),
          translateX: 0,
          isAnimation: true,
        },
        {
          name: '某某',
          duty: '老师',
          profile: '老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介老师简介',
          imgUrl: require('@/assets/imgs/teachers/members/5.jpg'),
          translateX: 0,
          isAnimation: true,
        },
      ],
      employeeMoveTimer: undefined,
      employeeMoveDelay: 3000,
      employeeMoveStep: 300,
      employeeVisibleWidth: 300 * 4,
      employeeMoveWidth: undefined,
      maxTranslateX: undefined,
      moveLimitCount: 5,
      loopLimitCount: 6,
      prevNextBtnLock: false,
      prevNextBtnLockTime: 1000,

      // 园区剪影
      gardenList: [
        [
          require('@/assets/imgs/home/garden/1/1.jpg'),
          require('@/assets/imgs/home/garden/1/2.jpg'),
          require('@/assets/imgs/home/garden/1/3.jpg'),
          require('@/assets/imgs/home/garden/1/4.jpg'),
          require('@/assets/imgs/home/garden/1/5.jpg'),
          require('@/assets/imgs/home/garden/1/6.png'),
          require('@/assets/imgs/home/garden/1/7.png'),
          require('@/assets/imgs/home/garden/1/8.png'),
        ],
      ],

      // if控制懒加载
      lasyLoadComplete: 0, // 懒加载完毕时等于0
      ifBrand: true,
      ifNews: true,
      ifCourses: true,
      ifTeachers: true,
      ifGarden: true,
      ifPartners: true,
    }
  },
  methods: {
    goTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    handleExperience() {
      console.log('click handleExperience')
    },
    handleMoreNews() {
      this.$router.push('/news')
      this.goTop()
    },
    handleMoreCourses() {
      this.$router.push('/courses')
      this.goTop()
    },
    handleTeachersDetail() {
      this.$router.push('/teachers')
      this.goTop()
    },
    initEmployeeMove() {
      const employeeList = this.employeeList
      employeeList.forEach((item, idx) => (item.translateX = idx * this.employeeMoveStep))
      this.maxTranslateX = employeeList[employeeList.length - 1].translateX
      this.employeeMoveWidth = employeeList.length * this.employeeMoveStep
    },
    suspendEmployeeMove() {
      clearInterval(this.employeeMoveTimer)
    },
    resumeEmployeeMove() {
      this.autoEmployeeMove()
    },
    // 无缝循环的下一张
    nextLoopEmployee() {
      const employeeMoveStep = this.employeeMoveStep
      const employeeList = this.employeeList
      const maxTranslateX = this.maxTranslateX
      let endItem

      employeeList.forEach((item) => {
        if (item.translateX === -employeeMoveStep) {
          endItem = item
          item.isAnimation = false
          item.translateX += maxTranslateX
        } else {
          if (item.translateX === maxTranslateX - employeeMoveStep) {
            item.isAnimation = true
          }
          item.translateX = item.translateX - employeeMoveStep
        }
      })
    },
    // 无缝循环的上一张
    prevLoopEmployee() {
      const employeeMoveStep = this.employeeMoveStep
      const employeeList = this.employeeList
      const maxTranslateX = this.maxTranslateX
      let max = 0,
        maxItem
      let min = 1e9,
        minItem

      // 最后面item，然后移动到最前面
      employeeList.forEach((item) => {
        if (item.translateX > max) {
          max = item.translateX
          maxItem = item
        }
        if (item.translateX < min) {
          min = item.translateX
          minItem = item
        }
      })
      if (maxItem.isAnimation === true) maxItem.isAnimation = false
      maxItem.translateX = minItem.translateX - employeeMoveStep

      employeeList.forEach((item) => {
        item.translateX += employeeMoveStep
      })

      // 下次渲染，加上动画
      setTimeout(() => {
        maxItem.isAnimation = true
      }, 0)
    },
    // 重开始循环的下一张
    nextRestartEmployee() {
      const employeeMoveStep = this.employeeMoveStep
      const employeeList = this.employeeList

      const lastTranslateX = employeeList[employeeList.length - 1].translateX
      // 如果图片要使用完了，就重新开始
      if (lastTranslateX < this.employeeVisibleWidth) {
        this.initEmployeeMove()
        return
      }
      employeeList.forEach((item) => {
        item.translateX = item.translateX - employeeMoveStep
      })
    },
    // 重开始循环的上一张
    prevRestartEmployee() {
      this.nextRestartEmployee()
    },
    autoEmployeeMove() {
      const employeeList = this.employeeList

      if (employeeList.length < this.moveLimitCount) return

      if (employeeList.length >= this.loopLimitCount) {
        this.employeeMoveTimer = setInterval(this.nextLoopEmployee, this.employeeMoveDelay)
      } else {
        this.employeeMoveTimer = setInterval(this.nextRestartEmployee, this.employeeMoveDelay)
      }
    },
    isRestartLoop() {
      return this.employeeList.length < this.loopLimitCount
    },
    prevEmployee() {
      if (this.prevNextBtnLock) return
      this.prevNextBtnLock = true

      this.suspendEmployeeMove()
      if (this.isRestartLoop()) {
        this.prevRestartEmployee()
      } else {
        this.prevLoopEmployee()
      }
      this.resumeEmployeeMove()

      setTimeout(() => {
        this.prevNextBtnLock = false
      }, this.prevNextBtnLockTime)
    },
    nextEmployee() {
      if (this.prevNextBtnLock) return
      this.prevNextBtnLock = true

      this.suspendEmployeeMove()
      if (this.isRestartLoop()) {
        this.nextRestartEmployee()
      } else {
        this.nextLoopEmployee()
      }
      this.resumeEmployeeMove()

      setTimeout(() => {
        this.prevNextBtnLock = false
      }, this.prevNextBtnLockTime)
    },
    prevHomeCarousel() {
      const homeCarousel = this.$refs.homeCarousel
      homeCarousel.prev()
    },
    nextHomeCarousel() {
      const homeCarousel = this.$refs.homeCarousel
      homeCarousel.next()
    },
    prevGardenCarousel() {
      const gardenCarousel = this.$refs.gardenCarousel
      gardenCarousel.prev()
    },
    nextGardenCarousel() {
      const gardenCarousel = this.$refs.gardenCarousel
      gardenCarousel.next()
    },
    // 使用if控制懒加载
    ifLasyLoad(e) {
      if (!this.lasyLoadComplete) return

      const brand = this.$refs.brand
      const news = this.$refs.news
      const courses = this.$refs.courses
      const teachers = this.$refs.teachers
      const garden = this.$refs.garden
      const partners = this.$refs.partners

      const html = document.documentElement
      const clientHeight = html.clientHeight
      const scrollTop = html.scrollTop
      const actualHeight = clientHeight + scrollTop
      const renderHeight = actualHeight + clientHeight / 3

      if (brand.offsetTop <= renderHeight) {
        if (!this.ifBrand) (this.ifBrand = true), this.lasyLoadComplete--
      }

      if (news.offsetTop <= renderHeight) {
        if (!this.ifNews) (this.ifNews = true), this.lasyLoadComplete--
      }

      if (courses.offsetTop <= renderHeight) {
        if (!this.ifCourses) (this.ifCourses = true), this.lasyLoadComplete--
      }

      if (teachers.offsetTop <= renderHeight) {
        if (!this.ifTeachers) (this.ifTeachers = true), this.lasyLoadComplete--
      }

      if (garden.offsetTop <= renderHeight) {
        if (!this.ifGarden) (this.ifGarden = true), this.lasyLoadComplete--
      }

      if (partners.offsetTop <= renderHeight) {
        if (!this.ifPartners) (this.ifPartners = true), this.lasyLoadComplete--
      }
    },
  },
  created() {
    this.initEmployeeMove()
    this.autoEmployeeMove()
  },
  mounted() {
    // 懒加载
    this.ifLasyLoad()
    document.addEventListener(
      'scroll',
      (e) => {
        this.ifLasyLoad()
      },
      false
    )
  },
}
</script>

<style lang="less" scoped>
// 轮播图
.carousel-wrapper {
  position: relative;
  // width: 100%;
  overflow: hidden;

  // 轮播图中间的文本
  .carousel-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -70%, 0);
    z-index: 4;
    font-family: pingfang;

    .text {
      font-size: 54px;
      color: white;
      text-align: center;
    }

    // 输入您的信息
    .yourinfo-wrapper {
      height: 37px;
      display: flex;
      justify-content: space-evenly;
      margin-top: 50px;

      input {
        width: 140px;
        height: 100%;
        background-color: white;
        border: none;
        outline: none;
        border-radius: 8px;
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
        text-align: center;
        font-family: pingfang;
        font-size: 16px;

        &::placeholder {
          color: #999;
        }
      }
    }

    // 试体验
    .experience {
      width: 170px;
      margin: 30px auto 0 auto;
      text-align: center;

      .tip {
        color: white;
        font-size: 12px;
        margin-top: 3px;
      }
    }
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    z-index: 30;
    width: 45px;
    height: 45px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }
  .prev {
    left: 150px;
    transform: translate3d(0, -50%, 0) rotate(90deg);
  }
  .next {
    right: 150px;
    transform: translate3d(0, -50%, 0) rotate(-90deg);
  }

  // 轮播图大小响应式
  /deep/.el-carousel__container {
    padding-top: 55.4250197%;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .el-carousel__item {
    img {
      width: 100%;
    }
  }

  //轮播底部弯曲遮罩
  .curved-mask {
    position: absolute;
    bottom: 0;
    z-index: 4;
    width: 100%;

    img {
      vertical-align: middle;
      width: 100.1%;
    }
  }
}

// 品牌故事
.brand-wrapper {
  padding-top: 80px;
  padding-bottom: 170px;

  .brand {
    width: 1040px;
    margin: auto;
  }

  .detail {
    margin-top: 60px;
    display: flex;

    .egg {
      flex: 0 0 444px;
      height: 369px;
      
      img {
        width: 100%;
        height: 100%;
      }
    }

    .text-describe {
      margin-left: 40px;
      font-size: 16px;
      color: #252525;

      p {
        margin-top: 25px;
      }
    }
  }

  .detail-video {
    width: 90%;
    margin: 50px auto 0 auto;

    video {
      width: 100%;
      border-radius: 6px;
    }
  }
}

//新闻资讯
.news-wrapper {
  background-color: #f3f3f3;
  padding-top: 80px;
  padding-bottom: 140px;

  .news {
    width: 1000px;
    margin: auto;

    .news-list {
      // .more-news-btn:extend(.carousel-wrapper .carousel-text .experience button) {
      // }
      .more-news-btn {
        width: 170px;
        margin: 90px auto 0 auto;
      }
    }

    .news-item {
      display: flex;
      padding: 50px 0;
      border-bottom: 1px solid rgb(232, 232, 232);
    }

    .left-time {
      width: 125px;
      padding-right: 55px;
      position: relative;
      margin-right: 25px;

      &::after {
        content: '';
        position: absolute;
        top: 4px;
        right: 0;
        display: block;
        width: 1px;
        height: 30px;
        background-color: rgb(183, 183, 183);
      }

      .day {
        font-size: 60px;
        line-height: 55px;
        color: #666;
        font-weight: bold;
      }

      .month {
        font-size: 14px;
        padding-left: 12px;
        color: #666;
      }
    }

    .content {
      .title {
        color: #252525;
        font-size: 18px;
        margin-bottom: 5px;
      }

      .date {
        font-size: 14px;
        color: #666;
        display: flex;
        align-items: center;
        margin-bottom: 21px;

        i {
          font-size: 19px;
        }
      }

      .text {
        font-size: 14px;
        color: #b4b4b4;
      }
    }

    .right-img {
      transform: translate3d(0, 4px, 0);
      flex: 0 0 220px;
      height: 125px;
      margin-left: 25px;
      overflow: hidden;
      background: center no-repeat;
      background-size: cover ;

      img {
        width: 100%;
      }
    }
  }
}

// 课程特色
.courses-wrapper {
  padding: 140px 0;

  .courses {
    width: 1176px;
    margin: 60px auto 0 auto;
    overflow: hidden;
  }

  .more-course {
    width: 170px;
    margin: 80px auto 0 auto;
  }
}

// 师资力量
.teachers-wrapper {
  padding: 130px 0;

  .teachers {
    width: 1400px;
    margin: 0 auto;
  }
  // 领导
  .leaders {
    width: 1200px;
    height: 475px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .item {
      cursor: pointer;
      width: 290px;
      height: 390px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      color: white;
      border-radius: 7px;
      overflow: hidden;

      .mask {
        height: ~'calc(100% - 90px)';
        padding: 20px;
        font-size: 14px;
        visibility: hidden;
        display: flex;
        align-items: flex-end;
        background-color: rgba(0, 0, 0, 0.5);
      }
      &:hover {
        .mask {
          visibility: visible;
        }
      }

      .label {
        height: 90px;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .name-duty {
          .name {
            font-size: 26px;
          }
          .duty {
            font-size: 18px;
          }
        }

        .education {
          font-size: 14px;
        }
      }
    }

    .down {
      transform: translate3d(0, 85px, 0);
    }
  }

  // 员工
  .employees {
    font-family: pingfang;
    position: relative;
    margin-top: 60px;

    .prev,
    .next {
      position: absolute;
      top: 50%;
      width: 57px;
      height: 57px;
      cursor: pointer;

      img {
        width: 100%;
      }
    }
    .prev {
      left: 30px;
      transform: rotateY(180deg) translate3d(0, -50%, 0);
    }
    .next {
      right: 30px;
      transform: translate3d(0, -50%, 0);
    }

    .employee-list {
      margin: 0 auto;
      width: 1200px;
      height: 390px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
    }

    .employee-item {
      position: absolute;
      width: 300px;
      padding: 0 15px;

      &.is-animation {
        transition: transform ease 1s;
      }
    }
    .avatar {
      height: 290px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    .name-duty {
      color: #252525;
      padding-left: 20px;
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        width: 6px;
        height: 26px;
        background-color: #f5cf00;
      }

      .name {
        font-size: 28px;
      }

      .duty {
        font-size: 18px;
      }
    }

    .profile {
      font-size: 14px;
      color: #b4b4b4;
      padding-left: 20px;
    }
  }

  .teachers-detail {
    width: 170px;
    margin: auto;
    margin-top: 70px;
  }
}

// 园区剪影
.garden-wrapper {
  overflow: hidden;
  background-color: #f3f3f3;
  padding: 95px 0 165px 0;

  .garden {
    width: 1270px;
    margin: auto;
    position: relative;

    .prev,
    .next {
      position: absolute;
      top: 50%;
      z-index: 30;
      width: 60px;
      height: 60px;
      cursor: pointer;

      img {
        width: 100%;
      }
    }
    .prev {
      left: -110px;
      transform: translate3d(0, -50%, 0) rotate(180deg);
    }
    .next {
      right: -110px;
      transform: translate3d(0, -50%, 0);
    }

    .el-carousel__item {
      > div {
        height: 231px;
        width: 367px;
        float: left;
        background-position: center;
        background-size: cover;
        border-radius: 25px;
        margin: 15px;
      }

      > div:first-child {
        height: 492px;
        width: 443px;
      }

      > div:nth-child(6) {
        width: 443px;
      }
    }
  }
}

// 赞助合作伙伴
.partners-wrapper {
  padding: 100px 0 115px 0;

  .partners {
    width: 1233px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    height: 134px;
    flex: 0 0 25%;

    border-top: 15px solid white;
    border-bottom: 15px solid white;
    border-left: 18px solid white;
    border-right: 18px solid white;
    background-color: rgb(238, 238, 238);
  }
}
</style>
