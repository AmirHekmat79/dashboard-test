import Vue from "vue";
import VueRouter from "vue-router";
// import LoginForm from "../views/LoginForm.vue";
import DashboardPannel from "../views/DashboardPannel.vue";
import UsersPage from "../views/UsersPage.vue";
import LicensePage from "../views/LicensePage.vue";
import ProjectsPage from "../views/ProjectsPage.vue";
import CustomerPage from "../views/CustomerPage.vue";
import auth from "../middleware/auth";
// import App from "../App.vue";
// import App from "../App.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/LoginForm.vue"),
    meta: {
      hideNavbar: true,
      middleware: auth,
    },
  },
  {
    path: "/",
    name: "home",
    component: DashboardPannel,
    meta: {
      middleware: auth,
    },
  },
  {
    path: "/Users",
    name: "Users",
    component: UsersPage,
    meta: {
      middleware: auth,
    },
  },
  {
    path: "/Licenses",
    name: "License",
    component: LicensePage,
    meta: {
      middleware: auth,
    },
  },
  {
    path: "/Projects",
    name: "Projects",
    component: ProjectsPage,
    meta: {
      middleware: auth,
    },
  },

  {
    path: "/Customers",
    name: "Customers",
    component: CustomerPage,
    meta: {
      middleware: auth,
    },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;

// router.beforeEach((to, from, next) => {
//   const loggedIn = localStorage.getItem("content_superz");

//   if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
//     next("/login");
//   }
//   next();
// });
