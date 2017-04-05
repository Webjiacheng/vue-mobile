<template>
    <!--必须要有一个节点-->
    <div>
        <header-bar :title='title'></header-bar>
        <div class='new-list'>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="value in newlist" :key="value.id">
                    <router-link :to="{name:'new.detail',path:'/news/newdetail',params:{id:value.id}}">
                        <img class="mui-media-object mui-pull-left" :src="value.img_url">
                        <div class="mui-media-body">
                            <span>{{value.title}}</span><br>
                            <p class='mui-ellipsis'>点击量:{{value.click}}</p>
                            <p class='mui-ellipsis'>发表时间:{{value.add_time | retime}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    //默认导出
    export default {
        data(){
            return {
                title:'新闻列表',
                newlist:[],
            }
        },created(){
            this.$http.get('http://webhm.top:8899/api/getnewslist').then(res=>{
                this.newlist=res.body.message;
            },res=>{
                console.log('获取数据失败')
            })
        }
    }
</script>
<style>
    /*样式*/
    header.mui-bar{
        margin-top: 40px;
    }
    .new-list{
        margin-top: 84px;
        margin-bottom: 50px;
    }
    .mui-media-body p{
        color: #3973f6;
    }
    .mui-media-body span{
        font-size: 14px;
    }
    .mui-media-body p:first-of-type{
        float: left;
    }
    .mui-media-body p:last-of-type{
        float: right;
    }
</style>