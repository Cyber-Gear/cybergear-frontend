<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.role.text1") }}</span>
    </div>
    <div class="box_content">
      <div class="left_content">
        <div class="characterClasses1" :class="showCharacterClassesItem ? 'show' : 'hidden'">
          <img class="bg" :src="characterClassesItem.image" alt="" />
          <div class="left">
            <div class="top">
              <div>{{ $t(characterClassesItem.name) }}</div>
              <div>
                <div>{{ $t(characterClassesItem.name) }}</div>
                <img :src="characterClassesItem.level" alt="" />
              </div>
            </div>
            <div class="bottom">
              <div>
                <img class="angle" src="../../../assets/images/angle.png" alt="" />
                <div>{{ $t(characterClassesItem.description) }}</div>
              </div>
              <img class="bottom_img" src="../../../assets/images/role_bg1.png" alt="" />
            </div>
          </div>
          <div class="right"><img :src="characterClassesItem.image" alt="" /></div>
        </div>
      </div>
      <div class="right_content">
        <div class="characterClasses2">
          <div class="item" v-for="(item, index) in characterClassesList" :key="index" :class="{ active: currentSwiperIndex == index }" @click="switchClasses(index)">
            <span>{{ $t(item.name) }}</span>
            <img :src="currentSwiperIndex == index ? item.iconActive : item.icon" alt="" />
            <span>{{ index + 1 > 9 ? index + 1 : "0" + (index + 1) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Role",
  computed: { ...mapGetters(["isEnLang"]) },

  data() {
    return {
      currentSwiperIndex: 0,
      showCharacterClassesItem: false,
      characterClassesItem: null,
      characterClassesList: [
        {
          oldName: "K",
          name: "message.role.list1[0].name",
          description: "message.role.list1[0].des",
          icon: require("../../../assets/images/professional1.png"),
          iconActive: require("../../../assets/images/professional_active1.png"),
          image: require("../../../assets/images/role_figure1.png"),
          level: require("../../../assets/images/role_level_mr.png"),
        },
        {
          oldName: "锦云",
          name: "message.role.list1[1].name",
          description: "message.role.list1[1].des",
          icon: require("../../../assets/images/professional2.png"),
          iconActive: require("../../../assets/images/professional_active2.png"),
          image: require("../../../assets/images/role_figure2.png"),
          level: require("../../../assets/images/role_level_r.png"),
        },
        {
          oldName: "托娅",
          name: "message.role.list1[2].name",
          description: "message.role.list1[2].des",
          icon: require("../../../assets/images/professional2.png"),
          iconActive: require("../../../assets/images/professional_active2.png"),
          image: require("../../../assets/images/role_figure3.png"),
          level: require("../../../assets/images/role_level_mr.png"),
        },
        {
          oldName: "沐风",
          name: "message.role.list1[3].name",
          description: "message.role.list1[3].des",
          icon: require("../../../assets/images/professional5.png"),
          iconActive: require("../../../assets/images/professional_active5.png"),
          image: require("../../../assets/images/role_figure4.png"),
          level: require("../../../assets/images/role_level_sr.png"),
        },
        {
          oldName: "玲夏",
          name: "message.role.list1[4].name",
          description: "message.role.list1[4].des",
          icon: require("../../../assets/images/professional4.png"),
          iconActive: require("../../../assets/images/professional_active4.png"),
          image: require("../../../assets/images/role_figure5.png"),
          level: require("../../../assets/images/role_level_sr.png"),
        },

        {
          oldName: "珞珈",
          name: "message.role.list1[5].name",
          description: "message.role.list1[5].des",
          icon: require("../../../assets/images/professional4.png"),
          iconActive: require("../../../assets/images/professional_active4.png"),
          image: require("../../../assets/images/role_figure6.png"),
          level: require("../../../assets/images/role_level_mr.png"),
        },
        {
          oldName: "羽飞",
          name: "message.role.list1[6].name",
          description: "message.role.list1[6].des",
          icon: require("../../../assets/images/professional1.png"),
          iconActive: require("../../../assets/images/professional_active1.png"),
          image: require("../../../assets/images/role_figure7.png"),
          level: require("../../../assets/images/role_level_r.png"),
        },
        {
          oldName: "魏子鱼",
          name: "message.role.list1[7].name",
          description: "message.role.list1[7].des",
          icon: require("../../../assets/images/professional3.png"),
          iconActive: require("../../../assets/images/professional_active3.png"),
          image: require("../../../assets/images/role_figure8.png"),
          level: require("../../../assets/images/role_level_r.png"),
        },
        {
          oldName: "紫婧",
          name: "message.role.list1[8].name",
          description: "message.role.list1[8].des",
          icon: require("../../../assets/images/professional6.png"),
          iconActive: require("../../../assets/images/professional_active6.png"),
          image: require("../../../assets/images/role_figure9.png"),
          level: require("../../../assets/images/role_level_mr.png"),
        },
        {
          oldName: "堇源",
          name: "message.role.list1[9].name",
          description: "message.role.list1[9].des",
          icon: require("../../../assets/images/professional4.png"),
          iconActive: require("../../../assets/images/professional_active4.png"),
          image: require("../../../assets/images/role_figure10.png"),
          level: require("../../../assets/images/role_level_ur.png"),
        },
        {
          oldName: "君弘",
          name: "message.role.list1[10].name",
          description: "message.role.list1[10].des",
          icon: require("../../../assets/images/professional3.png"),
          iconActive: require("../../../assets/images/professional_active3.png"),
          image: require("../../../assets/images/role_figure11.png"),
          level: require("../../../assets/images/role_level_sr.png"),
        },
        {
          oldName: "赵玥",
          name: "message.role.list1[11].name",
          description: "message.role.list1[11].des",
          icon: require("../../../assets/images/professional1.png"),
          iconActive: require("../../../assets/images/professional_active1.png"),
          image: require("../../../assets/images/role_figure12.png"),
          level: require("../../../assets/images/role_level_ur.png"),
        },
        {
          oldName: "凤临",
          name: "message.role.list1[12].name",
          description: "message.role.list1[12].des",
          icon: require("../../../assets/images/professional3.png"),
          iconActive: require("../../../assets/images/professional_active3.png"),
          image: require("../../../assets/images/role_figure13.png"),
          level: require("../../../assets/images/role_level_r.png"),
        },
        {
          oldName: "樱岚",
          name: "message.role.list1[13].name",
          description: "message.role.list1[13].des",
          icon: require("../../../assets/images/professional2.png"),
          iconActive: require("../../../assets/images/professional_active2.png"),
          image: require("../../../assets/images/role_figure14.png"),
          level: require("../../../assets/images/role_level_ur.png"),
        },
        {
          oldName: "Null",
          name: "message.role.list1[14].name",
          description: "message.role.list1[14].des",
          icon: require("../../../assets/images/professional5.png"),
          iconActive: require("../../../assets/images/professional_active5.png"),
          image: require("../../../assets/images/role_figure15.png"),
          level: require("../../../assets/images/role_level_ur.png"),
        },
      ],
    };
  },
  created() {
    this.characterClassesItem = this.characterClassesList[this.currentSwiperIndex];
    setTimeout(() => {
      this.showCharacterClassesItem = true;
    }, 500);
  },
  methods: {
    switchClasses(index) {
      if (this.currentSwiperIndex == index) return;
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
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
}
.box_content {
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  .left_content {
    width: 80%;
    height: 100%;
  }
  .right_content {
    width: 20%;
    height: 100%;
  }
}
.characterClasses1 {
  width: 100%;
  height: 100%;
  display: flex;
  background-repeat: no-repeat;
  background-size: auto 90%;
  background-position: left top;
  transition: all 0.5s;
  position: relative;
  .bg {
    width: auto;
    height: 90%;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
  }
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
        right: 10%;
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
        right: -20%;
        opacity: 0;
      }
    }
  }
  .left {
    width: 40%;
    background: url("../../../assets/images/bg9.png") no-repeat;
    background-size: 100% 100%;
    background-position: right center;
    margin-top: 20%;
    position: relative;
    transition: all 0.5s;
    .top {
      width: 88%;
      height: 44%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      transition: all 0.5s;
      position: absolute;
      top: 0%;
      > div {
        position: relative;
        &:nth-child(1) {
          font-size: 0.45rem;
          font-weight: bold;
          color: #555555;
          right: 10%;
        }
        &:nth-child(2) {
          font-size: 0.2rem;
          font-weight: 600;
          color: #22bbff;
          right: 0;
          img {
            width: auto;
            height: 0.45rem;
          }
        }
      }
    }
    .bottom {
      width: 88%;
      height: calc(100% - 44%);
      transition: all 0.5s;
      position: absolute;
      > div {
        display: flex;
        font-size: 0.12rem;
        font-weight: 600;
      }
      .angle {
        width: auto;
        height: 0.3rem;
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
      width: auto;
      height: 90%;
      transition: all 0.5s;
      position: absolute;
    }
  }
}

.characterClasses2 {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0.1rem 0;
  &::-webkit-scrollbar {
    width: 0;
  }
  .item {
    cursor: pointer;
    padding: 0.1rem 0.05rem;
    display: flex;
    align-items: center;
    justify-content: right;
    transition: all 0.5s;
    span {
      font-size: 0.25rem;
      font-weight: 400;
      transition: all 0.5s;
    }
    img {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 0.2rem;
      transition: all 0.5s;
    }
    &.active {
      padding: 0.1rem 0.3rem;
      span {
        color: #22bbff;
      }
      img {
        transform: scale(1.5);
      }
    }
    &:hover {
      padding: 0.1rem 0.3rem;
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
