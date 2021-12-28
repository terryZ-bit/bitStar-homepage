<template>
  <div class="course-wrap">
    <!-- :style="{ backgroundImage: `url(${require('@/assets/imgs/courses/banner.jpg')})` }" -->
    <div class="banner" v-lazy:background-image="require('@/assets/imgs/courses/banner.jpg')" >
      <div class="text">
        <p>六大课程体系</p>
        <p>助力宝贝多方面成长</p>
      </div>
    </div>

    <div class="course">
      <div class="item" :style="{ backgroundColor: courseIdx % 2 ? '#f3f3f3' : 'white' }" v-for="(courseItem, courseIdx) in courseList" :key="courseIdx">
        <!-- 偶数 -->
        <div class="even" v-if="courseIdx % 2 === 0">
          <div class="content">
            <div class="zh-title">{{ courseItem.zhTitle }}</div>
            <div class="en-title">{{ courseItem.enTitle }}</div>
            <div class="text" v-html="courseItem.text"></div>
            <div class="course-target">
              <div class="title"><span class="circle"></span> 课程目标</div>
              <div class="describe">{{ courseItem.target }}</div>
            </div>
            <div class="babyies-get">
              <div class="title"><span class="circle"></span> Babies Get</div>
              <div class="describe">{{ courseItem.bebiesGet }}</div>
            </div>
          </div>
          <!-- :style="{ backgroundImage: `url(${courseItem.imgUrl})` }" -->
          <div class="aside" v-lazy:background-image="courseItem.imgUrl"  ></div>
        </div>
        <!-- 单数 -->
        <div class="odd" v-else>
          <div class="aside" v-lazy:background-image="courseItem.imgUrl"></div>
          <!-- // 隐藏target和get之后的使用另外一套垂直居中布局 -->
          <div :class="{ content: true, 'hide-target-get': courseItem.hideTargetAndGet }">
            <div class="zh-title">{{ courseItem.zhTitle }}</div>
            <div class="en-title">{{ courseItem.enTitle }}</div>
            <div class="text" v-html="courseItem.text"></div>
            <div class="course-target" v-if="!courseItem.hideTargetAndGet">
              <div class="title"><span class="circle"></span> 课程目标</div>
              <div class="describe">{{ courseItem.target }}</div>
            </div>
            <div class="babyies-get" v-if="!courseItem.hideTargetAndGet">
              <div class="title"><span class="circle"></span> Babies Get</div>
              <div class="describe">{{ courseItem.bebiesGet }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseList: [
        {
          zhTitle: '多元艺术教育',
          enTitle: 'MULTI-ARTISTIC AESTHETIC EDUCATION',
          text: '生活是艺术创作的源泉，利用有创新性的艺术材料和工具，带领宝宝体验涂鸦、雕塑、绘画、拓印、拼贴、印染等艺术活动，在捏、挤、压、按、投和嵌入等精细动作中，对宝贝进行美学启蒙。在动手、动脑、动心中提高孩子的想象创造能力和艺术素养。',
          target: '手眼协调、精细运动、审美培养、释放创意',
          bebiesGet: '主题艺术创作、色彩材料混搭、放飞创意、动手制造惊喜',
          imgUrl: require('@/assets/imgs/courses/1.png'),
        },
        {
          zhTitle: '音律小玩家',
          enTitle: 'LITTLE MUSIC PLAYER',
          text: '通过多样乐器演奏、儿歌律动、手势舞蹈，同时穿插音乐亲子互动游戏，带领孩子体验不同音乐主题，帮助孩子认知节奏、感知韵律、协调肢体、提升孩子对音乐的感受力和表现力，同时促进情绪表达和语言发展。',
          target: '听觉刺激、韵律乐感、情绪表达、联想表现、语言发展',
          bebiesGet: '多样乐器演奏、韵律舞蹈表演、趣味音乐互动、声音启发想象、激发语言表达',
          imgUrl: require('@/assets/imgs/courses/2.png'),
        },
        {
          zhTitle: '感官运动探索',
          enTitle: 'SENSORY MOTOR EXPLORATION',
          text: '感觉统合简称感统，是大脑借助六大感觉系统，对身体各部位的控制和协调功能。感觉统合能力的发展会刺激儿童脑智发育，同时良好的脑发育带来更好的感觉统合能力。通过提供多感官刺激的运动器械，发展孩子大肌肉感统技能，让陪伴者与孩子共同参与游戏，在运动中收获自信心、成就感和坚毅品格。',
          target: '自信勇敢、感觉统合、脑体协调、坚毅品格',
          bebiesGet: '丰富运动游戏、全身活动协调、征服复杂挑战、激发自身潜能',
          imgUrl: require('@/assets/imgs/courses/3.jpg'),
        },
        {
          zhTitle: '科学实验营',
          enTitle: 'SCIENCE CAMP',
          text: '通过制定研究主题SCIENCE BOARD:动植物探究，环境科学〈如天气、四季)，常见物理现象（如物体沉浮、凝固与溶解)，生理知识（如人体器官构造）等，指导孩子由简入难、循序渐进地进行科学知识启蒙。',
          target: '探究科学、亲近自然、敬畏生命',
          bebiesGet: '体悟环境变化、探索自然奥秘、增长科学知识',
          imgUrl: require('@/assets/imgs/courses/4.png'),
        },
        {
          zhTitle: '数学思维启蒙',
          enTitle: 'ENLIGHTENMENT OF MATHEMATICAL THINKING',
          text: '针对幼儿数学思维启蒙主要包括以下几个方面:<br>A、数的概念，包括认识数字、数字的顺序、简单加减进位等<br>B、量的概念，包括多少、大小、长短、高矮、轻重、厚薄等<br>c、图形与空间的概念，包括认识图形，图形的组成、分解、空间方位和基础立体图形等',
          target: '探究科学、亲近自然、敬畏生命',
          bebiesGet: '体悟环境变化、探索自然奥秘、增长科学知识',
          imgUrl: require('@/assets/imgs/courses/5.png'),
        },
        {
          zhTitle: '特色体验活动',
          enTitle: 'FEATURED EXPERIENCE ACTIVITIES',
          text: '围绕宝贝生日和传统节日(如元旦节、儿童节、中秋节、国庆节、等传统节日)，不定期举办相应亲子家庭体验活动，让孩子体验亲子时光，了解传统节日的来历与风俗，弘扬传统文化。<br><br>不定期举办社会体验活动(如亲子农场、跳蚤市场体验、超市购物体验、小小牙医体验，以及参观美术馆、博物馆等），增长宝贝见识，丰富孩子社会生活，提高孩子综合素养。',
          // target: '探究科学、亲近自然、敬畏生命',
          // bebiesGet: '体悟环境变化、探索自然奥秘、增长科学知识',
          imgUrl: require('@/assets/imgs/courses/6.jpg'),
          hideTargetAndGet: true,
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.banner {
  padding-top: 26.077812828%;
  background-position: center;
  background-size: cover;
  position: relative;

  .text {
    font-size: 44px;
    color: white;
    position: absolute;
    left: 53.364879075%;
    top: 31.65322580%;
  }
}

.course {
  margin-bottom: 100px;

  .item {
    // 单双数，共同样式
    .even,
    .odd {
      width: 1190px;
      margin: auto;
      display: flex;
      justify-content: space-between;

      .content {
        // 隐藏target和get之后的布局
        &.hide-target-get {
          display: flex;
          flex-direction: column;
          justify-content: center;

          .text {
            margin-bottom: 0;
          }
        }

        .zh-title {
          font-size: 46px;
          line-height: 56px;
          color: #252525;
        }
        .en-title {
          font-size: 22px;
          color: rgb(59, 59, 59);
        }
        .text {
          text-align: justify;
          margin-top: 44px;
          margin-bottom: 51px;
          font-size: 18px;
          line-height: 30px;
          color: #333;
        }

        .course-target,
        .babyies-get {
          .title {
            font-size: 26px;
            color: #96ca3f;
            margin-bottom: 10px;

            .circle {
              display: inline-block;
              width: 10px;
              height: 10px;
              background-color: #96ca3f;
              border-radius: 50%;
              margin: 0 8px;
            }
          }
          .describe {
            font-size: 18px;
            color: #333;
            margin-bottom: 28px;
          }
        }
      }

      .aside {
        margin-top: 23px;
        flex: 0 0 506px;
        height: 506px;
        background-size: cover;
        background-position: center;
      }
    }

    .even {
      padding: 160px 0 113px 0;

      .content {
        .course-target,
        .babyies-get {
          .title {
            .circle {
              margin-right: 8px;
            }
          }
        }
      }
      .aside {
        margin-left: 50px;
      }
    }

    .odd {
      padding: 120px 0 113px 0;
      width: 1190px;
      margin: auto;
      display: flex;
      justify-content: space-between;

      .content {
        text-align: end;

        .text {
          margin-bottom: 77px;
        }

        .course-target,
        .babyies-get {
          .title {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
        }
      }
      .aside {
        margin-right: 50px;
      }
    }
  }
}
</style>
