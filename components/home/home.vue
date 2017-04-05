<template>
    <!--必须要有一个节点-->
    <div id='home'>
        <div id='swipe'>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(value,index) in list" :key="index">
                    <a :href="value.url">
                        <img :src="value.img" alt="">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div>
            <div class="mui-content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/news/newlist" title='title'>
                            <span class="mui-icon mui-icon-home"></span>
                            <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/photoshare/photoList'>
                            <span class="mui-icon mui-icon-email"></span>
                            <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <span class="mui-icon mui-icon-chatbubble"></span>
                            <div class="mui-media-body">商品展示</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <span class="mui-icon mui-icon-location"></span>
                            <div class="mui-media-body">留言反馈</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <span class="mui-icon mui-icon-search"></span>
                            <div class="mui-media-body">搜索资讯</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <span class="mui-icon mui-icon-phone"></span>
                            <div class="mui-media-body">联系我们</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    //默认导出
    export default {
        data(){
            return {
                list:[],
                title:'新闻列表'
            }
        },created(){
            this.$http.get(this.config.apiPath+'/api/getlunbo').then(res=>{
                console.log(res.body);
                this.list=res.body.message;
                console.log(res.body.message);
            },res=>{

            })
        }
    }
</script>
<style scoped>
    /*样式*/
    #home{
        margin-top: 40px;
    }
    #swipe{
        height: 190px;
    }
    #swipe img{
        width: 100%;
    }
    .mint-swipe{
        height: 200px;
    }
    .mui-content .mui-table-view:first-child{
        margin-top:0;
    }
    .mui-content ul{
        background-color: #fff;
    }
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before{
        content:"";
        width: 50px;
        height: 50px;
        display: inline-block;
    }
    .mui-icon-home:before {
        background: url('../static/images/news.png');
        background-repeat: round;
    }
    .mui-icon-email:before {
        background: url('../static/images/picShare.png');
        background-repeat: round;
    }

    .mui-icon-chatbubble:before {
        background: url('../static/images/goodShow.png');
        background-repeat: round;
    }

    .mui-icon-location:before {
        background: url('../static/images/feedback.png');
        background-repeat: round;
    }

    .mui-icon-phone:before {
        background: url('../static/images/search.png');
        background-repeat: round;
    }

    .mui-icon-search:before {
        background: url('../static/images/callme.png');
        background-repeat: round;
    }
</style>