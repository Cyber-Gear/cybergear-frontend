<template>
  <div class="box">
    <div class="inside">
      <div class="inside2">
        <div class="left">
          <div class="box_title"><span>CYBEARGEAR介绍</span></div>
          <div class="box_content">
            <img src="../../../assets/images/angle.png" alt="" />
            <div>
              <p>Cybergear（机甲少女）</p>
              <p>是一个社区驱动的二次元宇宙，二次元赛博朋克风并融合了SRPG玩法的GameFi产品。</p>
              <p>是全球首款 NFT+ DeFi+ SRPG+AI 的战棋策略类游戏，游戏完美结合了区块链NFT 和 DeFi 技术，让玩家在参与游戏的同时轻松获得相应的收益。</p>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="../../../assets/images/figure6.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 5vw;
  background: url("../../../assets/images/bg2.png") no-repeat;
  background-size: auto;
  background-position: top left;
  .inside {
    width: 100%;
    height: 100%;
    background: url("../../../assets/images/bg3.png") no-repeat;
    background-size: auto 100%;
    background-position: center;
    margin: 0 auto;
    padding: 5vw;
    .inside2 {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .left {
        width: 30%;
        height: 100%;
        .box_title {
          position: relative;
          top: 2vw;
        }
        .box_content {
          display: flex;
          position: relative;
          top: 4vw;
          img {
            width: auto;
            height: 2vw;
            margin-top: 0.5vh;
            transform: rotate(-90deg);
          }
          div {
            font-size: 12px;
            font-weight: 400;
            line-height: 36px;
          }
        }
      }
      .right {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 30vw;
          height: auto;
          position: relative;
          bottom: 2vw;
        }
      }
    }
  }
}
</style>
