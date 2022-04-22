<template>
  <div class="box">
    <div class="banner">
      <div class="figure_gif">
        <!-- <img src="../../../assets/images/banner_gif.gif" alt="" /> -->
        <video loop autoplay muted>
          <source src="../../../assets/videos/banner_video.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="contact">
        <div class="center" @click="openVideo">
          <img class="logo" src="../../../assets/images/logo2.png" alt="" />
          <span>{{ $t("message.home.text22") }}</span>
          <div class="right">
            <img src="../../../assets/images/contact1.png" alt="" />
            <img src="../../../assets/images/contact2.png" alt="" />
            <img src="../../../assets/images/contact3.png" alt="" />
            <img src="../../../assets/images/contact4.png" alt="" />
          </div>
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
}
.banner {
  width: 100%;
  height: 100%;
  background: url("../../../assets/images/bg1.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .figure_gif {
    width: 100%;
    height: 56.25vw;
    margin-top: 100px;
    video {
      width: 100%;
      height: 100%;
    }
  }
  .contact {
    width: 100%;
    padding: 2vh 0;
    position: relative;
    display: flex;
    justify-content: center;
    .center {
      text-align: center;
      position: relative;
      .logo {
        cursor: url("../../../assets/images/hand.jpg"), pointer;
        width: 30vw;
        height: auto;
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
      right: -80%;
      top: 10%;
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
  width: 60vw;
  height: calc(60vw * 0.5625);
  background: #000;
  > div {
    position: relative;
    span {
      font-size: 80px;
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
</style>
