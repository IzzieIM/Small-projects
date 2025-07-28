import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'


// import the components or views you want to use
import BecomeSeller from './components/BecomeSeller.vue'
import Carsouel from './components/Carsouel.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Define your routes here
    {path: '/', component: Carsouel},
    {path: '/become-seller', component: BecomeSeller}
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
 