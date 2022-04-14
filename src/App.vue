<template>
  <div id="container" :class="isEnLang ? 'ff_en_bold' : 'ff_cn_regular'">
    <HeaderLayout />
    <div id="container_body">
      <router-view />
      <FooterLayout />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeaderLayout from "@/layout/HeaderLayout.vue";
import FooterLayout from "@/layout/FooterLayout.vue";
export default {
  components: { HeaderLayout, FooterLayout },
  computed: { ...mapGetters(["isEnLang"]) },
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
  },
};
</script>

<style lang="scss">
#container {
  width: 100vw;
  height: 100vh;
  color: #ffffff;
  background: #000;
}
#container_body {
  width: 100vw;
  height: calc(100vh - 80px);
  overflow: auto;
}
</style>
