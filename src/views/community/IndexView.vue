<template>
  <div class="page">
    <div class="inner">
      <div class="container">
        <div class="box_title2">
          <img src="../../assets/images/title_bg3.webp" alt="" />
          <span>Record</span>
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
        { label: "公会", link: "guild" },
        { label: "邀请", link: "invite" },
        { label: "论坛", link: "" },
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
  min-height: calc(100vh - 0.8rem - 35vw);
  padding: 0.8rem 0;
  .inner {
    width: 12.5rem;
    margin: 0 auto;
    padding: 0.5rem 0;
    display: flex;
    background: url($urlImages + "bg2.webp") no-repeat;
    background-size: 65% auto;
    background-position: center center;
  }
}
.tablist {
  li {
    font-size: 0.25rem;
    font-weight: 400;
    color: #ffffff;
    padding: 0.1rem 0;
    margin: 0.1rem 0;
    text-align: right;
    span {
      margin-right: 0.4rem;
    }
    &.active {
      color: #02b9d1;
      background: #000000;
      border-radius: 0.1rem;
    }
  }
}
</style>
