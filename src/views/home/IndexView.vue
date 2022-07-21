<template>
  <div class="home">
    <img class="absolute1" :src="`${$urlImages}bg16.webp`" alt="" />
    <img class="absolute2" :src="`${$urlImages}bg15.webp`" alt="" />
    <div class="box1">
      <div class="banner">
        <div class="figure_gif">
          <video loop autoplay muted>
            <source :src="`${$urlVideos}banner_video.mp4`" type="video/mp4" />
          </video>
        </div>
        <div class="contact">
          <div>
            <img @click="isShowVideo = true" class="logo" :src="`${$urlImages}logo2.webp`" alt="" />
            <span>{{ $t("home.text4") }}</span>
            <div class="linklist">
              <a v-for="(item, index) in linkList" :key="index">
                <img :src="item.image" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <el-dialog center top="0" :visible.sync="isShowVideo" :modal-append-to-body="false" :destroy-on-close="true">
        <VideoPlayback :videoUrl="`${$urlVideos}video1.mp4`"></VideoPlayback>
      </el-dialog>
    </div>
    <div class="box2">
      <div v-for="(item, index) in btnList" :key="index">
        <img :src="item.image" alt="" />
        <p>{{ $t(item.text) }}</p>
      </div>
    </div>
    <!-- Introduction -->
    <div class="box3">
      <div class="box_content">
        <img class="border2" :src="`${$urlImages}border2.webp`" alt="" />
        <img class="border3" :src="`${$urlImages}border3.webp`" alt="" />
        <img class="x" :src="`${$urlImages}angle5.webp`" alt="" />
        <div class="left">
          <div class="top">
            <div class="box_title">
              <span>{{ $t("home.text5") }}</span>
            </div>
          </div>
          <div class="bottom">
            <img :src="`${$urlImages}angle.webp`" alt="" />
            <div>
              <p>{{ $t("home.text6") }}</p>
              <p>{{ $t("home.text7") }}</p>
              <p>{{ $t("home.text8") }}</p>
            </div>
          </div>
        </div>
        <div class="right">
          <video loop autoplay muted>
            <source :src="`${$urlVideos}introduction.mp4`" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    <!-- Core Features -->
    <div class="box4">
      <div class="box_title">
        <span>{{ $t("home.text9") }}</span>
      </div>
      <ul class="box_content">
        <li v-for="(item, index) in coreFeaturesList" :key="index">
          <div>{{ $t(item.text1) }}</div>
          <div>
            <img :src="`${$urlImages}angle2.webp`" alt="" />
            <p>{{ $t(item.text2) }}</p>
          </div>
          <img v-if="item.image" :src="item.image" alt="" />
        </li>
      </ul>
    </div>
    <!-- Role -->
    <div class="box5">
      <div class="box_title">
        <span>{{ $t("home.text10") }}</span>
      </div>
      <div class="box_content">
        <swiper class="role" :options="roleOptionTop" ref="roleTop">
          <swiper-slide v-for="(item, index) in roleList" :key="index">
            <img class="bg" :src="item.card2" alt="" />
            <div class="leftbox">
              <div class="top">
                <span>{{ $t(item.name) }}</span>
                <div>
                  <p>{{ $t(item.name) }}</p>
                  <img v-show="item.rarity == 'MR'" :src="`${$urlImages}ShikaStudio/level-MR.webp`" alt="" />
                  <img v-show="item.rarity == 'SR'" :src="`${$urlImages}ShikaStudio/level-SR.webp`" alt="" />
                  <img v-show="item.rarity == 'UR'" :src="`${$urlImages}ShikaStudio/level-UR.webp`" alt="" />
                  <img v-show="item.rarity == 'R'" :src="`${$urlImages}ShikaStudio/level-R.webp`" alt="" />
                </div>
              </div>
              <div class="bottom">
                <img class="angle" :src="`${$urlImages}angle.webp`" alt="" />
                <div>{{ $t(item.nftdes) }}</div>
              </div>
            </div>
            <div class="rightbox">
              <img :src="item.card3" alt="" />
            </div>
          </swiper-slide>
        </swiper>
        <swiper class="role-thumbs" :options="roleOptionThumbs" ref="roleThumbs">
          <swiper-slide v-for="(item, index) in roleList" :key="index" :class="{ active: roleIndex == index }">
            <span>{{ $t(item.name) }}</span>
            <img v-if="roleIndex == index" :src="item.attrIconActive" alt="" />
            <img v-else :src="item.attrIcon" alt="" />
            <span>{{ index + 1 }}</span>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Game Mode -->
    <div class="box6">
      <div class="box_title">
        <span>{{ $t("home.text11") }}</span>
      </div>
      <div class="row">
        <div>{{ $t("home.text12") }}</div>
        <div>{{ $t("home.text13") }}</div>
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
    <!-- Play To Earn -->
    <div class="box7">
      <div class="box_title">
        <span>{{ $t("home.text14") }}</span>
      </div>
      <div class="box_content">
        <video loop muted controls :poster="`${$urlImages}video_poster1.webp`">
          <source :src="`${$urlVideos}video2.mp4`" type="video/mp4" />
        </video>
      </div>
    </div>
    <!-- Roadmap -->
    <div class="box8">
      <div class="box_title">
        <span>{{ $t("home.text15") }}</span>
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
          <img :src="`${$urlImages}roadmap_bg3.webp`" alt="" />
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
    <!-- <div class="box9">
      <div class="box_title">
        <span>{{ $t("home.text16") }}</span>
      </div>
      <ul class="box_content">
        <li v-for="(image, index) in collaboratorsList" :key="index">
          <img :src="image" alt="" />
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { shikastudio } from "@/mock/nftworks";
import VideoPlayback from "@/components/VideoPlayback.vue";
export default {
  name: "Home",
  components: { VideoPlayback },
  data() {
    return {
      isShowVideo: false,
      btnList: [
        { image: `${this.$urlImages}btn_icon1.webp`, text: "home.text1" },
        { image: `${this.$urlImages}btn_icon2.webp`, text: "home.text2" },
        { image: `${this.$urlImages}btn_icon3.webp`, text: "home.text3" },
      ],
      linkList: [
        { image: this.$urlImages + "contact_Gitbook.webp", href: "" },
        { image: this.$urlImages + "contact_Twitter.webp", href: "" },
        { image: this.$urlImages + "contact_Discord.webp", href: "" },
        { image: this.$urlImages + "contact_Medium.webp", href: "" },
      ],
      coreFeaturesList: [
        {
          text1: "home.list1[0].text1",
          text2: "home.list1[0].text2",
          image: `${this.$urlImages}coreFeatures_figure1.webp`,
        },
        { text1: "home.list1[1].text1", text2: "home.list1[1].text2", image: "" },
        {
          text1: "home.list1[2].text1",
          text2: "home.list1[2].text2",
          image: `${this.$urlImages}coreFeatures_figure2.webp`,
        },
        {
          text1: "home.list1[3].text1",
          text2: "home.list1[3].text2",
          image: `${this.$urlImages}coreFeatures_figure2.webp`,
        },
      ],
      roadmapList1: [
        { time: "home.list4[1].time", text: "home.list4[1].text" },
        { time: "home.list4[3].time", text: "home.list4[3].text" },
        { time: "home.list4[5].time", text: "home.list4[5].text" },
        { time: "home.list4[7].time", text: "home.list4[7].text" },
      ],
      roadmapList2: [
        { time: "home.list4[0].time", text: "home.list4[0].text" },
        { time: "home.list4[2].time", text: "home.list4[2].text" },
        { time: "home.list4[4].time", text: "home.list4[4].text" },
        { time: "home.list4[6].time", text: "home.list4[6].text" },
        { time: "home.list4[8].time", text: "home.list4[8].text" },
      ],
      collaboratorsList: [
        `${this.$urlImages}collaborators1.webp`,
        `${this.$urlImages}collaborators2.webp`,
        `${this.$urlImages}collaborators3.webp`,
        `${this.$urlImages}collaborators4.webp`,
        `${this.$urlImages}collaborators5.webp`,
        `${this.$urlImages}collaborators6.webp`,
        `${this.$urlImages}collaborators7.webp`,
        `${this.$urlImages}collaborators8.webp`,
        `${this.$urlImages}collaborators9.webp`,
        `${this.$urlImages}collaborators10.webp`,
        `${this.$urlImages}collaborators11.webp`,
        `${this.$urlImages}collaborators12.webp`,
        `${this.$urlImages}collaborators13.webp`,
        `${this.$urlImages}collaborators14.webp`,
        `${this.$urlImages}collaborators15.webp`,
        `${this.$urlImages}collaborators16.webp`,
        `${this.$urlImages}collaborators17.webp`,
      ],
      roleList: shikastudio.works,
      roleIndex: 0,
      roleOptionTop: {
        // effect: "fade",
        // fadeEffect: { crossFade: true },
        direction: "vertical",
        observer: true,
        observeParents: true,
        grabCursor: true,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        on: {
          slideChange: () => {
            this.roleIndex = this.$refs.roleTop.swiper.activeIndex;
          },
        },
      },
      roleOptionThumbs: {
        direction: "vertical",
        slidesPerView: 8,
        observer: true,
        observeParents: true,
        grabCursor: true,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        on: {
          tap: () => {
            this.roleIndex = this.$refs.roleThumbs.swiper.clickedIndex;
          },
        },
      },
      gameModeList: [
        { text: "home.list3[0]", image: `${this.$urlImages}gamemode_pve.webp` },
        { text: "home.list3[1]", image: `${this.$urlImages}gamemode_pve2.webp` },
        { text: "home.list3[2]", image: `${this.$urlImages}gamemode_pvp.webp` },
        { text: "home.list3[3]", image: `${this.$urlImages}gamemode_fighting.webp` },
        { text: "home.list3[4]", image: `${this.$urlImages}gamemode_squad.webp` },
      ],
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
    roleIndex(newVal) {
      this.$refs.roleTop.swiper.slideTo(newVal);
      this.$refs.roleThumbs.swiper.slideTo(newVal);
    },
    gameModeIndex(newVal) {
      this.$refs.gameModeTop.swiper.slideTo(newVal);
      this.$refs.gameModeThumbs.swiper.slideTo(newVal);
    },
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
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
      > div {
        text-align: center;
        position: relative;
        .logo {
          cursor: url($urlImages + "hand.webp"), pointer;
          width: 5rem;
          height: auto;
          transition: all 0.2s;
          &:hover {
            transform: scale(0.95);
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
        .linklist {
          display: flex;
          position: absolute;
          right: -70%;
          top: 10%;
          a {
            width: 0.5rem;
            height: 0.5rem;
            margin: 0 0.05rem;
            background: url($urlImages + "contact_border.webp") no-repeat;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 55%;
              height: auto;
            }
          }
        }
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
    background: url($urlImages + "btn_bg3.webp") no-repeat;
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
  width: 12.5rem;
  margin: 0.5rem auto;
  background: url($urlImages + "bg2.webp") no-repeat;
  background-size: 25% auto;
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
      width: 60%;
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
        height: 38%;
        margin-bottom: 4%;
        display: flex;
        align-items: flex-end;
      }
      .bottom {
        width: 100%;
        height: 58%;
        display: flex;
        img {
          width: auto;
          height: 0.2rem;
          transform: rotate(-90deg);
        }
        div {
          font-size: 0.12rem;
          line-height: 0.2rem;
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
      position: relative;
      video {
        width: 5rem;
        height: 5rem;
      }
    }
  }
}
.box4 {
  width: 12.5rem;
  margin: 0.5rem auto;
  background: url($urlImages + "bg5.webp") no-repeat;
  background-size: 100% 100%;
  .box_content {
    display: flex;
    justify-content: space-around;
    li {
      width: 2rem;
      height: 5rem;
      background: url($urlImages + "bg6.webp") no-repeat;
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
  width: 12.5rem;
  margin: 0.5rem auto;
  .box_content {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
  }
  .role {
    width: 80%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      .bg {
        max-width: 6rem;
        max-height: 5rem;
        position: absolute;
        top: 0;
        left: 0;
        transform: rotateY(180deg);
      }
      .leftbox {
        width: 50%;
        background: url($urlImages + "bg9.webp") no-repeat;
        background-size: 100% 100%;
        background-position: right center;
        margin-top: 10%;
        .top {
          width: 88%;
          height: 42%;
          margin-bottom: 3%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          > span {
            font-size: 0.5rem;
            font-weight: 600;
            color: #555555;
            margin-right: 0.3rem;
          }
          > div {
            text-align: right;
            p {
              font-size: 0.2rem;
              font-weight: 600;
              color: #22bbff;
            }
            img {
              width: 0.45rem;
              height: auto;
            }
          }
        }
        .bottom {
          width: 88%;
          height: 55%;
          display: flex;
          background: url($urlImages + "ShikaStudio/bg1.webp") no-repeat;
          background-size: 100% auto;
          background-position: left bottom;
          .angle {
            width: auto;
            height: 0.2rem;
            transform: rotate(-90deg);
          }
          div {
            font-size: 0.15rem;
            font-weight: 600;
          }
        }
      }
      .rightbox {
        width: 50%;
        img {
          width: auto;
          height: 100%;
        }
      }
    }
  }
  .role-thumbs {
    width: 20%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: right;
      span {
        font-size: 0.2rem;
        font-weight: 400;
      }
      img {
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 0.2rem;
      }
      &.active {
        padding: 0.1rem 0.2rem;
        span {
          color: #22bbff;
        }
        img {
          transform: scale(1.2);
        }
      }
    }
  }
}
.box6 {
  width: 12.5rem;
  margin: 0.5rem auto;
  .row {
    width: 10rem;
    height: 1.5rem;
    margin: 0.5rem auto;
    background: url($urlImages + "title_bg2.webp") no-repeat;
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
    background: url($urlImages + "bg10.webp") no-repeat;
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
          background: url($urlImages + "gamemode_bg.webp") no-repeat;
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
      background-image: url($urlImages + "angle3.webp");
      background-size: 100% auto;
      width: 0.5rem;
      height: 0.5rem;
      left: -0.8rem;
      top: 40%;
    }
    .swiper-button-next {
      background-image: url($urlImages + "angle3.webp");
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
  width: 12.5rem;
  margin: 0.5rem auto;
  .box_content {
    width: fit-content;
    padding: 0.25rem 0.2rem 0.4rem 0.25rem;
    margin: 0 auto;
    background: url($urlImages + "bg11.webp") no-repeat;
    background-size: 100% 100%;
    video {
      width: 50vw;
      height: calc(50vw * 0.5625);
    }
  }
}
.box8 {
  width: 12.5rem;
  margin: 0.5rem auto;
  position: relative;
  background: url($urlImages + "bg8.webp") no-repeat;
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
      height: 2rem;
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
        width: 1.8rem;
        height: 2rem;
        background: url($urlImages + "roadmap_bg2.webp") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        &:nth-child(1) {
          left: 20.25%;
        }
        &:nth-child(2) {
          left: 37.3%;
        }
        &:nth-child(3) {
          left: 54.4%;
        }
        &:nth-child(4) {
          left: 71.2%;
        }
      }
    }
    .bottom {
      background: url($urlImages + "roadmap_bg4.webp") no-repeat;
      background-size: auto 100%;
      background-position: center;
      > div {
        width: 1.5rem;
        height: 1.8rem;
        background: url($urlImages + "roadmap_bg1.webp") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        &:nth-child(1) {
          left: 12.7%;
        }
        &:nth-child(2) {
          left: 29.8%;
        }
        &:nth-child(3) {
          left: 47.1%;
        }
        &:nth-child(4) {
          left: 64.6%;
        }
        &:nth-child(5) {
          left: 81.9%;
        }
      }
    }
  }
}
.box9 {
  width: 100%;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  background: url($urlImages + "bg14.webp") no-repeat;
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
