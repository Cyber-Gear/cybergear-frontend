<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.home.text24") }}</span>
    </div>
    <div class="box_content">
      <video loop muted controls poster="../../../assets/images/video_poster1.jpg">
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
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
}
.box_content {
  width: fit-content;
  padding: 0.25rem 0.2rem 0.4rem 0.25rem;
  margin: 0 auto;
  background: url("../../../assets/images/bg11.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  video {
    width: 70vw;
    height: calc(70vw * 0.5625);
  }
}
</style>
