<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.collaborators.text1") }}</span>
    </div>
    <ul class="box_content">
      <li><img src="../../../assets/images/collaborators1.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators2.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators3.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators4.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators5.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators6.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators7.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators8.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators9.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators10.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators11.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators12.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators13.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators14.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators15.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators16.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators17.png" alt="" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Collaborators",
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  background: url("../../../assets/images/bg14.png") no-repeat;
  background-size: auto 100%;
  background-position: top right;
}
.box_content {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  li {
    width: 25%;
    padding: 0.2rem;
    img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
    }
  }
}
</style>
