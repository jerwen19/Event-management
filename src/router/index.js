import EventHome from '@/pages/EventHome.vue';
import EventRegistration from '@/pages/EventRegistration.vue';
import EventLogin from '@/pages/EventLogin.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TheHeader from '@/component/TheHeader.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: EventHome,

    },
    {
        path: '/user/:id', // ✅ Corrected path
        name: 'user-profile',
        component: EventRegistration,
        props: true,
    },
    {
        path: '/registration',
        name: 'registration',
        component: EventRegistration,
        props: true,
    },
    {
        path: '/header',
        name: 'header',
        component: TheHeader,
        props: true,
    },





];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


export default router;