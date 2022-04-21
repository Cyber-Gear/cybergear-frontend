<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.home.text20") }}</span>
    </div>
    <div class="box_content">
      <div class="top">
        <div>
          <div>
            <p>{{ $t("message.roadmap[0].time") }}</p>
            <p>{{ $t("message.roadmap[0].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap[2].time") }}</p>
            <p>{{ $t("message.roadmap[2].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap[4].time") }}</p>
            <p>{{ $t("message.roadmap[4].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap[6].time") }}</p>
            <p>{{ $t("message.roadmap[6].text") }}</p>
          </div>
        </div>
      </div>
      <div class="center">
        <img src="../../../assets/images/roadmap_bg3.png" alt="" />
      </div>
      <div class="bottom">
        <div>
          <div>
            <p>{{ $t("message.roadmap[1].time") }}</p>
            <p>{{ $t("message.roadmap[1].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap[3].time") }}</p>
            <p>{{ $t("message.roadmap[3].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap[5].time") }}</p>
            <p>{{ $t("message.roadmap[5].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap[7].time") }}</p>
            <p>{{ $t("message.roadmap[7].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap[8].time") }}</p>
            <p>{{ $t("message.roadmap[8].text") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Roadmap",
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  padding: 5vw;
  position: relative;
  background: url("../../../assets/images/bg8.png") no-repeat;
  background-size: auto 100%;
}
.box_content {
  width: 100%;
  padding-top: 10vh;
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
      > div {
        padding: 1vw;
      }
      p {
        &:nth-child(1) {
          font-size: 18px;
          font-weight: bold;
          color: #e39a21;
        }
        &:nth-child(2) {
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
  }
  .top {
    > div {
      width: 10vw;
      height: 10vw;
      background: url("../../../assets/images/roadmap_bg2.png") no-repeat;
      background-size: 100% 100%;
      position: relative;
      &:nth-child(1) {
        left: 19.6vw;
      }
      &:nth-child(2) {
        left: 24.9vw;
      }
      &:nth-child(3) {
        left: 30.2vw;
      }
      &:nth-child(4) {
        left: 35.5vw;
      }
    }
  }
  .bottom {
    background: url("../../../assets/images/roadmap_bg4.png") no-repeat;
    background-size: auto 100%;
    background-position: center;
    > div {
      width: 10vw;
      height: 10vw;
      background: url("../../../assets/images/roadmap_bg1.png") no-repeat;
      background-size: 100% 100%;
      position: relative;
      &:nth-child(1) {
        left: 11.8vw;
      }
      &:nth-child(2) {
        left: 17.1vw;
      }
      &:nth-child(3) {
        left: 22.5vw;
      }
      &:nth-child(4) {
        left: 28.1vw;
      }
      &:nth-child(5) {
        left: 33.7vw;
      }
    }
  }
}
</style>
