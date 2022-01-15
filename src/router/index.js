import vue from 'vue';
import VueRouter from 'vue-router';

const home = () => import('../views/home/Home.vue');
const find = () => import('../views/find/Find');
const shopcart = () => import('../views/shopcart/Shopcart');
const profile = () => import('../views/profile/Profile');

vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/find',
        component: find
    },
    {
        path: '/shopcart',
        component: shopcart
    },
    {
        path: '/profile',
        component: profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;