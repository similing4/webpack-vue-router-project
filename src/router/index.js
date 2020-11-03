import Vue from "vue";
import VueRouter from "vue-router";
import homeRouter from "./home.js";
Vue.use(VueRouter);

var routes = [];
routes = routes.concat(homeRouter);
const router = new VueRouter({ routes });
export default router;
