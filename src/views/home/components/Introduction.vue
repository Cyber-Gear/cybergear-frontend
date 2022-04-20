<template>
  <div class="box">
    <div class="inside">
      <div class="inside2">
        <div class="left">
          <div class="box_title">
            <span>{{ $t("message.home.text16") }}</span>
          </div>
          <div class="box_content">
            <img src="../../../assets/images/angle.png" alt="" />
            <div>
              <p>{{ $t("message.home.text4") }}</p>
              <p>{{ $t("message.home.text5") }}</p>
              <p>{{ $t("message.home.text6") }}</p>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="../../../assets/images/figure6.png" alt="" />
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
  .inside {
    width: 100%;
    height: 100%;
    background: url("../../../assets/images/bg3.png") no-repeat;
    background-size: auto 100%;
    background-position: center;
    margin: 0 auto;
    .inside2 {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .left {
        width: 30%;
        .box_title {
          position: relative;
          top: 15%;
        }
        .box_content {
          display: flex;
          position: relative;
          top: 20%;
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
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 30vw;
          height: auto;
          position: relative;
          bottom: 2vw;
        }
      }
    }
  }
}
</style>
