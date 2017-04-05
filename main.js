/**
 * Created by hujiacheng on 2017/4/2.
 */
//1-引入Vue/VueRouter/Vuesource对象
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MintUI from 'mint-ui';
import moment from 'moment';
import 'mint-ui/lib/style.css';
import './components/static/mui/dist/css/mui.css';
import './components/static/css/global.css';

import headerBar from './components/partials/headerBar.vue';
//图片列表
import newList from './components/news/newList.vue';
import newDetail from './components/news/newdetail.vue';
//引入子组件
import HomeVue from './components/home/home.vue';

//引入主体组件
import App from './app.vue';
//初始化
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI)

Vue.filter('retime',function (time) {
    return moment(time).format('YYYY-MM-DD');
})

Vue.component('headerBar',headerBar);

//配置路由
let router=new VueRouter({
    routes:[
        {name:'home',path: '/home', component: HomeVue},
        {name:'new.list',path: '/news/newlist', component: newList},
        {name:'new.detail',path: '/news/newdetail/:id', component: newDetail},
        {name:'default',path: '/', component: HomeVue},
    ]
});

//实例Vue
new Vue({
    el:'#app',
    router,
    render:c=>c(App)
})