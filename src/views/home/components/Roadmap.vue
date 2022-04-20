<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.home.text20") }}</span>
    </div>
    <img class="figure1" src="../../../assets/images/roadmap_figure1.png" alt="" />
    <div class="box_content">
      <img class="figure2" src="../../../assets/images/roadmap_figure2.png" alt="" />
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.image" alt="" />
          <span> {{ item.text1 }}</span>
          <p>
            {{ item.text2.split(" ")[0] }}<br />
            {{ item.text2.split(" ")[1] }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Roadmap",
  data() {
    return {
      list: [
        { text1: "Game Logic Planning", text2: "November 2018", image: require("../../../assets/images/roadmap_bg1.png") },
        { text1: "Artistic creation complete", text2: "March 2019", image: require("../../../assets/images/roadmap_bg2.png") },
        { text1: "Game Chain Change Planning", text2: "February 2022", image: require("../../../assets/images/roadmap_bg3.png") },
        { text1: "April 2022NFT Presale", text2: "April 2022", image: require("../../../assets/images/roadmap_bg4.png") },
        { text1: "Market launch", text2: "May 2022", image: require("../../../assets/images/roadmap_bg5.png") },
        { text1: "May 2022  Alpha testing", text2: "May 2022", image: require("../../../assets/images/roadmap_bg6.png") },
        { text1: "Game Live", text2: "June 2022", image: require("../../../assets/images/roadmap_bg7.png") },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 5vw;
  position: relative;
}
.figure1 {
  width: 150px;
  height: auto;
  position: absolute;
  top: 23%;
  left: 35vw;
}
.figure2 {
  width: 90px;
  height: auto;
  position: absolute;
  right: 5%;
  top: 5%;
  z-index: 9;
}
.box_content {
  width: 100%;
  background: url("../../../assets/images/bg8.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: flex-end;
  ul {
    position: relative;
    li {
      position: relative;
      height: 10vw;
      display: flex;
      span {
        font-size: 18px;
        width: 32vw;
        height: 5vw;
        line-height: 5vw;
        text-align: center;
        z-index: 9;
      }
      p {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        position: absolute;
        z-index: 9;
      }
      img {
        height: auto;
        position: absolute;
        right: 0;
        z-index: 1;
      }
      &:nth-child(1) {
        img {
          width: 47.5vw;
          top: 0;
        }
        p {
          left: -10vw;
          top: 9vw;
        }
        span {
        }
      }

      &:nth-child(2) {
        img {
          width: 49vw;
          top: 0;
          z-index: 2;
        }
        p {
          top: 10.5vw;
          left: -11vw;
        }
        span {
        }
      }

      &:nth-child(3) {
        img {
          width: 61vw;
          top: -5vw;
          z-index: 3;
        }
        p {
          top: 1.5vw;
          left: -23.5vw;
        }
        span {
          margin-top: 0.5vw;
        }
      }

      &:nth-child(4) {
        img {
          width: 71vw;
          top: -8vw;
        }
        p {
          top: -2vw;
          left: -33vw;
        }
        span {
          margin-top: 1.5vw;
        }
      }

      &:nth-child(5) {
        img {
          width: 68vw;
          top: -7vw;
        }
        p {
          top: -1vw;
          left: -30vw;
        }
        span {
          margin-top: 2vw;
        }
      }

      &:nth-child(6) {
        img {
          width: 60vw;
          top: -10vw;
        }
        p {
          top: -4vw;
          left: -22vw;
        }
        span {
          margin-top: 5vw;
        }
      }

      &:nth-child(7) {
        img {
          width: 58vw;
          top: -8vw;
        }
        p {
          top: -2vw;
          left: -20vw;
        }
        span {
          margin-top: 5vw;
        }
      }
    }
  }
}
</style>
