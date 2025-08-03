import { createApp , ref} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'


// import the components or views you want to use
import BecomeSeller from './components/BecomeSeller.vue'
import Carsouel from './components/Carsouel.vue';
import SignUp from './components/SignUp.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Define your routes here
    {
      path: '/',
      name: 'Home',
      component: Carsouel
    },
    {
      path: '/become-seller',
      name:'BecomeSeller', 
      component: BecomeSeller
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})


const app = createApp(App)
// Register global properties or plugins
app.config.globalProperties.$user = ref(JSON.parse(localStorage.getItem('user')) || null);
app.use(router)
app.mount('#app')
 