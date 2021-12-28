<template>
  <div class="teacher-wrap">
    <!-- :style="{ backgroundImage: `url(${require('@/assets/imgs/teachers/banner.jpg')})` }" -->
    <div class="banner" v-lazy:background-image="require('@/assets/imgs/teachers/banner.jpg')"></div>

    <div class="title">师资力量</div>
    <div class="teachers">
      <div class="item" v-for="(teacherItem, teacherIdx) in teacherList" :key="teacherIdx">
        <!-- :style="{ backgroundImage: `url(${teacherItem.imgUrl})` }" -->
        <div class="avatar" v-lazy:background-image="teacherItem.imgUrl"></div>
        <div class="name">{{ teacherItem.name }}</div>
        <div class="duty">{{ teacherItem.duty }}</div>
        <ul class="profile-list">
          <li class="profile-item" v-for="(profileItem, profileIdx) in teacherItem.profileList" :key="profileIdx">{{ profileItem }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teacherList: [
        {
          imgUrl: require('@/assets/imgs/teachers/leaders/1.jpg'),
          name: '胡翠芳',
          duty: '比力星球创始人、校长',
          profileList: ['辽宁大学艺术学硕士', '广东白云学院广播影视编导系 系主任', '《中国好声音》华南赛区总导演', '高级心理咨询师', '萨提亚亲子关系咨询师'],
        },
        {
          imgUrl: require('@/assets/imgs/teachers/leaders/1.jpg'),
          name: '乔宝亮',
          duty: '联合创始人',
          profileList: ['辽宁大学管理学学士', '中以教育产业基金总经理，幼信通&欧啦创始人', '原联想集团华南大区区域经理,管培生，总裁奖获得者'],
        },
        {
          imgUrl: require('@/assets/imgs/teachers/leaders/1.jpg'),
          name: '徐平',
          duty: '联合创始人',
          profileList: ['十五年工业机器人、工业信息化等行业解决方案经验', '曾就职于世界500强-韩国斗山英维高株式会社，负责自动化生产线、无人车间、工业机器人方案设计与销售。'],
        },
        {
          imgUrl: require('@/assets/imgs/teachers/leaders/4.jpg'),
          name: '黎欢',
          duty: '比力星球执行园长',
          profileList: ['东北师范大学学前教育', '原润萌教育研究院首席研究员儿童心理学国家高级育婴师早期教育指导师(高级)', '蒙台梭利高级教师证幼儿教师资格证'],
        },
        {
          imgUrl: require('@/assets/imgs/teachers/members/5.jpg'),
          name: '成成老师',
          duty: '保健医生',
          profileList: ['主攻膳食营养、婴幼儿保健', '重庆涪陵卫校护理专业', '三色林泉幼儿园保健医生', '持有保健医生证'],
        },
        {
          imgUrl: require('@/assets/imgs/teachers/members/1.jpg'),
          name: '豹豹老师',
          duty: '教学组长',
          profileList: ['主攻幼儿艺术、语言启蒙', '重庆幼儿高等师范大学学前教育专业', '北京维拉之家蒙特梭利混龄班班主任', '幼儿园教师资格证', '安徽师范大学托育指导大赛三等奖'],
        },
        {
          imgUrl: require('@/assets/imgs/teachers/members/3.jpg'),
          name: '谭谭老师',
          duty: '主班老师',
          profileList: ['主攻幼儿艺术、幼儿感统重庆传媒学院幼儿英语', '牛津国际英豆兒幼儿园主班老师初级育婴师', '合肥未成年人心理辅导知识大赛亚军'],
        },
        {
          imgUrl: require('@/assets/imgs/teachers/members/2.jpg'),
          name: '欣欣老师',
          duty: '主班组长',
          profileList: ['主攻幼儿艺术、幼儿语言', '重庆传媒学院英语专业', '牛津国际英豆兒幼儿园主班老师', '初级育婴师'],
        },
        {
          imgUrl: require('@/assets/imgs/teachers/members/4.jpg'),
          name: '梅梅老师',
          duty: '育儿老师',
          profileList: ['主攻语言启蒙、儿童心理', '重庆工商大学汉语言文学', '水晶丽城幼儿园配班老师', '初级育婴师'],
        },
        {
          imgUrl: require('@/assets/imgs/teachers/members/4.jpg'),
          name: '小小老师',
          duty: '育儿老师',
          profileList: ['主攻语言启蒙、感统训练、儿童心理', '川南幼儿师范学校音乐教育专业', '广东省东莞市虎门镇新英豪学校3-4年级音乐教师经验'],
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.banner {
  padding-top: 26.077812828%;
  background-size: cover;
  background-position: center;
}

.title {
  text-align: center;
  font-size: 40px;
  color: #96ca3f;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 32px;
}

.teachers {
  width: 1250px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 54px;

  .item {
    flex: 0 0 33.333333%;
    padding: 33px 60px;

    .avatar {
      width: 100%;
      padding-top: 100%;
      background-position: center;
      background-size: cover;
    }

    .name {
      font-size: 24px;
      color: #252525;
      margin-bottom: 6px;
      margin-top: 22px;
    }
    .duty {
      font-size: 18px;
      color: #666;
      padding-bottom: 17px;
      margin-bottom: 17px;
      border-bottom: 1px solid rgb(232, 232, 232);
    }
    ul.profile-list {
      padding-left: 20px;
    }
    .profile-item {
      font-size: 18px;
      color: #b4b4b4;
      text-align: justify;
    }
  }
}
</style>
