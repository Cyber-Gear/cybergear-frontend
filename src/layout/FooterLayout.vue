<template>
  <div class="footer_box">
    <div>
      <img :src="`${$urlImages}logo1.webp`" alt="" />
      <div class="linklist">
        <a v-for="(item, index) in linkList" :key="index">
          <img :src="item.image" alt="" />
        </a>
      </div>
      <p>{{ $t("footer.text1") }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      linkList: [
        { image: this.$urlImages + "contact_Gitbook.webp", href: "" },
        { image: this.$urlImages + "contact_Twitter.webp", href: "" },
        { image: this.$urlImages + "contact_Discord.webp", href: "" },
        { image: this.$urlImages + "contact_Medium.webp", href: "" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.footer_box {
  width: 100%;
  height: 35vw;
  background: url($urlImages + "bg4.webp") no-repeat;
  background-size: 100% auto;
  padding-top: 0.8rem;
  display: flex;
  justify-content: center;
  > div {
    width: 4.3rem;
    height: auto;
    text-align: center;
    img {
      width: 100%;
      height: auto;
    }
    .linklist {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 0.2rem 0;
      a {
        width: 0.5rem;
        height: 0.5rem;
        margin: 0 0.05rem;
        background: url($urlImages + "contact_border.webp") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 55%;
          height: auto;
        }
      }
    }
    p {
      font-size: 0.15rem;
      font-weight: bold;
    }
  }
}
</style>
