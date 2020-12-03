import Vue from 'vue'
import Router from 'vue-router'
import PersonInCharge from "../view/PersonInCharge";
import ResearchDirection from "../view/ResearchDirection";
import HomePage from "../view/HomePage";
import Login from "../view/Login";
import ContactUs from "../view/ContactUs"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:"/homePage"
    },
    {
      path:'/homePage',
      name:'HomePage',
      component:HomePage
    },
    {
      path:'/personInCharge',
      name:'PersonInCharge',
      component: PersonInCharge
    },
    {
      path:'/researchDirection',
      name:'ResearchDirection',
      component:ResearchDirection
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/contactUs',
      name:'ContactUs',
      component:ContactUs
    }
  ]
})
