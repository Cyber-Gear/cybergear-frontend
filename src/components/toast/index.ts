import Vue from "vue";
import Toast from "./Toast.vue";

const ToastConstructor = Vue.extend(Toast);
function toast(message: any, type = "normal", duration = 3000) {
  const _toast = new ToastConstructor({
    data() {
      return {
        showToast: true,
        message: message,
        type: type,
        duration: duration,
      };
    },
  });
  const element = _toast.$mount().$el;
  document.body.appendChild(element);
  setTimeout(() => {
    _toast.showToast = false;
  }, duration);
}

export default toast;
