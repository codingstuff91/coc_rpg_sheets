import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CharactersList from "../views/CharactersList.vue";
import CharacterShow from "../views/CharacterShow.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

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
    {
        path: "/character/:character_id",
        name: "character.show",
        component: CharacterShow,
    },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
