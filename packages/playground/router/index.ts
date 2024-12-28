import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Pdf from '../views/pdf.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/pdf', component: Pdf }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;