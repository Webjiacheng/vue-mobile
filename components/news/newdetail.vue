<template>
    <!--必须要有一个节点-->
    <div>
        <header-bar title="新闻详情"></header-bar>
        <div class='new-detail'>
            <div>
                <p class='title'>{{message.title}}</p>
                <p class='click'>阅读量:{{message.click}}</p>
                <p class='add_time'>发布时间:{{message.add_time|retime}}</p>
            </div>
            <div class='detail tmpl' v-html='message.content'>

            </div>

        </div>
    </div>
</template>
<script>
    //默认导出
    export default {
        data(){
            return {
                message:{}
            }
        },created(){
            console.log(this.$route.params.id)
            let id=this.$route.params.id;
            this.$http.get(this.config.apiPath+'/api/getnew/'+id).then(res=>{
                console.log(res.body)
                this.message=res.body.message[0];
            })
        },beforeRouteEnter (to, from, next) {
//            console.log(to);
//            console.log(to.path.split('/')[3]);
//            next(vm => {
//                vm.$http.get('http://webhm.top:8899/api/getnew/'+to.path.split('/')[3]).then(res=>{
//                    console.log(res.body)
//                    vm.message=res.body.message[0];
//                })
//            })
            next();
        }
    }
</script>
<style>
    /*样式*/
    .new-detail{
        margin-top: 84px;
    }
    .new-detail div:first-of-type{
        border-bottom: 1px dashed #1d1115;
        overflow: hidden;
    }
    .title{
        margin-top: 10px;
        text-align: center;
        color: deepskyblue;
        color: #398bfb;
        font-weight: bold;
    }
    .click{
        float: left;
        margin-left: 20px;
    }
    .add_time{
        float: right;
        margin-right: 20px;
    }
    .detail{
        float: left;
        padding: 10px;
    }
</style>