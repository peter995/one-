<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator
                 mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0 ? 'mui-active' : '']"
                       v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>

        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/' + item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                cates: [],
                list: [] //图片列表的数组
            };
        },
        mounted() {//当组件中的DOM结构渲染好并放到封面中后，会执行这个钩子函数
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.005
            });
        },
        created() {
            this.getAllCategory();
            //默认进入页面
            this.getPhotoListByCateId(0);
        },
        methods: {
            getAllCategory() {
                this.$http.get('api/getimgcategory').then(result => {
                    // console.log(result.body)
                    if (result.body.status === 0) {
                        //手动拼接出一个最完整的分类列表
                        result.body.message.unshift({title: "全部", id: 0});
                        this.cates = result.body.message
                    } else {
                        Toast('失败了')
                    }
                });
            },
            getPhotoListByCateId(cateId) {
                this.$http.get("api/getimages/" + cateId).then(result => {
                    // console.log(result.body);
                    if (result.body.status === 0) {
                        this.list = result.body.message;
                    } else {
                        Toast('失败')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px 10px 0px 10px;

        li {
            background: #cccccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 8px #999;
            position: relative;

            img {
                width: 100%;
                vertical-align: middle;
            }

            img[lazy="loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
            }

            .info {
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background: rgba(0, 0, 0, 0.4);
                max-height: 84px;

                .info-title {
                    font-size: 14px;
                }

                .info-body {
                    font-size: 13px;
                }
            }
        }
    }


</style>