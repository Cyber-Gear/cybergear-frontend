<template>
  <div class="page">
    <div class="inner">
      <div class="box_title2">
        <img :src="`${$urlImages}title_bg3.webp`" alt="" />
        <div>
          <span>Claim Mystery Box</span>
          <div>
            <img class="angle1" :src="`${$urlImages}angle6.webp`" alt="" />
            <span>购买盲盒可获取稀有碎片，CT</span>
            <img class="angle2" :src="`${$urlImages}angle6.webp`" alt="" />
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box1">
          <img :src="`${$urlImages}box.webp`" alt="" />
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
              <el-input v-model="amount" type="number" placeholder="请输入" clearable></el-input>
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
export default {
  name: "BuyMysteryBox",
  data() {
    return { amount: null };
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  padding: 0.8rem 0;
  .inner {
    width: 12.5rem;
    height: 100%;
    margin: 0 auto;
    padding-top: 0.5rem;
    // background: url($urlImages + "bg2.webp") no-repeat;
    // background-size: 65% auto;
    // background-position: center center;
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
    img {
      width: 3.7rem;
      height: 3.2rem;
    }
  }
  .box2 {
    width: 50%;
    background: rgba(0, 0, 0, 0.45);
    border-radius: 0.1rem;
    padding: 0 0.2rem;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.25rem;
      font-weight: 400;
      margin: 0.5rem 0;
      .el-input {
        width: 3.2rem;
      }
      .el-button {
        width: 100%;
        height: 0.5rem;
      }
    }
  }
}
</style>
