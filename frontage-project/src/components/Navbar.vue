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
                    <li>Fiverr Pro</li>
                    <li>Explore</li>
                    <li>EN</li>
                    <router-link to="/become-seller" class="nav-link">
                        <li>Become a Seller</li>
                    </router-link>
                    <li>Sign Up</li>
                    <li style="border: 1px solid black; padding: 8px ; border-radius: 5px">Login</li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import './Navbar.css';
</script>