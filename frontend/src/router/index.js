import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CharactersList from "../views/CharactersList.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/characters",
        name: "characters",
        component: CharactersList,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
