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
        <div class="features-list ">
            <div class="feature-card" v-for="feature in features">

                <img class="feature-card-icon" :src="pathFormat( '/storage/icons/' , feature.icon)" />

                <div class="feature-card-text">
                    <h1>
                        {{ feature.title }}
                    </h1>
                    <p>
                        Our solution makes it easy to monitor
                        apartments , tenants payment progress,
                        payment balances and complains through
                        a simple and informative interface.
                    </p>
                </div>

            </div>
        </div>
    </div>


</template>

<script>
    import Navbar from "@/Components/Navbar";

    export default {
        components: {Navbar},
        props: {

        },
        data(){
            return{
                features:[
                    {
                        icon : "knowclients.svg",
                        title :"Know Your Clients"
                    },
                    {
                        icon : "brochure.svg",
                        title :"Inventory Management"
                    },
                    {
                        icon : "money_circulation.svg",
                        title :"Minitor Cashflow"
                    },
                    {
                        icon : "message_exchange.svg",
                        title :"Reliable Information Exchange"
                    },
                    {
                        icon : "clone.svg",
                        title :"Direct Communication"
                    },
                ]
            }
        },
        methods:{
            pathFormat(path,file){
                return path + file;
            }
        }
    }
</script>

<style scoped>

</style>


