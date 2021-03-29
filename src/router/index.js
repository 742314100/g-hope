
import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home";
import news from "../views/news"
import giftCenter from '../views/giftCenter';
import server from '../views/server'
import detail from '../views/detail'
import login from '../views/login'

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/news",
    name: "news",
    component: news,
  },
  {
    path: "/giftCenter",
    name: "giftCenter",
    component: giftCenter,
  },
  {
    path: "/server",
    name: "server",
    component: server,
  },
  {
    path: "/detail",
    name: "detail",
    component: detail,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
