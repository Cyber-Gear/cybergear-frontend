<template>
  <div class="page">
    <div class="inner">
      <div class="box_title2">
        <div class="left">
          <img :src="`${$urlImages}title_bg3.webp`" alt="" />
          <div>
            <span>{{ $t("buybox.text2") }}</span>
            <div class="tips">
              <img class="angle1" :src="`${$urlImages}angle6.webp`" alt="" />
              <span>{{ $t("buybox.text3") }}</span>
              <img class="angle2" :src="`${$urlImages}angle6.webp`" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box1">
          <LottieAnimation></LottieAnimation>
        </div>
        <ul class="box2">
          <li>
            <div>{{ $t("buybox.text4") }}</div>
            <div>38900</div>
          </li>
          <li>
            <div>{{ $t("buybox.text5") }}</div>
            <div>50 BUSD</div>
          </li>
          <li>
            <div>{{ $t("buybox.text6") }}</div>
            <div>
              <el-input-number v-model="amount" @change="handleChange" :min="1" :max="999999"></el-input-number>
            </div>
          </li>
          <li>
            <div>{{ $t("buybox.text7") }}</div>
            <div>1000 BUSD</div>
          </li>
          <li>
            <el-button type="primary">{{ $t("buybox.text8") }}</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LottieAnimation from "@/components/LottieAnimation.vue";
export default {
  name: "BuyMysteryBox",
  components: { LottieAnimation },
  data() {
    return { amount: null };
  },
  methods: {
    handleChange(value) {
      // console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  min-height: calc(100vh - 5rem);
  padding: 0.8rem 0;
  background: url($urlImages + "bg13.webp") no-repeat;
  background-size: 100% auto;
  .inner {
    width: 11.5rem;
    height: 100%;
    margin: 0 auto;
    padding-top: 0.5rem;
  }
}
.box {
  width: 100%;
  height: auto;
  border-radius: 0.1rem;
  border: 0.01rem solid #5f6972;
  padding: 0.5rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  .box1 {
    width: 5rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box2 {
    width: 5rem;
    background: rgba(0, 0, 0, 0.45);
    border-radius: 0.1rem;
    padding: 0 0.2rem;
    li {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.25rem;
      font-weight: 400;
      .el-input-number {
        width: 3.2rem;
        height: 0.5rem;
      }
      .el-button {
        width: 100%;
        height: 0.5rem;
        font-size: 0.2rem;
        font-weight: 400;
      }
    }
  }
}
</style>
