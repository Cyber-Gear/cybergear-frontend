<template>
  <div class="box">
    <div class="box_title"><span>角色</span></div>
    <div class="box_content">
      <div class="left_content">
        <div class="characterClasses1" :class="showCharacterClassesItem ? 'show' : 'hidden'" :style="{ backgroundImage: `url(${characterClassesItem.image1})` }">
          <div class="left">
            <div class="top">
              <div>{{ characterClassesItem.name }}</div>
              <div>
                <div>{{ characterClassesItem.name }}</div>
                <img :src="characterClassesItem.level" alt="" />
              </div>
            </div>
            <div class="bottom">
              <div>
                <img class="angle" src="../../../assets/images/angle.png" alt="" />
                <div>{{ characterClassesItem.description }}</div>
              </div>
              <img class="bottom_img" :src="characterClassesItem.image3" alt="" />
            </div>
          </div>
          <div class="right"><img :src="characterClassesItem.image2" alt="" /></div>
        </div>
      </div>
      <div class="right_content">
        <div class="characterClasses2">
          <div class="item" v-for="(item, index) in characterClassesList" :key="index" :class="{ active: currentSwiperIndex == index }" @click="switchClasses(index)">
            <span>{{ item.name }}</span>
            <img :src="currentSwiperIndex == index ? item.iconActive : item.icon" alt="" />
            <span>{{ index + 1 > 9 ? index + 1 : "0" + (index + 1) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Role",
  data() {
    return {
      currentSwiperIndex: 0,
      showCharacterClassesItem: false,
      characterClassesItem: null,
      characterClassesList: [
        {
          name: "K",
          icon: require("../../../assets/images/characterClasses1.png"),
          iconActive: require("../../../assets/images/characterClasses1_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "赵玥",
          icon: require("../../../assets/images/characterClasses2.png"),
          iconActive: require("../../../assets/images/characterClasses2_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "锦云",
          icon: require("../../../assets/images/characterClasses3.png"),
          iconActive: require("../../../assets/images/characterClasses3_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "魏子鱼",
          icon: require("../../../assets/images/characterClasses4.png"),
          iconActive: require("../../../assets/images/characterClasses4_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "君弘",
          icon: require("../../../assets/images/characterClasses5.png"),
          iconActive: require("../../../assets/images/characterClasses5_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "珞珈",
          icon: require("../../../assets/images/characterClasses6.png"),
          iconActive: require("../../../assets/images/characterClasses6_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "凤临",
          icon: require("../../../assets/images/characterClasses7.png"),
          iconActive: require("../../../assets/images/characterClasses7_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "玲夏",
          icon: require("../../../assets/images/characterClasses8.png"),
          iconActive: require("../../../assets/images/characterClasses8_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "沐风",
          icon: require("../../../assets/images/characterClasses9.png"),
          iconActive: require("../../../assets/images/characterClasses9_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "紫婧",
          icon: require("../../../assets/images/characterClasses10.png"),
          iconActive: require("../../../assets/images/characterClasses10_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "紫婧",
          icon: require("../../../assets/images/characterClasses10.png"),
          iconActive: require("../../../assets/images/characterClasses10_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
        {
          name: "紫婧",
          icon: require("../../../assets/images/characterClasses10.png"),
          iconActive: require("../../../assets/images/characterClasses10_active.png"),
          image1: require("../../../assets/images/characterClasses1_bg1.png"),
          image2: require("../../../assets/images/characterClasses1_bg2.png"),
          image3: require("../../../assets/images/characterClasses1_bg3.png"),
          level: require("../../../assets/images/role_level1.png"),
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。 是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。 从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
        },
      ],
    };
  },
  created() {
    this.characterClassesItem = this.characterClassesList[this.currentSwiperIndex];
    this.showCharacterClassesItem = true;
  },
  methods: {
    switchClasses(index) {
      this.currentSwiperIndex = index;
      this.showCharacterClassesItem = false;
      setTimeout(() => {
        this.characterClassesItem = this.characterClassesList[this.currentSwiperIndex];
        this.showCharacterClassesItem = true;
      }, 500);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 5% 10%;
}
.box_content {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  .left_content {
    width: 75%;
    height: 100%;
  }
  .right_content {
    width: 25%;
    height: 100%;
  }
}
.characterClasses1 {
  width: 100%;
  height: 100%;
  display: flex;
  background-repeat: no-repeat;
  background-size: 55% auto;
  background-position: left top;
  transition: all 0.5s;
  &.show {
    opacity: 1;
    .left {
      opacity: 1;
      .top {
        left: 0%;
      }
      .bottom {
        bottom: -2%;
        opacity: 1;
      }
    }
    .right {
      img {
        top: 10%;
        right: 0;
        opacity: 1;
      }
    }
  }
  &.hidden {
    opacity: 0;
    .left {
      opacity: 0;
      .top {
        left: -20%;
      }
      .bottom {
        bottom: -20%;
        opacity: 0;
      }
    }
    .right {
      img {
        top: 10%;
        right: -20%;
        opacity: 0;
      }
    }
  }
  .left {
    width: 40%;
    height: 100%;
    background: url("../../../assets/images/bg9.png") no-repeat;
    background-size: 100% 100%;
    background-position: right center;
    margin-top: 20%;
    position: relative;
    transition: all 0.5s;
    .top {
      width: 88%;
      height: 43%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      transition: all 0.5s;
      position: absolute;
      top: 0%;
      > div {
        position: relative;
        &:nth-child(1) {
          font-size: 45px;
          font-weight: bold;
          color: #555555;
          right: 10%;
        }
        &:nth-child(2) {
          font-size: 20px;
          font-weight: 600;
          color: #22bbff;
          right: 0%;
          img {
            width: auto;
            height: 45px;
          }
        }
      }
    }
    .bottom {
      width: 88%;
      height: calc(100% - 43%);
      transition: all 0.5s;
      position: absolute;
      > div {
        display: flex;
        font-size: 12px;
        font-weight: 600;
      }
      .angle {
        width: auto;
        height: 30px;
        transform: rotate(-90deg);
      }
      .bottom_img {
        width: 100%;
        height: auto;
      }
    }
  }
  .right {
    width: 60%;
    height: 100%;
    position: relative;
    img {
      width: 90%;
      height: auto;
      transition: all 0.5s;
      position: absolute;
      top: 10%;
    }
  }
}

.characterClasses2 {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 10px 0;
  &::-webkit-scrollbar {
    width: 0;
  }
  .item {
    cursor: pointer;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: right;
    transition: all 0.5s;
    span {
      font-size: 25px;
      font-weight: 400;
      transition: all 0.5s;
    }
    img {
      width: 40px;
      height: 40px;
      margin: 0 20px;
      transition: all 0.5s;
    }
    &.active {
      padding: 10px 30px;
      span {
        color: #22bbff;
      }
      img {
        transform: scale(1.5);
      }
    }
    &:hover {
      padding: 10px 30px;
    }
  }
}

.character_animation-enter,
.character_animation-leave-to {
  opacity: 0.5;
}
.character_animation-enter-to,
.character_animation-leave {
  opacity: 1;
}
</style>
