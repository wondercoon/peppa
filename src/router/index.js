import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PatentList from '@/components/PatentList'
import Peppa from '@/components/Peppa'
import User from '@/components/User'
import MyPatents from '@/components/MyPatents'
import Wallet from '@/components/Wallet'
import Detail from '@/components/Detail'
import Publish from '@/components/Publish'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Peppa
    }, {
      path: '/market',
      name: 'market',
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
      path: '/my/patents',
      name: 'myPatents',
      component: MyPatents
    }, {
      path: '/wallet',
      name: 'wallet',
      component: Wallet
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '/publish/:id',
      name: 'publish',
      component: Publish
    }
  ]
})
