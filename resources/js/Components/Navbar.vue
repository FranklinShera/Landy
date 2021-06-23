<template>
    <div class="navbar simcont ">
        <ApplicationLogo wi="100" hi="35"/>

         <div class="center-nav">
             <a href="">Home</a>
             <a href="">Features</a>
             <a href="">Pricing</a>
             <a href="">FAQ</a>
         </div>

        <div class="nav-action">
            <a href="" class="text-limegreen">Register</a>
        </div>

        <div class="mobile-menu">
            <MenuIcon class="menuIcon"/>
        </div>
    </div>
</template>

<script>
    import ApplicationLogo from "@/Jetstream/ApplicationLogo";
    import { MenuIcon } from '@heroicons/vue/solid'
    export default {
        name: "Navbar",
        components: {ApplicationLogo,MenuIcon}
    }
</script>

<style scoped>

</style>
