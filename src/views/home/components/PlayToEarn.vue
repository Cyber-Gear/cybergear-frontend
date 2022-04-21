<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.home.text24") }}</span>
    </div>
    <div class="box_content">
      <video loop muted controls>
        <source src="../../../assets/videos/video2.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayToEarn",
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 5vw;
}
.box_content {
  width: fit-content;
  padding: 1.55vw 1.1vw 1.2vw 0.9vw;
  margin: 0 auto;
  background: url("../../../assets/images/bg11.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  video {
    width: 70vw;
    height: calc(70vw * 0.562);
  }
}
</style>
