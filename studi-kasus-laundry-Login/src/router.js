import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: () => import("./components/HomeView")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("./components/Register")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("./components/Login")
    },
    {
        path: "/home",
        component: () => import("./components/HomeView")
    },
    {
        path: "/list-pesanan",
        alias: "/list-pesanan",
        name: "list-pesanan",
        component: () => import("./components/ListPesanan")
    },
    {
        path: "/list-pesanan/:id",
        name: "detail-pesanan",
        component: () => import("./components/Pesanan")
    },
    {
        path: "/tambah",
        name: "tambah-pesanan",
        component: () => import("./components/TambahPesanan")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;