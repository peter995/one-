import VueRouter from 'vue-router'

import home1 from "./components/tabbar/home1.vue";
import hy1 from "./components/tabbar/hy1.vue";
import gwc1 from "./components/tabbar/gwc1.vue";
import ss1 from "./components/tabbar/ss1.vue";
import NewsList from "./components/news/NewsList.vue";
import NewsInfo from "./components/news/NewsInfo.vue";
import photoList from "./components/photos/photoList.vue";
import photoInfo from "./components/photos/photoInfo.vue";
import GoodsList from "./components/goods/GoodsList.vue";
import GoodsInfo from "./components/goods/GoodsInfo.vue";
import GoodsDesc from "./components/goods/GoodsDesc.vue";
import GoodsComment from "./components/goods/GoodsComment.vue";

var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home1},
        {path: '/hy', component: hy1},
        {path: '/gwc', component: gwc1},
        {path: '/ss', component: ss1},
        {path: '/home/newslist', component: NewsList},
        {path: '/home/newsinfo/:id', component: NewsInfo},
        {path: '/home/photoList', component: photoList},
        {path: '/home/photoInfo/:id', component: photoInfo},
        {path: '/home/goodsList', component:GoodsList},
        {path: '/home/goodsInfo/:id', component:GoodsInfo},
        {path: '/home/goodsDesc/:id',component:GoodsDesc,name:'goodsdesc'},
        {path: '/home/goodsComment/:id',component:GoodsComment,name:'goodscomment'}
    ],
    linkActiveClass: "mui-active"
});

// 把路由对象暴露出去
export default router