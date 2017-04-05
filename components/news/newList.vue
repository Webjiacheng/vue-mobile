<template>
    <!--必须要有一个节点-->
    <div>
        <header-bar :title='title'></header-bar>
        <div class='new-list tmpl'>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="value in newlist" :key="value.id">
                    <router-link :to="{name:'new.detail',path:'/news/newdetail',params:{id:value.id}}">
                        <img class="mui-media-object mui-pull-left" :src="value.img_url">
                        <div class="mui-media-body">
                            <span>{{value.title|sliceTitle}}</span><br>
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
            this.$http.get(this.config.apiPath+'/api/getnewslist').then(res=>{
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
    }
    .mui-media-body p{
        color: rgba(34, 144, 140, 0.78);
        font-size: 12px;
    }
    .mui-media-body span{
        font-size: 16px;
        color: rgba(33, 37, 36, 0.92);
    }
    .mui-media-body p:first-of-type{
        float: left;
    }
    .mui-media-body p:last-of-type{
        float: right;
    }
    .mui-table-view .mui-media-object{
        border-radius: 50%;
    }
</style>