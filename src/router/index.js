import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movies from '@/components/Movies'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Login from '@/components/Login'
import EditMovie from '@/components/editmovie'
import AddMovie from '@/components/addmovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/editmovie',
      name: 'EditMovie',
      component: EditMovie,
      props: true
    },
    {
      path: '/addmovie',
      name: 'AddMovie',
      component: AddMovie
    }
  ]
})
