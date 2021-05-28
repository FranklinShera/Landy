<template>

    <Navbar/>

    <div class="hero simcont ">
        <div class="cta-text">

            <div class="main-text">
                Manage Your<br/>
                Apartments<br/>
                Like A Real<br/>
                Boss!
            </div>

            <div class="support-text">
                Get all the analysis and alerts
                in a single convenient place.
            </div>

            <div class="cta-btns">
                <button class="plain-btn primary-btn">Sign Up</button>
                <button class="plain-btn">Learn More</button>
            </div>

        </div>

        <div class="illustration" style="background: url('/storage/icons/buildings.svg') no-repeat">

        </div>
    </div>

    <div class="features simcont">
        <div class="feature-word">
            <h1>
                We Make<br/>
                Management<br/>
                Simple and<br/>
                Robust.
            </h1>

            <p>
                Our solution makes it easy to monitor
                apartments , tenants payment progress,
                payment balances and complains through
                a simple and informative interface.
            </p>
        </div>
        <div class="features-list">

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


