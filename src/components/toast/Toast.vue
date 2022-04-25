<template>
  <div class="toast" :class="type" v-if="showToast">{{ message }}</div>
</template>

<script>
export default {
  /**
   * params: showToast Boolean 是否激活toast 默认 false
   * params: type String       toast提示类型 共normal success，fail，warning 四个选项 默认normal
   * params: message String    toast消息
   * params: duration Number      toast显示时间 默认 3000ms
   * */
  name: "Toast",
  data() {
    return {
      showToast: true,
      type: "normal",
      message: "Message prompt",
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
  background: #09071f;
  padding: 0.2rem 0.3rem;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  animation: show-toast 0.2s;
  color: #ffffff;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-size: 0.2rem;
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
