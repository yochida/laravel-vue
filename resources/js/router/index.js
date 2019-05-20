import Vue from 'vue';
import Router from 'vue-router';
import ExampleComponent from '../components/ExampleComponent';
import home from '../components/home';
import Create from '../components/Create';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'example',
            component: ExampleComponent
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/create',
            name: 'create',
            component: Create
        }
    ]
})

