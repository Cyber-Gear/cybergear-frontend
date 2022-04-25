<template>
  <div id="container" :class="isEnLang ? 'fontfamily_en' : 'fontfamily_zh'" @scroll="handleScrollScroll($event)">
    <HeaderLayout />
    <div id="container_body">
      <router-view />
      <FooterLayout />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeaderLayout from "./layout/HeaderLayout";
import FooterLayout from "./layout/FooterLayout";
export default {
  components: { HeaderLayout, FooterLayout },
  computed: { ...mapGetters(["isEnLang"]) },
  data() {
    return {
      showToTop: false,
    };
  },
  created() {
    if (document.readyState === "loading") {
      // this.$toast("loading...");
      // this.$toast("测试成功", "success", 3000);
      // this.$toast("测试警告", "warning");
      // this.$toast("测试失败", "fail");
    }
  },
  mounted() {
    // const timer = setInterval(function () {
    //   if (document.readyState === "complete") {
    //     window.clearInterval(timer);
    //   } else if (document.readyState === "loading") {
    //     this.$toast("loading...", "normal", 500);
    //   }
    // }, 500);

    window.addEventListener("load", () => {
      this.resetRem();
    });
    window.addEventListener("resize", () => {
      this.resetRem();
    });
  },
  destroyed() {
    window.removeEventListener("load", this.resetRem());
    window.removeEventListener("resize", this.resetRem());
  },
  methods: {
    resetRem() {
      const clientWidth = document.body.clientWidth;
      const rem = (clientWidth * 100) / 1440;
      document.getElementsByTagName("html")[0].style.fontSize = rem + "px";
    },
    handleScrollScroll(e) {
      this.showToTop = e.srcElement.scrollTop > 900;
      // console.log(this.showToTop);
    },
  },
};
</script>

<style lang="scss">
#container {
  width: 100%;
  height: 100%;
  position: relative;
  color: #ffffff;
  background: #09071f;
  overflow: auto;
}
#container_body {
  width: 100%;
  height: 100%;
}
</style>
