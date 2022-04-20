<template>
  <div class="nav" :class="{ active: scrollTop > 0 }">
    <div>
      <img class="logo" src="../assets/images/logo1.png" alt="" @click="toRoute('/home')" />
    </div>
    <div>
      <div class="nav_list" v-for="(item, index) in navArr" :key="index" :class="{ active: navActive == index }" @click="toRoute(item.link)">
        <span>{{ $t(item.label) }}</span>
      </div>
    </div>
    <div>
      <div class="connect">
        <span>{{ $t("message.nav.text8") }}</span>
        <img src="../assets/images/angle.png" alt="" />
      </div>
      <div class="lang_box" @mouseover="showLangSelect = true" @mouseleave="showLangSelect = false">
        <span><img :src="languageImage" alt="" /></span>
        <img src="../assets/images/angle.png" alt="" />
        <transition name="select-lang" appear>
          <ul v-show="showLangSelect">
            <li v-for="(item, index) in langArr" :key="index" @click="selectLang(item)">
              <img :src="item.image" alt="" />
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
      languageImage: "",
      langArr: [
        { lang: "cn", image: require("../assets/images/national_cn.png") },
        { lang: "en", image: require("../assets/images/national_us.png") },
      ],
    };
  },
  props: {
    scrollTop: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    $route(to) {
      // if (from.matched.length && to.matched[0].path !== from.matched[0].path) {
      //  window.scrollTo(0, 0);
      // }
      if (to.path == "/home") {
        this.navActive = 0;
      } else if (to.path == "/nft") {
        this.navActive = 1;
      }
    },
  },
  created() {
    this.languageImage = this.$i18n.locale == "cn" ? this.langArr[0].image : this.langArr[1].image;
  },
  methods: {
    toRoute(link) {
      if (link) this.$router.push(link);
    },
    selectLang(item) {
      if (this.$i18n.locale == item.lang) return (this.showLangSelect = false);
      this.$i18n.locale = item.lang;
      this.languageImage = item.image;
      this.$utils.setCookie("LANG", this.$i18n.locale);
      // location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100vw;
  height: 100px;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.5s;
  &.active {
    background: rgba(0, 0, 0, 1);
  }
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    &:nth-child(1) .logo {
      width: auto;
      height: 30px;
    }
    &:nth-child(2) {
      .nav_list {
        cursor: pointer;
        height: 80%;
        padding: 0 2vw;
        font-size: 19px;
        display: flex;
        align-items: center;
        position: relative;
        &::after {
          content: "";
          width: 1px;
          height: 100%;
          background: url("../assets/images/border1.png") no-repeat;
          background-size: auto 100%;
          position: absolute;
          right: 0;
          top: 0;
        }
        &:last-child::after {
          width: 0;
        }
        &.active {
          color: #29a7e1;
          background: url("../assets/images/btn_bg4.png") no-repeat;
          background-size: 75% auto;
          background-position: center;
        }
      }
    }
    &:nth-child(3) {
      .connect {
        font-size: 14px;
        cursor: pointer;
        padding: 5px 10px;
        background: url("../assets/images/btn_bg1.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 10px;
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: auto;
        }
      }
      .lang_box {
        cursor: pointer;
        padding: 5px 10px;
        background: url("../assets/images/btn_bg2.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: auto;
        }
        ul {
          width: 100%;
          height: auto;
          background: rgba(0, 0, 0, 0.3);
          text-align: center;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 99;
          transition: transform 0.3s;
          transform-origin: top center;
          li {
            padding: 10px 0;
            img {
              width: 2vw;
              height: auto;
            }
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
