import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import Login from '@/components/Login'


import BlogcarIndex from '@/components/Blogcars/Index'
import BlogcarCreate from '@/components/Blogcars/CreateBlogcar'
import BlogcarEdit from '@/components/Blogcars/EditBlogcar'
import BlogcarShow from '@/components/Blogcars/ShowBlogcar'


import CarIndex from '@/components/Cars/Index'
import CarCreate from '@/components/Cars/CreateCar'
import CarEdit from '@/components/Cars/EditCar'
import CarShow from '@/components/Cars/ShowCar'










import Upload from '@/components/Utils/Upload'

Vue.use(Router)

export default new Router({
  mode:'history',
  
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },


    {
      path: '/blogcars',
      name: 'blogcars',
      component: BlogcarIndex
    },
    {
      path: '/blogcar/create',
      name: 'blogcar-create',
      component: BlogcarCreate
    },
    {
      path: '/blogcar/edit/:blogcarId',
      name: 'blogcar-edit',
      component: BlogcarEdit
    },
    {
      path: '/blogcar/:blogcarId',
      name: 'blogcar',
      component: BlogcarShow
    },


    {
      path: '/cars',
      name: 'cars',
      component: CarIndex
    },
    {
      path: '/car/create',
      name: 'car-create',
      component: CarCreate
    },
    {
      path: '/car/edit/:carId',
      name: 'car-edit',
      component: CarEdit
    },
    {
      path: '/car/:carId',
      name: 'car',
      component: CarShow
    },

    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },

  ]
})
