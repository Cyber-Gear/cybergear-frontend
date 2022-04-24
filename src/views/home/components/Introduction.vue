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
            <span>{{ $t("message.introduction.text1") }}</span>
          </div>
        </div>
        <div class="bottom">
          <img src="../../../assets/images/angle.png" alt="" />
          <div>
            <p>{{ $t("message.introduction.text2") }}</p>
            <p>{{ $t("message.introduction.text3") }}</p>
            <p>{{ $t("message.introduction.text4") }}</p>
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
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  background: url("../../../assets/images/bg2.png") no-repeat;
  background-size: auto;
  background-position: top left;
  position: relative;
  padding-top: 1.2rem;
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
