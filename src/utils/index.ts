// import { wallet, network, util } from "funtopia-sdk";
import { Message } from "element-ui";
// import store from "../store/index";
export default {
  /**
   * 获取当前连接的钱包地址
   * @  wallet.getCurrentAccount() 获取当前连接的钱包地址
   */
  // getCurrentAccount() {
  //   wallet
  //     .getCurrentAccount()
  //     .then((res) => {
  //       this.handleAccountsChanged(res);
  //     })
  //     .catch((err) => {
  //       console.error("获取当前连接帐户失败！", err);
  //     });
  // },
  // /**
  //  * 连接钱包
  //  * @param walletType 准备连接的钱包类型
  //  * @  wallet.getAccount() 获取已连接的钱包地址
  //  * @  wallet.getChainId() 获取已连接的网络ID
  //  * @  onAccountChanged  监听帐户变化
  //  * @  onChainChanged  监听网络变化
  //  * @  onDisconnect  监听断开连接
  //  */
  // async walletConnect(walletType: string) {
  //   await wallet
  //     .getAccount(walletType)
  //     .then(this.handleAccountsChanged)
  //     .catch((err) => {
  //       if (err.code === 4001) {
  //         console.log("If this happens, the user rejects the connection request");
  //       } else {
  //         console.error("wallet.getAccount()", err);
  //       }
  //     });
  //   await wallet
  //     .getChainId()
  //     .then(this.handleChainChanged)
  //     .catch((err) => {
  //       console.error("wallet.getChainId()", err);
  //     });
  // },
  // addEventListenerFun() {
  //   wallet.onAccountChanged(this.handleAccountsChanged);
  //   wallet.onChainChanged(this.handleChainChanged);
  // },
  // /**
  //  * 帐户变化触发方法
  //  * @param accounts 已连接的钱包地址
  //  */
  // handleAccountsChanged(accounts: string[]) {
  //   if (store.getters.getWalletListPopup) store.commit("setWalletListPopup", false);
  //   if (accounts.length === 0) {
  //     Message({ message: "MetaMask is locked or the user is not connected to any account now", type: "warning" });
  //   } else if (accounts[0] !== store.getters.getWalletAccount) {
  //     Message({ message: "Connection succeeded", type: "success" });
  //     store.commit("setWalletAccount", util.getAddress(accounts[0]));
  //   }
  // },
  // /**
  //  * 网络变化触发方法
  //  * @param chainId 已连接的网络ID
  //  * @  network() sdk网络的网络配置
  //  */
  // handleChainChanged(chainId: string) {
  //   if (network().chainId !== chainId) {
  //     Message({ message: "Error, please switch to the correct network", type: "warning" });
  //     wallet.addChain();
  //   }
  // },
  // /**
  //  * 断开连接
  //  * @  wallet.disconnect() 断开连接
  //  */
  // walletDisconnect() {
  //   // wallet.disconnect();
  //   store.commit("setWalletAccount", "");
  // },

  /**数组根据某个字段去重 */
  unique(arr: any, val: string) {
    const res = new Map();
    return arr.filter((item: any) => !res.has(item[val]) && res.set(item[val], 1));
  },
  /**
   * 格式化时间
   * 调用 FormatDate(strDate, "yyyy-MM-dd HH:mm:ss")
   * @param strDate （中国标准时间）时间戳等都可以
   * @param strFormat 返回格式
   * @returns
   */
  formatDate(strDate: any, strFormat?: any) {
    if (!strDate) return;
    if (!strFormat) strFormat = "yyyy/MM/dd HH:mm";
    switch (typeof strDate) {
      case "string":
        strDate = new Date(strDate.replace(/-/g, "/"));
        break;
      case "number":
        strDate = new Date(strDate);
        break;
    }
    if (strDate instanceof Date) {
      const dict: any = {
        yyyy: strDate.getFullYear(),
        M: strDate.getMonth() + 1,
        d: strDate.getDate(),
        H: strDate.getHours(),
        m: strDate.getMinutes(),
        s: strDate.getSeconds(),
        MM: ("" + (strDate.getMonth() + 101)).substr(1),
        dd: ("" + (strDate.getDate() + 100)).substr(1),
        HH: ("" + (strDate.getHours() + 100)).substr(1),
        mm: ("" + (strDate.getMinutes() + 100)).substr(1),
        ss: ("" + (strDate.getSeconds() + 100)).substr(1),
      };
      return strFormat.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function (m: any) {
        return dict[m];
      });
    }
  },
  /**数字千分位 */
  formatNumber(num: number) {
    return (Math.round(num) + "").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
  },
  /**
   * 复制
   * @param value
   */
  handleCopy(value: string) {
    // const dummy = document.createElement("input"); // 不支持换行符
    const dummy = document.createElement("textarea"); // 支持换行符
    document.body.appendChild(dummy);
    dummy.value = value;
    dummy.select(); // 选择对象
    document.execCommand("copy"); // 执行浏览器复制命令
    document.body.removeChild(dummy);
    Message({ message: "Copy Success" });
  },

  // 设置cookie过期时间
  setCookie(key: string, value: string, time: number) {
    const num = new Date(new Date().getTime() + time * 60 * 1000 * 60);
    document.cookie = `${key} = ${value};expires = ` + num.toUTCString() + ";path = /";
  },
  // 获取cookie
  getCookie(name: string) {
    let arr: any = [];
    const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
    else return null;
  },
  delCookie(name: string) {
    this.setCookie(name, "", -1);
  },
  // //禁止滚动条滚动
  // forbiddenScroll() {
  //   const scroll = (e: any) => {
  //     e.preventDefault();
  //   };
  //   document.body.style.overflow = "hidden";
  //   document.addEventListener("touchmove", scroll, false);
  // },
  // //恢复滚动条滚动
  // restoreTheScroll() {
  //   const scroll = (e: any) => {
  //     e.preventDefault();
  //   };
  //   document.body.style.overflow = "";
  //   document.removeEventListener("touchmove", scroll, false);
  // },
};
