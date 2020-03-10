//入口文件
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueResource from 'vue-resource'
Vue.use(VueResource);

//导入 MUI的样式
import  './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入 Mint-Ui中的插件
import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

import router from "./router.js";

//导入app组件
import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router//挂载
});