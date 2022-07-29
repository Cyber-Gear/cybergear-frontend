<template>
  <div class="nav">
    <div class="nav_inset">
      <div class="nav_left">
        <img class="logo" :src="`${$urlImages}logo1.webp`" alt="" @click="toHome" />
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
      </div>
      <div class="nav_right">
        <div class="connect" @mouseover="showDisconnectFun" @mouseleave="hiddenDisconnectFun">
          <span v-if="getWalletAccount">
            {{ getWalletAccount | ellipsisWallet }}
          </span>
          <span v-else @click="openWalletPopup">{{ $t("nav.text7") }}</span>
          <transition name="showDisconnect" appear>
            <div v-show="showDisconnect" class="disconnect" @click="clickDisconnect">
              <span>{{ $t("nav.text8") }}</span>
              <i class="iconfont pcblock"></i>
            </div>
          </transition>
        </div>
        <div class="lang_box">
          <el-select v-model="$i18n.locale" @change="changeLang">
            <el-option v-for="item in langArr" :key="item" :label="item.toUpperCase()" :value="item"></el-option>
          </el-select>
        </div>
        <div class="download">
          <span>{{ $t("nav.text9") }}</span>
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
        { label: "nav.text3", icon: "pchome", link: "/", isOpen: false },
        { label: "nav.text4", icon: "pchome", link: "/community", isOpen: true },
        { label: "nav.text5", icon: "pchome", link: "/", isOpen: false },
        { label: "nav.text6", icon: "pchome", link: "/buy-box", isOpen: true },
      ],
      showDisconnect: false,
      langArr: ["en", "zh"],
      getWalletAccount: "",
    };
  },
  watch: {
    $route(to, from) {
      if (from.matched.length && to.matched[0].path !== from.matched[0].path) {
        window.scrollTo(0, 0);
      }
      if (to.path == "/home") {
        this.navActive = 0;
      } else if (to.path.indexOf("/nft") !== -1) {
        this.navActive = 1;
      } else if (to.path.indexOf("/community") !== -1) {
        this.navActive = 3;
      } else if (to.path.indexOf("/buy-box") !== -1) {
        this.navActive = 5;
      }
    },
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
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
  border-bottom: 1px solid #1b6e7c;
  .nav_inset {
    width: 11.5rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav_left,
    .nav_right {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .nav_left {
      .logo {
        cursor: pointer;
        width: auto;
        height: 35%;
        margin-right: 0.1rem;
      }
      .menu_pc {
        height: 100%;
        display: flex;
        align-items: center;
        li {
          cursor: pointer;
          height: 80%;
          font-size: 0.18rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          padding: 0 0.1rem;
          position: relative;
          &:last-child {
            border-right: 0;
          }
          &::after {
            content: "";
            width: 40%;
            height: 0.03rem;
            border-radius: 0.05rem;
            background: transparent;
            position: absolute;
            bottom: 20%;
            left: 0;
            right: 0;
            margin: auto;
          }
          &.active {
            color: #00a9e7;
            &::after {
              background: #7ae6f4;
            }
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
    }
    .nav_right {
      .connect {
        cursor: pointer;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.12rem;
        padding: 0 0.1rem;
        // background: linear-gradient(90deg, #38697f 0%, #5d4c78 100%);
        background: #494848;
        border-radius: 0.05rem;
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
          width: 0.6rem;
          height: 0.3rem;
        }
      }
      .download {
        cursor: pointer;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.12rem;
        padding: 0 0.1rem;
        background: linear-gradient(90deg, #38697f 0%, #5d4c78 100%);
        border-radius: 0.05rem;
        margin-left: 0.1rem;
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

@media screen and (max-width: 750px) {
  .nav {
    width: 100vw;
    height: 0.5rem;
    .nav_inset {
      width: 90%;
    }
  }
}
</style>
