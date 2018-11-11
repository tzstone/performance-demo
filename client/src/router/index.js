import Vue from 'vue'
import Router from 'vue-router'
const Hello = () => import(/* webpackChunkName: "hello" */ '@/components/Hello')
const List = () => import(/* webpackChunkName: "list" */ '@/components/List')
import Skeleton from '@/skeleton/Skeleton.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/skeleton',
      name: 'skeleton',
      component: Skeleton
    }
  ]
})
