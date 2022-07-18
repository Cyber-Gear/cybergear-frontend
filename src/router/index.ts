import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: any) {
  return (originalPush.call(this, location) as any).catch((err: any) => err);
};

const routes: Array<RouteConfig> = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home/IndexView.vue"),
  },
  {
    path: "/nft",
    name: "NFT",
    component: () => import("../views/nft/IndexView.vue"),
  },
];

const router = new VueRouter({
  routes,
});
// 跳转后返回顶部
// router.afterEach(() => {
//   window.scrollTo(0, 0);
// });
export default router;
