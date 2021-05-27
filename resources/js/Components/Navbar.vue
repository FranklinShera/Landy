<template>
    <div class="navbar flex px-10 py-2 justify-between items-center ">
        <ApplicationLogo classes="w-24"/>

         <div class="center-nav">
             <a href="">Home</a>
             <a href="">Features</a>
             <a href="">Pricing</a>
             <a href="">FAQ</a>
         </div>

        <div class="nav-action">
            Register
        </div>
    </div>
</template>

<script>
    import ApplicationLogo from "@/Jetstream/ApplicationLogo";
    export default {
        name: "Navbar",
        components: {ApplicationLogo}
    }
</script>

<style scoped>
 .center-nav a{
     margin: 0px 20px;
 }
</style>
