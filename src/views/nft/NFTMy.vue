<template>
  <div>
    <div class="titlebox">
      <div class="title">
        <span></span>
        <div>我的盲盒</div>
      </div>
      <div class="btns">
        <el-button type="primary">赠送</el-button>
        <el-button>出售</el-button>
      </div>
    </div>
    <ul class="list">
      <li>
        <div class="box">
          <img :src="`${$urlImages}box.webp`" alt="" />
        </div>
        <div class="bottom">
          <span>Mystery BOX</span>
          <span>30</span>
          <el-button type="primary">打开</el-button>
        </div>
      </li>
      <li>
        <div class="box">
          <img :src="`${$urlImages}box.webp`" alt="" />
        </div>
        <div class="bottom">
          <span>Mystery BOX</span>
          <span>30</span>
          <el-button type="primary">打开</el-button>
        </div>
      </li>
      <li>
        <div class="box">
          <img :src="`${$urlImages}box.webp`" alt="" />
        </div>
        <div class="bottom">
          <span>Mystery BOX</span>
          <span>30</span>
          <el-button type="primary">打开</el-button>
        </div>
      </li>
      <li>
        <div class="box">
          <img :src="`${$urlImages}box.webp`" alt="" />
        </div>
        <div class="bottom">
          <span>Mystery BOX</span>
          <span>30</span>
          <el-button type="primary">打开</el-button>
        </div>
      </li>
      <li>
        <div class="box">
          <img :src="`${$urlImages}box.webp`" alt="" />
        </div>
        <div class="bottom">
          <span>Mystery BOX</span>
          <span>30</span>
          <el-button type="primary">打开</el-button>
        </div>
      </li>
      <li>
        <div class="box">
          <img :src="`${$urlImages}box.webp`" alt="" />
        </div>
        <div class="bottom">
          <span>Mystery BOX</span>
          <span>30</span>
          <el-button type="primary">打开</el-button>
        </div>
      </li>
    </ul>
    <div class="titlebox">
      <div class="title">
        <span></span>
        <div>人物卡牌</div>
      </div>
      <div class="btns">
        <el-button type="primary">赠送</el-button>
        <el-button>出售</el-button>
      </div>
    </div>
    <ul class="list">
      <li v-for="(item, index) in cardList" :key="index">
        <div class="card">
          <img :src="item.card" alt="" />
          <span>{{ $t(item.name) }}</span>
          <div class="level_btn" :class="item.rarity" @click="openVideo(item)">查看立绘</div>
        </div>
        <div class="bottom">
          <span>MR</span>
          <span>30</span>
          <el-button type="primary">打开</el-button>
        </div>
      </li>
    </ul>
    <el-dialog center top="0" :title="$t(videoInfo.name)" :visible.sync="isShowPopup" :destroy-on-close="true" append-to-body @close="closeVideo">
      <PaintingVideo :videoUrl="videoInfo.videoUrl"></PaintingVideo>
    </el-dialog>
  </div>
</template>

<script>
import { shikastudio } from "@/mock/nftworks";
import PaintingVideo from "@/components/PaintingVideo.vue";
export default {
  name: "NFTMy",
  components: { PaintingVideo },
  data() {
    return {
      cardList: shikastudio.works,
      isShowPopup: false,
      videoInfo: { name: "", videoUrl: "" },
    };
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
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
  li {
    width: fit-content;
    margin: 0 auto;
    .box {
      width: 2.4rem;
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
      width: 2.4rem;
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
      width: 2.2rem;
      height: 0.4rem;
      margin: 0 auto;
      background: #000000;
      border-radius: 0.04rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.1rem;
      margin-top: 0.1rem;
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

.level_btn {
  cursor: pointer;
  width: 45%;
  height: auto;
  font-size: 0.15rem;
  line-height: 0.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.4rem;
  margin: auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  &.MR {
    background-image: url($urlImages + "ShikaStudio/z-btn-MR.webp");
  }
  &.R {
    background-image: url($urlImages + "ShikaStudio/z-btn-R.webp");
  }
  &.SR {
    background-image: url($urlImages + "ShikaStudio/z-btn-SR.webp");
  }
  &.UR {
    background-image: url($urlImages + "ShikaStudio/z-btn-UR.webp");
  }
}
</style>
