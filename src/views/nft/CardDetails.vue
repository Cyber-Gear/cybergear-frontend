<template>
  <div class="page">
    <div class="inner">
      <div class="back_box" @click="goBack">
        <i class="iconfont icon-fanhui"></i>
        <span>{{ $t("btns.text1") }}</span>
      </div>
      <div class="box_title2">
        <div class="left">
          <img :src="`${$urlImages}title_bg3.webp`" alt="" />
          <div>
            <span>{{ $t("nftpage.text8") }}</span>
          </div>
        </div>
      </div>
      <ul class="list" v-if="cardList.length > 0">
        <li v-for="(item, index) in cardList" :key="index">
          <div class="card">
            <img :src="item.card" alt="" />
            <span>{{ $t(item.name) }}</span>
            <div class="level_btn" :class="item.rarity" @click="openVideo(item)">{{ $t("nftpage.text12") }}</div>
          </div>
          <div class="bottom">
            <span>{{ $t(item.name) }} #{{ item.id }}</span>
          </div>
        </li>
      </ul>
      <div class="nodata" v-if="isShowNoData">
        <div>
          <p>{{ $t("nftpage.text13") }}</p>
          <el-button type="primary">{{ $t("nftpage.text14") }}</el-button>
        </div>
      </div>
      <el-dialog center top="0" :title="$t(videoInfo.name)" :visible.sync="isShowPopup" :destroy-on-close="true" append-to-body @close="closeVideo">
        <PaintingVideo :videoUrl="videoInfo.videoUrl"></PaintingVideo>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { shikastudio } from "@/mock/nftworks";
import PaintingVideo from "@/components/PaintingVideo.vue";
export default {
  name: "NFTDetails",
  components: { PaintingVideo },
  data() {
    return {
      boxList: [],
      cardList: [],
      isShowPopup: false,
      videoInfo: { name: "", videoUrl: "" },
      isShowNoData: false,
    };
  },
  created() {
    if (Object.keys(this.$route.query).length > 0) {
      const rarity = this.$route.query.rarity;
      this.cardList = shikastudio.works.filter((item) => {
        return item.rarity == rarity;
      });
      this.isShowNoData = this.cardList.length == 0;
    }
  },
  methods: {
    openVideo(item) {
      this.isShowPopup = true;
      this.videoInfo.name = item.name;
      this.videoInfo.videoUrl = item.video;
    },
    closeVideo() {
      this.isShowPopup = false;
      this.videoInfo.name = "";
      this.videoInfo.videoUrl = "";
    },
    goBack() {
      history.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  min-height: calc(100vh - 5rem);
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
  width: 20%;
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
      width: 95%;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.12rem;
      background: #32323d;
      border-radius: 0.04rem;
      margin: 0.1rem auto;
      text-align: center;
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
