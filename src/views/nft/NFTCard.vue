<template>
  <div class="page">
    <div class="topbox">
      <ul class="tablist">
        <li>
          <img src="" alt="" />
          <span>人物卡牌</span>
        </li>
        <li>
          <img src="" alt="" />
          <span>卡牌碎片</span>
        </li>
      </ul>
      <ul class="levellist">
        <li>
          MR
          <img src="" alt="" />
        </li>
        <li>UR</li>
        <li>SR</li>
        <li>R</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NFTCard",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  .topbox {
    display: flex;
    justify-content: space-between;
    .tablist {
      li {
        display: flex;
        align-items: center;
        margin-bottom: 0.1rem;
        cursor: pointer;
        img {
          width: 0.5rem;
          height: 0.5rem;
        }
        span {
          width: 1.4rem;
          padding: 0.1rem;
          margin-left: 0.1rem;
          font-size: 0.2rem;
          font-weight: 400;
          border-bottom: 1px solid;
          border-image: linear-gradient(135deg, rgba(212, 135, 241, 0.44), rgba(82, 224, 255, 0.44)) 1 1;
        }
      }
    }
    .levellist {
      width: calc(100% - 2rem);
      height: fit-content;
      display: flex;
      justify-content: space-around;
      li {
        height: fit-content;
        font-size: 0.2rem;
        font-weight: bold;
        position: relative;
        img {
          position: absolute;
          top: 0;
        }
        &:nth-child(1) img {
          left: 0;
        }
        &:nth-child(2) img {
          left: 0;
        }
        &:nth-child(3) img {
          left: 0;
        }
        &:nth-child(4) img {
          left: 0;
        }
      }
    }
  }
}
</style>
