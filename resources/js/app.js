
require('./bootstrap');
import Vue from 'vue';
import App from './components/App'
import router from './router'

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
