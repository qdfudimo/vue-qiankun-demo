import {
    createApp
} from "vue";
import App from "./App.vue";
import routes from "./router";
import './public-path';
import {
    createRouter,
    createWebHashHistory
} from "vue-router";
// createApp(App).use(router).mount("#app");
let instance = null;
let router = null

function render(props = {}) {
    const {
        container
    } = props;
    router = createRouter({
        history: createWebHashHistory(),
        routes,
    });
    instance = createApp(App).use(router).mount(container ? container.querySelector('#app') : '#app');;
    // instance = new Vue({
    //     router,
    //     store,
    //     render: h => h(App),
    // }).$mount(container ? container.querySelector('#app') : '#app');
}
//如果是独立运行window.__POWERED_BY_QIANKUN__=undefined
if (!window.__POWERED_BY_QIANKUN__) {
    render()
}
//最后暴露的三个方法是固定的，加载渲染以及销毁

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function update(props) {
    //   console.log('update props', props);
}
export async function unmount() {
    // instance.$destroy();
    // instance.$el.innerHTML = '';
    instance = null;
    router = null;
}