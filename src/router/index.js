import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserIndex from '@/pages/UserIndex'
import UserRegistration from '@/pages/UserRegistration'
import UserAddresses from '@/pages/UserAddresses'
import UserEdit from '@/pages/UserEdit'
import AddressEdit from '@/pages/AddressEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/customers',
      name: 'UserIndex',
      component: UserIndex
    },
    {
      path: '/customers/create',
      name: 'UserRegistration',
      component: UserRegistration
    },
    {
      path: '/customers/:id/address',
      name: 'UserAddresses',
      component: UserAddresses
    },
    {
      path: '/customers/:id',
      name: 'UserEdit',
      component: UserEdit
    },
    {
      path: '/customers/:idCust/address/:idAdd',
      name: 'AddressEdit',
      component: AddressEdit
    }
  ]
})
