<template>
  <div class="page">
    <div class="inner">
      <div class="back_box" @click="goBack">
        <!-- <i class="iconfont pcfanhui"></i> -->
        <span>{{ $t("btns.text1") }}</span>
      </div>
      <div class="con">
        <div class="leftbox">
          <div class="box_title2">
            <img :src="`${$urlImages}title_bg3.webp`" alt="" />
            <div><span>赠送</span></div>
          </div>
        </div>
        <div class="rightbox">
          <div class="rightbox_title">
            <div class="tips">
              <img class="angle1" :src="`${$urlImages}angle6.webp`" alt="" />
              <span>赠送完成后游戏数据将被清零</span>
              <img class="angle2" :src="`${$urlImages}angle6.webp`" alt="" />
            </div>
            <div>
              <div>总量 9</div>
              <div>已选 9</div>
              <p>全部选择</p>
            </div>
          </div>
          <ul class="list">
            <li v-for="(item, index) in boxList" :key="index">
              <div class="box">
                <img :src="`${$urlImages}box.webp`" alt="" />
              </div>
            </li>
          </ul>
          <ul class="list">
            <li v-for="(item, index) in cardList" :key="index">
              <div class="card">
                <img :src="item.card" alt="" />
                <span>{{ $t(item.name) }}</span>
                <div class="level_btn" :class="item.rarity" @click="openVideo(item)">查看立绘</div>
              </div>
            </li>
          </ul>
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
  name: "NFTGiving",
  components: { PaintingVideo },
  data() {
    return {
      boxList: [1],
      cardList: [],
      isShowPopup: false,
      videoInfo: { name: "", videoUrl: "" },
    };
  },
  created() {
    if (Object.keys(this.$route.query).length > 0) {
      const type = this.$route.query.type;
      console.log("type", type);
    }
    this.cardList = shikastudio.works;
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
.con {
  display: flex;
  .leftbox {
    width: 2.5rem;
    .box_title2 {
      width: 100%;
    }
  }
  .rightbox {
    width: calc(100% - 2.5rem);
    padding-left: 2%;
    .rightbox_title {
      width: 100%;
      line-height: 0.5rem;
      margin-bottom: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid;
      border-image: linear-gradient(135deg, rgba(212, 135, 241, 0.44), rgba(82, 224, 255, 0.44)) 1 1;
      .tips {
        display: flex;
        align-items: center;
        span {
          font-size: 0.14rem;
          font-weight: 400;
          margin: 0 0.1rem;
        }
        img {
          width: 0.1rem;
          height: auto;
        }
        .angle2 {
          transform: rotate(180deg);
        }
      }
      > div {
        &:nth-child(2) {
          display: flex;
          align-items: center;
          div {
            width: 1rem;
            height: 0.3rem;
            line-height: 0.3rem;
            text-align: center;
            background: linear-gradient(90deg, #38697f 0%, #5d4c78 100%);
            border-radius: 0.03rem;
            font-size: 0.14rem;
            font-weight: 400;
            margin-right: 0.1rem;
          }
          p {
            font-size: 0.16rem;
            font-weight: 400;
            cursor: pointer;
          }
        }
      }
    }
    .list {
      width: 100%;
      margin-bottom: 0.2rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 0.25rem;
      grid-row-gap: 0.25rem;
      li {
        width: 2rem;
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
          height: 3.1rem;
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
      }
    }
  }
}
</style>
