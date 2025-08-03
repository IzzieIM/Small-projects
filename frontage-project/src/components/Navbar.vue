<template>
    <div class="navbar-wrapper">
        <div class="top-navbar-container">
            <div class="logo-left">
                <router-link to="/" class="nav-link">
                    <img src="" alt="Logo" />
                </router-link>
            </div>
            <div class="navbar-right">
                <ul>
                    <router-link :to="{ name: 'Home', hash: '#fiverrpro' }">FiverrPro</router-link>
                    <router-link :to="{ name: 'Home', hash: '#explore' }">Explore</router-link>
                    <li>EN</li>
                    <router-link to="/become-seller" class="nav-link">
                        <li>Become a Seller</li>
                    </router-link>
                    <router-link to="/signup" class="nav-link">
                        <li v-if="!user">Sign Up</li>
                    </router-link>
                    <li style="border: 1px solid black; padding: 8px ; border-radius: 5px" v-if="!user">Login</li>
                    <li v-if="user">
                        <img :src="user.profilePic" alt="Profile" class="profile-img" />
                    </li>
                    <li style="border: 1px solid black; padding: 8px ; border-radius: 5px" v-if="user" @click="logout"> log out</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import './Navbar.css';

export default {
  data() {
    return {
      user: null
    }
  },
   computed: {
    user() {
      // Reactive user injected globally
      return this.$root.$.appContext.config.globalProperties.$user.value;
    }
  },
  methods: {
  logout() {
    // 1. Remove from localStorage
    localStorage.removeItem('userForm');

    // 2. Clear global reactive user (if you're using globalProperties.$user)
    this.$root.$.appContext.config.globalProperties.$user.value = null;

    // 3. Redirect to homepage or login
    this.$router.push('/');
  }
}
};
</script>