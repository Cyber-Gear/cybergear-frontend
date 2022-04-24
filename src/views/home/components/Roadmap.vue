<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.roadmap.text1") }}</span>
    </div>
    <div class="box_content">
      <div class="top">
        <div>
          <div>
            <p>{{ $t("message.roadmap.list1[1].time") }}</p>
            <p>{{ $t("message.roadmap.list1[1].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap.list1[2].time") }}</p>
            <p>{{ $t("message.roadmap.list1[2].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap.list1[4].time") }}</p>
            <p>{{ $t("message.roadmap.list1[4].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap.list1[6].time") }}</p>
            <p>{{ $t("message.roadmap.list1[6].text") }}</p>
          </div>
        </div>
      </div>
      <div class="center">
        <img src="../../../assets/images/roadmap_bg3.png" alt="" />
      </div>
      <div class="bottom">
        <div>
          <div>
            <p>{{ $t("message.roadmap.list1[0].time") }}</p>
            <p>{{ $t("message.roadmap.list1[0].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap.list1[3].time") }}</p>
            <p>{{ $t("message.roadmap.list1[3].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap.list1[5].time") }}</p>
            <p>{{ $t("message.roadmap.list1[5].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap.list1[7].time") }}</p>
            <p>{{ $t("message.roadmap.list1[7].text") }}</p>
          </div>
        </div>
        <div>
          <div>
            <p>{{ $t("message.roadmap.list1[8].time") }}</p>
            <p>{{ $t("message.roadmap.list1[8].text") }}</p>
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
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  position: relative;
  background: url("../../../assets/images/bg8.png") no-repeat;
  background-size: auto 100%;
}
.box_content {
  width: 100%;
  padding: 2rem 0;
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
      p {
        &:nth-child(1) {
          font-size: 0.18rem;
          font-weight: bold;
          color: #e39a21;
        }
        &:nth-child(2) {
          font-size: 0.12rem;
          font-weight: bold;
        }
      }
    }
  }
  .top {
    > div {
      width: 1.9rem;
      height: 2rem;
      background: url("../../../assets/images/roadmap_bg2.png") no-repeat;
      background-size: 100% 100%;
      position: relative;
      &:nth-child(1) {
        left: 2.56rem;
      }
      &:nth-child(2) {
        left: 2.84rem;
      }
      &:nth-child(3) {
        left: 3.12rem;
      }
      &:nth-child(4) {
        left: 3.36rem;
      }
    }
  }
  .bottom {
    background: url("../../../assets/images/roadmap_bg4.png") no-repeat;
    background-size: auto 100%;
    background-position: center;
    > div {
      width: 1.6rem;
      height: 1.8rem;
      background: url("../../../assets/images/roadmap_bg1.png") no-repeat;
      background-size: 100% 100%;
      position: relative;
      &:nth-child(1) {
        left: 1.6rem;
      }
      &:nth-child(2) {
        left: 2.19rem;
      }
      &:nth-child(3) {
        left: 2.8rem;
      }
      &:nth-child(4) {
        left: 3.4rem;
      }
      &:nth-child(5) {
        left: 4.05rem;
      }
    }
  }
}
</style>
