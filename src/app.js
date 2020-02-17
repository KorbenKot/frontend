import Vue from 'vue';
import router from './router/router';
import store from './store/store';

import App from './App.vue';

if (process.env.NODE_ENV !== 'development') {
    Vue.config.productionTip = false;
} else {
    Vue.config.devtools = true;
}

Vue.config.devtools = true;

new Vue({
    name: 'VueApp',
    router,
    store,
    render: h => h(App),
}).$mount('#app');
