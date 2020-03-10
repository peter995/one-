import VueRouter from 'vue-router'

import home1 from "./components/tabbar/home1.vue";
import hy1 from "./components/tabbar/hy1.vue";
import gwc1 from "./components/tabbar/gwc1.vue";
import ss1 from "./components/tabbar/ss1.vue";

var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home1},
    {path:'/hy',component: hy1},
    {path:'/gwc',component:gwc1},
    {path:'/ss',component:ss1}
  ],
  linkActiveClass:"mui-active"
});

// 把路由对象暴露出去
export default router