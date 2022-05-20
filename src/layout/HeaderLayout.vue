<template>
  <div class="nav">
    <div>
      <img class="logo" :src="`${$urlImages}logo1.webp`" alt="" @click="toRoute('/home')" />
    </div>
    <div>
      <div class="nav_list" v-for="(item, index) in navArr" :key="index" :class="{ active: navActive == index }" @click="toRoute(item.link)">
        <span>{{ $t(item.label) }}</span>
      </div>
    </div>
    <div>
      <div class="connect" @click="connectTheWallet">
        <span>{{ $t("message.nav.text8") }}</span>
        <img :src="`${$urlImages}angle.webp`" alt="" />
      </div>
      <div class="lang_box" @mouseover="showLangSelect = true" @mouseleave="showLangSelect = false">
        <span>{{ $i18n.locale.toUpperCase() }}</span>
        <img class="angle" :src="`${$urlImages}angle.webp`" alt="" />
        <transition name="select-lang" appear>
          <ul v-show="showLangSelect">
            <li v-for="(item, index) in langArr" :key="index" @click="selectLang(item)">
              <span> {{ item.toUpperCase() }}</span>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navActive: 0,
      navArr: [
        { label: "message.nav.text1", link: "/home" },
        { label: "message.nav.text2", link: "/home" },
        { label: "message.nav.text3", link: "/home" },
        { label: "message.nav.text4", link: "/home" },
        { label: "message.nav.text5", link: "/home" },
        { label: "message.nav.text6", link: "/home" },
        { label: "message.nav.text7", link: "/home" },
      ],
      showLangSelect: false,
      langArr: ["en", "cn"],
    };
  },
  watch: {
    $route(to, from) {
      if (from.matched.length && to.matched[0].path !== from.matched[0].path) {
        window.scrollTo(0, 0);
      }
      if (to.path == "/home") {
        this.navActive = 0;
      } else if (to.path == "/nft") {
        this.navActive = 1;
      }
    },
  },
  methods: {
    connectTheWallet() {
      // this.$toast("");
      // this.$toast("测试成功", "success", 5000);
      // this.$toast("测试警告", "warning");
      // this.$toast("测试失败", "fail");
    },
    toRoute(link) {
      if (link) this.$router.push(link);
    },
    selectLang(item) {
      if (this.$i18n.locale == item) return (this.showLangSelect = false);
      this.$i18n.locale = item;
      this.showLangSelect = false;
      this.$utils.setCookie("LANG", this.$i18n.locale);
      // location.reload();
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.5s;
  border-bottom: 1px solid #29a7e1;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    &:nth-child(1) .logo {
      width: 1.4rem;
      height: auto;
    }
    &:nth-child(2) {
      .nav_list {
        cursor: pointer;
        height: 80%;
        padding: 0 2vw;
        font-size: 0.18rem;
        display: flex;
        align-items: center;
        position: relative;
        border-right: 1px solid;
        border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #29a7e1, rgba(0, 0, 0, 0)) 1 1;
        &:last-child {
          border-right: 0;
        }
        &.active {
          color: #29a7e1;
          background: url($urlImages + "btn_bg4.webp") no-repeat;
          background-size: 75% auto;
          background-position: center;
        }
      }
    }
    &:nth-child(3) {
      .connect {
        font-size: 0.14rem;
        cursor: pointer;
        padding: 0.05rem 0.1rem;
        background: url($urlImages + "btn_bg1.webp") no-repeat;
        background-size: 100% 100%;
        margin-right: 0.1rem;
        display: flex;
        align-items: center;
        img {
          width: 0.2rem;
          height: auto;
        }
      }
      .lang_box {
        cursor: pointer;
        padding: 0.05rem 0.1rem;
        background: url($urlImages + "btn_bg2.webp") no-repeat;
        background-size: 100% 100%;
        position: relative;
        display: flex;
        align-items: center;
        font-size: 0.14rem;
        img {
          width: 0.2rem;
          height: auto;
        }
        ul {
          width: 100%;
          background: rgba(0, 0, 0, 0.5);
          text-align: center;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 99;
          transition: transform 0.3s;
          transform-origin: top center;
          li {
            padding: 0.1rem 0;
            &:hover {
              background: #000;
            }
          }
        }
      }
    }
  }
}

.select-lang-enter,
.select-lang-leave-to {
  transform: scaleY(0);
}
.select-lang-enter-to,
.select-lang-leave {
  transform: scaleY(1);
}
</style>
