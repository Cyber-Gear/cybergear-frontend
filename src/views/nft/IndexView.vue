<template>
  <div class="page">
    <div class="inner">
      <ul class="tablist">
        <li v-for="(item, index) in tablist" :key="index" @click="toRoute(item, index)">
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
  padding: 0.8rem 0;
  .inner {
    width: 12.5rem;
    margin: 0.5rem auto;
  }
}
.tablist {
  display: flex;
  align-items: center;
  li {
    width: 50%;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.18rem;
    color: #ffffff;
    display: flex;
    &:nth-child(1) {
      justify-content: flex-end;
      padding-right: 0.5rem;
    }
    &:nth-child(2) {
      justify-content: flex-start;
      padding-left: 0.5rem;
    }
    div {
      cursor: pointer;
      &.active {
        color: #22bbff;
      }
    }
  }
}

.box {
}
</style>
