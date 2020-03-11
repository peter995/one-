//入口文件
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter);

import moment from 'moment'
//安装全局的过滤器
Vue.filter('dataFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
   return  moment(dataStr).format(pattern)
});

import VueResource from 'vue-resource'
Vue.use(VueResource);

//设置请求的根路径
Vue.http.options.root="http://www.liulongbin.top:3005";

//导入 MUI的样式
import  './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入 Mint-Ui中的插件
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);

import router from "./router.js";

//导入app组件
import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router//挂载
});