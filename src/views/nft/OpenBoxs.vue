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
          <div><span>打开盲盒</span></div>
        </div>
        <div class="right">
          <i v-if="isSelectAll" class="iconfont icon-fuxuankuang-weiquanxuan" @click="selectAllOrCancel">取消全选</i>
          <i v-else class="iconfont icon-fuxuankuang-quanxuan" @click="selectAllOrCancel">全选</i>
        </div>
      </div>
      <ul class="list">
        <li v-for="(item, index) in boxList" :key="index" :class="{ active: item.isChecked }" @click="selectBox(item)">
          <div class="check">
            <i v-if="item.isChecked" class="iconfont icon-fuxuankuang-quanxuan"></i>
            <i v-else class="iconfont icon-fuxuankuang-weiquanxuan"></i>
          </div>
          <div class="box">
            <LottieAnimation></LottieAnimation>
          </div>
          <div class="bottom">
            <span>{{ item.name }} #{{ index }}</span>
          </div>
        </li>
      </ul>
      <div class="open_btn">
        <el-button type="primary" @click="openBox">打开</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import LottieAnimation from "@/components/LottieAnimation.vue";
export default {
  name: "OpenBoxs",
  components: { LottieAnimation },
  data() {
    return {
      boxList: [],
      selectedBoxList: [],
    };
  },
  created() {
    if (Object.keys(this.$route.query).length > 0) {
      const boxType = this.$route.query.boxType;
      if (boxType == 0) {
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
      }
    }
  },
  methods: {
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
    openBox() {
      let arr = [];
      this.selectedBoxList.forEach((element) => {
        arr.push(element.id);
      });
      console.log("打开", arr);
      this.$router.push("/open-boxs-results");
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
  background: url($urlImages + "bg13.webp") no-repeat;
  background-size: 100% auto;
  .inner {
    width: 11.5rem;
    margin: 0.5rem auto 0 auto;
    position: relative;
  }
}
.box_title2 {
  width: 100%;
  .left {
    width: 50%;
  }
  .right {
    i {
      font-size: 0.16rem;
      font-weight: 400;
      cursor: pointer;
    }
  }
}
.list {
  width: 100%;
  height: 6.5rem;
  overflow-y: auto;
  margin-bottom: 0.2rem;
  padding-left: 0.16rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
  li {
    width: 2.4rem;
    position: relative;
    cursor: pointer;
    &.active {
      .box {
        background: url($urlImages + "box_bg1.webp") no-repeat;
        background-size: 100% 100%;
      }
    }
    .check {
      position: absolute;
      left: -0.16rem;
      top: 0;
      i {
        font-size: 0.16rem;
        font-weight: 400;
      }
    }
    .box {
      width: 100%;
      height: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url($urlImages + "box_bg2.webp") no-repeat;
      background-size: 100% 100%;
    }
    .bottom {
      width: 95%;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.12rem;
      background: #32323d;
      border-radius: 0.04rem;
      margin: 0.1rem auto;
      padding: 0 0.1rem;
    }
  }
}
.open_btn {
  width: fit-content;
  margin: 0 auto;
  .el-button {
    width: 1.2rem;
    height: 0.5rem;
    font-size: 0.2rem;
    font-weight: 400;
  }
}
</style>
