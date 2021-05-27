<template>

    <Navbar/>

    <div class="hero simcont">
        <div class="cta-text">

            <div class="main-text">
                Manage Your
                Apartments
                Like A Real
                Boss!
            </div>

            <div class="support-text">
                Get all the analysis and alerts
                in a single convenient place.
            </div>

            <div class="cta-btns">
                <button>Sign Up</button>
                <button>Learn More</button>
            </div>

        </div>

        <div class="illustration" style="background: url('/storage/icons/buildings.svg') no-repeat">

        </div>
    </div>

</template>

<script>
    import Navbar from "@/Components/Navbar";

    export default {
        components: {Navbar},
        props: {

        }
    }
</script>

<style scoped>

</style>


