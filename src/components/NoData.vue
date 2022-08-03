<template>
  <div class="nodata">
    <i class="iconfont pcchakan"></i>
    <div>
      <p>No items</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoData",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.nodata {
  width: 100%;
  text-align: center;
  color: #ffffff;
  i {
    font-size: 2rem;
    color: #79787d;
  }
  div {
    p {
      margin-top: 0.1rem;
      &:nth-child(1) {
        font-size: 0.25rem;
        font-weight: bold;
      }
      &:nth-child(2) {
        font-size: 0.15rem;
        font-weight: bold;
        span {
          color: #00b7ff;
          cursor: pointer;
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .nodata {
    i {
      font-size: 1rem;
    }
    div {
      p {
        margin-top: 0.05rem;
        &:nth-child(1) {
          font-size: 0.15rem;
        }
        &:nth-child(2) {
          font-size: 0.12rem;
        }
      }
    }
  }
}
</style>
