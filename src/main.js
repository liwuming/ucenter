import { createApp } from 'vue'
//import VueRouter from 'vue-router';
//import vueConfig from 'vue.config';


import App from './App.vue'
//关闭vue的生产提示
//vue.config.productionTip = false;

import router from './router/index';



//import axios from 'axios';
import axios from '@/libs/axios.js';


let app = createApp(App);


//import Antd from 'ant-design-vue';
//import 'ant-design-vue/dist/antd.css';use(Antd)


//axios.defaults.baseURL = '/api';
app.config.globalProperties.$http = axios;
app.use(router).mount('#app')