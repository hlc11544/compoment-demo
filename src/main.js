/*
 * @Author: zouzheng
 * @Date: 2020-06-08 17:13:16
 * @LastEditors: hualc
 * @LastEditTime: 2023-06-02 09:29:30
 * @Description: 这是XXX组件（页面）
 */
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
	render: (h) => h(App),
}).$mount('#app');
