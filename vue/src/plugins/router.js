import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from "../pages/Index";
import List from "../pages/List";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Nav from "../pages/Nav";
import Detail from "../pages/Detail";
import Buycar from "../pages/Buycar";
import ErrorPage from "../components/ErrorPage";

let routes = [
    {path:'/index',component:Index},
    {path:'/list',component:List},
    {path:'/user',component:User},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/nav',component:Nav},
    {path:'/detail/aid',name:'detail',component:Detail},
    {path:'/buycar',component:Buycar},
    {path:'/',redirect:'/index'},
    {path:'/*',component:ErrorPage},
]

let router = new VueRouter({
    routes
  });
  
  export default router;
  