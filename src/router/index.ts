import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Login = () => import("/src/views/Login/index.vue");
const NotFond = () => import("/src/views/NotFond.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/404",
    name: "NotFond",
    component: NotFond,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    // 如果未匹配到路由
    next("/404");
  } else {
    next(); // 如果匹配到正确跳转
  }
});
export default router;
