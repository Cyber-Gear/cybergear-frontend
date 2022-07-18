<template>
  <div class="nav">
    <div class="nav_inset">
      <img class="logo" :src="`${$urlImages}logo1.webp`" alt="" @click="toRoute('/home')" />
      <ul class="menu_pc pc">
        <li v-for="(item, index) in navArr" :key="index" :class="{ active: navActive == index }" @click="toRoute(item)">
          <span>{{ $t(item.label) }}</span>
        </li>
      </ul>
      <ul class="menu_mobile mobile">
        <li v-for="(item, index) in navArr" :key="index" :class="{ active: navActive == index }" @click="toRoute(item)">
          <div>
            <i class="iconfont" :class="item.icon"></i>
            <div>{{ $t(item.label) }}</div>
          </div>
        </li>
      </ul>
      <div class="connect_lang">
        <div class="connect" @mouseover="showDisconnectFun" @mouseleave="hiddenDisconnectFun">
          <span v-if="getWalletAccount">
            {{ getWalletAccount | ellipsisWallet }}
          </span>
          <span v-else @click="openWalletPopup">{{ $t("nav.text8") }}</span>
          <transition name="showDisconnect" appear>
            <div v-show="showDisconnect" class="disconnect" @click="clickDisconnect">
              <span>{{ $t("nav.text7") }}</span>
              <i class="iconfont pcblock"></i>
            </div>
          </transition>
        </div>
        <div class="lang_box">
          <el-select v-model="$i18n.locale" @change="changeLang">
            <el-option v-for="item in langArr" :key="item" :label="item.toUpperCase()" :value="item"></el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLayout",
  data() {
    return {
      navActive: 0,
      navArr: [
        { label: "nav.text1", icon: "pchome", link: "/home", isOpen: true },
        { label: "nav.text2", icon: "pchome", link: "/nft", isOpen: true },
        { label: "nav.text3", icon: "pchome", link: "/home", isOpen: false },
        { label: "nav.text4", icon: "pchome", link: "/community", isOpen: true },
        { label: "nav.text5", icon: "pchome", link: "/home", isOpen: false },
        { label: "nav.text6", icon: "pchome", link: "/home", isOpen: false },
        { label: "nav.text7", icon: "pchome", link: "/home", isOpen: false },
      ],
      showDisconnect: false,
      langArr: ["en", "zh"],
      getWalletAccount: "",
    };
  },
  watch: {
    $route(to, from) {
      // if (from.matched.length && to.matched[0].path !== from.matched[0].path) {
      //   window.scrollTo(0, 0);
      // }
      if (to.path == "/home") {
        this.navActive = 0;
      } else if (to.path.indexOf("/nft") !== -1) {
        this.navActive = 1;
      } else if (to.path.indexOf("/community") !== -1) {
        this.navActive = 3;
      }
      // else if (to.path.indexOf("/dao") !== -1) {
      //   this.navActive = 2;
      // } else if (to.path.indexOf("/launchpad") !== -1) {
      //   this.navActive = 3;
      // } else if (to.path.indexOf("/market") !== -1) {
      //   this.navActive = 4;
      // } else if (to.path.indexOf("/dashboard") !== -1) {
      //   this.navActive = 5;
      // }
    },
  },
  methods: {
    toRoute(item) {
      if (item.isOpen) this.$router.push(item.link);
      else this.$message({ message: this.$t("tips.comming") });
    },
    changeLang(item) {
      this.$i18n.locale = item;
      this.$utils.setCookie("LANG", item);
      location.reload();
    },
    openWalletPopup() {
      this.$store.commit("setWalletListPopup", true);
    },
    showDisconnectFun() {
      // if (this.getWalletAccount) this.showDisconnect = true;
    },
    hiddenDisconnectFun() {
      // if (this.getWalletAccount) this.showDisconnect = false;
    },
    clickDisconnect() {
      this.showDisconnect = false;
      // this.$utils.walletDisconnect();
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100vw;
  height: 0.8rem;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 999;
  transition: all 0.5s;
  border-bottom: 1px solid #29a7e1;
  .nav_inset {
    width: 12.5rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: auto;
      height: 40%;
    }
    .connect_lang {
      display: flex;
      align-items: center;
      .connect {
        cursor: pointer;
        height: 0.35rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.15rem;
        font-weight: 400;
        padding: 0.05rem 0.1rem;
        background: linear-gradient(90deg, #38697f 0%, #5d4c78 100%);
        border-radius: 0.03rem;
        position: relative;
        .disconnect {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: linear-gradient(90deg, #38697f 0%, #5d4c78 100%);
          border-radius: 0.03rem;
          position: absolute;
          top: 110%;
          transition: transform 0.3s;
          transform-origin: top center;
        }
      }
      .lang_box {
        margin-left: 0.1rem;
        .el-select {
          width: 0.7rem;
          height: 0.35rem;
        }
      }
    }
  }

  .showDisconnect-enter,
  .showDisconnect-leave-to {
    transform: scaleY(0);
  }
  .showDisconnect-enter-to,
  .showDisconnect-leave {
    transform: scaleY(1);
  }
}
.menu_pc {
  height: 100%;
  display: flex;
  align-items: center;
  li {
    height: 80%;
    font-size: 0.2rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 0.2rem;
    border-right: 1px solid;
    border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #29a7e1, rgba(0, 0, 0, 0)) 1 1;
    &:last-child {
      border-right: 0;
    }
    &.active {
      color: #29a7e1;
      background: url($urlImages + "btn_bg4.webp") no-repeat;
      background-size: 90% auto;
      background-position: center;
    }
  }
}
.menu_mobile {
  width: 100vw;
  height: 0.5rem;
  background: #0a0a0d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 0.2rem;
  li {
    font-size: 0.12rem;
    font-weight: 400;
    color: #ffffff;
    i {
      font-size: 0.25rem;
    }
    &.active {
      color: #29a7e1;
    }
  }
}
@media screen and (max-width: 750px) {
  .nav {
    width: 100vw;
    height: 0.5rem;
    .nav_inset {
      width: 90%;
      .connect_lang {
        .connect {
          height: 0.25rem;
          font-size: 0.12rem;
          font-weight: 400;
          padding: 0.05rem 0.1rem;
          border-radius: 0.03rem;
          .disconnect {
            border-radius: 0.03rem;
          }
        }
        .lang_box {
          margin-left: 0.05rem;
          .el-select {
            width: 0.5rem;
            height: 0.25rem;
          }
        }
      }
    }
  }
}
</style>
