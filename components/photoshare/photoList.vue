<template>
    <!--必须要有一个节点-->
    <div>
        <header-bar title='图片分享'></header-bar>
        <div class='classify'>
            <ul>
                <li v-for='value in classifyList' :key="value.id">
                    <a href="javascript:;" @click="getImgs(value.id)">
                        {{value.title}}
                    </a>
                </li>
            </ul>
        </div>
        <div class='img-list'>
            <ul>
                <li v-for="value in imgList" :key="value.id">
                    <a href="">
                        <img :src="value.img_url" alt="">
                        <p>
                            <span>{{value.title}}</span><br>
                            <span>{{value.zhaiyao}}</span>
                        </p>
                    </a>
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
                classifyList:[],
                imgList:[]
            }
        },
        created(){
            this.$http.get(this.config.apiPath+'/api/getimgcategory').then(res=>{
                this.classifyList=res.body.message;
                this.classifyList.unshift({
                    id:0,
                    title:'全部'
                })
            },res=>{
                console.log('图片分享失败');
            })
            this.$http.get(this.config.apiPath+'/api/getimages/0').then(res=>{
                console.log(res.body);
                this.imgList=res.body.message;
            },res=>{
                console.log('图片分享失败');
            })
        },methods:{
            getImgs(id){
                this.$http.get(this.config.apiPath+'/api/getimages/'+id).then(res=>{
                    this.imgList=res.body.message;
                },res=>{
                    console.log('图片子分类失败');
                })
            }
        }
    }
</script>
<style>
    /*样式*/
    .classify{
        margin-top: 84px;
        white-space: nowrap;
    }
    .classify ul{
        padding-left: 0;
        overflow-x: auto;
        margin-bottom:5px;
    }
    .classify ul li{
        display: inline-block;
        margin:10px 0 0 10px;
    }
    .img-list ul{
        padding: 0;
        margin-top: 0;
    }
    .img-list ul li{
        position: relative;
    }
    .img-list img{
        width: 100%;
        height: 200px;
    }
    .img-list ul li p{
        position: absolute;
        background-color: rgba(0,0,0,.3);
        bottom: 0;
        color: #fff;
        margin-bottom: 0;
    }
    .img-list ul li p span:first-of-type{
        font-size: 16px;
    }
    .img-list ul li p span:last-of-type{
        font-size: 14px;
    }
</style>