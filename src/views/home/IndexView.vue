<template>
  <div class="home">
    <img class="absolute1" src="../../assets/images/bg16.png" alt="" />
    <img class="absolute2" src="../../assets/images/bg15.png" alt="" />
    <div class="box1">
      <div class="banner">
        <div class="figure_gif">
          <video loop autoplay muted>
            <source src="../../assets/videos/banner_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="contact">
          <div class="center">
            <img @click="openVideo" class="logo" src="../../assets/images/logo2.png" alt="" />
            <span>{{ $t("message.home.text4") }}</span>
            <div class="right">
              <img src="../../assets/images/contact1.png" alt="" />
              <img src="../../assets/images/contact2.png" alt="" />
              <img src="../../assets/images/contact3.png" alt="" />
              <img src="../../assets/images/contact4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="center_video" v-if="isShowVideo">
        <div>
          <span @click="closeVideo">×</span>
          <video loop autoplay muted controls>
            <source src="../../assets/videos/video1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    <div class="box2">
      <div v-for="(item, index) in btnList" :key="index">
        <img :src="item.image" alt="" />
        <p>{{ $t(item.text) }}</p>
      </div>
    </div>
    <div class="box3">
      <img class="bg12" src="../../assets/images/bg12.png" alt="" />
      <div class="box_content">
        <img class="border2" src="../../assets/images/border2.png" alt="" />
        <img class="border3" src="../../assets/images/border3.png" alt="" />
        <img class="x" src="../../assets/images/x.png" alt="" />
        <div class="left">
          <div class="top">
            <div class="box_title">
              <span>{{ $t("message.home.text5") }}</span>
            </div>
          </div>
          <div class="bottom">
            <img src="../../assets/images/angle.png" alt="" />
            <div>
              <p>{{ $t("message.home.text6") }}</p>
              <p>{{ $t("message.home.text7") }}</p>
              <p>{{ $t("message.home.text8") }}</p>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="../../assets/images/introduction_gif.gif" alt="" />
        </div>
      </div>
    </div>
    <div class="box4">
      <div class="box_title">
        <span>{{ $t("message.home.text9") }}</span>
      </div>
      <ul class="box_content">
        <li v-for="(item, index) in coreFeaturesList" :key="index">
          <div>{{ $t(item.text1) }}</div>
          <div>
            <img src="../../assets/images/angle2.png" alt="" />
            <p>{{ $t(item.text2) }}</p>
          </div>
          <img v-if="item.image" :src="item.image" alt="" />
        </li>
      </ul>
    </div>
    <div class="box5">
      <div class="box_title">
        <span>{{ $t("message.home.text10") }}</span>
      </div>
      <div class="box_content">
        <div class="left_content">
          <div class="characterClasses1" :class="showRoleItem ? 'show' : 'hidden'">
            <img class="bg" :src="roleItem.image" alt="" />
            <div class="left">
              <div class="top">
                <div>{{ $t(roleItem.name) }}</div>
                <div>
                  <div>{{ $t(roleItem.name) }}</div>
                  <img :src="roleItem.level" alt="" />
                </div>
              </div>
              <div class="bottom">
                <div>
                  <img class="angle" src="../../assets/images/angle.png" alt="" />
                  <div>{{ $t(roleItem.description) }}</div>
                </div>
                <img class="bottom_img" src="../../assets/images/role_bg1.png" alt="" />
              </div>
            </div>
            <div class="right"><img :src="roleItem.image" alt="" /></div>
          </div>
        </div>
        <div class="right_content">
          <div class="characterClasses2">
            <div class="item" v-for="(item, index) in roleList" :key="index" :class="{ active: roleIndex == index }" @click="switchClasses(index)">
              <span>{{ $t(item.name) }}</span>
              <img :src="roleIndex == index ? item.iconActive : item.icon" alt="" />
              <span>{{ index + 1 > 9 ? index + 1 : "0" + (index + 1) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box6">
      <div class="box_title">
        <span>{{ $t("message.home.text11") }}</span>
      </div>
      <div class="box_title2">
        <div>{{ $t("message.home.text12") }}</div>
        <div>{{ $t("message.home.text13") }}</div>
      </div>
      <div class="box_bg">
        <div class="box_content">
          <swiper class="gallery-top" :options="gameModeOptionTop" ref="gameModeTop">
            <swiper-slide v-for="(item, index) in gameModeList" :key="index">
              <img :src="item.image" />
              <div>{{ $t(item.text) }}</div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <swiper class="gallery-thumbs" :options="gameModeOptionThumbs" ref="gameModeThumbs">
            <swiper-slide v-for="(item, index) in gameModeList" :key="index" :class="{ 'slide-thumb-active': gameModeIndex == index }">
              <img :src="item.image" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="box7">
      <div class="box_title">
        <span>{{ $t("message.home.text14") }}</span>
      </div>
      <div class="box_content">
        <video loop muted controls poster="../../assets/images/video_poster1.jpg">
          <source src="../../assets/videos/video2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="box8">
      <div class="box_title">
        <span>{{ $t("message.home.text15") }}</span>
      </div>
      <div class="box_content">
        <div class="top">
          <div v-for="(item, index) in roadmapList1" :key="index">
            <div>
              <p>{{ $t(item.time) }}</p>
              <p>{{ $t(item.text) }}</p>
            </div>
          </div>
        </div>
        <div class="center">
          <img src="../../assets/images/roadmap_bg3.png" alt="" />
        </div>
        <div class="bottom">
          <div v-for="(item, index) in roadmapList2" :key="index">
            <div>
              <p>{{ $t(item.time) }}</p>
              <p>{{ $t(item.text) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box9">
      <div class="box_title">
        <span>{{ $t("message.home.text16") }}</span>
      </div>
      <ul class="box_content">
        <li v-for="(image, index) in collaboratorsList" :key="index">
          <img :src="image" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowVideo: false,
      btnList: [
        { image: require("../../assets/images/btn_icon1.png"), text: "message.home.text1" },
        { image: require("../../assets/images/btn_icon2.png"), text: "message.home.text2" },
        { image: require("../../assets/images/btn_icon3.png"), text: "message.home.text3" },
      ],
      coreFeaturesList: [
        {
          text1: "message.home.list1[0].text1",
          text2: "message.home.list1[0].text2",
          image: require("../../assets/images/coreFeatures_figure1.png"),
        },
        { text1: "message.home.list1[1].text1", text2: "message.home.list1[1].text2", image: "" },
        {
          text1: "message.home.list1[2].text1",
          text2: "message.home.list1[2].text2",
          image: require("../../assets/images/coreFeatures_figure2.png"),
        },
        {
          text1: "message.home.list1[3].text1",
          text2: "message.home.list1[3].text2",
          image: require("../../assets/images/coreFeatures_figure2.png"),
        },
      ],
      roleList: [
        {
          oldName: "K",
          name: "message.home.list2[0].name",
          description: "message.home.list2[0].des",
          icon: require("../../assets/images/professional1.png"),
          iconActive: require("../../assets/images/professional_active1.png"),
          image: require("../../assets/images/role_figure1.png"),
          level: require("../../assets/images/role_level_mr.png"),
        },
        {
          oldName: "锦云",
          name: "message.home.list2[1].name",
          description: "message.home.list2[1].des",
          icon: require("../../assets/images/professional2.png"),
          iconActive: require("../../assets/images/professional_active2.png"),
          image: require("../../assets/images/role_figure2.png"),
          level: require("../../assets/images/role_level_r.png"),
        },
        {
          oldName: "托娅",
          name: "message.home.list2[2].name",
          description: "message.home.list2[2].des",
          icon: require("../../assets/images/professional2.png"),
          iconActive: require("../../assets/images/professional_active2.png"),
          image: require("../../assets/images/role_figure3.png"),
          level: require("../../assets/images/role_level_mr.png"),
        },
        {
          oldName: "沐风",
          name: "message.home.list2[3].name",
          description: "message.home.list2[3].des",
          icon: require("../../assets/images/professional5.png"),
          iconActive: require("../../assets/images/professional_active5.png"),
          image: require("../../assets/images/role_figure4.png"),
          level: require("../../assets/images/role_level_sr.png"),
        },
        {
          oldName: "玲夏",
          name: "message.home.list2[4].name",
          description: "message.home.list2[4].des",
          icon: require("../../assets/images/professional4.png"),
          iconActive: require("../../assets/images/professional_active4.png"),
          image: require("../../assets/images/role_figure5.png"),
          level: require("../../assets/images/role_level_sr.png"),
        },

        {
          oldName: "珞珈",
          name: "message.home.list2[5].name",
          description: "message.home.list2[5].des",
          icon: require("../../assets/images/professional4.png"),
          iconActive: require("../../assets/images/professional_active4.png"),
          image: require("../../assets/images/role_figure6.png"),
          level: require("../../assets/images/role_level_mr.png"),
        },
        {
          oldName: "羽飞",
          name: "message.home.list2[6].name",
          description: "message.home.list2[6].des",
          icon: require("../../assets/images/professional1.png"),
          iconActive: require("../../assets/images/professional_active1.png"),
          image: require("../../assets/images/role_figure7.png"),
          level: require("../../assets/images/role_level_r.png"),
        },
        {
          oldName: "魏子鱼",
          name: "message.home.list2[7].name",
          description: "message.home.list2[7].des",
          icon: require("../../assets/images/professional3.png"),
          iconActive: require("../../assets/images/professional_active3.png"),
          image: require("../../assets/images/role_figure8.png"),
          level: require("../../assets/images/role_level_r.png"),
        },
        {
          oldName: "紫婧",
          name: "message.home.list2[8].name",
          description: "message.home.list2[8].des",
          icon: require("../../assets/images/professional6.png"),
          iconActive: require("../../assets/images/professional_active6.png"),
          image: require("../../assets/images/role_figure9.png"),
          level: require("../../assets/images/role_level_mr.png"),
        },
        {
          oldName: "堇源",
          name: "message.home.list2[9].name",
          description: "message.home.list2[9].des",
          icon: require("../../assets/images/professional4.png"),
          iconActive: require("../../assets/images/professional_active4.png"),
          image: require("../../assets/images/role_figure10.png"),
          level: require("../../assets/images/role_level_ur.png"),
        },
        {
          oldName: "君弘",
          name: "message.home.list2[10].name",
          description: "message.home.list2[10].des",
          icon: require("../../assets/images/professional3.png"),
          iconActive: require("../../assets/images/professional_active3.png"),
          image: require("../../assets/images/role_figure11.png"),
          level: require("../../assets/images/role_level_sr.png"),
        },
        {
          oldName: "赵玥",
          name: "message.home.list2[11].name",
          description: "message.home.list2[11].des",
          icon: require("../../assets/images/professional1.png"),
          iconActive: require("../../assets/images/professional_active1.png"),
          image: require("../../assets/images/role_figure12.png"),
          level: require("../../assets/images/role_level_ur.png"),
        },
        {
          oldName: "凤临",
          name: "message.home.list2[12].name",
          description: "message.home.list2[12].des",
          icon: require("../../assets/images/professional3.png"),
          iconActive: require("../../assets/images/professional_active3.png"),
          image: require("../../assets/images/role_figure13.png"),
          level: require("../../assets/images/role_level_r.png"),
        },
        {
          oldName: "樱岚",
          name: "message.home.list2[13].name",
          description: "message.home.list2[13].des",
          icon: require("../../assets/images/professional2.png"),
          iconActive: require("../../assets/images/professional_active2.png"),
          image: require("../../assets/images/role_figure14.png"),
          level: require("../../assets/images/role_level_ur.png"),
        },
        {
          oldName: "Null",
          name: "message.home.list2[14].name",
          description: "message.home.list2[14].des",
          icon: require("../../assets/images/professional5.png"),
          iconActive: require("../../assets/images/professional_active5.png"),
          image: require("../../assets/images/role_figure15.png"),
          level: require("../../assets/images/role_level_ur.png"),
        },
      ],
      gameModeList: [
        { text: "message.home.list3[0]", image: require("../../assets/images/gamemode_pve.jpg") },
        { text: "message.home.list3[1]", image: require("../../assets/images/gamemode_pve2.jpg") },
        { text: "message.home.list3[2]", image: require("../../assets/images/gamemode_pvp.jpg") },
        { text: "message.home.list3[3]", image: require("../../assets/images/gamemode_fighting.jpg") },
        { text: "message.home.list3[4]", image: require("../../assets/images/gamemode_squad.jpg") },
      ],
      roadmapList1: [
        { time: "message.home.list4[1].time", text: "message.home.list4[1].text" },
        { time: "message.home.list4[3].time", text: "message.home.list4[3].text" },
        { time: "message.home.list4[5].time", text: "message.home.list4[5].text" },
        { time: "message.home.list4[7].time", text: "message.home.list4[7].text" },
      ],
      roadmapList2: [
        { time: "message.home.list4[0].time", text: "message.home.list4[0].text" },
        { time: "message.home.list4[2].time", text: "message.home.list4[2].text" },
        { time: "message.home.list4[4].time", text: "message.home.list4[4].text" },
        { time: "message.home.list4[6].time", text: "message.home.list4[6].text" },
        { time: "message.home.list4[8].time", text: "message.home.list4[8].text" },
      ],
      collaboratorsList: [
        require("../../assets/images/collaborators1.png"),
        require("../../assets/images/collaborators2.png"),
        require("../../assets/images/collaborators3.png"),
        require("../../assets/images/collaborators4.png"),
        require("../../assets/images/collaborators5.png"),
        require("../../assets/images/collaborators6.png"),
        require("../../assets/images/collaborators7.png"),
        require("../../assets/images/collaborators8.png"),
        require("../../assets/images/collaborators9.png"),
        require("../../assets/images/collaborators10.png"),
        require("../../assets/images/collaborators11.png"),
        require("../../assets/images/collaborators12.png"),
        require("../../assets/images/collaborators13.png"),
        require("../../assets/images/collaborators14.png"),
        require("../../assets/images/collaborators15.png"),
        require("../../assets/images/collaborators16.png"),
        require("../../assets/images/collaborators17.png"),
      ],
      roleIndex: 0,
      showRoleItem: false,
      roleItem: null,
      gameModeIndex: 0,
      gameModeOptionTop: {
        observer: true,
        observeParents: true,
        grabCursor: true,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        },
        on: {
          slideChange: () => {
            this.gameModeIndex = this.$refs.gameModeTop.swiper.activeIndex;
          },
        },
      },
      gameModeOptionThumbs: {
        spaceBetween: "2%",
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        grabCursor: true,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        on: {
          tap: () => {
            this.gameModeIndex = this.$refs.gameModeThumbs.swiper.clickedIndex;
          },
        },
      },
    };
  },
  watch: {
    gameModeIndex(newVal) {
      this.$refs.gameModeTop.swiper.slideTo(newVal);
      this.$refs.gameModeThumbs.swiper.slideTo(newVal);
    },
  },
  created() {
    this.roleItem = this.roleList[this.roleIndex];
    this.showRoleItem = true;
  },
  methods: {
    openVideo() {
      this.isShowVideo = true;
    },
    closeVideo() {
      this.isShowVideo = false;
    },
    switchClasses(index) {
      if (this.roleIndex == index) return;
      this.roleIndex = index;
      this.showRoleItem = false;
      setTimeout(() => {
        this.roleItem = this.roleList[this.roleIndex];
        this.showRoleItem = true;
      }, 500);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  position: relative;
}
.absolute1 {
  width: 4.4rem;
  height: auto;
  position: absolute;
  left: 0;
  top: 54%;
}
.absolute2 {
  width: 2.48rem;
  height: auto;
  position: absolute;
  right: 0;
  top: 70%;
}
.box1 {
  width: 100%;
  margin-bottom: 0.5rem;
  .banner {
    width: 100%;
    position: relative;
    .figure_gif {
      width: 100%;
      height: calc(100vw * 0.5625);
      video {
        width: 100%;
        height: 100%;
      }
    }
    .contact {
      width: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 0.5rem;
      .center {
        text-align: center;
        position: relative;
        .logo {
          cursor: url("../../assets/images/hand.jpg"), pointer;
          width: 5rem;
          height: auto;
          transition: all 0.2s;
          &:hover {
            transform: scale(0.9);
          }
        }
        span {
          font-size: 0.12rem;
          position: absolute;
          top: 100%;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
      .right {
        height: 100%;
        display: flex;
        align-items: center;
        position: absolute;
        right: -70%;
        top: 10%;
        img {
          width: 0.5rem;
          height: 0.5rem;
          margin: 0 0.05rem;
          cursor: pointer;
        }
      }
    }
  }
  .center_video {
    width: 60vw;
    height: calc(60vw * 0.5625);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 99;
    > div {
      position: relative;
      span {
        font-size: 80px;
        color: #00daff;
        font-weight: bold;
        position: absolute;
        right: -50px;
        top: -80px;
        cursor: pointer;
      }
      video {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.box2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.17rem;
    text-align: center;
    background: url("../../assets/images/btn_bg3.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 0.5rem;
    cursor: pointer;
    img {
      width: auto;
      height: 60%;
      margin-top: 0.15rem;
    }
  }
}
.box3 {
  width: 100%;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  background: url("../../assets/images/bg2.png") no-repeat;
  background-size: 20% auto;
  background-position: top left;
  position: relative;
  padding-top: 1.2rem;
  .bg12 {
    width: 25%;
    height: auto;
    position: absolute;
    right: 0;
    bottom: -10%;
  }
  .box_content {
    width: 100%;
    position: relative;
    display: flex;
    .border2 {
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      top: 40%;
    }
    .border3 {
      width: auto;
      height: 105%;
      position: absolute;
      left: 40%;
      top: 0;
    }
    .x {
      width: 0.4rem;
      height: 0.4rem;
      position: absolute;
      left: calc(40% - 0.4rem / 2);
      top: calc(40% - 0.4rem / 2);
    }
    .left {
      width: 40%;
      height: 5rem;
      .top {
        width: 100%;
        height: 40%;
        display: flex;
        align-items: flex-end;
      }
      .bottom {
        width: 100%;
        height: 60%;
        display: flex;
        img {
          width: auto;
          height: 0.3rem;
          margin-top: 0.1rem;
          transform: rotate(-90deg);
        }
        div {
          font-size: 0.12rem;
          line-height: 0.36rem;
          font-weight: 400;
        }
      }
    }
    .right {
      width: 60%;
      height: 5rem;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background: url("../../assets/images/bg13.png") no-repeat;
      background-size: contain;
      background-position: center;
      position: relative;
      img {
        width: auto;
        height: 120%;
      }
    }
  }
}
.box4 {
  width: 100%;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  background: url("../../assets/images/bg5.png") no-repeat;
  background-size: 100% 100%;
  .box_content {
    display: flex;
    justify-content: space-around;
    li {
      width: 2rem;
      height: 5rem;
      background: url("../../assets/images/bg6.png") no-repeat;
      background-size: 100% auto;
      padding: 0 0.1rem;
      position: relative;
      &:nth-child(1) {
        margin-top: 5%;
        > img {
          top: -0.3rem;
          right: 0;
        }
      }
      &:nth-child(2) {
        margin-top: 12%;
      }
      &:nth-child(3) {
        margin-top: 0%;
        > img {
          transform: rotate(-90deg);
          left: -0.8rem;
          top: 1rem;
        }
      }
      &:nth-child(4) {
        margin-top: 8%;
        > img {
          transform: rotate(90deg);
          right: -0.7rem;
          top: 2rem;
        }
      }
      > img {
        width: 0.7rem;
        height: auto;
        position: absolute;
      }
      div {
        &:nth-child(1) {
          width: 40%;
          height: 18%;
          margin: 0 auto;
          padding-right: 8%;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.14rem;
          font-weight: 600;
          background: linear-gradient(180deg, #ffffff 0%, #7ee9f4 98%, #72e7f3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &:nth-child(2) {
          display: flex;
          padding-top: 0.6rem;
          img {
            width: auto;
            height: 0.3rem;
            margin: 0 0.05rem;
          }
          p {
            width: 80%;
            font-size: 0.12rem;
            font-weight: 400;
          }
        }
      }
    }
  }
}
.box5 {
  width: 100%;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  .box_content {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    .left_content {
      width: 80%;
      height: 100%;
    }
    .right_content {
      width: 20%;
      height: 100%;
    }
  }
  .characterClasses1 {
    width: 100%;
    height: 100%;
    display: flex;
    background-repeat: no-repeat;
    background-size: auto 90%;
    background-position: left top;
    transition: all 0.5s;
    position: relative;
    .bg {
      width: auto;
      height: 90%;
      opacity: 0.3;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotateY(180deg);
    }
    &.show {
      opacity: 1;
      .left {
        opacity: 1;
        .top {
          left: 0%;
        }
        .bottom {
          bottom: -2%;
          opacity: 1;
        }
      }
      .right {
        img {
          right: 10%;
          opacity: 1;
        }
      }
    }
    &.hidden {
      opacity: 0;
      .left {
        opacity: 0;
        .top {
          left: -20%;
        }
        .bottom {
          bottom: -20%;
          opacity: 0;
        }
      }
      .right {
        img {
          right: -20%;
          opacity: 0;
        }
      }
    }
    .left {
      width: 40%;
      background: url("../../assets/images/bg9.png") no-repeat;
      background-size: 100% 100%;
      background-position: right center;
      margin-top: 20%;
      position: relative;
      transition: all 0.5s;
      .top {
        width: 88%;
        height: 44%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        transition: all 0.5s;
        position: absolute;
        top: 0%;
        > div {
          position: relative;
          &:nth-child(1) {
            font-size: 0.45rem;
            font-weight: bold;
            color: #555555;
            right: 10%;
          }
          &:nth-child(2) {
            font-size: 0.2rem;
            font-weight: 600;
            color: #22bbff;
            right: 0;
            img {
              width: auto;
              height: 0.45rem;
            }
          }
        }
      }
      .bottom {
        width: 88%;
        height: calc(100% - 44%);
        transition: all 0.5s;
        position: absolute;
        > div {
          display: flex;
          font-size: 0.12rem;
          font-weight: 600;
        }
        .angle {
          width: auto;
          height: 0.3rem;
          transform: rotate(-90deg);
        }
        .bottom_img {
          width: 100%;
          height: auto;
        }
      }
    }
    .right {
      width: 60%;
      height: 100%;
      position: relative;
      img {
        width: auto;
        height: 90%;
        transition: all 0.5s;
        position: absolute;
      }
    }
  }
  .characterClasses2 {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0.1rem 0;
    &::-webkit-scrollbar {
      width: 0;
    }
    .item {
      cursor: pointer;
      padding: 0.1rem 0.05rem;
      display: flex;
      align-items: center;
      justify-content: right;
      transition: all 0.5s;
      span {
        font-size: 0.25rem;
        font-weight: 400;
        transition: all 0.5s;
      }
      img {
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 0.2rem;
        transition: all 0.5s;
      }
      &.active {
        padding: 0.1rem 0.3rem;
        span {
          color: #22bbff;
        }
        img {
          transform: scale(1.5);
        }
      }
      &:hover {
        padding: 0.1rem 0.3rem;
      }
    }
  }
  .character_animation-enter,
  .character_animation-leave-to {
    opacity: 0.5;
  }
  .character_animation-enter-to,
  .character_animation-leave {
    opacity: 1;
  }
}
.box6 {
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0 0.8rem;
  .box_title2 {
    width: 10rem;
    height: 1.5rem;
    margin: 0.5rem auto;
    background: url("../../assets/images/title_bg2.png") no-repeat;
    background-size: 100% 100%;
    background-position: center;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    div {
      &:nth-child(1) {
        width: 15%;
        font-size: 0.2rem;
        font-weight: bold;
        color: #00daff;
      }
      &:nth-child(2) {
        font-size: 0.12rem;
        margin-left: 0.1rem;
        font-weight: 400;
      }
    }
  }
  .box_bg {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/bg10.png") no-repeat;
    background-size: auto 90%;
    background-position: top center;
  }
  .box_content {
    width: 8rem;
    margin: 0 auto;
    position: relative;
    .gallery-top {
      .swiper-slide {
        text-align: center;
        div {
          background: url("../../assets/images/gamemode_bg.png") no-repeat;
          background-size: 100% 100%;
          padding: 0.1rem 0.2rem;
          font-size: 0.3rem;
          font-weight: bold;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        img {
          width: 100%;
          height: 4.8rem;
        }
      }
    }
    .gallery-thumbs {
      margin-top: 0.2rem;
      .swiper-slide {
        width: 25%;
        opacity: 0.5;
        img {
          width: 100%;
          height: 1rem;
        }
        &.slide-thumb-active {
          opacity: 1;
        }
      }
    }
    .swiper-button-prev {
      background-image: url("../../assets/images/angle3.png");
      background-size: 100% auto;
      width: 0.5rem;
      height: 0.5rem;
      left: -0.8rem;
      top: 40%;
    }
    .swiper-button-next {
      background-image: url("../../assets/images/angle3.png");
      background-size: 100% auto;
      width: 0.5rem;
      height: 0.5rem;
      right: -0.8rem;
      top: 40%;
      transform: rotate(180deg);
    }
    .swiper-button-disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}
.box7 {
  width: 100%;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  .box_content {
    width: fit-content;
    padding: 0.25rem 0.2rem 0.4rem 0.25rem;
    margin: 0 auto;
    background: url("../../assets/images/bg11.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    video {
      width: 70vw;
      height: calc(70vw * 0.5625);
    }
  }
}
.box8 {
  width: 100%;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  position: relative;
  background: url("../../assets/images/bg8.png") no-repeat;
  background-size: auto 100%;
  .box_content {
    width: 100%;
    padding: 2rem 0;
    .center {
      text-align: center;
      img {
        width: 100%;
        height: auto;
      }
    }
    .top,
    .bottom {
      display: flex;
      > div {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          &:nth-child(1) {
            font-size: 0.18rem;
            font-weight: bold;
            color: #e39a21;
          }
          &:nth-child(2) {
            font-size: 0.12rem;
            font-weight: bold;
          }
        }
      }
    }
    .top {
      > div {
        width: 1.9rem;
        height: 2rem;
        background: url("../../assets/images/roadmap_bg2.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        &:nth-child(1) {
          left: 2.56rem;
        }
        &:nth-child(2) {
          left: 2.84rem;
        }
        &:nth-child(3) {
          left: 3.12rem;
        }
        &:nth-child(4) {
          left: 3.36rem;
        }
      }
    }
    .bottom {
      background: url("../../assets/images/roadmap_bg4.png") no-repeat;
      background-size: auto 100%;
      background-position: center;
      > div {
        width: 1.6rem;
        height: 1.8rem;
        background: url("../../assets/images/roadmap_bg1.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        &:nth-child(1) {
          left: 1.6rem;
        }
        &:nth-child(2) {
          left: 2.19rem;
        }
        &:nth-child(3) {
          left: 2.8rem;
        }
        &:nth-child(4) {
          left: 3.4rem;
        }
        &:nth-child(5) {
          left: 4.05rem;
        }
      }
    }
  }
}
.box9 {
  width: 100%;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  background: url("../../assets/images/bg14.png") no-repeat;
  background-size: auto 100%;
  background-position: top right;
  .box_content {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li {
      width: 25%;
      padding: 0.2rem;
      img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
      }
    }
  }
}
</style>
