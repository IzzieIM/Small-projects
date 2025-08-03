<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <div class="app-container">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view class="main-content" />
    </transition>
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* .app.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
} */

 .app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full screen height */
  overflow-x: hidden;
}

.main-content {
  flex: 1; /* Take up remaining space */
}
</style>
