import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Contas from "@/views/Contas/Contas.vue";
import Categorias from "@/views/Categorias/Categorias.vue";
import Relatorios from "@/views/Relatorios/Relatorios.vue";
import Transacoes from "@/views/Transacoes/Transacoes.vue";

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/transacoes',
    name: 'transacoes',
    component: Transacoes
  },
  {
    path: '/Categorias',
    name: 'categorias',
    component: Categorias
  },
  {
    path: '/contas',
    name: 'contas',
    component: Contas
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component: Relatorios
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;