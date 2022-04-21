<template>
  <div class="box">
    <div class="banner">
      <div class="figure_gif">
        <img src="../../../assets/images/banner_gif.gif" alt="" />
      </div>
      <!-- <div class="figure">
        <img src="../../../assets/images/banner_figure1.png" alt="" />
        <img src="../../../assets/images/banner_figure2.png" alt="" />
        <img src="../../../assets/images/banner_figure3.png" alt="" />
        <img src="../../../assets/images/banner_figure4.png" alt="" />
        <img src="../../../assets/images/banner_figure5.png" alt="" />
      </div> -->
      <div class="contact">
        <div class="center" @click="openVideo">
          <img class="logo" src="../../../assets/images/logo2.png" alt="" />
          <span>{{ $t("message.home.text22") }}</span>
        </div>
        <div class="right">
          <img src="../../../assets/images/contact1.png" alt="" />
          <img src="../../../assets/images/contact2.png" alt="" />
          <img src="../../../assets/images/contact3.png" alt="" />
          <img src="../../../assets/images/contact4.png" alt="" />
        </div>
      </div>
    </div>
    <div class="center_video" v-if="isShowVideo">
      <div>
        <span @click="closeVideo">×</span>
        <video loop autoplay muted controls>
          <source src="../../../assets/videos/video1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  data() {
    return {
      isShowVideo: false,
    };
  },
  methods: {
    openVideo() {
      this.isShowVideo = true;
    },
    closeVideo() {
      this.isShowVideo = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
}
.banner {
  width: 100%;
  height: 100%;
  background: url("../../../assets/images/bg1.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .figure_gif {
    width: 100%;
    height: 85vh;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    img {
      width: auto;
      height: calc(85vh - 100px);
    }
  }
  .figure {
    width: 100%;
    height: 85vh;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    img {
      width: auto;
      height: 50vh;
      position: relative;
      &:nth-child(1) {
        bottom: 5%;
        left: 15%;
        z-index: 3;
      }
      &:nth-child(2) {
        bottom: 0;
        left: 5%;
        z-index: 2;
      }
      &:nth-child(3) {
        bottom: 10%;
        z-index: 1;
      }
      &:nth-child(4) {
        bottom: 0;
        right: 10%;
        z-index: 2;
      }
      &:nth-child(5) {
        bottom: 5%;
        right: 15%;
        z-index: 3;
      }
    }
  }
  .contact {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    .center {
      text-align: center;
      position: relative;
      .logo {
        width: 30vw;
        height: auto;
        cursor: url("../../../assets/images/hand.jpg"), pointer;
      }
      span {
        width: fit-content;
        height: fit-content;
        font-size: 10px;
        position: absolute;
        top: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
    .right {
      position: absolute;
      bottom: 10%;
      right: 15%;
      img {
        width: 4vw;
        height: 4vw;
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
}

.center_video {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 99;
  width: calc(50vh * 1.7);
  height: 50vh;
  background: #000;
  > div {
    position: relative;
    span {
      font-size: 50px;
      font-weight: bold;
      position: absolute;
      right: -50px;
      top: -50px;
      cursor: pointer;
    }
    video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
