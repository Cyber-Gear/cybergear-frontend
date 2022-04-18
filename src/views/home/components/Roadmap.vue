<template>
  <div class="box">
    <div class="box_title"><span>路线图</span></div>
    <img class="figure1" src="../../../assets/images/figure10.png" alt="" />
    <ul class="box_content">
      <li v-for="(item, index) in list" :key="index" :class="{ active: index == activeIndex }">
        <div>
          {{ item.text2.split(" ")[0] }}<br />
          {{ item.text2.split(" ")[1] }}
        </div>
        <div @click="activeIndex = index">
          {{ item.text1 }}
          <img :src="activeIndex == index ? item.image2 : item.image1" alt="" />
        </div>
        <img v-if="activeIndex == index" class="figure2" src="../../../assets/images/figure11.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Roadmap",
  data() {
    return {
      activeIndex: 0,
      list: [
        { text1: "Game Logic Planning", text2: "November 2018", image1: require("../../../assets/images/line1.png"), image2: require("../../../assets/images/line1_active.png") },
        { text1: "Artistic creation complete", text2: "March 2019", image1: require("../../../assets/images/line2.png"), image2: require("../../../assets/images/line2_active.png") },
        { text1: "Game Chain Change Planning", text2: "February 2022", image1: require("../../../assets/images/line3.png"), image2: require("../../../assets/images/line3_active.png") },
        { text1: "April 2022NFT Presale", text2: "April 2022", image1: require("../../../assets/images/line4.png"), image2: require("../../../assets/images/line4_active.png") },
        { text1: "Market launch", text2: "May 2022", image1: require("../../../assets/images/line5.png"), image2: require("../../../assets/images/line5_active.png") },
        { text1: "May 2022  Alpha testing", text2: "May 2022", image1: require("../../../assets/images/line6.png"), image2: require("../../../assets/images/line6_active.png") },
        { text1: "Game Live", text2: "June 2022", image1: require("../../../assets/images/line7.png"), image2: require("../../../assets/images/line7_active.png") },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 5% 10%;
  position: relative;
}
.figure1 {
  width: 150px;
  height: auto;
  position: absolute;
  top: 25%;
  left: 36%;
}
.figure2 {
  width: 90px;
  height: auto;
  position: absolute;
  bottom: 0%;
  right: -1%;
}
.box_content {
  width: 100%;
  background: url("../../../assets/images/bg8.png") no-repeat;
  background-size: 100% 100%;
  li {
    cursor: pointer;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
    &.active {
      div {
        &:nth-child(1) {
          background: url("../../../assets/images/roadmap_icon2.png") no-repeat;
          background-size: 100% 100%;
        }
        &:nth-child(2) {
          background: url("../../../assets/images/roadmap_bg2.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      &:nth-child(1) {
        width: 180px;
        height: 180px;
        font-weight: bold;
        text-align: center;
        background: url("../../../assets/images/roadmap_icon1.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
      }
      &:nth-child(2) {
        width: 400px;
        height: 60px;
        padding: 10px 0;
        background: url("../../../assets/images/roadmap_bg1.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        img {
          position: absolute;
          right: 100%;
        }
      }
    }
  }
  li:nth-child(1) {
    div {
      &:nth-child(1) {
        top: 50%;
        right: 35%;
      }
      &:nth-child(2) {
        img {
          width: 120px;
          top: 50%;
        }
      }
    }
  }
  li:nth-child(2) {
    div {
      &:nth-child(1) {
        top: 80%;
        right: 34%;
      }
      &:nth-child(2) {
        img {
          width: 65px;
          top: 50%;
        }
      }
    }
  }
  li:nth-child(3) {
    div {
      &:nth-child(1) {
        top: -95%;
        right: 45%;
      }
      &:nth-child(2) {
        img {
          width: 220px;
          top: 50%;
        }
      }
    }
  }
  li:nth-child(4) {
    div {
      &:nth-child(1) {
        top: -200%;
        right: 55%;
      }
      &:nth-child(2) {
        img {
          width: 340px;
          top: 50%;
        }
      }
    }
  }
  li:nth-child(5) {
    div {
      &:nth-child(1) {
        top: -178%;
        right: 52%;
      }
      &:nth-child(2) {
        img {
          width: 290px;
          top: -50%;
        }
      }
    }
  }
  li:nth-child(6) {
    div {
      &:nth-child(1) {
        top: -235%;
        right: 44%;
      }
      &:nth-child(2) {
        img {
          width: 200px;
          top: -50%;
        }
      }
    }
  }
  li:nth-child(7) {
    div {
      &:nth-child(1) {
        top: -200%;
        right: 42%;
      }
      &:nth-child(2) {
        img {
          width: 160px;
          top: -75%;
        }
      }
    }
  }
}
</style>
