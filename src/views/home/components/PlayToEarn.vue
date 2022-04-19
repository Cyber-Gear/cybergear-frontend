<template>
  <div class="box">
    <div class="box_title"><span>PLAY TO EARN</span></div>
    <div class="box_content">
      <video loop muted controls>
        <source src="../../../assets/videos/PV2.0/通感-阵营展示-1280X720.mp4" type="video/mp4" />
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
  width: 80vw;
  height: 45vw;
  margin: 0 auto;
  background: url("../../../assets/images/bg11.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  video {
    padding: 3% 2%;
    width: 100%;
    height: 100%;
  }
}
</style>
