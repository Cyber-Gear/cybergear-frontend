<template>
  <div class="page">
    <div class="inner">
      <div class="back_box" @click="goBack">
        <i class="iconfont icon-fanhui"></i>
        <span>{{ $t("btns.text1") }}</span>
      </div>
      <div class="con">
        <div class="leftbox">
          <div class="box_title2">
            <div class="left">
              <img :src="`${$urlImages}title_bg3.webp`" alt="" />
              <div>
                <span>{{ $t("nftpage.text16") }}</span>
              </div>
            </div>
          </div>
          <div class="list">
            <!-- accordion -->
            <el-collapse accordion v-model="activeName">
              <el-collapse-item v-for="(item, index) in newFilter" :key="index" :name="index.toString()">
                <template slot="title">
                  <div class="check_title"><i class="iconfont" :class="item.icon"></i> {{ item.label }}</div>
                </template>
                <ul class="check_list">
                  <li class="check" v-for="(ite, ind) in item.children" :key="ind" @click="clickFilter(index, ite, ind)">
                    <i v-if="ite.isChecked" class="iconfont icon-fuxuankuang-quanxuan"></i>
                    <i v-else class="iconfont icon-fuxuankuang-weiquanxuan"></i>
                    {{ ite.label }}
                  </li>
                </ul>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div class="rightbox">
          <div class="rightbox_title">
            <div class="tips">
              <img class="angle1" :src="`${$urlImages}angle6.webp`" alt="" />
              <span>{{ $t("nftpage.text20") }}</span>
              <img class="angle2" :src="`${$urlImages}angle6.webp`" alt="" />
            </div>
            <div>
              <div>{{ $t("nftpage.text21") }} 9</div>
              <div class="active">{{ $t("nftpage.text22") }} {{ selectedBoxList.length }}</div>
              <i v-if="isSelectAll" class="iconfont icon-fuxuankuang-weiquanxuan" @click="selectAllOrCancel">{{ $t("nftpage.text10") }}</i>
              <i v-else class="iconfont icon-fuxuankuang-quanxuan" @click="selectAllOrCancel">{{ $t("nftpage.text11") }}</i>
            </div>
          </div>
          <ul class="list" v-if="isShowBlindbox">
            <li v-for="(item, index) in boxList" :key="index" :class="{ active: item.isChecked }" @click="selectBox(item)">
              <div class="check">
                <i v-if="item.isChecked" class="iconfont icon-fuxuankuang-quanxuan"></i>
                <i v-else class="iconfont icon-fuxuankuang-weiquanxuan"></i>
              </div>
              <div class="box">
                <LottieAnimation></LottieAnimation>
              </div>
            </li>
          </ul>
          <ul class="list" v-else>
            <li v-for="(item, index) in cardList" :key="index" @click="selectBox(item)">
              <div class="check">
                <i v-if="item.isChecked" class="iconfont icon-fuxuankuang-quanxuan"></i>
                <i v-else class="iconfont icon-fuxuankuang-weiquanxuan"></i>
              </div>
              <div class="card">
                <img :src="item.card" alt="" />
                <span>{{ $t(item.name) }}</span>
                <div class="level_btn" :class="item.rarity" @click.stop="openVideo(item)">{{ $t("nftpage.text12") }}</div>
              </div>
            </li>
          </ul>
          <div class="givingbox" v-if="boxList.length > 0 || cardList.length > 0">
            <el-input :placeholder="`| ${$t('nftpage.text24')}`" v-model="addr" clearable></el-input>
            <el-button type="primary" @click="toGiving">{{ $t("nftpage.text23") }}</el-button>
          </div>
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
import LottieAnimation from "@/components/LottieAnimation.vue";
export default {
  name: "NFTGiving",
  components: { PaintingVideo, LottieAnimation },
  data() {
    return {
      boxList: [],
      cardList: [],
      isShowPopup: false,
      videoInfo: { name: "", videoUrl: "" },
      activeName: "0",
      oldFilter: {
        label: this.$t("nftpage.text17"),
        icon: "icon-category",
        children: [
          { label: "Mystery Box", isChecked: false },
          { label: "NFT", isChecked: false },
        ],
      },
      nftFilter: [
        {
          label: this.$t("nftpage.text18"),
          icon: "icon-dengji",
          children: [
            { label: "MR", isChecked: false },
            { label: "UR", isChecked: false },
            { label: "SR", isChecked: false },
            { label: "R", isChecked: false },
          ],
        },
        {
          label: this.$t("nftpage.text19"),
          icon: "icon-Customermanagement-fill",
          children: [],
        },
      ],
      newFilter: [],
      filterConditions: [],
      selectedBoxList: [],
      isSelectAll: false,
      addr: "",
    };
  },
  created() {
    if (Object.keys(this.$route.query).length > 0) {
      const type = this.$route.query.type;
      if (type == "box") {
        this.getBoxFilter();
      } else if (type == "nft") {
        this.getNftFilter();
      }
    }
  },
  methods: {
    getBoxFilter() {
      this.oldFilter.children[0].isChecked = true;
      this.oldFilter.children[1].isChecked = false;
      this.isShowBlindbox = true;
      this.newFilter = JSON.parse(JSON.stringify([this.oldFilter]));
      this.boxList = [
        { id: 1, name: "Mystery BOX", isChecked: false },
        { id: 2, name: "Mystery BOX", isChecked: false },
        { id: 3, name: "Mystery BOX", isChecked: false },
        { id: 4, name: "Mystery BOX", isChecked: false },
        { id: 5, name: "Mystery BOX", isChecked: false },
        { id: 6, name: "Mystery BOX", isChecked: false },
        { id: 7, name: "Mystery BOX", isChecked: false },
        { id: 8, name: "Mystery BOX", isChecked: false },
        { id: 9, name: "Mystery BOX", isChecked: false },
        { id: 10, name: "Mystery BOX", isChecked: false },
        { id: 11, name: "Mystery BOX", isChecked: false },
      ];
    },
    getNftFilter() {
      this.oldFilter.children[0].isChecked = false;
      this.oldFilter.children[1].isChecked = true;
      this.isShowBlindbox = false;
      shikastudio.works.forEach((element) => {
        const obj = { label: this.$t(element.name), isChecked: false };
        this.nftFilter[1].children.push(obj);
      });
      this.newFilter = JSON.parse(JSON.stringify([this.oldFilter, ...this.nftFilter]));
      this.cardList = shikastudio.works;
    },

    clickFilter(index, ite, ind) {
      this.selectedBoxList = [];
      if (index == 0) {
        if (ite.isChecked) return;
        this.filterConditions = [];
        // 点了类型
        if (ind == 0) {
          this.getBoxFilter();
        } else {
          this.getNftFilter();
        }
      } else {
        ite.isChecked = !ite.isChecked;
        if (ite.isChecked) {
          this.filterConditions.push(ite.label);
        } else {
          this.filterConditions = this.filterConditions.filter((item) => {
            return item !== ite.label;
          });
        }
      }
      console.log("当前查询条件：", this.filterConditions);
    },
    toGiving() {
      if (!this.addr) return this.$message({ message: this.$t("nftpage.text25") });
    },

    selectBox(item) {
      item.isChecked = !item.isChecked;
      if (item.isChecked) {
        this.selectedBoxList.push(item);
      } else {
        this.selectedBoxList = this.selectedBoxList.filter((ele) => {
          return ele.id !== item.id;
        });
      }
      console.log("已选择：", this.selectedBoxList);
    },
    selectAllOrCancel() {
      this.isSelectAll = !this.isSelectAll;
      if (this.isSelectAll) {
        this.boxList.forEach((element) => {
          element.isChecked = true;
        });
        this.selectedBoxList = this.boxList;
      } else {
        this.boxList.forEach((element) => {
          element.isChecked = false;
        });
        this.selectedBoxList = [];
      }
    },

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
.con {
  display: flex;
  .leftbox {
    width: 2rem;
    .box_title2 {
      width: 100%;
    }
    .list {
      .check_title {
        width: 100%;
        color: #ffffff;
        font-size: 0.2rem;
        i {
          font-size: 0.25rem;
          margin-right: 0.1rem;
        }
      }
      .check_list {
        .check {
          width: 100%;
          height: 0.4rem;
          line-height: 0.4rem;
          font-size: 12px;
          font-weight: 600;
          color: #ffffff;
          padding-left: 0.2rem;
          cursor: pointer;
          i {
            font-size: 0.15rem;
            margin-right: 0.1rem;
          }
        }
      }
    }
  }
  .rightbox {
    width: calc(100% - 2rem);
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
            font-size: 0.14rem;
            font-weight: 400;
            margin-right: 0.1rem;
            &.active {
              background: linear-gradient(90deg, #38697f 0%, #5d4c78 100%);
              border-radius: 0.03rem;
            }
          }
          i {
            font-size: 0.16rem;
            font-weight: 400;
            cursor: pointer;
          }
        }
      }
    }
    .list {
      width: 100%;
      max-height: 9rem;
      overflow-y: auto;
      margin-bottom: 0.2rem;
      padding-left: 0.16rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 0.2rem;
      grid-row-gap: 0.25rem;
      li {
        width: 2rem;
        position: relative;
        cursor: pointer;
        .check {
          position: absolute;
          left: -0.16rem;
          top: 0;
          i {
            font-size: 0.16rem;
            font-weight: 400;
          }
        }
        &.active {
          .box {
            background: url($urlImages + "box_bg1.webp") no-repeat;
            background-size: 100% 100%;
          }
        }
        .box {
          width: 100%;
          height: 2rem;
          background: url($urlImages + "box_bg2.webp") no-repeat;
          background-size: 100% 100%;
          img {
            width: 100%;
            height: auto;
          }
        }
        .card {
          width: 100%;
          height: 3rem;
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
    .givingbox {
      width: 100%;
      padding: 0 0.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el-input {
        width: 6.5rem;
        height: 0.5rem;
        .el-input__inner {
          font-size: 0.2rem;
          font-weight: 400;
        }
      }
      .el-button {
        width: 1.2rem;
        height: 0.5rem;
        font-size: 0.2rem;
        font-weight: 400;
      }
    }
  }
}
</style>
