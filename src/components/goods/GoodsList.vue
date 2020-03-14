<template>
    <div class="goods-list">
<!--      <router-link class="goods-item" v-for="item in goodslist" :key="item.id"-->
<!--                   :to="'/home/goodsInfo/' + item.id" tag="div">-->
<!--          <img :src="item.img_url" alt="">-->
<!--          <h1 class="title">{{item.title}}</h1>-->
<!--          <div class="info">-->
<!--              <p class="price">-->
<!--                  <span class="now">￥{{item.sell_price}}</span>-->
<!--                  <span class="old">￥{{item.market_price}}</span>-->
<!--              </p>-->
<!--              <p class="sell">-->
<!--                  <span>热卖中</span>-->
<!--                  <span>剩{{item.stock_quantity}}</span>-->
<!--              </p>-->
<!--          </div>-->
<!--      </router-link>-->

        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>    </div>
</template>

<script>

    import {Toast} from 'mint-ui'
    export default {
        data(){
            //data 是往自己组建内部，挂载一些私有数据
            return{
                pageindex:1,
                goodslist:[]
            }
        },
        created() {
            this.getGoodsList();
        },
        methods:{
            getGoodsList(){
                //获取商品列表
                this.$http.get("api/getgoods?pageindex=" +this.pageindex).then(result =>{
                   // console.log(result.body)
                    if (result.body.status ===0){
                        // this.goodslist = result.body.message
                        this.goodslist=this.goodslist.concat(result.body.message)
                    }else {
                        Toast('失败了');
                    }
                })
            },
            getMore() {
                this.pageindex++;
                this.getGoodsList();
            },
            goDetail(id){
                //使用JS的形式进行路由导航

                // console.log(this);
                //1.最简单的
                this.$router.push("/home/goodsInfo/" + id);
                //2.传递对象
                // this.$router.push({ path: "/home/goodsInfo/" + id });
                //3.传递一个命令的路由
                // this.$router.push({ name: "goodsInfo", params: { id } });
            }
        }
    }
</script>

<style lang="scss" scoped>

    .goods-list{
        display:flex;
        flex-wrap: wrap;
        padding:7px;
        justify-content: space-between;
        .goods-item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin:3px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
            }
            .info{
                background: #eee;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size:16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content:space-between;
                    font-size: 12px;
                }
            }
        }
    }
</style>