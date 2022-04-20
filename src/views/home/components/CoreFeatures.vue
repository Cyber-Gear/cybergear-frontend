<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.home.text7") }}</span>
    </div>
    <ul class="box_content">
      <li>
        <div>{{ $t("message.home.text8") }}</div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>{{ $t("message.home.text9") }}</p>
        </div>
        <img src="../../../assets/images/coreFeatures_figure1.png" alt="" />
      </li>
      <li>
        <div>{{ $t("message.home.text10") }}</div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>{{ $t("message.home.text11") }}</p>
        </div>
      </li>
      <li>
        <div>{{ $t("message.home.text12") }}</div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>{{ $t("message.home.text13") }}</p>
        </div>
        <img src="../../../assets/images/coreFeatures_figure2.png" alt="" />
      </li>
      <li>
        <div>{{ $t("message.home.text14") }}</div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>{{ $t("message.home.text15") }}</p>
        </div>
        <img src="../../../assets/images/coreFeatures_figure3.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CoreFeatures",
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 5vw;
  background: url("../../../assets/images/bg5.png") no-repeat;
  background-size: 100% 100%;
}
.box_content {
  display: flex;
  justify-content: space-around;
  li {
    width: 20%;
    height: 45vw;
    background: url("../../../assets/images/bg6.png") no-repeat;
    background-size: 100% auto;
    padding: 0 10px;
    position: relative;
    &:nth-child(1) {
      margin-top: 5%;
      > img {
        top: -1vw;
        right: 0;
      }
    }
    &:nth-child(2) {
      margin-top: 12%;
    }
    &:nth-child(3) {
      margin-top: 0%;
      > img {
        transform: rotate(-90deg);
        left: -5.5vw;
        top: 8vw;
      }
    }
    &:nth-child(4) {
      margin-top: 8%;
      > img {
        transform: rotate(90deg);
        right: -4.5vw;
        top: 15vw;
      }
    }
    > img {
      width: 5vw;
      height: auto;
      position: absolute;
    }
    div {
      &:nth-child(1) {
        width: 40%;
        height: 18%;
        margin: 0 auto;
        padding-right: 8%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        background: linear-gradient(180deg, #ffffff 0%, #7ee9f4 98%, #72e7f3 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &:nth-child(2) {
        display: flex;
        padding-top: 6vw;
        img {
          width: auto;
          height: 2vw;
          margin: 0 5px;
        }
        p {
          width: 80%;
          font-size: 12px;
          font-weight: 400;
          line-height: 17px;
        }
      }
    }
  }
}
</style>
