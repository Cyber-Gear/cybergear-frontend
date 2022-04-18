<template>
  <div id="container" :class="isEnLang ? 'fontfamily_en' : 'fontfamily_zh'" @scroll="handleScrollScroll($event)">
    <HeaderLayout :scrollTop="scrollTop" />
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
      scrollTop: 0,
    };
  },
  mounted() {
    this.resetRem();
  },
  methods: {
    resetRem() {
      const bodyWidth = document.body.clientWidth;
      const rem375 = (bodyWidth * 100) / 375;
      if (bodyWidth <= 980) {
        document.getElementsByTagName("html")[0].style.fontSize = rem375 + "px";
      }
    },
    handleScrollScroll(e) {
      this.scrollTop = e.srcElement.scrollTop;
      // if (e.srcElement.scrollTop == 0) {
      // }
    },
  },
};
</script>

<style lang="scss">
#container {
  width: 100vw;
  height: 100vh;
  position: relative;
  color: #ffffff;
  background: #09071f;
  overflow: auto;
}
#container_body {
  width: calc(100vw - 5px);
  height: 100vh;
}
</style>
