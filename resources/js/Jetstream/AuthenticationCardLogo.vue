<template>
    <inertia-link :href="'/'">
       <Logo classes="h-16"/>
    </inertia-link>
</template>

<script>

    import Logo from './ApplicationLogo'

    export default {
        components:{
            Logo
        }
    }

</script>
