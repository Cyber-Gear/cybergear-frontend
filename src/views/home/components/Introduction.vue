<template>
  <div class="box">
    <img class="bg12" src="../../../assets/images/bg12.png" alt="" />
    <div class="box_content">
      <img class="border2" src="../../../assets/images/border2.png" alt="" />
      <img class="border3" src="../../../assets/images/border3.png" alt="" />
      <img class="x" src="../../../assets/images/x.png" alt="" />
      <div class="left">
        <div class="top">
          <div class="box_title">
            <span>{{ $t("message.home.text16") }}</span>
          </div>
        </div>
        <div class="bottom">
          <img src="../../../assets/images/angle.png" alt="" />
          <div>
            <p>{{ $t("message.home.text4") }}</p>
            <p>{{ $t("message.home.text5") }}</p>
            <p>{{ $t("message.home.text6") }}</p>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="../../../assets/images/introduction_gif.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 5vw;
  background: url("../../../assets/images/bg2.png") no-repeat;
  background-size: auto;
  background-position: top left;
  position: relative;
}
.bg12 {
  width: 25%;
  height: auto;
  position: absolute;
  right: 0;
  bottom: -10%;
}
.box_content {
  width: 100%;
  height: 60vh;
  margin: 10vh auto;
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
    width: 3vw;
    height: 3vw;
    position: absolute;
    left: calc(40% - 1.5vw);
    top: calc(40% - 1.5vw);
  }

  .left {
    width: 40%;
    height: 100%;
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
        height: 2vw;
        margin-top: 0.5vh;
        transform: rotate(-90deg);
      }
      div {
        font-size: 12px;
        font-weight: 400;
        line-height: 36px;
      }
    }
  }
  .right {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: url("../../../assets/images/bg13.png") no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    img {
      width: auto;
      height: 120%;
    }
  }
}
</style>
