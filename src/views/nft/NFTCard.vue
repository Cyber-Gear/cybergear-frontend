<template>
  <div>
    <div class="topbox">
      <div class="title">
        <span></span>
        <img :src="`${$urlImages}btn_icon4.webp`" alt="" />
        <div>{{ $t("nftpage.text7") }}</div>
      </div>
      <div class="level" :class="[roleList[roleIndex].rarity]">
        <div>MR</div>
        <div>UR</div>
        <div>SR</div>
        <div>R</div>
      </div>
    </div>
    <div class="boxbottom">
      <swiper class="role-thumbs" :options="roleOptionThumbs" ref="roleThumbs">
        <swiper-slide v-for="(item, index) in roleList" :key="index" :class="{ active: roleIndex == index }">
          <div class="row">
            <img :src="item.card4" alt="" />
            <span>{{ $t(item.name) }}</span>
          </div>
        </swiper-slide>
      </swiper>
      <swiper class="role" :options="roleOptionTop" ref="roleTop">
        <swiper-slide v-for="(item, index) in roleList" :key="index">
          <div class="rightbox">
            <img :src="item.card3" alt="" />
          </div>
          <div class="leftbox">
            <div class="top">
              <span>{{ $t(item.name) }}</span>
              <span>{{ $t(item.name) }}</span>
            </div>
            <div class="bottom">
              <img class="angle" :src="`${$urlImages}angle4.webp`" alt="" />
              <div>{{ $t(item.nftdes) }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { shikastudio } from "@/mock/nftworks";
export default {
  name: "NFTCard",
  data() {
    return {
      roleList: shikastudio.works,
      roleIndex: 0,
      roleOptionTop: {
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
        slidesPerView: 10,
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
    };
  },
  watch: {
    roleIndex(newVal) {
      this.$refs.roleTop.swiper.slideTo(newVal);
      this.$refs.roleThumbs.swiper.slideTo(newVal);
    },
  },
  mounted() {
    this.$refs.roleTop.swiper.slideTo(this.roleIndex);
    this.$refs.roleThumbs.swiper.slideTo(this.roleIndex);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.topbox {
  width: 100%;
  height: 0.36rem;
  line-height: 0.36rem;
  display: flex;
  .title {
    width: 25%;
    display: flex;
    align-items: center;
    span {
      width: 0.04rem;
      height: 0.36rem;
      background: #12b2cb;
    }
    img {
      width: 0.4rem;
      height: auto;
      margin: 0 0.1rem;
    }
    div {
      font-size: 0.2rem;
      font-weight: 400;
      border-bottom: 1px solid;
      border-image: linear-gradient(135deg, rgba(212, 135, 241, 0.44), rgba(82, 224, 255, 0.44)) 1 1;
    }
  }
  .level {
    width: 50%;
    height: 100%;
    font-size: 0.21rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &.MR div:nth-child(1) {
      background-image: url($urlArtists + "ShikaStudio/z-btn-MR2.webp");
    }
    &.UR div:nth-child(2) {
      background-image: url($urlArtists + "ShikaStudio/z-btn-UR2.webp");
    }
    &.SR div:nth-child(3) {
      background-image: url($urlArtists + "ShikaStudio/z-btn-SR2.webp");
    }
    &.R div:nth-child(4) {
      background-image: url($urlArtists + "ShikaStudio/z-btn-R2.webp");
    }
    div {
      width: 1.24rem;
      height: 100%;
      text-align: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center center;
    }
  }
}
.boxbottom {
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
}
.role-thumbs {
  width: 20%;
  height: 100%;
  .swiper-slide {
    width: 100%;
    display: flex;
    align-items: center;
    .row {
      width: 80%;
      display: flex;
      align-items: center;
      img {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.2rem;
      }
      span {
        font-size: 0.2rem;
        font-weight: 400;
      }
    }
    &.active .row {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 0.12rem;
      img {
        margin-right: 0.4rem;
      }
    }
  }
}
.role {
  width: 80%;
  height: 100%;
  .swiper-slide {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .rightbox {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: auto;
        height: 90%;
      }
    }
    .leftbox {
      width: 3.2rem;
      height: 50%;
      background: url($urlImages + "bg3.webp");
      background-size: 100% 100%;
      background-position: left center;
      margin-left: 0.5rem;
      padding-left: 4%;
      .top {
        width: 100%;
        height: 42%;
        margin-bottom: 8%;
        position: relative;
        span {
          &:nth-child(1) {
            font-size: 0.2rem;
            font-weight: bold;
            position: absolute;
            right: 50%;
            bottom: 0;
            z-index: 2;
          }
          &:nth-child(2) {
            font-size: 0.45rem;
            font-weight: bold;
            color: #555555;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 1;
          }
        }
      }
      .bottom {
        width: 100%;
        height: 60%;
        display: flex;
        .angle {
          width: 0.2rem;
          height: 0.2rem;
        }
        div {
          font-size: 0.12rem;
          font-weight: 400;
          line-height: 0.17rem;
        }
      }
    }
  }
}
</style>
