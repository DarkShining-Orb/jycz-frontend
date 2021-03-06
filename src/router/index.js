import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component:()=>import('@/views/Test'),
    },
    {
      path: '/small',
      name: 'Small',
      component:()=>import('@/views/small'),
    },
  ]
})
