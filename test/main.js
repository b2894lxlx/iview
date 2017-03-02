/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import iView from '../src/index';
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN';

Vue.use(VueRouter);
Vue.use(iView, { locale });

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '/affix',
            component: require('./routers/affix.vue')
        },
        {
            path: '/grid',
            component: require('./routers/grid.vue')
        },
        {
            path: '/button',
            component: require('./routers/button.vue')
        },
        {
            path: '/input',
            component: require('./routers/input.vue')
        },
        {
            path: '/radio',
            component: require('./routers/radio.vue')
        },
        {
            path: '/checkbox',
            component: require('./routers/checkbox.vue')
        },
        {
          path: '/steps',
          component: require('./routers/steps.vue')
        },
        {
          path: '/timeline',
          component: require('./routers/timeline.vue')
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
