<template>
  <div class="page">
    <div class="inner">
      <div class="box_title2">
        <div class="left">
          <img :src="`${$urlImages}title_bg3.webp`" alt="" />
          <div>
            <span>Claim Mystery Box</span>
            <div class="tips">
              <img class="angle1" :src="`${$urlImages}angle6.webp`" alt="" />
              <span>购买盲盒可获取稀有碎片、CT</span>
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
            <div>Unclaimed</div>
            <div>38900</div>
          </li>
          <li>
            <div>Price</div>
            <div>50 BUSD</div>
          </li>
          <li>
            <div>Amount</div>
            <div>
              <el-input-number v-model="amount" @change="handleChange" :min="1" :max="999999"></el-input-number>
            </div>
          </li>
          <li>
            <div>Pay</div>
            <div>1000 BUSD</div>
          </li>
          <li>
            <el-button type="primary">CLAIM</el-button>
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
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box2 {
    width: 50%;
    background: rgba(0, 0, 0, 0.45);
    border-radius: 0.1rem;
    padding: 0.2rem;
    li {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
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
