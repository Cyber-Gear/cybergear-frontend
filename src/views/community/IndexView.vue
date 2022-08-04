<template>
  <div class="page">
    <div class="inner">
      <div class="container">
        <div class="box_title2">
          <div class="left">
            <img :src="`${$urlImages}title_bg3.webp`" alt="" />
            <div>
              <span>{{ $t("community.text1") }}</span>
            </div>
          </div>
        </div>
        <ul class="tablist">
          <li v-for="(item, index) in tablist" :key="index" @click="toRoute(item, index)" :class="{ active: tabIndex == index }">
            <div>
              <span>{{ item.label }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Community",
  data() {
    return {
      tabIndex: 0,
      tablist: [
        { label: this.$t("community.text2"), link: "guild" },
        { label: this.$t("community.text3"), link: "invite" },
        { label: this.$t("community.text4"), link: "" },
      ],
    };
  },

  created() {
    this.routeChange(this.$route.path);
  },
  methods: {
    toRoute(item, index) {
      if (item.link) {
        this.tabIndex = index;
        this.$router.push(item.link);
      }
    },
    routeChange(path) {
      if (path == "/community/guild") {
        this.tabIndex = 0;
      } else if (path == "/community/invite") {
        this.tabIndex = 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  min-height: calc(100vh - 5rem);
  padding: 0.8rem 0;
  background: url($urlImages + "bg17.webp") no-repeat;
  background-size: auto 100%;
  background-position: center;
  .inner {
    width: 12.5rem;
    height: 100%;
    margin: 0 auto;
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
}
.container {
  width: 20%;
  .box_title2 {
    width: 100%;
  }
  .tablist {
    li {
      cursor: pointer;
      width: 100%;
      height: 0.5rem;
      line-height: 0.5rem;
      margin-bottom: 0.2rem;
      font-size: 0.25rem;
      font-weight: 400;
      text-align: right;
      span {
        margin-right: 0.25rem;
      }
      &.active {
        color: #02b9d1;
        background: #000000;
        border-radius: 0.1rem;
      }
    }
  }
}
.box {
  width: 76%;
}
</style>
