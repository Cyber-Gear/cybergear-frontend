<template>
  <div class="box">
    <div class="box_title"><span>PLAY TO EARN</span></div>
    <div class="box_content">
      <!-- <video src=""></video> -->
      <div class="btn">Play</div>
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
  padding: 5% 10%;
}
.box_content {
  width: 100%;
  height: 45vw;
  background: url("../../../assets/images/bg7.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .btn {
    width: 15%;
    background: url("../../../assets/images/btn_bg5.png") no-repeat;
    background-size: 100% 100%;
    font-size: 25px;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
  }
}
</style>
