import Vue from "vue";
import VueRouter from "vue-router";
// import LoginForm from "../views/LoginForm.vue";
import DashboardPannel from "../views/DashboardPannel.vue";
// import App from "../App.vue";
import App from "../App.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "Login",
   component: () => import('../views/LoginForm.vue'),
   meta: {
    hideNavbar: true,
   }
  },
  {
    path:"/",
    name:"home" ,
    component : App ,
    children:[{path:"Dashboard" , name:"Dashboard" , component :DashboardPannel } ,
  ]
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
