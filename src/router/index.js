import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Classification from '@/components/Classification'
import PatentList from '@/components/PatentList'
import Peppa from '@/components/Peppa'
import User from '@/components/User'
import MyPatents from '@/components/MyPatents'
import Detail from '@/components/Detail'
import Publish from '@/components/Publish'
import Buy from '@/components/Buy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/classification',
      name: 'classification',
      component: Classification
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
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '/publish/:id',
      name: 'publish',
      component: Publish
    }, {
      path: '/buy/:id',
      name: 'buy',
      component: Buy
    }
  ]
})
