import { createRouter, createWebHistory } from 'vue-router';
import ChuckNorris from './views/ChuckNorris.vue';
import Home from './views/Home.vue';
import Grafica from './views/GraficaVelas.vue';
import Convertidor from './views/Convertidor.vue';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/ChuckNorris', name:'chucknorris', component: ChuckNorris},
    { path: '/CryptoCoinValue', name:'grafica', component: Grafica},
    { path: '/Convertidor', name:'convertidor', component: Convertidor},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;