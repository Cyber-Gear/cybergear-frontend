<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.gameMode.text1") }}</span>
    </div>
    <div class="box_title2">
      <div>{{ $t("message.gameMode.text2") }}</div>
      <div>{{ $t("message.gameMode.text3") }}</div>
    </div>
    <div class="box_bg">
      <div class="box_content">
        <swiper class="gallery-top" :options="swiperOptionTop" ref="swiperTop">
          <swiper-slide v-for="(item, index) in imgList" :key="index">
            <img :src="item.image" />
            <span>{{ $t(item.text) }}</span>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <swiper class="gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
          <swiper-slide v-for="(item, index) in imgList" :key="index" :class="{ 'slide-thumb-active': currentSwiperIndex == index }">
            <img :src="item.image" />
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
        { image: require("../../../assets/images/gamemode_pve.jpg"), text: "message.gameMode.text4" },
        { image: require("../../../assets/images/gamemode_pve2.jpg"), text: "message.gameMode.text5" },
        { image: require("../../../assets/images/gamemode_pvp.jpg"), text: "message.gameMode.text6" },
        { image: require("../../../assets/images/gamemode_fighting.jpg"), text: "message.gameMode.text7" },
        { image: require("../../../assets/images/gamemode_squad.jpg"), text: "message.gameMode.text8" },
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
        spaceBetween: "2%",
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
  margin-bottom: 0.5rem;
  padding: 0 0.8rem;
}
.box_title2 {
  width: 10rem;
  height: 1.5rem;
  margin: 0.5rem auto;
  background: url("../../../assets/images/title_bg2.png") no-repeat;
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
  background: url("../../../assets/images/bg10.png") no-repeat;
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
      span {
        font-size: 0.5rem;
        font-weight: bold;
        position: absolute;
        bottom: 0.2rem;
        left: 0.2rem;
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
    background-image: url("../../../assets/images/angle3.png");
    background-size: 100% auto;
    width: 0.5rem;
    height: 0.5rem;
    left: -0.8rem;
    top: 40%;
  }
  .swiper-button-next {
    background-image: url("../../../assets/images/angle3.png");
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
</style>
