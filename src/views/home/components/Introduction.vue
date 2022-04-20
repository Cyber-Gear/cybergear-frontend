<template>
  <div class="box">
    <div class="box_content">
      <img class="img" src="../../../assets/images/figure6.png" alt="" />
      <div class="top">
        <div>
          <div class="box_title">
            <span>{{ $t("message.home.text16") }}</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <img src="../../../assets/images/angle.png" alt="" />
          <div>
            <p>{{ $t("message.home.text4") }}</p>
            <p>{{ $t("message.home.text5") }}</p>
            <p>{{ $t("message.home.text6") }}</p>
          </div>
        </div>
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
}
.box_content {
  width: 100%;
  height: 60vh;
  margin: 0 auto;
  padding-top: 10vh;
  position: relative;
  .img {
    width: auto;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
  }
  .top {
    width: 100%;
    height: 40%;
    border-bottom: 2px dashed #555;
    > div {
      width: 40%;
      height: 100%;
      border-right: 2px dashed #555;
      display: flex;
      align-items: flex-end;
    }
  }
  .bottom {
    width: 100%;
    height: 60%;
    > div {
      width: 40%;
      height: 100%;
      border-right: 2px dashed #555;
      display: flex;
      padding-right: 2%;
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
}
</style>
