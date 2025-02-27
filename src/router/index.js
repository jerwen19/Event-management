import EventHome from '@/pages/EventHome.vue';
import EventRegistration from '@/pages/EventRegistration.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: EventHome,

    },
    {
        path: 'login', // ✅ Corrected path
        name: 'Signin',
        component: EventRegistration,
        props: true,
    },
    {
        path: '/registration',
        name: 'Signup',
        component: EventRegistration,
        props: true,
    },





];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


export default router;