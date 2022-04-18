<template>
  <div class="box">
    <div class="box_title"><span>核心特点</span></div>
    <ul class="box_content">
      <li>
        <div>
          与虚拟<br />
          偶像互动
        </div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>
            每一张NFT（虚拟偶像）都可以发行成动态卡牌，均可与玩家产生多维互动，且有人气声优为其配音，使得日系少女形象更加立体真实。玩家与NFT（虚拟偶像）一起战斗，提升NFT价值的同时，可进一步与NFT互动，如线上Party及生日会、实物手办等。
          </p>
        </div>
        <img src="../../../assets/images/figure7.png" alt="" />
      </li>
      <li>
        <div>
          知名<br />
          声优配音
        </div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>邀请了32位知名声优为Cybergear进行配音乐，包括佐仓绫音、明坂聪美、上坂堇、石川由依等，无论是对于玩家还是投资者而言，这都是一场视听盛宴，代入感强烈。</p>
        </div>
      </li>
      <li>
        <div>创新玩法</div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>
            玩法上采取了比较成熟的SRPG战棋，并且在其基础玩法上添加了诸如天气、地形、属性克制等 相关元素，使得战场的局势瞬息万变，考验玩家对于阵容技能的理解以及随机应变的能力。此外
            还加入了卡牌元素，进一步提升了游戏的趣味性和策略性。
          </p>
        </div>
        <img src="../../../assets/images/figure8.png" alt="" />
      </li>
      <li>
        <div>
          环生态<br />
          模型
        </div>
        <div>
          <img src="../../../assets/images/angle2.png" alt="" />
          <p>海外知名经济和数值团队构建了循环生态模型，满足多种角色收益形式。</p>
        </div>
        <img src="../../../assets/images/figure9.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CoreFeatures",
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 60vw;
  padding: 5% 10%;
  background: url("../../../assets/images/bg5.png") no-repeat;
  background-size: 100% 100%;
}
.box_content {
  display: flex;
  justify-content: space-around;
  li {
    width: 20%;
    height: 40vw;
    background: url("../../../assets/images/bg6.png") no-repeat;
    background-size: contain;
    padding: 0 10px;
    position: relative;
    &:nth-child(1) {
      margin-top: 5%;
      > img {
        top: -1vw;
        right: 0;
      }
    }
    &:nth-child(2) {
      margin-top: 12%;
    }
    &:nth-child(3) {
      margin-top: 0%;
      > img {
        transform: rotate(-90deg);
        left: -5.5vw;
        top: 8vw;
      }
    }
    &:nth-child(4) {
      margin-top: 8%;
      > img {
        transform: rotate(90deg);
        right: -4.5vw;
        top: 15vw;
      }
    }
    > img {
      width: 5vw;
      height: auto;
      position: absolute;
    }
    div {
      &:nth-child(1) {
        width: 100%;
        height: 18%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 1vw;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        background: linear-gradient(180deg, #ffffff 0%, #7ee9f4 98%, #72e7f3 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &:nth-child(2) {
        display: flex;
        padding-top: 8vw;
        img {
          width: auto;
          height: 2vw;
          margin: 0 5px;
        }
        p {
          width: 80%;
          font-size: 12px;
          font-weight: 400;
          line-height: 17px;
        }
      }
    }
  }
}
</style>
