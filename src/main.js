//入口文件
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter);



//导入vuex
import Vuex from "vuex"
Vue.use(Vuex);

var car = JSON.parse(localStorage.getItem('car')||'[]');

var store = new Vuex.Store({
    state:{
        car:car //将购物车的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象
        
    },
    mutations:{
        addToCar(state,goodsinfo){
            //点击加入购物车，把商品信息，保存到 store中的car上
            //假设在购物车中，没有找到对应的商品
            var flag=false;

            state.car.some(item =>{
                if (item.id == goodsinfo.id){
                    item.count +=  parseInt(goodsinfo.count);
                    flag = true;
                    return true
                }
            })
            if (!flag){
                state.car.push(goodsinfo)
            }
            //当更新 car之后，把car 数组，存储哒本地的localstorage中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){
            state.car.some(item=>{
                if (item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            //当修改完商品的数量，把新的保存到 本地存储中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFormCar(state,id){
            state.car.some((item,i) => {
                if(item.id == id) {
                    state.car.splice(i,1);//从购物车中删除指定商品
                    return true;
                }
            });

            localStorage.setItem('car',JSON.stringify(state.car));
        },
        updateGoodsSelected(state,info){

            state.car.some(item=>{
                if(item.id == info.id){
                    item.selected = info.selected
                }
            })
            //当更新 car之后 把car数组 存储到本地 localstorage 中
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{
        getAllCount(state){
            var c=0;
            state.car.forEach(item=>{
                c+=item.count
            });
            return c
        },
        getGoodsCount(state){
            var o ={};
            state.car.forEach(item =>{
                o[item.id]=item.count
            });
            return o;
        },
        getGoodsSelected(state){
            var o ={}
            state.car.forEach(item=>{
                o[item.id] = item.selected
            });
            return o
        },
        getGoodsCountAndAmount(state) {
            let o = {
                count: 0,  //勾选的数量
                amount: 0  //勾选的总价
            }
            state.car.forEach(item=>{
                if(item.selected){
                    o.count += item.count
                    o.amount += item.price * item.count
                }

            })
            return o
        }
    }
});



import moment from 'moment'
//安装全局的过滤器
Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
});

import VueResource from 'vue-resource'

Vue.use(VueResource);

//设置请求的根路径
Vue.http.options.root = "http://www.liulongbin.top:3005";
//设置全局 post 时候表单数据格式组织形式
Vue.http.options.emulateJSON = true;

//导入 MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入 Mint-Ui中的插件
// import {Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem);
// Vue.component(Button.name,Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'

Vue.use(MintUI);
import 'mint-ui/lib/style.css'

//安装图片预览插件
import VuePreview from 'vue-preview'

Vue.use(VuePreview);


//导入自己的router.js路由模块
import router from "./router.js";

//导入app组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,//挂载
    store
});

