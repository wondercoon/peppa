import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PatentList from '@/components/PatentList'
import Peppa from '@/components/Peppa'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Peppa
    }, {
      path: '/patents',
      name: 'patentList',
      component: PatentList
    }, {
      path: '/my',
      name: 'user',
      component: User
    }
  ]
})
