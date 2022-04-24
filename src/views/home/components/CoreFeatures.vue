<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.coreFeatures.text1") }}</span>
    </div>
    <ul class="box_content">
      <li>
        <div>{{ $t("message.coreFeatures.list1[0].text1") }}</div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>{{ $t("message.coreFeatures.list1[0].text2") }}</p>
        </div>
        <img src="../../../assets/images/coreFeatures_figure1.png" alt="" />
      </li>
      <li>
        <div>{{ $t("message.coreFeatures.list1[1].text1") }}</div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>{{ $t("message.coreFeatures.list1[1].text2") }}</p>
        </div>
      </li>
      <li>
        <div>{{ $t("message.coreFeatures.list1[2].text1") }}</div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>{{ $t("message.coreFeatures.list1[2].text2") }}</p>
        </div>
        <img src="../../../assets/images/coreFeatures_figure2.png" alt="" />
      </li>
      <li>
        <div>{{ $t("message.coreFeatures.list1[3].text1") }}</div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>{{ $t("message.coreFeatures.list1[3].text2") }}</p>
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
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  background: url("../../../assets/images/bg5.png") no-repeat;
  background-size: 100% 100%;
}
.box_content {
  display: flex;
  justify-content: space-around;
  li {
    width: 2rem;
    height: 5rem;
    background: url("../../../assets/images/bg6.png") no-repeat;
    background-size: 100% auto;
    padding: 0 0.1rem;
    position: relative;
    &:nth-child(1) {
      margin-top: 5%;
      > img {
        top: -0.3rem;
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
        left: -0.8rem;
        top: 1rem;
      }
    }
    &:nth-child(4) {
      margin-top: 8%;
      > img {
        transform: rotate(90deg);
        right: -0.7rem;
        top: 2rem;
      }
    }
    > img {
      width: 0.7rem;
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
        padding-top: 0.6rem;
        img {
          width: auto;
          height: 0.3rem;
          margin: 0 0.05rem;
        }
        p {
          width: 80%;
          font-size: 0.12rem;
          line-height: 0.15rem;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
