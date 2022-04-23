<template>
  <div class="home">
    <HomeBanner />
    <div class="btnbox">
      <div v-for="(item, index) in btnList" :key="index">
        <img :src="item.image" alt="" />
        <p>{{ $t(item.text) }}</p>
      </div>
    </div>
    <Introduction />
    <CoreFeatures />
    <Role />
    <GameMode />
    <PlayToEarn />
    <Roadmap />
    <Collaborators />
  </div>
</template>

<script>
import HomeBanner from "./components/HomeBanner";
import Introduction from "./components/Introduction";
import CoreFeatures from "./components/CoreFeatures";
import Role from "./components/Role";
import GameMode from "./components/GameMode";
import PlayToEarn from "./components/PlayToEarn";
import Roadmap from "./components/Roadmap";
import Collaborators from "./components/Collaborators";
export default {
  components: { HomeBanner, Introduction, CoreFeatures, Role, GameMode, PlayToEarn, Roadmap, Collaborators },
  data() {
    return {
      btnList: [
        { image: require("../../assets/images/btn_icon1.png"), text: "message.home.text1" },
        { image: require("../../assets/images/btn_icon2.png"), text: "message.home.text2" },
        { image: require("../../assets/images/btn_icon3.png"), text: "message.home.text3" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  position: relative;
}
.btnbox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.17rem;
    text-align: center;
    background: url("../../assets/images/btn_bg3.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 0.5rem;
    cursor: pointer;
    img {
      width: auto;
      height: 60%;
      margin-top: 0.15rem;
    }
  }
}
</style>
