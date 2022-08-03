<template>
  <el-dialog
    center
    top="0"
    :title="$t('walletPopup.text1')"
    :visible="getWalletConnectPopup"
    :modal-append-to-body="false"
    :destroy-on-close="true"
    @close="closePopup"
  >
    <div class="popupbox">
      <div>
        <i class="iconfont pcqianbao2-mianxing"></i>
        <i class="iconfont pcblock"></i>
      </div>
      <p>{{ $t("walletPopup.text2") }}</p>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closePopup">{{ $t("walletPopup.text3") }}</el-button>
      <el-button type="primary" @click="openWalletPopup">{{ $t("walletPopup.text4") }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WalletConnectPopup",
  computed: { ...mapGetters(["getWalletConnectPopup"]) },
  data() {
    return {};
  },
  methods: {
    openWalletPopup() {
      this.closePopup();
      this.$store.commit("setWalletListPopup", true);
    },
    closePopup() {
      this.$store.commit("setWalletConnectPopup", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.popupbox {
  width: 3.5rem;
  > p {
    text-align: center;
    font-size: 0.12rem;
    font-weight: 400;
    color: #777a7d;
  }
  > div {
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    position: relative;
    i {
      width: fit-content;
      height: fit-content;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      &:nth-child(1) {
        font-size: 1rem;
        color: #777a7d;
        z-index: 1;
      }
      &:nth-child(2) {
        font-size: 2rem;
        color: #9e9fa0;
        z-index: 2;
      }
    }
  }
}
.dialog-footer {
  .el-button {
    width: 1.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.15rem;
  }
}

@media screen and (max-width: 750px) {
  .popupbox {
    width: 80vw;
    > p {
      font-size: 0.12rem;
      font-weight: 400;
    }
    > div {
      width: 1.5rem;
      height: 1.5rem;
      i {
        &:nth-child(1) {
          font-size: 0.65rem;
        }
        &:nth-child(2) {
          font-size: 1.5rem;
        }
      }
    }
  }
  .dialog-footer {
    .el-button {
      width: 1rem;
      height: 0.35rem;
      line-height: 0.35rem;
      font-size: 0.12rem;
    }
  }
}
</style>
