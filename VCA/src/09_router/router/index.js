import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import Home from '../views/home.vue'
// import About from '../views/about.vue'
// 直接导入无法进行分包
// const Home = () => import('../views/home.vue')
// const About = () => import('../views/about.vue')

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(), 
    routes: [
        {
            path:"/",
            redirect: '/home'
        },
        {
            name: 'home',
            path:"/home",
            component: () => import(/*webpackChunkName: 'home'*/'../views/home.vue')
            //魔法注释
        },
        {
            name: 'about',
            path:"/about",
            component: () => import(/*webpackChunkName: 'about'*/'../views/about.vue')
        }
    ]
})

export default router