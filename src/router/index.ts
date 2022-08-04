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
    component: () => import("../views/home/IndexView.vue"),
  },
  {
    path: "/community",
    component: () => import("../views/community/IndexView.vue"),
    children: [
      { path: "/", redirect: "guild" },
      {
        path: "guild",
        component: () => import("../views/community/Guild.vue"),
      },
      {
        path: "invite",
        component: () => import("../views/community/Invite.vue"),
      },
    ],
  },
  {
    path: "/nft",
    component: () => import("../views/nft/IndexView.vue"),
    children: [
      { path: "/", redirect: "card" },
      {
        path: "card",
        component: () => import("../views/nft/NFTCard.vue"),
      },
      {
        path: "my",
        component: () => import("../views/nft/NFTMy.vue"),
      },
    ],
  },
  {
    path: "/nft-giving",
    component: () => import("../views/nft/NFTGiving.vue"),
  },
  {
    path: "/card-details",
    component: () => import("../views/nft/CardDetails.vue"),
  },
  {
    path: "/open-boxs",
    component: () => import("../views/nft/OpenBoxs.vue"),
  },
  {
    path: "/open-boxs-results",
    component: () => import("../views/nft/OpenBoxsResults.vue"),
  },

  {
    path: "/buy-box",
    component: () => import("../views/buybox/IndexView.vue"),
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
