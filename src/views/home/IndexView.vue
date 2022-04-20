<template>
  <div class="home">
    <HomeBanner />
    <div class="btnbox">
      <div>
        <img src="../../assets/images/btn_icon1.png" alt="" />
        <p>{{ $t("message.home.text1") }}</p>
      </div>
      <div>
        <img src="../../assets/images/btn_icon2.png" alt="" />
        <p>{{ $t("message.home.text2") }}</p>
      </div>
      <div>
        <img src="../../assets/images/btn_icon3.png" alt="" />
        <p>{{ $t("message.home.text3") }}</p>
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
};
</script>
<style lang="scss" scoped>
.home {
  width: calc(100vw - 5px);
  position: relative;
}
.btnbox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    font-size: 17px;
    cursor: pointer;
    text-align: center;
    background: url("../../assets/images/btn_bg3.png") no-repeat;
    background-size: 100% 100%;
    padding: 1vw 2vw;
    margin: 0 5vw;
    img {
      width: auto;
      height: 5vw;
    }
  }
}
</style>
