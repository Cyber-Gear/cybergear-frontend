<template>
  <div class="page">
    <div class="inner">
      <ul class="tablist">
        <li v-for="(item, index) in tablist" :key="index" @click="toRoute(item, index)" :class="{ active: tabIndex == index }">
          <div>{{ item.label }}</div>
        </li>
      </ul>
      <div class="box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NFT",
  data() {
    return {
      tabIndex: 0,
      tablist: [
        { label: "NFT卡牌", link: "card" },
        { label: "我的NFT", link: "my" },
      ],
    };
  },
  created() {
    this.tabIndex = this.$route.path == "/nft/card" ? 0 : 1;
  },
  methods: {
    toRoute(item, index) {
      if (item.link) {
        this.tabIndex = index;
        this.$router.push(item.link);
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
  background: url($urlImages + "bg1.webp") no-repeat;
  background-size: 100% 100%;
  .inner {
    width: 11.5rem;
    margin: 0.5rem auto 0 auto;
  }
}
.tablist {
  display: flex;
  align-items: center;
  background: url($urlImages + "bg7.webp") no-repeat;
  background-size: 100% auto;
  li {
    width: 50%;
    height: 0.5rem;
    line-height: 0.6rem;
    font-size: 0.18rem;
    color: #ffffff;
    display: flex;
    &:nth-child(1) {
      justify-content: flex-end;
      padding-right: 0.2rem;
    }
    &:nth-child(2) {
      justify-content: flex-start;
      padding-left: 0.2rem;
    }
    div {
      cursor: pointer;
      text-align: center;
      width: 1.5rem;
      height: 100%;
    }
    &.active {
      div {
        background: url($urlImages + "btn_bg6.webp") no-repeat;
        background-size: 100% 130%;
      }
    }
  }
}

.box {
  padding-top: 0.2rem;
}
</style>
