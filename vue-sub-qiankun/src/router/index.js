import Home from "../views/Home.vue";
let microPath = ""
if (window.__POWERED_BY_QIANKUN__) {
  microPath = '/child'
}
const routes = [{
    path: microPath + '/',
    redirect: microPath + '/home'
  },
  {
    path: microPath + "/home",
    name: "Home",
    component: Home,
  },
  {
    path: microPath + "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

export default routes;