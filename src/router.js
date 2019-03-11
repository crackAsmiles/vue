import Vue from 'vue'
import Router from 'vue-router'

import SingIn from './components/SingIn.vue'
import SignUp from './components/SingUp.vue'
import Main from './components/Main.vue'

import Datas from './components/Datas.vue'
import Maps from './components/Maps.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'singin',
      component: SingIn
    },
    {
      path: '/singUp',
      name: 'singUp',
      component: SignUp
    },
    {
    	path: '/main',
      name: 'main',
      component: Main,
      children: [
      	{
      		path: '',
      		name:'数据',
					component: Datas   		
      	},
      	{
      		path: 'map',
      		name:'可视化',
					component: Maps   		
      	}
      ]
    }
  ]
})
