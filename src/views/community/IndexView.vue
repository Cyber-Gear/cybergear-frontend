<template>
  <div class="page">
    <div class="inner">
      <div class="container">
        <div class="box_title2">
          <img :src="`${$urlImages}title_bg3.webp`" alt="" />
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
  height: 100%;
  padding: 0.8rem 0;
  .inner {
    width: 12.5rem;
    height: 100%;
    margin: 0 auto;
    padding-top: 0.5rem;
    background: url($urlImages + "bg2.webp") no-repeat;
    background-size: 65% auto;
    background-position: center center;
    display: flex;
    justify-content: space-between;
  }
}
.container {
  width: 20%;
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
