import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    //history: createWebHistory(),//history模式
    history: createWebHashHistory(), //history模式
    routes
});

export default router;