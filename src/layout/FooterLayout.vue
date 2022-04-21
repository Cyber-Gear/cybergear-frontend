<template>
  <div class="footer_box">
    <img src="../assets/images/logo1.png" alt="" />
    <div>
      <img src="../assets/images/contact1.png" alt="" />
      <img src="../assets/images/contact2.png" alt="" />
      <img src="../assets/images/contact3.png" alt="" />
      <img src="../assets/images/contact4.png" alt="" />
    </div>
    <p>{{ $t("message.footer.text1") }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.footer_box {
  width: 100%;
  height: 35vw;
  margin-top: 10vw;
  background: url("../assets/images/bg4.png") no-repeat;
  background-size: 100% auto;
  text-align: center;
  padding-top: 2vw;
  > img {
    width: 28vw;
    height: auto;
  }
  > div {
    width: 28vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2vw auto;
    img {
      width: 4vw;
      height: 4vw;
      cursor: pointer;
    }
  }
  > p {
    font-size: 15px;
    font-weight: bold;
  }
}
</style>
