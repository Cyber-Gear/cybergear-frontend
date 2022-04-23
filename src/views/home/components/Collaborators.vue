<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.home.text21") }}</span>
    </div>
    <ul class="box_content">
      <li><img src="../../../assets/images/collaborators/collaborators1.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators2.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators3.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators4.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators5.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators6.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators7.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators8.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators9.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators10.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators11.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators12.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators13.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators14.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators15.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators16.png" alt="" /></li>
      <li><img src="../../../assets/images/collaborators/collaborators17.png" alt="" /></li>
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
