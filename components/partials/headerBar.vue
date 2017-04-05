<template>
    <!--必须要有一个节点-->
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goback"></a>
            <h1 class="mui-title">{{title}}</h1>
        </header>
    </div>
</template>
<script>
    //默认导出
    export default {
        data(){
            return {}
        },methods:{
            goback(){
                this.$router.go(-1);
            }
        },props:['title']
    }
</script>
<style>
    /*样式*/

</style>