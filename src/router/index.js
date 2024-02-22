import Vue from 'vue';
import { Router } from 'vue-router';

Vue.useAttrs(Router)

export default new Router({
    routes: [
        {
            path: '/firstroute/:name',
            name: 'Firstroute',
            component: Firstroute
        }
    ]
})