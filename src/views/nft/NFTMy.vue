<template>
  <div>
    <div class="titlebox">
      <div class="title">
        <span></span>
        <div>我的盲盒</div>
      </div>
      <div class="btns">
        <el-button type="primary" @click="toGiving('box')">赠送</el-button>
        <!-- 绑定funtopia市场 -->
        <el-button @click="toMarket">出售</el-button>
      </div>
    </div>
    <ul class="list">
      <li>
        <div class="box">
          <LottieAnimation></LottieAnimation>
        </div>
        <div class="bottom">
          <span>Mystery BOX /30</span>
          <el-button type="primary" @click="toOpenBoxs()">打开</el-button>
        </div>
      </li>
    </ul>
    <div class="titlebox">
      <div class="title">
        <span></span>
        <div>人物卡牌</div>
      </div>
      <div class="btns">
        <el-button type="primary" @click="toGiving('nft')">赠送</el-button>
        <!-- 绑定funtopia市场 -->
        <el-button @click="toMarket">出售</el-button>
      </div>
    </div>
    <ul class="list">
      <li v-for="(item, index) in cardList" :key="index">
        <div class="box">
          <img :src="`${$urlArtists}ShikaStudio/z-level-${item.rarity}.webp`" alt="" />
        </div>
        <div class="bottom">
          <span>{{ item.rarity }} /{{ item.length }}</span>
          <el-button type="primary" @click="toCardDetail(item.rarity)">详情</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import LottieAnimation from "@/components/LottieAnimation.vue";
import { shikastudio } from "@/mock/nftworks";
export default {
  name: "NFTMy",
  components: { LottieAnimation },
  data() {
    return {
      cardList: [],
      videoInfo: { name: "", videoUrl: "" },
    };
  },
  created() {
    this.getCardList();
  },
  methods: {
    getCardList() {
      let MRArr = shikastudio.works.filter((item) => {
        return item.rarity == "MR";
      });
      let URArr = shikastudio.works.filter((item) => {
        return item.rarity == "UR";
      });
      let SRArr = shikastudio.works.filter((item) => {
        return item.rarity == "SR";
      });
      let RArr = shikastudio.works.filter((item) => {
        return item.rarity == "R";
      });
      const MRObj = { ...MRArr[0], length: MRArr.length };
      const URObj = { ...URArr[0], length: URArr.length };
      const SRObj = { ...SRArr[0], length: SRArr.length };
      const RObj = { ...RArr[0], length: RArr.length };

      this.cardList = [MRObj, URObj, SRObj, RObj];
    },
    toOpenBoxs() {
      this.$router.push({ path: "/open-boxs", query: { boxType: 0 } });
    },
    toCardDetail(rarity) {
      this.$router.push({ path: "/card-details", query: { rarity: rarity } });
    },
    toGiving(type) {
      this.$router.push({ path: "/nft-giving", query: { type: type } });
    },
    toMarket() {
      // window.location.href = this.$isProd ? "https://www.funtopia.io/#/market" : "https://test.funtopia.io/#/market";
      if (this.$isProd) {
        this.$message({ message: this.$t("tips.comming") });
      } else window.location.href = "https://test.funtopia.io/#/market";
    },
  },
};
</script>

<style lang="scss" scoped>
.titlebox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  .title {
    display: flex;
    align-items: center;
    span {
      width: 0.02rem;
      height: 0.2rem;
      background: #12b2cb;
      margin-right: 0.1rem;
    }
    div {
      font-size: 0.18rem;
      font-weight: 400;
    }
  }
  .btns {
    .el-button {
      width: 0.8rem;
      height: 0.3rem;
    }
  }
}
.list {
  width: 100%;
  margin-bottom: 0.2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 0.6rem;
  grid-row-gap: 0.25rem;
  li {
    width: 2.4rem;
    .box {
      width: 100%;
      height: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url($urlImages + "box_bg1.webp") no-repeat;
      background-size: 100% 100%;
      img {
        width: 70%;
        height: auto;
      }
    }
    .bottom {
      width: 95%;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.12rem;
      background: #32323d;
      border-radius: 0.04rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.1rem auto;
      padding-left: 0.1rem;
      .el-button {
        width: 0.7rem;
        height: 0.4rem;
      }
    }
  }
}
</style>
