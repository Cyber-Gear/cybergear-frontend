<template>
  <div class="page">
    <div class="inner">
      <div class="back_box" @click="goBack">
        <!-- <i class="iconfont pcfanhui"></i> -->
        <span>{{ $t("btns.text1") }}</span>
      </div>
      <div class="box_title2">
        <img :src="`${$urlImages}title_bg3.webp`" alt="" />
        <div><span>Detail</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenBoxs",
  data() {
    return {
      boxList: [],
    };
  },
  created() {
    if (Object.keys(this.$route.query).length > 0) {
      // boxType
    }
  },
  methods: {
    goBack() {
      history.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  padding: 0.8rem 0;
  background: url($urlImages + "bg12.webp") no-repeat;
  background-size: 100% auto;
  .inner {
    width: 11.5rem;
    margin: 0.5rem auto 0 auto;
    position: relative;
  }
}
.box_title2 {
  width: fit-content;
}
.list {
  width: 100%;
  margin-bottom: 0.2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.25rem;
  li {
    width: 2.4rem;
    .box {
      width: 100%;
      height: auto;
      padding: 0.4rem;
      background: url($urlImages + "box-bg.webp") no-repeat;
      background-size: 100% 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .card {
      width: 100%;
      height: 3.7rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        font-size: 0.16rem;
        position: absolute;
        top: 7%;
        left: 7%;
      }
    }
    .bottom {
      width: 90%;
      height: 0.4rem;
      margin: 0 auto;
      background: #000000;
      border-radius: 0.04rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.1rem;
      span {
        font-size: 0.12rem;
      }
      .el-button {
        width: 0.6rem;
        height: 0.3rem;
      }
    }
  }
}
.nodata {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  > div {
    p {
      font-size: 0.2rem;
      font-weight: bold;
      margin-bottom: 0.2rem;
    }
    .el-button {
      width: 1rem;
      height: 0.4rem;
    }
  }
}
</style>
