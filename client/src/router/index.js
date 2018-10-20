import Vue from 'vue'
import Router from 'vue-router'
const Hello = () => import('@/components/Hello')
const List = () => import('@/components/List')

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
    }
  ]
})
