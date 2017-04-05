<template>
    <!--必须要有一个节点-->
    <div>
        <HeaderVue></HeaderVue>
        <router-view></router-view>
        <FooterVue></FooterVue>
    </div>
</template>
<script>
    import HeaderVue from './components/partials/header.vue';
    import FooterVue from './components/partials/footer.vue';
    //默认导出
    export default {
        data(){
            return {}
        },
        components:{
            HeaderVue,FooterVue
        }
    }
</script>
<style>
    /*样式*/

</style>