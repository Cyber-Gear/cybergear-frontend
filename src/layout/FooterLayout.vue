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
  background: url("../assets/images/bg4.png") no-repeat;
  background-size: 100% auto;
  text-align: center;
  padding-top: 0.8rem;
  > img {
    width: 4.3rem;
    height: auto;
  }
  > div {
    width: 4.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.2rem auto;
    img {
      width: 0.5rem;
      height: 0.5rem;
      cursor: pointer;
    }
  }
  > p {
    font-size: 0.15rem;
    font-weight: bold;
  }
}
</style>
