import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PatentList from '@/components/PatentList'

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
    }
  ]
})
