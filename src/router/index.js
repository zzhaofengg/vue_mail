import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Cate from '../components/goods/Cate.vue'
import Params from '../components/goods/Params.vue'
import GoodList from '../components/goods/List.vue'
import Add from '../components/goods/Add.vue'

Vue.use(VueRouter)
const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  name: 'Login',
  component: Login
}, {
  path: '/home',
  name: 'Home',
  component: Home,
  redirect: '/welcome',
  children: [{
    path: '/users',
    component: Users
  }, {
    path: '/welcome',
    component: Welcome
  }, {
    path: '/rights',
    component: Rights
  }, {
    path: '/roles',
    component: Roles
  }, {
    path: '/categories',
    component: Cate
  }, {
    path: '/params',
    component: Params
  }, {
    path: '/goods',
    component: GoodList
  }, {
    path: '/goods/add',
    component: Add
  }]
}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path === '/login') return next()

  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
