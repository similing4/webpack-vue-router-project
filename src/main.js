//基础库
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//初始化
window.vue = new Vue({
	router,
	render: h => h(App)
}).$mount("#app")