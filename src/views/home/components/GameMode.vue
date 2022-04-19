<template>
  <div class="box">
    <div class="box_title"><span>GAME MODE</span></div>
    <div class="box_title2">
      <div>
        Addition <br />
        of PVP puppets
      </div>
      <div>PVE剧情闯关（能力提升获取CT）,奖池为所有盲盒售卖的10%+玩家在游戏内所有充值的20%</div>
    </div>
    <div class="box_bg">
      <div class="box_content">
        <div class="box_title3">
          <img src="../../../assets/images/gamemode_title2.png" alt="" />
        </div>
        <swiper class="gallery-top" :options="swiperOptionTop" ref="swiperTop">
          <swiper-slide v-for="(item, index) in imgList" :key="index">
            <img :src="item" />
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <swiper class="gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
          <swiper-slide v-for="(item, index) in imgList" :key="index" :class="{ 'slide-thumb-active': currentSwiperIndex == index }">
            <img :src="item" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameMode",
  data() {
    return {
      imgList: [
        require("../../../assets/images/gamemode_bg1.jpg"),
        require("../../../assets/images/gamemode_bg2.jpg"),
        require("../../../assets/images/gamemode_bg3.jpg"),
        require("../../../assets/images/gamemode_bg4.jpg"),
        require("../../../assets/images/gamemode_bg5.jpg"),
      ],
      currentSwiperIndex: 0,
      swiperOptionTop: {
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
            this.currentSwiperIndex = this.$refs.swiperTop.swiper.activeIndex;
          },
        },
      },
      swiperOptionThumbs: {
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        grabCursor: true,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        on: {
          tap: () => {
            this.currentSwiperIndex = this.$refs.swiperThumbs.swiper.clickedIndex;
          },
        },
      },
    };
  },
  watch: {
    currentSwiperIndex(newVal) {
      this.$refs.swiperTop.swiper.slideTo(newVal);
      this.$refs.swiperThumbs.swiper.slideTo(newVal);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 5vw;
}
.box_title2 {
  width: 70vw;
  margin: 2vw auto;
  background: url("../../../assets/images/title_bg2.png") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 30px;
  div {
    &:nth-child(1) {
      font-size: 20px;
      font-weight: bold;
      color: #00daff;
    }
    &:nth-child(2) {
      font-size: 12px;
      font-weight: 400;
      margin-left: 10px;
    }
  }
}
.box_title3 {
  background: url("../../../assets/images/gamemode_title1.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 10vw;
  left: 0;
  z-index: 99;
  img {
    width: 80px;
    height: auto;
  }
}
.box_bg {
  width: 100%;
  height: 100%;
  background: url("../../../assets/images/bg10.png") no-repeat;
  background-size: auto 90%;
  background-position: top center;
}
.box_content {
  width: 60vw;
  margin: 0 auto;
  position: relative;
  .gallery-top {
    .swiper-slide {
      text-align: center;
      img {
        width: 100%;
        height: 35vw;
      }
    }
  }
  .gallery-thumbs {
    margin-top: 1vw;
    .swiper-slide {
      opacity: 0.5;
      width: 25%;
      img {
        width: 100%;
        height: 8vw;
      }
      &.slide-thumb-active {
        opacity: 1;
      }
    }
  }
  .swiper-button-prev {
    background-image: url("../../../assets/images/angle3.png");
    background-size: 100% auto;
    width: 50px;
    left: -80px;
    top: 20%;
  }
  .swiper-button-next {
    background-image: url("../../../assets/images/angle3.png");
    background-size: 100% auto;
    width: 50px;
    right: -80px;
    top: 20%;
    transform: rotate(180deg);
  }
  .swiper-button-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
