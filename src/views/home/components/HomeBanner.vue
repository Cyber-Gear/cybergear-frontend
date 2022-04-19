<template>
  <div class="box">
    <div class="banner">
      <div class="figure">
        <div>
          <img src="../../../assets/images/banner_figure1.png" alt="" />
          <img src="../../../assets/images/banner_figure2.png" alt="" />
          <img src="../../../assets/images/banner_figure3.png" alt="" />
          <img src="../../../assets/images/banner_figure4.png" alt="" />
          <img src="../../../assets/images/banner_figure5.png" alt="" />
        </div>
      </div>
      <div class="contact">
        <div>
          <div class="center" @click="openVideo">
            <img class="logo" src="../../../assets/images/logo2.png" alt="" />
            <span>Click Play Video</span>
          </div>
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
          <source src="../../../assets/videos/PV2.0/LG_BR_80s_PV-ALL.mp4" type="video/mp4" />
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
  .figure {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;

    > div {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: auto;
        height: 50vh;
        position: absolute;
        &:nth-child(1) {
          bottom: 20%;
          left: 10%;
          z-index: 3;
        }
        &:nth-child(2) {
          bottom: 18%;
          left: 23%;
          z-index: 2;
        }
        &:nth-child(3) {
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          z-index: 1;
        }
        &:nth-child(4) {
          bottom: 18%;
          right: 25%;
          z-index: 2;
        }
        &:nth-child(5) {
          bottom: 20%;
          right: 10%;
          z-index: 3;
        }
      }
    }
  }
  .contact {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    > div {
      width: 100%;
      height: 100%;
      position: relative;
      .center {
        position: absolute;
        bottom: 10%;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
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
