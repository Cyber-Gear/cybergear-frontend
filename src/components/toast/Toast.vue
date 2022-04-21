<template>
  <div class="toast" :class="type" v-if="showToast">{{ message }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  /**
   * params: showToast Boolean 是否激活toast 默认 false
   * params: type String       toast提示类型 共normal success，fail，warning 四个选项 默认normal
   * params: message String    toast消息
   * params: duration Number      toast显示时间 默认 3000ms
   * */
  name: "Toast",
  computed: { ...mapGetters(["isEnLang"]) },
  data() {
    return {
      showToast: true,
      type: "normal",
      message: this.isEnLang ? "Message prompt" : "消息提示",
      duration: 3000,
    };
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgb(233, 233, 235);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  animation: show-toast 0.2s;
  color: #909399;
  overflow: hidden;
  display: flex;
  align-items: center;
}

@keyframes show-toast {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.success {
  color: #67c23a;
  background: rgb(225, 243, 216);
}

.warning {
  color: #e6a23c;
  background: rgb(250, 236, 216);
}

.fail {
  color: #f56c6c;
  background: rgb(253, 226, 226);
}
</style>
