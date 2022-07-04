import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import {
    registerMicroApps,
    start
} from 'qiankun' //新增部分，导入qiankun中的两个方法
const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);
const apps = [{
    name: 'vueApp', //子应用的名称
    entry: '//localhost:7105', //子应用的域名
    container: '#child', //承载子应用的容器，在上面App.vue中定义
    activeRule: getActiveRule('#/child'), // 被激活的子应用的路由
}]
registerMicroApps(apps); //注册子应用
start(); //启动qiankun
createApp(App).use(router).mount("#app");