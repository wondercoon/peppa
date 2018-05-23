import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PatentList from '@/components/PatentList'
import User from '@/components/User'
import Wallet from '@/components/Wallet'
import Detail from '@/components/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: PatentList
    }, {
      path: '/patents',
      name: 'patentList',
      component: PatentList
    }, {
      path: '/my',
      name: 'user',
      component: User
    }, {
      path: '/wallet',
      name: 'wallet',
      component: Wallet
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
