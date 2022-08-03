<template>
  <el-dialog
    center
    top="0"
    :title="$t('walletPopup.text5')"
    :visible="getWalletListPopup"
    :modal-append-to-body="false"
    :destroy-on-close="true"
    @close="closePopup"
  >
    <div class="popupbox">
      <div class="title">{{ $t("walletPopup.text6") }}<span>CyberGear</span></div>
      <ul>
        <li v-for="(item, index) in walletArr" :key="index" @click="walletClick(item.walletType)">
          <img :src="item.image" alt="" />
          {{ item.name }}
        </li>
      </ul>
    </div>
  </el-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WalletListPopup",
  computed: { ...mapGetters(["getWalletAccount"]), ...mapGetters(["getWalletListPopup"]) },
  data() {
    return {
      walletArr: [
        { name: "Metamask", walletType: "metamask", image: this.$urlImages + "wallet_MetaMaskFox.webp" }, //metamask
        { name: "TokenPocet", walletType: "metamask", image: this.$urlImages + "wallet_TokenPocet.webp" }, //metamask
        { name: "WalletConnect", walletType: "walletconnect", image: this.$urlImages + "wallet_WalletConnect.webp" }, //walletconnect
      ],
    };
  },
  methods: {
    // 连接钱包弹窗方法
    walletClick(walletType) {
      // this.$utils.walletConnect(walletType);
    },
    closePopup() {
      this.$store.commit("setWalletListPopup", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.popupbox {
  width: 4.5rem;
  color: #ffffff;
  .title {
    text-align: center;
    font-size: 0.12rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
    span {
      font-weight: 600;
      color: #00b4ff;
      border-bottom: 1px solid #00b4ff;
      margin-left: 0.1rem;
      cursor: pointer;
    }
  }
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 0.5rem;
      margin-bottom: 0.2rem;
      background: #211f24;
      border-radius: 0.1rem;
      border: 1px solid #413f3f;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: linear-gradient(90deg, #38697f 0%, #5d4c78 100%);
      }
      img {
        width: auto;
        height: auto;
        max-width: 0.4rem;
        max-height: 0.4rem;
        margin-right: 0.1rem;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .popupbox {
    width: 80vw;
    .title {
      margin-bottom: 0.1rem;
      span {
        margin-left: 0.05rem;
      }
    }
    ul {
      li {
        height: 0.4rem;
        margin-bottom: 0.1rem;
        img {
          width: auto;
          height: auto;
          max-width: 0.25rem;
          max-height: 0.25rem;
          margin-right: 0.05rem;
        }
      }
    }
  }
}
</style>
